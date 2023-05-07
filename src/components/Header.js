import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTopic } from "../slices/TopicsSlice.js";
import { toggleIsLoaded, getPost } from "../slices/PostsSlice.js";
import { fetchData } from '../Utils.js';

const Header = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const topic = useSelector(selectTopic);

    const handleChange = async () => {
        const searchTerm = inputRef.current.value;
        dispatch(toggleIsLoaded);

        if (searchTerm.length === 0) {
            const posts = await fetchData(`https://www.reddit.com/r/${topic}.json`);
            dispatch(getPost({ posts: posts }));
            return;
        }
        
        const posts = await fetchData(`https://www.reddit.com/search.json?q=${searchTerm}`);
        dispatch(getPost({posts: posts}));
    }

    return (
        <header>
            <div className="logo">
                <div className="logo-image"></div>
                <h1 className="title">Redd<span className="minimal">i</span>t <span className="minimal">Minimal</span></h1>
            </div>
            <div className="header-input">
                <input
                    ref={inputRef}
                    placeholder="Search Reddit Minimal"
                    onChange={handleChange} 
                    type='text' 
                    className="searchBar" />
            </div>
      </header>
    )
}

export default Header;