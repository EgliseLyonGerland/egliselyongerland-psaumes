import {
  AbsoluteFill,
  Easing,
  Html5Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import BackgroundSequence from "./BackgroundSequence";
import { LogoSequence } from "./LogoSequence";
import { TitleSequence } from "./TitleSequence";
import { durationInFrames, endAt } from "../config";

const curtainsStartAt = endAt + 5;

export default function JingleSequence() {
  const frame = useCurrentFrame();

  const splitValue = interpolate(frame, [curtainsStartAt, curtainsStartAt + 30], [100, 0], {
    easing: Easing.inOut(Easing.circle),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Sequence name="Jingle" durationInFrames={durationInFrames}>
      <AbsoluteFill
        style={{
          clipPath: `polygon(0 0, 100% 0, 100% ${splitValue}%, 0 ${splitValue}%)`,
        }}
      >
        <BackgroundSequence />
        <LogoSequence />
        <TitleSequence />
      </AbsoluteFill>

      <Html5Audio
        src={staticFile("audio/elegant-guitar-logo-335303.mp3")}
        volume={(f) =>
          interpolate(f, [durationInFrames - 100, durationInFrames], [1, 0], {
            extrapolateLeft: "clamp",
          })
        }
      />
    </Sequence>
  );
}
