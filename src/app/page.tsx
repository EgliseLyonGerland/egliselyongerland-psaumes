"use client";

import { Player } from "@remotion/player";
import type { NextPage } from "next";
import { VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH } from "../../types/constants";
import { MainComposition } from "../remotion/features/main/MainComposition";
import Context from "../remotion/features/song/context";
import songs from "../remotion/config/songs";
import { useAudioData } from "@remotion/media-utils";
import { staticFile } from "remotion";

const song = songs.psaume36;

const Home: NextPage = () => {
  const audioData = useAudioData(staticFile(`audio/${song.file}`));

  if (!audioData) {
    return null;
  }

  const durationInFrames = Math.ceil(audioData.durationInSeconds * 30) + 174;

  return (
    <div>
      <div className="max-w-screen-md m-auto mb-5">
        <div className="overflow-hidden rounded-geist shadow-[0_0_200px_rgba(0,0,0,0.15)] mb-10 mt-16">
          <Context.Provider value={{ song, audioData }}>
            <Player
              component={MainComposition}
              durationInFrames={durationInFrames}
              fps={VIDEO_FPS}
              compositionHeight={VIDEO_HEIGHT}
              compositionWidth={VIDEO_WIDTH}
              style={{
                // Can't use tailwind class for width since player's default styles take presedence over tailwind's,
                // but not over inline styles
                width: "100%",
              }}
              controls
            />
          </Context.Provider>
        </div>
      </div>
    </div>
  );
};

export default Home;
