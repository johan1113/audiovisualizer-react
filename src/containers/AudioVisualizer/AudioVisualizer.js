import React from 'react';
import Audio3D from '../../components/Audio3D/Audio3D';
import MixingBoard from '../../components/MixingBoard/MixingBoard'
//import AudioVisualization from '../../components/AudioVisualization/AudioVisualization';
import './AudioVisualizer.scss';

function AudioVisualizer() {

    return (
        <div className="AudioVisualizer">

            <MixingBoard />
            <Audio3D />
            {/*
            <AudioVisualization />
            */}

        </div >
    )
}



export default AudioVisualizer;