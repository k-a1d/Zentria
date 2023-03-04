import React from 'react';
import './Home.css'

const Home = () => {
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
    }

    const Tile = ({ tileColour, title, desc, textColor }) => {
        const tileStyle = {
            backgroundColor: tileColour,
            color: textColor,
        }

        return (
            <div style={tileStyle} className="tile">
                <div className='tile-content'>
                    <div style={{fontWeight: 'bold'}}>{title}</div>
                    <div>{desc}</div>
                </div>
            </div>
        )
    }

    return (
        <div id="home-page">
            <div style={{textAlign: 'center'}}>Activity</div>
            <div>
                <div id='recent-activities'>Recent Activities</div>
                <p>Lorem</p>
                <div id='recent-activities-container'>
                    <ActivityPreview title={"Lorem"} desc={"Lorem Ipsum"} time={"Today"}/>
                    <ActivityPreview title={"Lorem"} desc={"Lorem Ipsum"} time={"Today"}/>
                    <ActivityPreview title={"Lorem"} desc={"Lorem Ipsum"} time={"3 days ago"}/>
                </div>
            </div>
            <div id='tile-header'>Lorem Ipsum</div>
            <div id='tiles-container'>
                <Tile tileColour={'#FF7990'} title={'Exercises'} desc={'Pick an activity'} textColor={'#292A46'}/>
                <Tile tileColour={'#75DEF1'} title={'Statistics'} desc={'Look at your stats'} textColor={'#292A46'}/>
                <Tile tileColour={'#F9D479'} title={'Journal'} desc={'Write how you feel'} textColor={'#292A46'}/>
                <Tile tileColour={'#292A46'} title={'Meditation'} desc={'Choose your track'} textColor={'#F6F7FB'}/>
            </div>
        </div>
    )
}

export default Home;