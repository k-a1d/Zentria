import React from "react";
import './Meditation.css'
import SampleTimer from "../../images/SampleTimer.png";
import PlaylistThumbnail from "../Elements/PlaylistThumbnail/PlaylistThumbnail";

const Meditation = () => {
    return (
        <div>
            <div id='gratitude' >
                <div className="large-header">Gratitude</div>
                <img src={SampleTimer} alt='Sample Timer'/>
                <div className="larger-header"> Playlist</div>
                <div id='playlist'>
                    <PlaylistThumbnail />
                    <PlaylistThumbnail />
                    <PlaylistThumbnail />
                </div>
            </div>
        </div>
    );
}

export default Meditation;
