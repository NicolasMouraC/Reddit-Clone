import React from "react";
import { MdComment } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { HiArrowDown } from 'react-icons/hi';

const videoElement = (videoUrl) => {
    return (
        <video width="320" height="240" controls >
            <source src={videoUrl} type="video/mp4" />
        </video>
    )
}

const Post = (props) => {
    const { author, imgSrc, score, comments, title, isVideo, videoUrl, redditCommentsLink } = props;
    console.log(videoUrl)
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
                {isVideo ? videoElement(videoUrl) : (imgSrc.match(/\.(jpeg|jpg|gif|png)$/) != null) ? <img src={imgSrc} alt={imgSrc}  /> : null}
                <hr />
                <div className="post-description">
                    <span>Posted by <span className="post-description-author">{author}</span></span>
                    <span>7 Hours ago</span>
                    <button className="icon" type="button"><a href={"https://reddit.com" + redditCommentsLink}><MdComment />{comments}</a></button>
                </div>
            </div>
            
        </div>
    )
}

export default Post;