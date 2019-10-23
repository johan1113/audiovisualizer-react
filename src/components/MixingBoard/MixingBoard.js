import React from 'react';
import './MixingBoard.scss';
import { SliderPicker } from 'react-color';

function MixingBoard() {

    const [bgColor, setBgColor] = React.useState('#FFFFFF');

    const handleChange = (bgColor) => {
        setBgColor(bgColor.hex);
        console.log(bgColor);
    }

    return (
        <div className="MixingBoard">
            <div className="title">
                <h1>Sound Mixer</h1>
            </div>

            <button className="button" id="btn_black">Load Audio</button>

            <div className="color_pickers">
                <section id="bg">
                    <h2>Background Color</h2>
                    <SliderPicker color={bgColor} onChange={handleChange} />
                </section>

                <section id="fg">
                    <h2>Figures Color</h2>
                    <SliderPicker color={bgColor} onChange={handleChange} />
                </section>
            </div>
        </div>
    )
}

export default MixingBoard;