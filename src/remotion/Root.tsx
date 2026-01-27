import { Composition } from "remotion";
import songs from "./config/songs";
import context from "./features/song/context";
import { MainComposition } from "./features/main/MainComposition";
import { VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH } from "../../types/constants";

const song = songs.psaume1;

export const RemotionRoot: React.FC = () => {
  const durationInFrames = Math.ceil(song.duration * VIDEO_FPS);

  return (
    <context.Provider value={{ song }}>
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
