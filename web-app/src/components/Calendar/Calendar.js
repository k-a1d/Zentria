import CalendarImg from "../../images/Calendar.png";
import './Calendar.css';

const Calendar = () => {
    return (
        <div id='calendar'>
            <div className="large-header">March</div>
            <div id='calendar-vector'>
                <img src={CalendarImg} alt='Sample Calendar' />
            </div>
        </div>
    )
}

export default Calendar;
