import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 172.3;
const offset = 32.1;

export default {
  title: "Psaume 62",
  file: "psaume-62.wav",
  duration: 206.56170833333334,
  metadata: {
    writer: "R. Chapal",
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
      text: "En toi, mon Dieu, toi seulement,",
      startAt: getStartTime(tempo, 2, offset),
    },
    {
      text: "J’ai retrouvé l’apaisement",
      startAt: getStartTime(tempo, 14, offset),
    },
    {
      text: "Car tu es seul ma délivrance,",
      startAt: getStartTime(tempo, 26, offset),
      // endAt: getStartTime(tempo, 24, offset),
    },
    {
      text: "Et je m’appuie à ce rocher.",
      startAt: getStartTime(tempo, 50, offset),
    },
    {
      text: "Je ne crains pas de trébucher,",
      startAt: getStartTime(tempo, 62, offset),
    },
    {
      text: "Je fonde en lui mon assurance.",
      startAt: getStartTime(tempo, 74, offset),
    },
    {
      text: "Vont-ils longtemps sur moi peser",
      startAt: getStartTime(tempo, 98, offset),
    },
    {
      text: "Ceux qui voudraient me renverser",
      startAt: getStartTime(tempo, 110, offset),
    },
    {
      text: "Comme on renverse une clôture ?",
      startAt: getStartTime(tempo, 122, offset),
    },
    {
      text: "Vous vous plaisez tous à mentir,",
      startAt: getStartTime(tempo, 146, offset),
    },
    {
      text: "Et quand vous feignez de bénir",
      startAt: getStartTime(tempo, 158, offset),
    },
    {
      text: "C’est à nouveau une imposture.",
      startAt: getStartTime(tempo, 170, offset),
    },
    {
      text: "En toi, mon Dieu, est mon recours,",
      startAt: getStartTime(tempo, 194, offset),
    },
    {
      text: "Tu es ma gloire et mon secours,",
      startAt: getStartTime(tempo, 206, offset),
    },
    {
      text: "Tu affermis mon espérance.",
      startAt: getStartTime(tempo, 218, offset),
    },
    {
      text: "Venez servir votre Seigneur,",
      startAt: getStartTime(tempo, 242, offset),
    },
    {
      text: "Et devant lui ouvrez vos cœurs",
      startAt: getStartTime(tempo, 254, offset),
    },
    {
      text: "Car il est seul notre défense.",
      startAt: getStartTime(tempo, 266, offset),
    },
    {
      text: "Faible ou puissant, l’homme n’est rien.",
      startAt: getStartTime(tempo, 290, offset),
    },
    {
      text: "Il pèse moins avec ses biens",
      startAt: getStartTime(tempo, 302, offset),
    },
    {
      text: "Qu’un souffle au creux d’une balance.",
      startAt: getStartTime(tempo, 314, offset),
    },
    {
      text: "Tous ses calculs, tout son argent",
      startAt: getStartTime(tempo, 338, offset),
    },
    {
      text: "Sont dispersés au moindre vent ;",
      startAt: getStartTime(tempo, 350, offset),
    },
    {
      text: "Tout son avoir n’est qu’indigence.",
      startAt: getStartTime(tempo, 362, offset),
    },
    {
      text: "Dieu m’a parlé de sa grandeur,",
      startAt: getStartTime(tempo, 386, offset),
    },
    {
      text: "Il m’a révélé sa splendeur,",
      startAt: getStartTime(tempo, 398, offset),
    },
    {
      text: "Je veux proclamer sa puissance.",
      startAt: getStartTime(tempo, 410, offset),
    },
    {
      text: "Il donnera au dernier jour,",
      startAt: getStartTime(tempo, 434, offset),
    },
    {
      text: "À toute vie, à tout amour,",
      startAt: getStartTime(tempo, 446, offset),
    },
    {
      text: "Son repos et sa récompense.",
      startAt: getStartTime(tempo, 458, offset),
      endAt: getStartTime(tempo, 482, offset),
    },
  ],
} satisfies Song;
