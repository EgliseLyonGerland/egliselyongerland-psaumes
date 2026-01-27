import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 149;
const offset = 13.9;

export default {
  title: "Psaume 84",
  file: "psaume-84.wav",
  duration: 173.86802083333333,
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
      text: "Dans ta maison je suis heureux,",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "Elle est le désir de mes yeux,",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "Ici je cherche ta présence.",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "Longtemps mon cœur t'a réclamé,",
      startAt: getStartTime(tempo, 32, offset),
    },
    {
      text: "Sa joie est de te retrouver,",
      startAt: getStartTime(tempo, 40, offset),
    },
    {
      text: "Il crie à toi plein d'espérance.",
      startAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "Ainsi revient en la saison",
      startAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "Le passereau vers la maison.",
      startAt: getStartTime(tempo, 80, offset),
    },
    {
      text: "Heureux qui grave dans son cœur",
      startAt: getStartTime(tempo, 96, offset),
    },
    {
      text: "Le chemin qui mène au Seigneur,",
      startAt: getStartTime(tempo, 104, offset),
    },
    {
      text: "Le chemin de l'humble service.",
      startAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "Pour lui la source jaillira",
      startAt: getStartTime(tempo, 128, offset),
    },
    {
      text: "Et l'eau du ciel l'arrosera,",
      startAt: getStartTime(tempo, 136, offset),
    },
    {
      text: "Dans la vallée la plus aride.",
      startAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Dieu guidera jusqu'à la fin,",
      startAt: getStartTime(tempo, 160, offset),
    },
    {
      text: "Au long des jours, le pèlerin.",
      startAt: getStartTime(tempo, 176, offset),
    },
    {
      text: "Seigneur, qui règnes dans les cieux",
      startAt: getStartTime(tempo, 192, offset),
    },
    {
      text: "Et nous écoutes dans ce lieu,",
      startAt: getStartTime(tempo, 200, offset),
    },
    {
      text: "Exauce-nous, sois notre garde.",
      startAt: getStartTime(tempo, 208, offset),
    },
    {
      text: "À toi nos cœurs ne cachent rien",
      startAt: getStartTime(tempo, 224, offset),
    },
    {
      text: "Quand tu regardes vers les tiens",
      startAt: getStartTime(tempo, 232, offset),
    },
    {
      text: "À ton Messie d'abord regarde :",
      startAt: getStartTime(tempo, 240, offset),
    },
    {
      text: "Vois son visage couronné,",
      startAt: getStartTime(tempo, 256, offset),
    },
    {
      text: "Vers lui notre espoir est tourné.",
      startAt: getStartTime(tempo, 272, offset),
    },
    {
      text: "Qui veut sur ton bras s'appuyer",
      startAt: getStartTime(tempo, 288, offset),
    },
    {
      text: "A pour soleil, pour bouclier",
      startAt: getStartTime(tempo, 296, offset),
    },
    {
      text: "Le rayonnement de ta grâce.",
      startAt: getStartTime(tempo, 304, offset),
    },
    {
      text: "Le dernier de tes serviteurs",
      startAt: getStartTime(tempo, 320, offset),
    },
    {
      text: "Enfin découvre son bonheur",
      startAt: getStartTime(tempo, 328, offset),
    },
    {
      text: "À se tenir devant ta face.",
      startAt: getStartTime(tempo, 336, offset),
    },
    {
      text: "Dans ta maison un jour vaut mieux",
      startAt: getStartTime(tempo, 352, offset),
    },
    {
      text: "Que mille jours en d'autres lieux.",
      startAt: getStartTime(tempo, 368, offset),
      endAt: getStartTime(tempo, 378, offset),
    },
  ],
} satisfies Song;
