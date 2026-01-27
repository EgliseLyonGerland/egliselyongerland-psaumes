import { Composition } from "remotion";
import songs from "./config/songs";
import context from "./features/song/context";
import { MainComposition } from "./features/main/MainComposition";
import {
  JINGLE_DURATION_IN_FRAMES,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "../../types/constants";

const song = songs.psaume36;

export const RemotionRoot: React.FC = () => {
  const durationInFrames = Math.ceil(song.duration * VIDEO_FPS) + JINGLE_DURATION_IN_FRAMES;

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
