import React from "react";
import { MdComment } from 'react-icons/md';
import { HiArrowUp, HiArrowDown } from 'react-icons/hi';
import { FcReddit } from 'react-icons/fc'
import { checkIfIsImage, videoElement, imageElement, commentsElement, utcToDate } from "../../Utils.js";

const Post = (props) => {
    const { author, imgSrc, score, comments, title, isVideo, videoUrl, redditCommentsLink, communityName, utc } = props;

    return (
        <article className="post">
            <div className="post-vote-arrows">
                <button type="button" className="post-vote-arrow-button" aria-label="Up Button"><HiArrowUp size='1.2rem' /></button>
                <span className="post-vote-arrows-votes">{score}</span>
                <button type="button" className="post-vote-arrow-button" aria-label="Down Button"><HiArrowDown size='1.2rem' /></button>
            </div>

            <a href={"https://reddit.com/" + communityName}><button className="post-community"><FcReddit/> {communityName}</button></a>
            <div className='post-title'>
                {title}
            </div>

            <div className="post-content">
                <div className="post-content-info">
                    {isVideo ? videoElement(videoUrl) : checkIfIsImage(imgSrc) ? imageElement(imgSrc) : commentsElement(redditCommentsLink)}
                </div>
                <hr />
                <div className="post-description">
                    <span>Posted by <span className="post-description-author">{author}</span></span>
                    <span>{utcToDate(utc)} Hours ago</span>
                    <a href={"https://reddit.com" + redditCommentsLink}>
                        <button className="comments-icon" type="button">
                            <MdComment color="#47BEE6"/>{comments}
                        </button>
                    </a>
                </div>
            </div>
            
        </article>
    )
}

export default Post;