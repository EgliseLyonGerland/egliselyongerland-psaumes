import { Song } from "../../features/song/types";
import { getStartTime } from "../songs";

const tempo = 97.1;
const offset = 9.5;

export default {
  title: "Psaume 19",
  file: "psaume-19.wav",
  duration: 164.9515625,
  offset: 2,
  metadata: {
    writer: "C. Marot, M. F. Gonin",
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
      text: "Les cieux en chaque lieu",
      startAt: getStartTime(tempo, 0, offset),
    },
    {
      text: "De la gloire de Dieu",
      startAt: getStartTime(tempo, 4, offset),
    },
    {
      text: "Enseignent les humains,",
      startAt: getStartTime(tempo, 8, offset),
    },
    {
      text: "Et leur immensité",
      startAt: getStartTime(tempo, 16, offset),
    },
    {
      text: "Proclame la beauté",
      startAt: getStartTime(tempo, 20, offset),
    },
    {
      text: "De l’œuvre de ses mains.",
      startAt: getStartTime(tempo, 24, offset),
    },
    {
      text: "Un jour à l’autre jour",
      startAt: getStartTime(tempo, 32, offset),
    },
    {
      text: "Raconte son amour",
      startAt: getStartTime(tempo, 36, offset),
    },
    {
      text: "Par longue expérience.",
      startAt: getStartTime(tempo, 40, offset),
    },
    {
      text: "La nuit suivant la nuit",
      startAt: getStartTime(tempo, 48, offset),
    },
    {
      text: "Nous prêche et nous instruit",
      startAt: getStartTime(tempo, 52, offset),
    },
    {
      text: "De sa toute-puissance.",
      startAt: getStartTime(tempo, 56, offset),
      endAt: getStartTime(tempo, 64, offset),
    },
    {
      text: "La très parfaite Loi",
      startAt: getStartTime(tempo, 80, offset),
    },
    {
      text: "De Dieu, souverain Roi,",
      startAt: getStartTime(tempo, 84, offset),
    },
    {
      text: "Ranime le mourant ;",
      startAt: getStartTime(tempo, 88, offset),
    },
    {
      text: "Son témoignage sûr",
      startAt: getStartTime(tempo, 96, offset),
    },
    {
      text: "Rend sage avec douceur",
      startAt: getStartTime(tempo, 100, offset),
    },
    {
      text: "Le plus humble ignorant.",
      startAt: getStartTime(tempo, 104, offset),
    },
    {
      text: "Dieu seul est Roi des rois,",
      startAt: getStartTime(tempo, 112, offset),
    },
    {
      text: "Tous ses ordres sont droits,",
      startAt: getStartTime(tempo, 116, offset),
    },
    {
      text: "La joie en est divine :",
      startAt: getStartTime(tempo, 120, offset),
    },
    {
      text: "Les commandements saints",
      startAt: getStartTime(tempo, 128, offset),
    },
    {
      text: "De Dieu sont purs et sains,",
      startAt: getStartTime(tempo, 132, offset),
    },
    {
      text: "Sans cesse ils illuminent.",
      startAt: getStartTime(tempo, 136, offset),
      endAt: getStartTime(tempo, 144, offset),
    },
    {
      text: "Garde-moi des projets",
      startAt: getStartTime(tempo, 160, offset),
    },
    {
      text: "Que par orgueil on fait,",
      startAt: getStartTime(tempo, 164, offset),
    },
    {
      text: "En s’écartant de Toi.",
      startAt: getStartTime(tempo, 168, offset),
    },
    {
      text: "Alors par ta bonté",
      startAt: getStartTime(tempo, 176, offset),
    },
    {
      text: "Préservé du péché,",
      startAt: getStartTime(tempo, 180, offset),
    },
    {
      text: "Je vivrai sans effroi.",
      startAt: getStartTime(tempo, 184, offset),
    },
    {
      text: "Ma bouche ne dira,",
      startAt: getStartTime(tempo, 192, offset),
    },
    {
      text: "Mon cœur ne pensera",
      startAt: getStartTime(tempo, 196, offset),
    },
    {
      text: "Rien qui puisse déplaire",
      startAt: getStartTime(tempo, 200, offset),
    },
    {
      text: "À toi, mon défenseur,",
      startAt: getStartTime(tempo, 208, offset),
    },
    {
      text: "À toi, qui rend meilleurs",
      startAt: getStartTime(tempo, 212, offset),
    },
    {
      text: "Ceux qui voudraient bien faire.",
      startAt: getStartTime(tempo, 216, offset),
      endAt: getStartTime(tempo, 224, offset),
    },
  ],
} satisfies Song;
