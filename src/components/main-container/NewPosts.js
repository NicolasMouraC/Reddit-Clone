import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewPost from "./NewPost.js";
import { useSelector, useDispatch } from "react-redux";
import { selectNewPosts } from "../../api/NewPostsSlice.js";
import { selectIsNewPostsLoaded } from "../../api/NewPostsSlice.js";
import { getNewPosts } from "../../api/NewPostsSlice.js";
import { checkIfIsImage, fetchData } from "../../Utils.js";

const NewPosts = () => {
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
        <section className="new-posts">
            <span className="posts-header">New posts</span>
                <Row>
                    {isLoaded ? newPosts.map(el => {
                        return (
                            <Col sm={6} md={3}>
                                <NewPost
                                        title={el.data.title}
                                        imgSrc={el.data.url}
                                        author={el.data.author}
                                        link={el.data.permalink}
                                        />
                            </Col>)}) 
                        : null
                    }
                </Row>
        </section>
    )
}

export default NewPosts;