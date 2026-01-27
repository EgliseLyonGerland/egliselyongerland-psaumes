import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 126.4;
const offset = 27;

export default {
  title: "Psaume 36",
  author: "A. Sarran",
  file: "psaume-36.wav",
  duration: 193.18702083333332,
  lyrics: [
    {
      text: "Ô Seigneur, ta fidélité",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "Remplit les cieux et ta bonté",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "Dépasse toute cime.",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "Ta justice est pareille aux monts,",
      startAt: getStartTime(tempo, 28, offset),
    },
    {
      text: "Tes jugements sont plus profonds",
      startAt: getStartTime(tempo, 36, offset),
    },
    {
      text: "Que le plus grand abîme.",
      startAt: getStartTime(tempo, 44, offset),
    },
    {
      text: "De la puissance du néant,",
      startAt: getStartTime(tempo, 56, offset),
    },
    {
      text: "Tu veux sauver tous les vivants,",
      startAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "Toute chair, toute race ;",
      startAt: getStartTime(tempo, 72, offset),
    },
    {
      text: "Les hommes se rassembleront,",
      startAt: getStartTime(tempo, 84, offset),
    },
    {
      text: "Autour de toi ils trouveront",
      startAt: getStartTime(tempo, 92, offset),
    },
    {
      text: "Leur paix devant ta face.",
      startAt: getStartTime(tempo, 100, offset),
    },
    {
      text: "Que précieux est ton amour !",
      startAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "Dans ta demeure nuit et jour",
      startAt: getStartTime(tempo, 120, offset),
    },
    {
      text: "La table est toujours prête ;",
      startAt: getStartTime(tempo, 128, offset),
    },
    {
      text: "Et tu nourris ceux qui ont faim",
      startAt: getStartTime(tempo, 140, offset),
    },
    {
      text: "De l'abondance de tes biens",
      startAt: getStartTime(tempo, 148, offset),
    },
    {
      text: "En un repas de fête.",
      startAt: getStartTime(tempo, 156, offset),
    },
    {
      text: "Ta joie est comme un flot puissant ;",
      startAt: getStartTime(tempo, 168, offset),
    },
    {
      text: "À la fraîcheur de ce torrent",
      startAt: getStartTime(tempo, 176, offset),
    },
    {
      text: "Nos cœurs se désaltèrent.",
      startAt: getStartTime(tempo, 184, offset),
    },
    {
      text: "La source de vie est en toi,",
      startAt: getStartTime(tempo, 196, offset),
    },
    {
      text: "Par ta lumière l'homme voit",
      startAt: getStartTime(tempo, 204, offset),
    },
    {
      text: "Triompher la lumière.",
      startAt: getStartTime(tempo, 212, offset),
    },
    {
      text: "Maintiens ta grâce aux hommes droits ;",
      startAt: getStartTime(tempo, 224, offset),
    },
    {
      text: "Donne à celui qui vient vers toi",
      startAt: getStartTime(tempo, 232, offset),
    },
    {
      text: "L'appui de ta justice.",
      startAt: getStartTime(tempo, 240, offset),
    },
    {
      text: "Garde-moi de tomber aux mains",
      startAt: getStartTime(tempo, 252, offset),
    },
    {
      text: "De ces méchants, de ces hautains,",
      startAt: getStartTime(tempo, 260, offset),
    },
    {
      text: "De peur que je faiblisse.",
      startAt: getStartTime(tempo, 268, offset),
    },
    {
      text: "Car ils voudraient chasser les tiens,",
      startAt: getStartTime(tempo, 280, offset),
    },
    {
      text: "Les séparer de leur soutien,",
      startAt: getStartTime(tempo, 288, offset),
    },
    {
      text: "De leur seule assurance.",
      startAt: getStartTime(tempo, 296, offset),
    },
    {
      text: "C'est fait ! Tu les as renversés ;",
      startAt: getStartTime(tempo, 308, offset),
    },
    {
      text: "Ils ne pourront se relever.",
      startAt: getStartTime(tempo, 316, offset),
    },
    {
      text: "Gloire à ta délivrance.",
      startAt: getStartTime(tempo, 324, offset),
      endAt: getStartTime(tempo, 336, offset),
    },
  ],
} satisfies Song;
