import React, { useState } from "react";
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
    const [currentCategory, setCurrentCategory] = useState("popular");
    const dispatch = useDispatch();

    const handleClick = (newTopic) => {
        setCurrentCategory(newTopic)
        dispatch(setNewTopic({ newTopic: newTopic }));
    } 

    return (
        <section className='toolbar'>
            <div className="category">
                Home
                <button className={"icon " + (currentCategory === "popular" ? "active" : "")} type="button" onClick={() => handleClick('popular')}>
                    <FaHotjar />
                    <span>Popular</span>
                </button>
            </div>
            <div className="category">
                Topics
                <button className={"icon " + (currentCategory === "sports" ? "active" : "")} type="button" onClick={() => handleClick('sports')}>
                    <MdSportsTennis />
                    <span>Sports</span>
                </button>
                <button className={"icon " + (currentCategory === "gaming" ? "active" : "")} type="button" onClick={() => handleClick('gaming')}>
                    <IoGameController />
                    <span>Gaming</span>
                </button>
                <button className={"icon " + (currentCategory === "business" ? "active" : "")} type="button" onClick={() => handleClick('business')}>
                    <AiOutlineStock />
                    <span>Business</span>
                </button>
                <button className={"icon " + (currentCategory === "crypto" ? "active" : "")} type="button" onClick={() => handleClick('crypto')}>
                    <BiBitcoin />
                    <span>Crypto</span>
                </button>
                <button className={"icon " + (currentCategory === "programming" ? "active" : "")} type="button" onClick={() => handleClick('programming')}>
                    <GiComputing />
                    <span>Programming</span>
                </button>
                <button className={"icon " + (currentCategory === "celebrities" ? "active" : "")} type="button" onClick={() => handleClick('celebrities')}>
                    <AiFillStar />
                    <span>Celebrities</span>
                </button>
                <button className={"icon " + (currentCategory === "anime" ? "active" : "")} type="button" onClick={() => handleClick('anime')}>
                    <GiDango />
                    <span>Anime</span>
                </button>
                <button className={"icon " + (currentCategory === "military" ? "active" : "")} type="button" onClick={() => handleClick('military')}>
                    <MdOutlineMilitaryTech />
                    <span>Military</span>
                </button>
                <button className={"icon " + (currentCategory === "music" ? "active" : "")} type="button" onClick={() => handleClick('music')}>
                    <FaMusic />
                    <span>Music</span>
                </button>
                <button className={"icon " + (currentCategory === "movies" ? "active" : "")} type="button" onClick={() => handleClick('movies')}>
                    <BiCameraMovie />
                    <span>Movies</span>
                </button>
                <button className={"icon " + (currentCategory === "technology" ? "active" : "")} type="button" onClick={() => handleClick('technology')}>
                    <FaRobot />
                    <span>Technology</span>
                </button>
                <button className={"icon " + (currentCategory === "science" ? "active" : "")} type="button" onClick={() => handleClick('science')}>
                    <MdScience />
                    <span>Science</span>
                </button>
            </div>
        </section>
    )
}

export default ToolBar;