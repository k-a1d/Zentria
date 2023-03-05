import { ReactComponent as CalendarSvg } from "../../images/Calendar.svg";
import './Calendar.css'

const Calendar = () => {
    return (
        <div id='calendar'>
            <div className="large-header">March</div>
            <div id='calendar-vector'>
                <CalendarSvg />
            </div>
            
        </div>
    )
}

export default Calendar;
