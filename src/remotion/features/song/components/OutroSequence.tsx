import { interpolate, Sequence, useCurrentFrame } from "remotion";
import { useContext } from "../context";
import { VIDEO_FPS } from "../../../../../types/constants";
import { Fragment } from "react";

export default function OutroSequence() {
  const { song } = useContext();
  const frame = useCurrentFrame();

  const lastLyric = song.lyrics[song.lyrics.length - 1];
  const lastLyricEndAt = lastLyric.endAt ?? song.duration - 10;

  const startAt = (lastLyricEndAt + 2) * VIDEO_FPS;

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
        {song.metadata.writer === song.metadata.composer ? (
          <div className="text-4xl font-serif leading-12 opacity-70">
            <b>Musique et paroles :</b> {song.metadata.writer}
          </div>
        ) : (
          <>
            <div className="text-4xl font-serif leading-12 opacity-70">
              <b>Musique :</b> {song.metadata.composer}
            </div>
            <div className="text-4xl font-serif leading-12 opacity-70">
              <b>Paroles :</b> {song.metadata.writer}
            </div>
          </>
        )}
        <div className="text-4xl font-serif leading-12 opacity-70">
          <b>Interprètes :</b>{" "}
          {song.metadata.performers.map((p, index) => (
            <Fragment key={p}>
              {index > 0 && ", "}
              <span className="inline-flex whitespace-nowrap">{p}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </Sequence>
  );
}
