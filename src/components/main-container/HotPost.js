import React from "react";
import { checkIfIsImage } from "../../Utils.js";

const HotPost = (props) => {
    const { author, imgSrc, title } = props;

    return (
        <div className='hot-post'>
            <div className="hot-post-image">
                {checkIfIsImage(imgSrc) ? <img  src={imgSrc} alt={imgSrc}/> : <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-reddit-4.png&r=8&g=65&b=255" alt="image"/>}
                <div className="hot-post-text">
                    <h2 className="hot-post-title">{author}</h2>
                    <h3 className="hot-post-description">{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default HotPost