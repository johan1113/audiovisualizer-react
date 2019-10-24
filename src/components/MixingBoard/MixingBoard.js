import React from 'react';
import './MixingBoard.scss';
import { HuePicker } from 'react-color';

function MixingBoard() {

    const [bgColor, setBgColor] = React.useState('#FFFFFF');
    const [fgColor, setFgColor] = React.useState('#FFFFFF');
    const [onPlay, setOnPlay] = React.useState(false);

    const handleBgColorChange = (bgColor) => {
        setBgColor(bgColor.hex);
        console.log(bgColor);
    }

    const handleFgColorChange = (fgColor) => {
        setFgColor(fgColor.hex);
        console.log(fgColor);
    }

    function handlePlay (){
        setOnPlay(true);
    }

    function handleStop (){
        setOnPlay(false);
    }

    return (
        <div className="MixingBoard">
            <div className="title">
                <h1>Sound Mixer</h1>
            </div>

            <button className="button" id="btn_black">Load Audio</button>


            <div className="controls">
                <button className="play" style={{display: !onPlay ? 'block' : 'none'}} onClick={handlePlay}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" width="32" height="32" viewBox="0 0 25 32"
                        data-tags="play,media control">
                        <g fill="#000000" transform="scale(0.03125 0.03125)">
                            <path d="M192 0v1024l640-511.264-640-512.736z" />
                        </g>
                    </svg>
                </button>
                <button className="pause" style={{display: onPlay ? 'block' : 'none'}} onClick={handleStop}>
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
                    <HuePicker color={bgColor} onChange={handleBgColorChange} />
                </section>

                <section id="fg">
                    <h2>Figures Color</h2>
                    <HuePicker color={fgColor} onChange={handleFgColorChange} />
                </section>
            </div>
        </div>
    )
}

export default MixingBoard;