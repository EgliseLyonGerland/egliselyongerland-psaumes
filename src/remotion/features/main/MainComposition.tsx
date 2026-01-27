import SongSequence from "../song/components/SongSequence";
import JingleSequence from "../jingle/components/JingleSequence";

export const MainComposition = () => {
  return (
    <>
      <SongSequence from={174} />
      <JingleSequence />
    </>
  );
};
