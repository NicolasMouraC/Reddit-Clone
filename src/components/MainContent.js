import React from "react";
import HotPosts from "./main-container/HotPosts.js";
import Posts from "./main-container/Posts.js";

const MainContent = () => {
    return (
        <section className='main-container'>
            <HotPosts />

            <Posts />
            
            <section className='bar'>
            bar
            </section>
        </section>
    )
}

export default MainContent;