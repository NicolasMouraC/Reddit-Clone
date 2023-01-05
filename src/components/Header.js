import React, { useRef } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsReddit } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { selectTopic } from "../slices/TopicsSlice.js";
import { toggleIsLoaded, getPost } from "../slices/PostsSlice.js";
import { fetchData } from '../Utils.js'

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
            <Container fluid='true' />
                <Row>
                    <Col className="logo" md={4} sm={12} >
                        <BsReddit size='2em' color="blue" />
                        <h1 className="title">Redd<span className="minimal">i</span>t <span className="minimal">Minimal</span></h1>
                    </Col>
                    <Col className="header-input" md={8} sm={12} >
                        <input
                            ref={inputRef}
                            placeholder="Search Reddit Minimal"
                            onChange={handleChange} 
                            type='text' 
                            className="searchBar" />
                    </Col>
                </Row>
      </header>
    )
}

export default Header;