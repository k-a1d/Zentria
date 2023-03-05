import React from 'react';
import './PlaylistThumbnail.css'
import PlaylistPic from '../../../images/gratitude_meditation_playlist.jpg';

const PlaylistThumbnail = () => {
    return (
        <div className='playlist-thumnail'>
            <img src={PlaylistPic} alt='Example Song' />
            <div><strong>Gratitude</strong></div>
            <div>Meditate to express your gratitude</div>
        </div>
    );
};

export default PlaylistThumbnail;
