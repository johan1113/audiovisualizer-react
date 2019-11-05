import React from 'react';
import Audio3D from '../../components/Audio3D/Audio3D';
import MixingBoard from '../../components/MixingBoard/MixingBoard';
import './AudioVisualizer.scss';
import AudioVisualizerContext from '../../contexts/AudioVisualizerContext/AudioVisualizerContext';

function AudioVisualizer() {

    const [bgColor, setBgColor] = React.useState('#fff700');
    const [fgColor, setFgColor] = React.useState('#ae12d4');
    const [onPlay, setOnPlay] = React.useState(false);
    const [mp3File, setMp3File] = React.useState('https://iondrimbafilho.me/3d5/ocean_drive.mp3');
    const [fileName, setFileName] = React.useState('Artista - Título.mp3');

    const context = {
        bgColor: bgColor,
        setBgColor: setBgColor,
        fgColor: fgColor,
        setFgColor: setFgColor,
        onPlay: onPlay,
        setOnPlay: setOnPlay,
        mp3File : mp3File,
        setMp3File : setMp3File,
        fileName : fileName,
        setFileName: setFileName
    }

    return (
        <div className="AudioVisualizer">

            <AudioVisualizerContext.Provider value={context}>


                <MixingBoard setBgColor={setBgColor} setFgColor={setFgColor} bgColor={bgColor} fgColor={fgColor} setOnPlay={setOnPlay} onPlay={onPlay} setMp3File={setMp3File} setFileName={setFileName}/>
                <Audio3D bgColor={bgColor} fgColor={fgColor} onPlay={onPlay} mp3File={mp3File} fileName={fileName}/>

            </AudioVisualizerContext.Provider>
            {/*
            <AudioVisualization />
            */}

        </div >
    )
}



export default AudioVisualizer;