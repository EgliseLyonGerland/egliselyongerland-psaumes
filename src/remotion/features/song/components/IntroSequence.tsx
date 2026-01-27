import { AbsoluteFill, Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { useContext } from "../context";
import { makeTransform, translateY } from "@remotion/animation-utils";
import { clsx } from "clsx";

const fadeInDuration = 15;
const fadeOutDuration = 15;
const minDisplayDuration = 30;

function TextAnimation({
  text,
  direction,
  className,
  startAt,
  endAt,
}: {
  text: string;
  direction: "up" | "down";
  className?: string;
  startAt: number;
  endAt: number;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const translate = (index: number) =>
    spring({
      frame: frame < endAt ? frame - startAt - index * 2 : frame - endAt - startAt - index * 2,
      fps,
      config: {
        mass: 0.6,
        damping: 22,
        stiffness: 200,
      },
      durationInFrames: 0.67 * fps,
    });

  return (
    <h1
      className={clsx("flex gap-1", className)}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
    >
      {text.split("").map((char, charIndex) =>
        char === " " ? (
          <span key={charIndex} style={{ width: "0.5ch" }} />
        ) : (
          <span
            key={charIndex}
            className="flex gap-1"
            style={{
              transform: makeTransform([
                translateY(
                  frame < endAt
                    ? direction === "up"
                      ? 100 - translate(charIndex) * 100
                      : -100 + translate(charIndex) * 100
                    : direction === "up"
                      ? translate(charIndex) * 100
                      : translate(charIndex) * 100,
                  "%",
                ),
              ]),
            }}
          >
            {char}
          </span>
        ),
      )}
    </h1>
  );
}

export default function IntroSequence() {
  const { song } = useContext();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate display duration based on first lyric's startAt
  const firstLyric = song.lyrics[0];
  const firstLyricStartFrame = firstLyric ? firstLyric.startAt * fps : minDisplayDuration;
  const displayDuration = Math.max(
    minDisplayDuration,
    firstLyricStartFrame - fadeInDuration - fadeOutDuration,
  );

  const totalDuration = fadeInDuration + displayDuration + fadeOutDuration;

  const startAt = 50;
  const endAt = totalDuration - startAt - 50;

  if (frame > endAt) {
    return null;
  }

  return (
    <Sequence name="Intro">
      <AbsoluteFill className="flex flex-col items-center justify-center">
        <TextAnimation
          text={song.title}
          direction="up"
          startAt={startAt}
          endAt={endAt}
          className="font-display text-8xl/loose font-bold text-dust shadow-sm"
        />
        <TextAnimation
          text={song.author}
          direction="down"
          startAt={startAt}
          endAt={endAt}
          className="text-5xl text-dust/60"
        />
      </AbsoluteFill>
    </Sequence>
  );
}
