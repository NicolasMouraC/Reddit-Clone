import React from "react";
import { MdComment } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { HiArrowDown } from 'react-icons/hi';
import { checkIfIsImage, videoElement, imageElement, commentsElement } from "../../Utils.js";

const Post = (props) => {
    const { author, imgSrc, score, comments, title, isVideo, videoUrl, redditCommentsLink } = props;

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
                {isVideo ? videoElement(videoUrl) : checkIfIsImage(imgSrc) ? imageElement(imgSrc) : commentsElement(redditCommentsLink)}
                <hr />
                <div className="post-description">
                    <span>Posted by <span className="post-description-author">{author}</span></span>
                    <span>7 Hours ago</span>
                    <a href={"https://reddit.com" + redditCommentsLink}>
                        <button className="comments-icon" type="button">
                            <MdComment />{comments}
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Post;