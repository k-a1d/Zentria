import React from "react";
// import { ReactComponent as SleepPattern } from "../../images/Sleep-pattern.svg";
import SleepPattern from "../../images/Sleep-Pattern.png";
import HeartRateData from "../../images/Heart-Rate-Data.png";
import './Statistics.css'

const Statistics = () => {
    return (
        <div id='statistics'>
            <div className="large-header" style={{color: '#8E9BFB'}}>7 days Sleep</div>
            <div className="larger-header">Sleep Activity</div>
            <div className='stats-container'>
                <div className='stats'>
                    <img src={SleepPattern} alt='Sleep Pattern Graph'/>
                </div>
            </div>
            <div className="larger-header">Heart Rate Data</div>
            <div className='stats-container'>
                <div className='stats'>
                    <img src={HeartRateData} alt='Heart Rate Data'/>
                </div>
            </div>
        </div>
    )
}

export default Statistics;