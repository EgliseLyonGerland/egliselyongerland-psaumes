"use client";

import { Player, PlayerRef } from "@remotion/player";
import type { NextPage } from "next";
import { VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH } from "../../types/constants";
import { MainComposition } from "../remotion/features/main/MainComposition";
import Context from "../remotion/features/song/context";
import songs from "../remotion/config/songs";
import { useState, useRef } from "react";
import { clsx } from "clsx";

const Home: NextPage = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [currentSong, setCurrentSong] = useState<keyof typeof songs>("psaume1");
  const song = songs[currentSong];

  const durationInFrames = Math.ceil(song.duration * VIDEO_FPS);

  return (
    <div className="max-w-screen-md m-auto mb-5 p-4">
      <div className="overflow-hidden rounded-geist shadow-[0_0_200px_rgba(0,0,0,0.15)]">
        <Context.Provider value={{ song }}>
          <Player
            ref={playerRef}
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
            moveToBeginningWhenEnded={false}
            spaceKeyToPlayOrPause
          />
        </Context.Provider>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
        {Object.entries(songs).map(([key, item]) => (
          <button
            key={item.file}
            className={clsx(
              "px-3 h-8 outline outline-cobalt-light text-white rounded-geist  transition-colors",
              key === currentSong ? "bg-cobalt-light" : "hover:bg-cobalt-dark",
            )}
            onClick={() => {
              const currentFrame = playerRef.current?.getCurrentFrame() ?? 0;
              const progress = currentFrame / durationInFrames;
              const itemDurationInFrames = Math.ceil(item.duration * VIDEO_FPS);

              setCurrentSong(key as keyof typeof songs);

              setTimeout(() => {
                playerRef.current?.seekTo(itemDurationInFrames * progress);
              }, 0);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
