import React from "react";
import { checkIfIsImage } from "../../Utils.js";

const NewtPost = (props) => {
    const { author, imgSrc, title, link } = props;

    return (
        <a href={"https://reddit.com" + link}>
            <div className='new-post'>
                <div className="new-post-image">
                    {checkIfIsImage(imgSrc) ? <img  src={imgSrc} alt={imgSrc}/> : <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2016/png/iconmonstr-reddit-4.png&r=8&g=65&b=255" alt={imgSrc}/>}
                    <div className="new-post-text">
                        <h2 className="new-post-title">{author}</h2>
                        <h3 className="new-post-description">{title}</h3>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default NewtPost;