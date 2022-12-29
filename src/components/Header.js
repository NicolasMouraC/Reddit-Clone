import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsReddit } from 'react-icons/bs'

const Header = () => {
    return (
        <header>
            <Container fluid='true' />
                <Row>
                    <Col className="logo" md={4} sm={12} >
                        <BsReddit size='2em' color="blue" />
                        <h1 className="title">Redd<span className="minimal">i</span>t <span className="minimal">Minimal</span></h1>
                    </Col>
                    <Col className="header-input" md={8} sm={12} >
                        <input placeholder="Search Reddit Minimal" type='text' className="searchBar" />
                    </Col>
                </Row>
      </header>
    )
}

export default Header;