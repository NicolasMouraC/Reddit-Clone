import React from "react";
import { MdSportsTennis } from 'react-icons/md';
import { IoGameController } from 'react-icons/io5';
import { AiOutlineStock } from 'react-icons/ai';
import { IoHome } from 'react-icons/io5';
import { FaHotjar } from 'react-icons/fa';
import { BiBitcoin } from 'react-icons/bi';
import { GiComputing } from 'react-icons/gi';
import { AiFillStar } from 'react-icons/ai';

const ToolBar = () => {
    return (
        <section className='toolbar'>
            <div className="category">
                Feeds
                <button className="icon" type="button">
                    <IoHome />
                    <span>Principal</span>
                </button>
                <button className="icon" type="button">
                    <FaHotjar />
                    <span>Hot</span>
                </button>
            </div>
            <div className="category">
                Topics
                <button className="icon" type="button">
                    <MdSportsTennis />
                    <span>Sports</span>
                </button>
                <button className="icon" type="button">
                    <IoGameController />
                    <span>Gaming</span>
                </button>
                <button className="icon" type="button">
                    <AiOutlineStock />
                    <span>Business</span>
                </button>
                <button className="icon" type="button">
                    <BiBitcoin />
                    <span>Crypto</span>
                </button>
                <button className="icon" type="button">
                    <GiComputing />
                    <span>Programming</span>
                </button>
                <button className="icon" type="button">
                    <AiFillStar />
                    <span>Celebrities</span>
                </button>
            </div>
        </section>
    )
}

export default ToolBar;