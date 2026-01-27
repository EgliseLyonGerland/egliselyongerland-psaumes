import { AbsoluteFill, Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useContext } from "../context";
import { scale } from "@remotion/animation-utils";

export default function LyricsSequence() {
  const {
    song: { title, lyrics },
  } = useContext();
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const firstLyricStartAt = lyrics[0]?.startAt * fps;

  if (frame < firstLyricStartAt) {
    return null;
  }

  return (
    <>
      <AbsoluteFill>
        {lyrics.map((lyric, index) => {
          const startAt = lyric.startAt * fps;
          const endAt = (lyric.endAt || lyrics[index + 1]?.startAt || lyric.startAt) * fps;

          return (
            <div
              key={index}
              className="absolute top-1/2 -mt-[calc(1lh/2)] flex w-full items-center justify-center font-display text-7xl text-dust"
              style={{
                transform: scale(
                  frame <= endAt
                    ? interpolate(frame, [startAt, endAt], [0.9, 1.05], {
                        // easing: Easing.out(Easing.quad),
                        easing: Easing.bezier(0, 0.63, 0.86, 0.85),
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      })
                    : interpolate(frame, [endAt, endAt + 20], [1.05, 1.1], {
                        easing: Easing.out(Easing.quad),
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                ),
                opacity: interpolate(
                  frame,
                  [startAt, startAt + 30, endAt, endAt + 20],
                  [0, 1, 1, 0],
                  {
                    easing: Easing.inOut(Easing.exp),
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                  },
                ),
              }}
            >
              <span className="shadow-sm">{lyric.text}</span>
            </div>
          );
        })}
      </AbsoluteFill>
      <div className="absolute bottom-15 left-15 text-[5vh] leading-[1em] font-bold text-white opacity-60 mix-blend-overlay">
        {title}
      </div>
    </>
  );
}
