import SongSequence from "../song/components/SongSequence";
import JingleSequence from "../jingle/components/JingleSequence";
import { JINGLE_DURATION_IN_FRAMES } from "../../../../types/constants";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const MainComposition = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(frame, [durationInFrames - 11, durationInFrames - 1], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity }}>
      <SongSequence from={JINGLE_DURATION_IN_FRAMES} />
      <JingleSequence />
    </div>
  );
};
