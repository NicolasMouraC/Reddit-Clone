import React from "react";
import  Row from "react-bootstrap/Row";
import Post from "./Post";

const Posts = () => {
    return (
        <section className='posts'>
                <Row>
                    <Post />
                </Row>
                <Row>
                    <Post />
                </Row>
        </section>
    )
}

export default Posts;