import './Journal.css'

const Journal = () => {
    return (
        <div id='journal'>
            <div className="large-header">Daily Check-in</div>
            <div className="larger-header" style={{color: '#5261F8'}}>How are you?</div>
            <div className='grid-container'>
                <div id='check-in-options'>
                    <button>Very Stressed</button>
                    <button>Stressed</button>
                    <button>Neutral</button>
                    <button>Not Stressed</button>
                </div>
            </div>
            <div id='add-journal'>
                <div className='large-header'>Journal</div>
                <p><strong>Tell Zentria how you're feeling today</strong></p>
                <textarea rows="10" cols="40">Write about your current situation</textarea>
                <button id='add-entry-btn'>Add Entry</button>
            </div>
        </div>
    )
}

export default Journal;