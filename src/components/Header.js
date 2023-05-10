import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcSearch } from 'react-icons/fc';
import IconButton from '@mui/material/IconButton';
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

        window.scroll({
            top: 0,
            behavior: 'smooth' 
        });

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
                <div className="header-icon">
                    <IconButton>
                        <FcSearch size='30px'/>
                    </IconButton>
                </div>
                <input
                    ref={inputRef}
                    placeholder="Search Reddit Minimal"
                    onChange={handleChange} 
                    className="header-search" 
                />
            </div>
      </header>
    )
}

export default Header;