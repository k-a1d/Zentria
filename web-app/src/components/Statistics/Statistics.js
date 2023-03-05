import React from "react";
import { ReactComponent as SleepPattern } from "../../images/Sleep-pattern.svg";
import './Statistics.css'

const Statistics = () => {
    return (
        <div id='statistics'>
            <div className="large-header" style={{color: '#8E9BFB'}}>7 days Sleep</div>
            <div className="larger-header">Sleep Activity</div>
            <div id='sleep-pattern-container'>
                <div id='sleep-pattern'>
                    <SleepPattern />
                </div>
            </div>
        </div>
    )
}

export default Statistics;