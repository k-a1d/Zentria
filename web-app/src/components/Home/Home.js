import React from 'react';
import ProfilePic from '../Elements/ProfilePic/ProfilePic';
import Meditation from '../Meditation/Meditation';
// import SampleTimer from "../../images/SampleTimer.jpg";

import PageHeader from '../Elements/PageHeader/PageHeader';
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

    const slideAnimation = () => {
        document.getElementById('home-page').style.backgroundColor = '#292A46';
        document.querySelector('.slider').classList.toggle('close');
    };

    return (
        <>
        <div id="home-page">
            <PageHeader title='Activity' />
            <div></div>
            <div>
                <div id='recent-activities'>Recent Activities</div>
                <p>Your Activities</p>
                <div id='recent-activities-container'>
                    <ActivityPreview title={"Journal Entry"} desc={"Recent Activities"} time={"Today"}/>
                    <ActivityPreview title={"Journal Entry"} desc={"Recent Activities"} time={"Today"}/>
                    <ActivityPreview title={"Meditation"} desc={"Recent Activities"} time={"3 days ago"}/>
                </div>
            </div>
            <div id='tile-header'>Shortcuts</div>
            <div id='tiles-container'>
                <Tile tileColour={'#FF7990'} title={'Exercises'} desc={'Pick an activity'} textColor={'#292A46'} />
                <Tile tileColour={'#75DEF1'} title={'Statistics'} desc={'Look at your stats'} textColor={'#292A46'} />
                <Tile tileColour={'#F9D479'} title={'Journal'} desc={'Write how you feel'} textColor={'#292A46'} />
                <Tile id='Meditation' tileColour={'#292A46'} title={'Meditation'} desc={'Choose your track'} textColor={'#F6F7FB'} onClickFunc={slideAnimation}/>
            </div>
        </div>
        <div id='Meditation-Div' className="slider close" onClick={slideAnimation}>
            <Meditation />
        </div>
        </>
    );
};

export default Home;