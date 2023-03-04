import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NoteIcon from '@mui/icons-material/Note';
import { slideAnimation } from "../Home/Home";
import './NavBar.css'

const NavBar = () => {
    return (
        <div id="NavBar">
            <CalendarMonthIcon onClick={() => console.log('hey')}/>
            <SettingsIcon onClick={() => console.log('hey')}/>
            <ShowChartIcon onClick={() => slideAnimation('#5261F8', 'Statistics')}/>
            <NotificationsIcon onClick={() => console.log('hey')}/>
            <NoteIcon onClick={() => console.log('hey')}/>
        </div>
    )
}

export default NavBar;