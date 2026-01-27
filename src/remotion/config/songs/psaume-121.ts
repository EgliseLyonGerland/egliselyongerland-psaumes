import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 63.1;
const offset = 15.55;

export default {
  title: "Psaume 121",
  author: "A. Sarran",
  file: "psaume-121.wav",
  lyrics: [
    {
      text: "Vers les montagnes, mon regard",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "Se tourne chaque jour ;",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "D’où viendra mon secours ?",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "Le secours me vient de la part",
      startAt: getStartTime(tempo, 24, offset),
    },
    {
      text: "De l’Éternel, le Père",
      startAt: getStartTime(tempo, 32, offset),
    },
    {
      text: "Des cieux et de la terre.",
      startAt: getStartTime(tempo, 40, offset),
      endAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "Jamais ton Dieu ne permettra",
      startAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "Que chancelle ton pied ;",
      startAt: getStartTime(tempo, 72, offset),
    },
    {
      text: "Il garde ton sentier.",
      startAt: getStartTime(tempo, 80, offset),
    },
    {
      text: "Jamais il ne sommeillera ;",
      startAt: getStartTime(tempo, 88, offset),
    },
    {
      text: "Qui sur Israël veille",
      startAt: getStartTime(tempo, 96, offset),
    },
    {
      text: "Ne dort ni ne sommeille.",
      startAt: getStartTime(tempo, 104, offset),
      endAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "L’Éternel te garde toujours,",
      startAt: getStartTime(tempo, 128, offset),
    },
    {
      text: "À l’ombre, il te maintient ;",
      startAt: getStartTime(tempo, 136, offset),
    },
    {
      text: "Il ne permettra point",
      startAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Que le soleil, pendant le jour,",
      startAt: getStartTime(tempo, 152, offset),
    },
    {
      text: "Te frappe et t’importune,",
      startAt: getStartTime(tempo, 160, offset),
    },
    {
      text: "Ni dans la nuit, la lune.",
      startAt: getStartTime(tempo, 168, offset),
      endAt: getStartTime(tempo, 176, offset),
    },
    {
      text: "De tout mal, Dieu te gardera,",
      startAt: getStartTime(tempo, 192, offset),
    },
    {
      text: "Ton âme, il sauvera,",
      startAt: getStartTime(tempo, 200, offset),
    },
    {
      text: "Il te préservera ;",
      startAt: getStartTime(tempo, 208, offset),
    },
    {
      text: "Dès ton départ, il le fera,",
      startAt: getStartTime(tempo, 216, offset),
    },
    {
      text: "Et d’année en année,",
      startAt: getStartTime(tempo, 224, offset),
    },
    {
      text: "Jusqu’à ton arrivée.",
      startAt: getStartTime(tempo, 232, offset),
      endAt: getStartTime(tempo, 240, offset),
    },
  ],
} satisfies Song;
