import psaume1 from "./songs/psaume-1";
import psaume19 from "./songs/psaume-19";
import psaume36 from "./songs/psaume-36";
import psaume62 from "./songs/psaume-62";
import psaume84 from "./songs/psaume-84";
import psaume92 from "./songs/psaume-92";
import psaume98 from "./songs/psaume-98";
import psaume121 from "./songs/psaume-121";
import psaume138 from "./songs/psaume-138";

export function getStartTime(tempo: number, mesure: number, offset: number) {
  return (mesure * 60) / tempo + offset;
}

const songs = {
  psaume1,
  psaume19,
  psaume36,
  psaume62,
  psaume84,
  psaume92,
  psaume98,
  psaume121,
  psaume138,
} as const;

export default songs;
