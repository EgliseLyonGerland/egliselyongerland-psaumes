import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 71.5;
const offset = 12.3;

export default {
  title: "Psaume 1",
  file: "psaume-1.wav",
  duration: 167.92370833333334,
  metadata: {
    writer: "A. Sarran",
    composer: "A. Sarran",
    performers: [
      "S. Sarran (chant)",
      "M. Blum (violon)",
      "E. Jallat (alto)",
      "A. Sarran (basse)",
      "D. Legal (guitare)",
      "A. Fréchet (cajón)",
    ],
  },
  lyrics: [
    {
      text: "Heureux celui qui ne marche jamais",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "Selon le conseil des hommes mauvais,",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "Qui, sur la voie des pécheurs, ne s'arrête,",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "Ni sur le banc des moqueurs ne veut être,",
      startAt: getStartTime(tempo, 24, offset),
    },
    {
      text: "Mais qui la loi de l'Éternel chérit,",
      startAt: getStartTime(tempo, 32, offset),
    },
    {
      text: "Et qui veut la méditer jour et nuit !",
      startAt: getStartTime(tempo, 40, offset),
      endAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "Celui-là est comme un arbre fruitier",
      startAt: getStartTime(tempo, 56, offset),
    },
    {
      text: "Près d'un courant d'eau fermement planté,",
      startAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "Dont ne se flétrit jamais le feuillage ;",
      startAt: getStartTime(tempo, 72, offset),
    },
    {
      text: "Il a profit de ses propres ouvrages.",
      startAt: getStartTime(tempo, 80, offset),
    },
    {
      text: "Il n'en est pas ainsi de ces méchants ;",
      startAt: getStartTime(tempo, 88, offset),
    },
    {
      text: "Comme la paille, ils sont mus par le vent.",
      startAt: getStartTime(tempo, 96, offset),
      endAt: getStartTime(tempo, 104, offset),
    },
    {
      text: "C'est pourquoi au grand jour du jugement",
      startAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "Ne résistera aucun des méchants,",
      startAt: getStartTime(tempo, 120, offset),
    },
    {
      text: "Ni les pécheurs dans l'assemblée des justes ;",
      startAt: getStartTime(tempo, 128, offset),
    },
    {
      text: "Car l'Éternel connaît la voie des justes,",
      startAt: getStartTime(tempo, 136, offset),
    },
    {
      text: "Qui n'imite pas celle des pécheurs.",
      startAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Celle-ci ne peut mener qu'au malheur.",
      startAt: getStartTime(tempo, 152, offset),
      endAt: getStartTime(tempo, 160, offset),
    },
  ],
} satisfies Song;
