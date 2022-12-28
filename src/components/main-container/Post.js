import React from "react";

const Post = () => {
    return (
        <div className="post">
            <div className='post-title'>
                Title
            </div>
            <div className="post-img">
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt='Placeholder' />
            </div>
            <hr />
            <div className="post-description">
                <span>Description</span>
                <span>Description</span>
                <span>Description</span>
            </div>
        </div>
    )
}

export default Post;