import SongSequence from "../song/components/SongSequence";
import JingleSequence from "../jingle/components/JingleSequence";
import { interpolate, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { useContext } from "../song/context";

export const MainComposition = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const { song } = useContext();

  const opacity = interpolate(frame, [durationInFrames - 11, durationInFrames - 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity }}>
      <Sequence name="Song" from={song.offset ? song.offset * fps : 0}>
        <SongSequence />
      </Sequence>
      <JingleSequence />
    </div>
  );
};
