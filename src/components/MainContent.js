import React from "react";
import NewPosts from "./main-container/NewPosts.js";
import Posts from "./main-container/Posts.js";
import LateralInfo from "./main-container/LateralInfo.js";

const MainContent = () => {
    return (
        <section className='main-container'>
            <NewPosts />
            <Posts />
            <LateralInfo />
        </section>
    )
}

export default MainContent;