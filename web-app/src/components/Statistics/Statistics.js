import React from "react";
import { ReactComponent as SleepPattern } from "../../images/Sleep-pattern.svg";
import './Statistics.css'

const Statistics = () => {
    return (
        <div id='statistics'>
            <div className="large-header">7 days Sleep</div>
            <div className="larger-header">Sleep Activity</div>
            <div id='sleep-pattern-container'>
                <SleepPattern />
            </div>
            
        </div>
    )
}

export default Statistics;