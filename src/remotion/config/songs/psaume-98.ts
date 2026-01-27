import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 126;
const offset = 19.3;

export default {
  title: "Psaume 98",
  file: "psaume-98.wav",
  duration: 163.46547916666665,
  metadata: {
    writer: "R. Chapal, T. de Bèze, C. Goudimel",
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
      text: "Entonnons un nouveau cantique",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "Pour célébrer le Dieu sauveur ;",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "Ce qu'il a fait est magnifique,",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "Levant pour nous un bras vainqueur.",
      startAt: getStartTime(tempo, 24, offset),
    },
    {
      text: "Le salut de Dieu se révèle",
      startAt: getStartTime(tempo, 32, offset),
    },
    {
      text: "Et tous les yeux l'ont reconnu ;",
      startAt: getStartTime(tempo, 40, offset),
    },
    {
      text: "De proche en proche la nouvelle",
      startAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "Jusqu'au bout du monde a couru.",
      startAt: getStartTime(tempo, 56, offset),
      endAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "Dieu fait à son peuple connaître",
      startAt: getStartTime(tempo, 72, offset),
    },
    {
      text: "Sa grâce et sa fidélité ;",
      startAt: getStartTime(tempo, 80, offset),
    },
    {
      text: "Et sa justice va paraître",
      startAt: getStartTime(tempo, 88, offset),
    },
    {
      text: "Devant les peuples assemblés.",
      startAt: getStartTime(tempo, 96, offset),
    },
    {
      text: "Vous qui comptiez sur sa promesse",
      startAt: getStartTime(tempo, 104, offset),
    },
    {
      text: "Voyez : le Seigneur se souvient !",
      startAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "Il nous secourt dans sa tendresse,",
      startAt: getStartTime(tempo, 120, offset),
    },
    {
      text: "Il nous relève et nous soutient.",
      startAt: getStartTime(tempo, 128, offset),
      endAt: getStartTime(tempo, 136, offset),
    },
    {
      text: "Chantez pour lui vos chants de fête,",
      startAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Psalmodiez ! Criez de joie !",
      startAt: getStartTime(tempo, 152, offset),
    },
    {
      text: "Au son du cor et des trompettes,",
      startAt: getStartTime(tempo, 160, offset),
    },
    {
      text: "Acclamez tous le Roi des rois.",
      startAt: getStartTime(tempo, 168, offset),
    },
    {
      text: "Le Seigneur vient juger la terre,",
      startAt: getStartTime(tempo, 176, offset),
    },
    {
      text: "Sa vérité va s'imposer.",
      startAt: getStartTime(tempo, 184, offset),
    },
    {
      text: "Que tous les peuples qui espèrent",
      startAt: getStartTime(tempo, 192, offset),
    },
    {
      text: "En l'apprenant soient apaisés.",
      startAt: getStartTime(tempo, 200, offset),
      endAt: getStartTime(tempo, 208, offset),
    },
    {
      text: "Que tous les océans mugissent,",
      startAt: getStartTime(tempo, 216, offset - 0.2),
    },
    {
      text: "Fleuves aussi, battez des mains ;",
      startAt: getStartTime(tempo, 224, offset - 0.2),
    },
    {
      text: "Et que les montagnes bondissent",
      startAt: getStartTime(tempo, 232, offset - 0.2),
    },
    {
      text: "Pour acclamer le Roi qui vient.",
      startAt: getStartTime(tempo, 240, offset - 0.2),
    },
    {
      text: "Le Seigneur va juger le monde",
      startAt: getStartTime(tempo, 248, offset - 0.2),
    },
    {
      text: "Avec droiture et vérité,",
      startAt: getStartTime(tempo, 256, offset - 0.2),
    },
    {
      text: "Et partout sa justice fonde",
      startAt: getStartTime(tempo, 264, offset - 0.2),
    },
    {
      text: "Son éternelle royauté.",
      startAt: getStartTime(tempo, 272, offset - 0.2),
      endAt: getStartTime(tempo, 282, offset - 0.2),
    },
  ],
} satisfies Song;
