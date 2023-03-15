import React from "react";
import { MdSportsTennis } from 'react-icons/md';
import { IoGameController } from 'react-icons/io5';
import { AiOutlineStock } from 'react-icons/ai';
import { FaHotjar } from 'react-icons/fa';
import { BiBitcoin } from 'react-icons/bi';
import { GiComputing } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
import { GiDango } from 'react-icons/gi';
import { MdOutlineMilitaryTech } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi';
import { MdScience } from 'react-icons/md';
import { FaRobot } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import { setNewTopic } from "../slices/TopicsSlice.js";

const ToolBar = () => {
    const dispatch = useDispatch();

    const handleClick = (newTopic) => {
        dispatch(setNewTopic({ newTopic: newTopic }));
    } 

    return (
        <section className='toolbar'>
            <div className="category">
                Home
                <button className="icon" type="button" onClick={() => handleClick('popular')}>
                    <FaHotjar />
                    <span style={{color : "black"}}>Popular</span>
                </button>
            </div>
            <div className="category">
                Topics
                <button className="icon" type="button" onClick={() => handleClick('sports')}>
                    <MdSportsTennis />
                    <span style={{color : "black"}}>Sports</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('gaming')}>
                    <IoGameController />
                    <span style={{color : "black"}}>Gaming</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('business')}>
                    <AiOutlineStock />
                    <span style={{color : "black"}}>Business</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('crypto')}>
                    <BiBitcoin />
                    <span style={{color : "black"}}>Crypto</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('programming')}>
                    <GiComputing />
                    <span style={{color : "black"}}>Programming</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('celebrities')}>
                    <AiFillStar />
                    <span style={{color : "black"}}>Celebrities</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('anime')}>
                    <GiDango />
                    <span style={{color : "black"}}>Anime</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('military')}>
                    <MdOutlineMilitaryTech />
                    <span style={{color : "black"}}>Military</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('music')}>
                    <FaMusic />
                    <span style={{color : "black"}}>Music</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('movies')}>
                    <BiCameraMovie />
                    <span style={{color : "black"}}>Movies</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('technology')}>
                    <FaRobot />
                    <span style={{color : "black"}}>Technology</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('science')}>
                    <MdScience />
                    <span style={{color : "black"}}>Science</span>
                </button>
            </div>
        </section>
    )
}

export default ToolBar;