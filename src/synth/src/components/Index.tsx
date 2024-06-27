import Synth from "../features/synth/index";
import "./index.css";
import useAudioLogic from "./audioHandler/useAudioLogic";
import useADSR from "../hooks/useADSR";
import { useState } from "react";

/**
 *
 * @returns {JSX.Element}
 */
const Main = () => {
  const {
    adsrParams: ampEnv,
  } = useADSR();


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
