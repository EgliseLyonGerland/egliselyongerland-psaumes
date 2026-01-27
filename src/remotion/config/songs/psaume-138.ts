import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 132;
const offset = 21.5;

export default {
  title: "Psaume 138",
  file: "psaume-138.wav",
  duration: 176.84016666666668,
  metadata: {
    writer: "R. Chapal",
    composer: "A. Sarran",
    performers: [
      "S. Sarran (chant)",
      "M. Blum (violon)",
      "A. Sarran (basse)",
      "D. Legal (guitare)",
    ],
  },
  lyrics: [
    {
      text: "Que tout mon cœur soit dans mon chant,",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "Qu'il soit brûlant de tes louanges.",
      startAt: getStartTime(tempo, 12, offset),
    },
    {
      text: "Je te rends grâce en ta maison,",
      startAt: getStartTime(tempo, 24, offset),
    },
    {
      text: "Je loue ton nom devant les anges.",
      startAt: getStartTime(tempo, 36, offset),
    },
    {
      text: "Tu es venu pour exalter",
      startAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "La renommée de ta Parole.",
      startAt: getStartTime(tempo, 60, offset),
    },
    {
      text: "J'adore ta fidélité",
      startAt: getStartTime(tempo, 72, offset),
    },
    {
      text: "Et ta bonté qui me console.",
      startAt: getStartTime(tempo, 84, offset),
      endAt: getStartTime(tempo, 96, offset),
    },
    {
      text: "Tu me réponds dès que je crie ;",
      startAt: getStartTime(tempo, 108, offset),
    },
    {
      text: "Tu élargis mon espérance.",
      startAt: getStartTime(tempo, 120, offset),
    },
    {
      text: "Même les grands t'écouteront",
      startAt: getStartTime(tempo, 132, offset),
    },
    {
      text: "Et béniront ta providence.",
      startAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Ton saint amour, ô Roi des cieux,",
      startAt: getStartTime(tempo, 156, offset),
    },
    {
      text: "Veille en tous lieux sur toutes choses.",
      startAt: getStartTime(tempo, 168, offset),
    },
    {
      text: "Dans ses projets tu suis des yeux",
      startAt: getStartTime(tempo, 180, offset),
    },
    {
      text: "L'homme orgueilleux : tu en disposes.",
      startAt: getStartTime(tempo, 192, offset),
      endAt: getStartTime(tempo, 204, offset),
    },
    {
      text: "Ta paix, mon Dieu, dure à toujours,",
      startAt: getStartTime(tempo, 216, offset),
    },
    {
      text: "C'est ton amour qui me délivre.",
      startAt: getStartTime(tempo, 228, offset),
    },
    {
      text: "Quand je suis le plus éprouvé",
      startAt: getStartTime(tempo, 240, offset),
    },
    {
      text: "Ton bras levé me fait revivre.",
      startAt: getStartTime(tempo, 252, offset),
    },
    {
      text: "Et quand je suis au désespoir",
      startAt: getStartTime(tempo, 264, offset),
    },
    {
      text: "C'est ton pouvoir qui me relève.",
      startAt: getStartTime(tempo, 276, offset),
    },
    {
      text: "Ce qu'il t'a plu de commencer",
      startAt: getStartTime(tempo, 288, offset),
    },
    {
      text: "Sans se lasser ta main l'achève.",
      startAt: getStartTime(tempo, 300, offset),
      endAt: getStartTime(tempo, 312, offset),
    },
  ],
} satisfies Song;
