import React from "react";

const HotPost = () => {
    return (
        <div className='hot-post'>
            <div className="hot-post-image">
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="Placeholder"/>
                <div className="hot-post-text">
                    <h2 className="hot-post-title">Title</h2>
                    <h3 className="hot-post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                </div>
            </div>
        </div>
    )
}

export default HotPost