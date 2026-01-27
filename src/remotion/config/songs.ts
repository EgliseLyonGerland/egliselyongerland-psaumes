import psaume1 from "./songs/psaume-1";
import psaume19 from "./songs/psaume-19";
import psaume36 from "./songs/psaume-36";
import psaume62 from "./songs/psaume-62";
import psaume84 from "./songs/psaume-84";
import psaume92 from "./songs/psaume-92";
import psaume98 from "./songs/psaume-98";
import psaume121 from "./songs/psaume-121";
import psaume138 from "./songs/psaume-138";
import { Song } from "../features/song/types";

export function getStartTime(tempo: number, mesure: number, offset: number) {
  return (mesure * 60) / tempo + offset;
}

function adjustDuration(song: Song): Song {
  const lastLyric = song.lyrics[song.lyrics.length - 1];
  const endAt = lastLyric.endAt ?? song.duration;
  const delta = song.duration - endAt;

  if (delta < 10) {
    return {
      ...song,
      duration: song.duration + 10 - delta,
    };
  }

  return song;
}

const songs = {
  psaume1: adjustDuration(psaume1),
  psaume19: adjustDuration(psaume19),
  psaume36: adjustDuration(psaume36),
  psaume62: adjustDuration(psaume62),
  psaume84: adjustDuration(psaume84),
  psaume92: adjustDuration(psaume92),
  psaume98: adjustDuration(psaume98),
  psaume121: adjustDuration(psaume121),
  psaume138: adjustDuration(psaume138),
} as const;

export default songs;
