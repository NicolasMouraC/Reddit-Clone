import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotPost from "./HotPost";

const HotPosts = () => {
    return (
        <section className="hot-posts">
                <Row>
                    <Col sm={6} md={3}>
                        <HotPost />
                    </Col>
                    <Col sm={6} md={3}>
                        <HotPost />
                    </Col>
                    <Col sm={6} md={3}>
                        <HotPost />
                    </Col>
                    <Col sm={6} md={3}>
                        <HotPost />
                    </Col>
                </Row>
        </section>
    )
}

export default HotPosts;