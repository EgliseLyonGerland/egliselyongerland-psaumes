import React from "react";
import { Song } from "./types";
import { MediaUtilsAudioData } from "@remotion/media-utils";

interface Context {
  song: Song;
  audioData: MediaUtilsAudioData;
}

const context = React.createContext<Context | null>(null);

export function useContext(): Context {
  const ctx = React.useContext(context);

  if (!ctx) {
    throw new Error("context must be used within a context.Provider");
  }

  return ctx;
}

export default context;
