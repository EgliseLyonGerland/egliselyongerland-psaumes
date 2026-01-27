import { AbsoluteFill, Easing, Img, interpolate, Sequence, useCurrentFrame } from "remotion";

import { staticFile } from "../../../utils/staticFile";

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
        <Img src={staticFile("images/bg1.png")} />
      </AbsoluteFill>

      <AbsoluteFill className="flex items-center justify-center">
        <Img
          src={staticFile("images/bg2.png")}
          style={{
            clipPath: `circle(${circleScaleValue}%)`,
          }}
        />
      </AbsoluteFill>
    </Sequence>
  );
}
