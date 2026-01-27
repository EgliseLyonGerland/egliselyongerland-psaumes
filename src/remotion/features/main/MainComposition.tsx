import SongSequence from "../song/components/SongSequence";
import JingleSequence from "../jingle/components/JingleSequence";
import { JINGLE_DURATION_IN_FRAMES } from "../../../../types/constants";

export const MainComposition = () => {
  return (
    <>
      <SongSequence from={JINGLE_DURATION_IN_FRAMES} />
      <JingleSequence />
    </>
  );
};
