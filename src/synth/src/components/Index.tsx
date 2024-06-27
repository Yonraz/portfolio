//@ts-expect-error importing a jsx component
import Synth from "../features/synth/index";
import "./index.css";
//@ts-expect-error importing a jsx component
import useAudioLogic from "./audioHandler/useAudioLogic";
//@ts-expect-error importing a jsx component
import useADSR from "../hooks/useADSR";
import { useState } from "react";

/**
 *
 * @returns {JSX.Element}
 */
const Main = () => {
  const { adsrParams: ampEnv } = useADSR();

  const [volumeAmount, setVolumeAmount] = useState(0.1);

  const {
    setNotes,
    play,
    stopPlaying,
    notes,
    onPitchShiftActive,
    onPitchShiftReleased,
  } = useAudioLogic({ ampEnv, volumeAmount });

  return (
    <>
      <div className="main-container">
        <Synth
          play={play}
          stopPlaying={stopPlaying}
          notes={notes}
          setNotes={setNotes}
          onPitchShiftActive={onPitchShiftActive}
          onPitchShiftReleased={onPitchShiftReleased}
          volume={volumeAmount}
          setVolume={setVolumeAmount}
        />
      </div>
    </>
  );
};

export default Main;
