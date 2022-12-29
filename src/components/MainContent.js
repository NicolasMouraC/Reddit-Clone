import React from "react";
import HotPosts from "./main-container/HotPosts.js";
import Posts from "./main-container/Posts.js";
import LateralInfo from "./main-container/LateralInfo.js";

const MainContent = () => {
    return (
        <section className='main-container'>
            <HotPosts />
            <Posts />
            <LateralInfo />
        </section>
    )
}

export default MainContent;