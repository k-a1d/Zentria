import React from "react";
import SampleProfilePic from "../../../images/SampleProfilePic.jpg";
import './ProfilePic.css'

const ProfilePic = () => {
    return (
        <div id='profile-pic-container'>
            <img src={SampleProfilePic} alt="SampleProfilePic" />
        </div>
    )
}

export default ProfilePic;