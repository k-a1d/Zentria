import HeartRateGraph from "../../images/heartrate-graph.png";
import { ReactComponent as Calendar } from "../../images/Calendar.svg";
import './HeartRate.css'

const HeartRate = () => {
    return (
        <div id='heart-rate'>
            <div className="large-header" style={{color: '#292A46'}}>Your Stress Levels</div>
            <div className="larger-header" style={{color: '#8E9BFB'}}>Heart Rate</div>
            <div className='stats-container'>
                <div className='stats'>
                    <img src={HeartRateGraph} alt='Sleep Pattern Graph'/>
                </div>
            </div>
            <div className="larger-header" style={{color: '#292A46'}}>Heart Rate Data</div>
            <div className='stats-container'>
                <div className='stats'>
                    <Calendar />
                </div>
            </div>
        </div>
    )
}

export default HeartRate;