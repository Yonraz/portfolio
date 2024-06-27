/* eslint-disable react/prop-types */
import Knob from "../../components/knob/Knob";
import './VolumeKnob.css'
export default function VolumeKnob({volume, setVolume}) {

    return (
        <>
            <Knob size={60} onChange={setVolume} value={volume} name='Volume'/>
        </>
    )
}