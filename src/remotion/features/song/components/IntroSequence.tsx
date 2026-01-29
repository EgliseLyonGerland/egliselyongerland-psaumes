import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { useContext } from "../context";

const fadeDuration = 30;

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
          frame <= endAt - fadeDuration
            ? interpolate(frame, [startAt, startAt + fadeDuration], [0, 1], {
                easing: Easing.out(Easing.quad),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })
            : interpolate(frame, [endAt - fadeDuration, endAt], [1, 0], {
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
  const { fps } = useVideoConfig();

  const firstLyric = song.lyrics[0];
  const firstLyricStartFrame = firstLyric.startAt * fps;

  const startAt = 190 - (song.offset ? song.offset * fps : 0);
  const endAt = firstLyricStartFrame - 10;

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
          text={Array.from(new Set([song.metadata.composer, song.metadata.writer])).join(", ")}
          startAt={startAt + 5}
          endAt={endAt - 5}
          className="text-5xl text-dust/60"
        />
      </AbsoluteFill>
    </Sequence>
  );
}
