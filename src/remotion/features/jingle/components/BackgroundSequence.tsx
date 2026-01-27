import { AbsoluteFill, Easing, Img, interpolate, Sequence, useCurrentFrame } from "remotion";

import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";

export default function BackgroundSequence() {
  const frame = useCurrentFrame();

  const circleScaleValue = interpolate(frame, [40, 58], [0, 120], {
    easing: Easing.out(Easing.quad),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Sequence name="Background">
      <AbsoluteFill className="bg-cobalt-dark">
        <Img src={bg1.src} />
      </AbsoluteFill>

      <AbsoluteFill className="flex items-center justify-center">
        <Img
          src={bg2.src}
          style={{
            clipPath: `circle(${circleScaleValue}%)`,
          }}
        />
      </AbsoluteFill>
    </Sequence>
  );
}
