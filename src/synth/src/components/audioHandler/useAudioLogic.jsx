import { useState, useRef, useEffect } from "react";
import { transpose, changeOctave, keys, mobileKeys } from "../../data/keys";
import {
  getGainNode,
  setUpGainNodeEnvelope,
  handleRelease,
} from "../../components/audioServices/GainService";
import {
  handlePitchShiftUp,
  handlePitchShiftDown,
} from "../../components/audioServices/FrequencyService";

const SLICE_768 = 12;
const SLICE_475 = 12;
const SLICE_425 = 10;
export default function useAudioLogic({ ampEnv, volumeAmount }) {
  const [notes, setNotes] = useState([...keys]);
  useEffect(() => {
    if (window.innerWidth <= 425) {
      setNotes([...keys.slice(0, SLICE_425)]);
    }
    if (window.innerWidth > 425) {
      setNotes([...keys.slice(0, SLICE_475)]);
    }
    if (window.innerWidth > 600 && window.innerWidth < 768) {
      setNotes([...keys.slice(0, SLICE_768)]);
    }
    if (window.innerWidth >= 768) {
      setNotes([...keys]);
    }
  }, []);
  const [currentNotes, setCurrentNotes] = useState({});
  const audioCtx = useRef(null);
  const {
    attack: ampAttack,
    decay: ampDecay,
    sustain: ampSustain,
    release: ampRelease,
  } = ampEnv;

  useEffect(() => {
    audioCtx.current = new AudioContext({
      sampleRate: 44000,
      latencyHint: "interactive",
      bitDepth: 16,
    });
  }, []);

  var startNewOsc = (note) => {
    const ctx = audioCtx.current;
    const osc = ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = note.frequency;
    return osc;
  };

  var onPitchShiftActive = () => {
    Object.values(currentNotes).forEach((note) => {
      handlePitchShiftUp(audioCtx.current, note.osc);
    });
  };

  var onPitchShiftReleased = () => {
    console.log("pitchshift released");
    Object.values(currentNotes).forEach((note) => {
      const originalFreq = notes.filter(
        (originalNote) => originalNote.id === note.id
      )[0].frequency;
      handlePitchShiftDown(audioCtx.current, note.osc, originalFreq);
    });
  };

  var play = (note) => {
    if (currentNotes.length === 1) {
      const lastNote = currentNotes[note.id];
      stopPlaying(lastNote);
    }
    const osc = startNewOsc(note);
    const gainNode = getGainNode(audioCtx.current);
    gainNode.connect(audioCtx.current.destination);
    setUpGainNodeEnvelope(
      audioCtx.current,
      gainNode,
      [ampAttack, ampDecay, ampSustain, ampRelease],
      volumeAmount
    );
    osc.connect(gainNode);
    const newNote = {
      id: note.id,
      note: note,
      osc: osc,
      gainNode: gainNode,
    };
    setCurrentNotes((prevNotes) => ({ ...prevNotes, [newNote.id]: newNote }));
    if (audioCtx.current.state === "suspended") {
      audioCtx.current.resume();
    }
    osc.start();
  };

  const handleTranspose = (isUp) => {
    const newNotes = transpose(isUp, notes);
    setNotes(newNotes);
  };

  const handleOctaveChange = (isUp) => {
    const newNotes = changeOctave(isUp, notes);
    setNotes(newNotes);
  };

  const stopPlaying = (note) => {
    const { osc, gainNode } = currentNotes[note.id];
    handleRelease(audioCtx.current, gainNode, ampRelease);
    stopOscillator(osc);
    setCurrentNotes((prevNotes) => {
      delete prevNotes[note.id];
      return prevNotes;
    });
  };

  const stopOscillator = (osc) => {
    setTimeout(() => {
      osc.stop();
    }, ampRelease * 1000);
  };

  return {
    notes,
    setNotes,
    handleOctaveChange,
    handleTranspose,
    play,
    stopPlaying,
    onPitchShiftActive,
    onPitchShiftReleased,
  };
}
