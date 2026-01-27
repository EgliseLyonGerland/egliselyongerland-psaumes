import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useContext } from "../context";

const fadeInDuration = 15;
const fadeOutDuration = 15;
const minDisplayDuration = 30;

function TextAnimation({
  text,
  className,
  startAt,
  endAt,
}: {
  text: string;
  className?: string;
  startAt: number;
  endAt: number;
}) {
  const frame = useCurrentFrame();

  return (
    <h1
      className={className}
      style={{
        opacity:
          frame < (endAt - startAt) / 2
            ? interpolate(frame, [startAt + 50, startAt + 80], [0, 1], {
                easing: Easing.out(Easing.quad),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            : interpolate(frame, [endAt - 20, endAt], [1, 0], {
                easing: Easing.out(Easing.quad),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
      }}
    >
      {text}
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

  const startAt = 30;
  const endAt = totalDuration - startAt - 20;

  if (frame > endAt) {
    return null;
  }

  return (
    <Sequence name="Intro">
      <AbsoluteFill className="flex flex-col items-center justify-center gap-10">
        <TextAnimation
          text={song.title}
          startAt={startAt}
          endAt={endAt}
          className="font-display text-8xl font-bold text-dust shadow-sm"
        />
        <TextAnimation
          text={song.author}
          startAt={startAt + 5}
          endAt={endAt - 5}
          className="text-5xl text-dust/60"
        />
      </AbsoluteFill>
    </Sequence>
  );
}
