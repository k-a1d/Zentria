import React from "react";
// import { ReactComponent as SleepPattern } from "../../images/Sleep-pattern.svg";
import SleepPattern from "../../images/Sleep-Pattern.png";
import MockSleep from "../../images/mock-sleep.png";
// import HeartRateData from "../../images/Heart-Rate-Data.png";
import './Statistics.css'

const Statistics = () => {
    const ActivityPreview = ({ desc }) => {
        return (
            <div className='activity-preview'>
                <div style={{color: '#F6F7FB'}}>{desc}</div>
                <div className="preview-image"><img src={MockSleep} alt='mocks sleep data' /></div>
            </div>
        );
    };

    return (
        <div id='statistics'>
            <div className="large-header" style={{color: '#8E9BFB'}}>7 days Sleep</div>
            <div className="larger-header">Sleep Activity</div>
            <div className='stats-container'>
                <div className='stats'>
                    <img src={SleepPattern} alt='Sleep Pattern Graph'/>
                </div>
            </div>
            <div className="larger-header">Previous Sleep Data</div>
            <div id='previous-sleep-data-container'>
            <div id='previous-sleep-data'>
                <ActivityPreview desc={'Week'}/>
                <ActivityPreview desc={'Month'}/>
                <ActivityPreview desc={'Year'}/>
            </div>
            </div>

        </div>

    )
}

export default Statistics;