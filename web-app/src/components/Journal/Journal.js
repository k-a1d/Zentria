import './Journal.css'

const Journal = () => {
    return (
        <div id='journal'>
            <div className="large-header">Daily Check-in</div>
            <div className="larger-header">How are you?</div>

            <div id='check-in-options'>
                <button>Lorem Ipsum</button>
                <button>Lorem Ipsum</button>
                <button>Lorem Ipsum</button>
                <button>Lorem Ipsum</button>
            </div>

            <div>
                <div className='large-header'>Journal</div>
                <p><strong>Tell Zentria how you're feeling today</strong></p>
                <textarea >Write about what you current situation</textarea>
                <button id='add-entry-btn'>Add Entry</button>
            </div>
        </div>
    )
}

export default Journal;