import React from "react";
import { MdComment } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { HiArrowDown } from 'react-icons/hi';

const Post = (props) => {
    const { author, imgSrc, score, comments, title, imgWidth, imgHeight } = props;
    return (
        <div className="post">
            <div className="post-vote-arrows">
                <button type="button" className="post-vote-arrow-button"><HiArrowUp size='1.2rem' /></button>
                <span className="post-vote-arrows-votes">{score}</span>
                <button type="button" className="post-vote-arrow-button"><HiArrowDown size='1.2rem' /></button>
            </div>
            <div className='post-title'>
            {title}
            </div>
            <div className="post-img">
                {imgSrc !== 'self' ? <img src={imgSrc} alt={imgSrc} /> : null}
                <hr />
                <div className="post-description">
                    <span>Posted by <span className="post-description-author">{author}</span></span>
                    <span>7 Hours ago</span>
                    <button className="icon" type="button"><MdComment />{comments}</button>
                </div>
            </div>
            
        </div>
    )
}

export default Post;