import React from "react";
import './Meditation.css'
import SampleTimer from "../../images/SampleTimer.png";
import PageHeader from "../Elements/PageHeader/PageHeader";

const Meditation = () => {
    return (
        <div>
            <div id='gratitude'>
                <div>Gratitude</div>
                <img src={SampleTimer} />
                <div>Playlist</div>
            </div>
        </div>
    );
}

export default Meditation;
