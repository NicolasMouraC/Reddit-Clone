import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotPost from "./HotPost";
import { useSelector, useDispatch } from "react-redux";
import { selectNewPosts } from "../../api/HotPostsSlice.js";
import { selectIsNewPostsLoaded } from "../../api/HotPostsSlice.js";
import { getNewPosts } from "../../api/HotPostsSlice.js";
import { checkIfIsImage, fetchData } from "../../Utils.js";

const HotPosts = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsNewPostsLoaded);
    const newPosts = useSelector(selectNewPosts);

    useState(async () => {
        const newPosts = await fetchData("https://www.reddit.com/r/popular/new.json");

        const onlyWithImages = newPosts.filter(el => {
            return checkIfIsImage(el.data.url);
        })
        
        const newPostsSlice = onlyWithImages.slice(0, 4);
        dispatch(getNewPosts({ newPosts: newPostsSlice }))
    })

    return (
        <section className="hot-posts">
            <Row>
                {isLoaded ? newPosts.map(el => {
                    return (
                        <Col sm={6} md={3}>
                            <HotPost
                                    title={el.data.title}
                                    imgSrc={el.data.url}
                                    author={el.data.author}
                                    />
                        </Col>)}) 
                    : null
                }
            </Row>
        </section>
    )
}

export default HotPosts;