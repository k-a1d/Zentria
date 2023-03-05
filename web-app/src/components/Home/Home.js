import Meditation from '../Meditation/Meditation';
import Statistics from '../Statistics/Statistics';
import Journal from '../Journal/Journal';
import PageHeader from '../Elements/PageHeader/PageHeader';
import './Home.css'

const Home = ({ sliderContent,  slideAnimation}) => {
    const ActivityPreview = ({ title, desc, time }) => {
        return (
            <div className='activity-preview'>
                <div style ={{textAlign: 'left'}}>{title}</div>
                <div className='details'>
                    <div style={{color: '#5261F8'}}>{desc}</div>
                    <div>{time}</div>
                </div>
            </div>
        );
    };

    const Tile = ({ tileColour, title, desc, textColor, onClickFunc }) => {
        const tileStyle = {
            backgroundColor: tileColour,
            color: textColor,
        };

        return (
            <div style={tileStyle} className="tile" onClick={onClickFunc}>
                <div className='tile-content'>
                    <div style={{fontWeight: 'bold'}}>{title}</div>
                    <div>{desc}</div>
                </div>
            </div>
        );
    };

    return (
        <>
        <div id="home-page">
            <PageHeader title='Activity' slideAnimation={slideAnimation} />
            <div className='large-header' id='recent-activities'>Recent Activities</div>
            <div className='larger-header'>Your Activities</div>
            <div id='recent-activities-container'>
                <ActivityPreview title={"Journal Entry"} desc={"Recent Activities"} time={"Today"}/>
                <ActivityPreview title={"Journal Entry"} desc={"Recent Activities"} time={"Today"}/>
                <ActivityPreview title={"Meditation"} desc={"Recent Activities"} time={"3 days ago"}/>
            </div>
            <div id='shortcuts'>
                <div id='tile-header' className='large-header'>Shortcuts</div>
                <div className='large-header' style={{color: '#ACB6FF'}}>Customise</div>
            </div>
            
            <div id='tiles-container'>
                <Tile tileColour={'#FF7990'} title={'Exercises'} desc={'Pick an activity'} textColor={'#292A46'} />
                <Tile tileColour={'#75DEF1'} title={'Statistics'} desc={'Look at your stats'} textColor={'#292A46'} onClickFunc={() => slideAnimation('#5261F8', 'Sleep', <Statistics />)}/>
                <Tile tileColour={'#F9D479'} title={'Journal'} desc={'Write how you feel'} textColor={'#292A46'} onClickFunc={() => slideAnimation('#5261F8', 'Checkin', <Journal />)} />
                <Tile id='Meditation' tileColour={'#292A46'} title={'Meditation'} desc={'Choose your track'} textColor={'#F6F7FB'} onClickFunc={() => slideAnimation('#292A46' , 'Meditation', <Meditation />)}/>
            </div>
        </div>
        <div id='Slider-Div' className="slider close" >
            {sliderContent}
        </div>
        </>
    );
};

export default Home;