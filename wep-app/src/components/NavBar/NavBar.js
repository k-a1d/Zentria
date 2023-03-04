import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NoteIcon from '@mui/icons-material/Note';
import './NavBar.css'

const NavBar = () => {
    return (
        <div id="NavBar">
            <CalendarMonthIcon onClick={() => console.log('hey')}/>
            <SettingsIcon onClick={() => console.log('hey')}/>
            <PersonIcon onClick={() => console.log('hey')}/>
            <NotificationsIcon onClick={() => console.log('hey')}/>
            <NoteIcon onClick={() => console.log('hey')}/>
        </div>
    )
}

export default NavBar;