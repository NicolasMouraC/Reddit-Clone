import React from "react";
import { MdComment } from 'react-icons/md';
import { HiArrowUp } from 'react-icons/hi';
import { HiArrowDown } from 'react-icons/hi';

const Post = () => {
    return (
        <div className="post">
            <div className="post-vote-arrows">
                <button type="button" className="post-vote-arrow-button"><HiArrowUp size='1.2rem' /></button>
                <span className="post-vote-arrows-votes">3.2k</span>
                <button type="button" className="post-vote-arrow-button"><HiArrowDown size='1.2rem' /></button>
            </div>
            <div className='post-title'>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </div>
            <div className="post-img">
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='Placeholder' />
                <hr />
                <div className="post-description">
                    <span>Posted by <span className="post-description-author">Author</span></span>
                    <span>7 Hours ago</span>
                    <button className="post-description-comments-button" type="button"><MdComment />725</button>
                </div>
            </div>
            
        </div>
    )
}

export default Post;