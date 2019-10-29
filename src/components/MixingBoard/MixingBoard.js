import React from 'react';
import './MixingBoard.scss';
import { CirclePicker } from 'react-color';

const MixingBoard = (props) => {

    const [onPlay, setOnPlay] = React.useState(false);

    const handleBgColorChange = (bgColor) => {
        props.setBgColor(bgColor.hex);
        console.log(bgColor.hex);
        console.log(props.bgColor);
    }

    const handleFgColorChange = (fgColor) => {
        props.setFgColor(fgColor.hex);
        console.log(fgColor.hex);
        console.log(props.fgColor);
    }

    const handleChange = (event) => {
        var newMp3File = URL.createObjectURL(event.currentTarget.files[0]);
        console.log('/////// NEW MP3 FILE //////////')
        console.log(newMp3File);
        props.setMp3File(newMp3File);
       //props.setMp3File('https://iondrimbafilho.me/3d5/ocean_drive.mp3');
    }
    
    function handlePlay() {
        setOnPlay(true);
    }

    function handleStop() {
        setOnPlay(false);
    }
    return (
        <div className="MixingBoard">
            <div className="title">
                <h1>Sound Mixer</h1>
            </div>

            <input type="file" id="labelSong" accept = ".mp3" onChange={handleChange}/>
            <label className="button" id="btn_black" for="labelSong">Load Audio</label>


            <div className="controls">
                <button className="play" style={{ display: !onPlay ? 'block' : 'none' }} onClick={handlePlay}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="32" height="32" viewBox="0 0 25 32"
                        data-tags="play,media control">
                        <g fill="#000000" transform="scale(0.03125 0.03125)">
                            <path d="M192 0v1024l640-511.264-640-512.736z" />
                        </g>
                    </svg>
                </button>
                <button className="pause" style={{ display: onPlay ? 'block' : 'none' }} onClick={handleStop}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"
                        data-tags="pause,media control">
                        <g fill="#000000" transform="scale(0.03125 0.03125)">
                            <path d="M352 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32zM864 0h-192c-17.696 0-32 14.336-32 32v960c0 17.696 14.304 32 32 32h192c17.696 0 32-14.304 32-32v-960c0-17.664-14.304-32-32-32z"
                            />
                        </g>
                    </svg>
                </button>
            </div >

            <div className="color_pickers">
                <section id="bg">
                    <h2>Background Color</h2>
                    <CirclePicker color={props.bgColor} onChange={handleBgColorChange} />
                </section>

                <section id="fg">
                    <h2>Figures Color</h2>
                    <CirclePicker color={props.fgColor} onChange={handleFgColorChange} />
                </section>
            </div>
        </div>
    )
}

export default MixingBoard;