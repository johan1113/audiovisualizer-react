import React from 'react';
import Audio3D from '../../components/Audio3D/Audio3D';
import MixingBoard from '../../components/MixingBoard/MixingBoard'
//import AudioVisualization from '../../components/AudioVisualization/AudioVisualization';
import './AudioVisualizer.scss';
import AudioVisualizerContext from '../../contexts/AudioVisualizerContext/AudioVisualizerContext';

function AudioVisualizer() {

    const [bgColor, setBgColor] = React.useState('#fff700');
    const [fgColor, setFgColor] = React.useState('#ae12d4');
    const [mp3File, setMp3File] = React.useState('https://iondrimbafilho.me/3d5/ocean_drive.mp3');

    const context = {
        bgColor: bgColor,
        setBgColor: setBgColor,
        fgColor: fgColor,
        setFgColor: setFgColor,
        mp3File : mp3File,
        setMp3File : setMp3File
    }

    return (
        <div className="AudioVisualizer">

            <AudioVisualizerContext.Provider value={context}>

                <MixingBoard setBgColor={setBgColor} setFgColor={setFgColor} bgColor={bgColor} fgColor={fgColor} setMp3File={setMp3File} mp3File={mp3File}/>
                <Audio3D bgColor={bgColor} fgColor={fgColor} mp3File={mp3File}/>

            </AudioVisualizerContext.Provider>
            {/*
            <AudioVisualization />
            */}

        </div >
    )
}



export default AudioVisualizer;