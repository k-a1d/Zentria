import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import NoteIcon from '@mui/icons-material/Note';
import Statistics from "../Statistics/Statistics";
import Calendar from "../Calendar/Calendar";
import Journal from "../Journal/Journal";
import HeartRate from "../HeartRate/HeartRate";
import './NavBar.css'

const NavBar = ({ slideAnimation }) => {
    return ( 
        <div id="NavBar">
            <CalendarMonthIcon onClick={() => slideAnimation('#5261F8', 'Journal', <Calendar />)}/>
            <SettingsIcon onClick={() => console.log('hey')}/>
            <ShowChartIcon onClick={() => slideAnimation('#5261F8', 'Sleep', <Statistics />)}/>
            <MonitorHeartIcon onClick={() => slideAnimation('#5261F8', 'Heart Rate Activity', <HeartRate />)}/>
            <NoteIcon onClick={() => slideAnimation('#5261F8', 'Checkin', <Journal />)}/>
        </div>
    )
}

export default NavBar;