import { Composition, staticFile } from "remotion";
import { useAudioData } from "@remotion/media-utils";
import songs from "./config/songs";
import context from "./features/song/context";
import { MainComposition } from "./features/main/MainComposition";
import { VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH } from "../../types/constants";

const song = songs.psaume36;

export const RemotionRoot: React.FC = () => {
  const audioData = useAudioData(staticFile(`audio/${song.file}`));

  if (!audioData) {
    return null;
  }

  const durationInFrames = Math.ceil(audioData.durationInSeconds * 30) + 174;

  return (
    <context.Provider value={{ song, audioData }}>
      <Composition
        id="Main"
        component={MainComposition}
        durationInFrames={durationInFrames}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
    </context.Provider>
  );
};
