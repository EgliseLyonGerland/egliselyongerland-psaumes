import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 126.4;
const offset = 14.6;

export default {
  title: "Psaume 92",
  file: "psaume-92.mp3",
  duration: 159.05958333333334,
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
      text: "Oh ! Que c'est chose belle,",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "De te louer, Seigneur,",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "De chanter ton honneur",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "D'un cœur humble et fidèle ;",
      startAt: getStartTime(tempo, 22, offset),
    },
    {
      text: "Quand le jour vient à naître,",
      startAt: getStartTime(tempo, 32, offset),
    },
    {
      text: "D'annoncer ta bonté,",
      startAt: getStartTime(tempo, 40, offset),
    },
    {
      text: "Et ta fidélité",
      startAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "Quand la nuit va paraître.",
      startAt: getStartTime(tempo, 54, offset),
      endAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "Combien grande est ta gloire",
      startAt: getStartTime(tempo, 72, offset),
    },
    {
      text: "En tout ce que tu fais,",
      startAt: getStartTime(tempo, 80, offset),
    },
    {
      text: "Et combien tes hauts faits",
      startAt: getStartTime(tempo, 88, offset),
    },
    {
      text: "Sont dignes de mémoire !",
      startAt: getStartTime(tempo, 94, offset),
    },
    {
      text: "Tes œuvres sans pareilles",
      startAt: getStartTime(tempo, 104, offset),
    },
    {
      text: "Ont réjoui mon cœur ;",
      startAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "Je veux chanter, Seigneur,",
      startAt: getStartTime(tempo, 120, offset),
    },
    {
      text: "Tes divines merveilles.",
      startAt: getStartTime(tempo, 126, offset),
      endAt: getStartTime(tempo, 136, offset),
    },
    {
      text: "Si les méchants fleurissent,",
      startAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Comme l'ivraie des champs,",
      startAt: getStartTime(tempo, 152, offset),
    },
    {
      text: "Et si des arrogants",
      startAt: getStartTime(tempo, 160, offset),
    },
    {
      text: "Les projets réussissent,",
      startAt: getStartTime(tempo, 166, offset),
    },
    {
      text: "C'est pour qu'ils disparaissent",
      startAt: getStartTime(tempo, 176, offset),
    },
    {
      text: "Par la mort emportés",
      startAt: getStartTime(tempo, 184, offset),
    },
    {
      text: "Et que soient dévoilés",
      startAt: getStartTime(tempo, 192, offset),
    },
    {
      text: "Les plans de ta sagesse.",
      startAt: getStartTime(tempo, 198, offset),
      endAt: getStartTime(tempo, 208, offset),
    },
    {
      text: "Tu oins d'une huile fraîche",
      startAt: getStartTime(tempo, 216, offset),
    },
    {
      text: "Le front de ton enfant;",
      startAt: getStartTime(tempo, 224, offset),
    },
    {
      text: "On le voit rayonnant,",
      startAt: getStartTime(tempo, 232, offset),
    },
    {
      text: "Vigoureux comme un cèdre.",
      startAt: getStartTime(tempo, 238, offset),
    },
    {
      text: "Sa gloire et sa richesse",
      startAt: getStartTime(tempo, 248, offset),
    },
    {
      text: "Sont d'orner ta maison;",
      startAt: getStartTime(tempo, 256, offset),
    },
    {
      text: "Tes fruits chaque saison",
      startAt: getStartTime(tempo, 264, offset),
    },
    {
      text: "Combleront sa vieillesse.",
      startAt: getStartTime(tempo, 270, offset),
      endAt: getStartTime(tempo, 280, offset),
    },
  ],
} satisfies Song;
