import { AbsoluteFill, Html5Audio, Img, Sequence, useCurrentFrame } from "remotion";

import { useContext } from "../context";
import LyricsSequence from "./LyricsSequence";
import IntroSequence from "./IntroSequence";
import { staticFile } from "../../../utils/staticFile";
import OutroSequence from "./OutroSequence";

const wheelSpeeds = 0.05; // degrees per frame

export default function SongSequence() {
  const { song } = useContext();
  const frame = useCurrentFrame();

  const wheelRotateValue = (frame * wheelSpeeds) % 360;

  return (
    <>
      <AbsoluteFill className="bg-linear-to-tr from-cobalt to-cobalt-dark">
        <div className="absolute top-16 left-16 size-96 scale-150 rounded-full bg-fuchsia-400 opacity-20 mix-blend-hard-light blur-[100px]" />
        <div className="absolute right-16 bottom-16 size-96 scale-[175%] rounded-full bg-purple-400 opacity-20 mix-blend-hard-light blur-[100px]" />

        <Img
          src={staticFile("images/logo.png")}
          className="absolute -top-12 -left-[30rem] scale-110 opacity-30 mix-blend-color-dodge"
          style={{
            transform: `rotate(${wheelRotateValue}deg)`,
          }}
        />
      </AbsoluteFill>

      <AbsoluteFill
        className="opacity-50 mix-blend-soft-light"
        // eslint-disable-next-line @remotion/no-background-image
        style={{ backgroundImage: `url(${staticFile("images/grain.png")})` }}
      />

      <Sequence>
        <IntroSequence />
        <LyricsSequence />
        <OutroSequence />
        <Html5Audio name="Audio" src={staticFile(`audio/${song.file}`)} />
      </Sequence>
    </>
  );
}
