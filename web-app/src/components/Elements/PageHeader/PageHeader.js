import React from "react";
import ProfilePic from "../ProfilePic/ProfilePic";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './PageHeader.css'

const PageHeader = ({ title, slideAnimation }) => {
    return (
        <div className="page-header">
            <div style={{justifyContent: "left"}}>
                <div id='back-btn' className="hide">
                    <ArrowBackIcon onClick={() => slideAnimation("#5261F8", "Activity")}/>
                </div>
            </div>
            <div id='page-title' style={{justifyContent: "center"}}>{title}</div>
            <div><ProfilePic /></div>
        </div>
    )
}

export default PageHeader;