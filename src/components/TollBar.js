import React from "react";
import { MdSportsTennis } from 'react-icons/md';
import { IoGameController } from 'react-icons/io5';
import { AiOutlineStock } from 'react-icons/ai';
import { IoHome } from 'react-icons/io5';
import { FaHotjar } from 'react-icons/fa';
import { BiBitcoin } from 'react-icons/bi';
import { GiComputing } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';
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
                Feeds
                <button className="icon" type="button">
                    <IoHome />
                    <span>Home</span>
                </button>
                <button className="icon" type="button">
                    <FaHotjar />
                    <span>Popular</span>
                </button>
            </div>
            <div className="category">
                Topics
                <button className="icon" type="button" onClick={() => handleClick('sports')}>
                    <MdSportsTennis />
                    <span>Sports</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('gaming')}>
                    <IoGameController />
                    <span>Gaming</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('business')}>
                    <AiOutlineStock />
                    <span>Business</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('crypto')}>
                    <BiBitcoin />
                    <span>Crypto</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('programming')}>
                    <GiComputing />
                    <span>Programming</span>
                </button>
                <button className="icon" type="button" onClick={() => handleClick('celebrities')}>
                    <AiFillStar />
                    <span>Celebrities</span>
                </button>
            </div>
        </section>
    )
}

export default ToolBar;