import React from "react";
import './Meditation.css'
import SampleTimer from "../../images/SampleTimer.png";

const Meditation = () => {
    return (
        <div>
            <div id='gratitude' >
                <div className="large-header">Gratitude</div>
                <img src={SampleTimer} alt='Sample Timer'/>
                <div className="large-header"> Playlist</div>
            </div>
        </div>
    );
}

export default Meditation;
