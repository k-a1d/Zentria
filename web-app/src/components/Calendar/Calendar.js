import CalendarImg from "../../images/Calendar.png";
import MoodRingImg from "../../images/Mood-Ring.png";
import './Calendar.css';

const Calendar = () => {
    return (
        <div id='calendar'>
            <div className="large-header">March</div>
            <div className="images">
                <img src={CalendarImg} alt='Sample Calendar' />
            </div>
            <div className="images">
                <img src={MoodRingImg} alt='Sample Calendar' />
            </div>
        </div>
    )
}

export default Calendar;
