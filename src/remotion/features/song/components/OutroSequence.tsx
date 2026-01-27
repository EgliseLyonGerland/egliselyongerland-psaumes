import { interpolate, Sequence, useCurrentFrame } from "remotion";
import { useContext } from "../context";
import { VIDEO_FPS } from "../../../../../types/constants";

export default function OutroSequence() {
  const { song } = useContext();
  const frame = useCurrentFrame();

  const lastLyric = song.lyrics[song.lyrics.length - 1];
  const lastLyricEndAt = lastLyric.endAt ?? song.duration - 10;
  const delta = Math.min(song.duration - lastLyricEndAt, 15);
  // const startAt = lastLyricEndAt + 1;

  const startAt = (song.duration - delta) * VIDEO_FPS;

  const opacity = interpolate(frame, [startAt, startAt + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <Sequence name="Outro" from={startAt}>
      <div
        className="absolute top-48 left-48 flex justify-center text-dust-light max-w-4xl flex-col gap-10 opacity-80 tracking-wide"
        style={{ opacity }}
      >
        <div className="text-6xl font-bold">{song.title}</div>
        <div className="text-4xl font-serif leading-12 opacity-70">
          Inteprété par les membres de l'église réformée-évangélique de Lyon-Gerland
        </div>
        <div className="text-4xl font-serif leading-12 opacity-70">
          <b>Musique et paroles :</b> Alexandre Sarran
        </div>
        <div className="text-4xl font-serif leading-12 opacity-70">
          <b>Interprètes :</b> Suzanne Sarran (chant) / Alexandre Sarran (guitare) / Mailys Blum
          (violon)
        </div>
      </div>
    </Sequence>
  );
}
