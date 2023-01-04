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
import { setNewTopic } from "../api/TopicsSlice.js";

const ToolBar = () => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        console.log(e.target)

        //useDispatch(setNewTopic({ newTopic: value }))
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
                <button className="icon" type="button" value="sports" onClick={handleClick}>
                    <MdSportsTennis />
                    <span>Sports</span>
                </button>
                <button className="icon" type="button" value="gaming" onClick={handleClick}>
                    <IoGameController />
                    <span>Gaming</span>
                </button>
                <button className="icon" type="button" value="business" onClick={handleClick}>
                    <AiOutlineStock />
                    <span>Business</span>
                </button>
                <button className="icon" type="button" value="crypto" onClick={handleClick}>
                    <BiBitcoin />
                    <span>Crypto</span>
                </button>
                <button className="icon" type="button" value="programming" onClick={handleClick}>
                    <GiComputing />
                    <span>Programming</span>
                </button>
                <button className="icon" type="button" value="celebrities" onClick={handleClick}>
                    <AiFillStar />
                    <span>Celebrities</span>
                </button>
            </div>
        </section>
    )
}

export default ToolBar;