import React, { Component,} from 'react';
import logo from './images/givebu-logo.png';

import {
    Button,
    Row,
    Col,
    Container,
    Image
} from 'react-bootstrap';

import './Home.css';

import mariaPhoto from './images/maria-profile-photo.jpeg';
import aliPhoto from './images/ali-profile-photo.jpeg';
import gabyPhoto from './images/gaby-profile-photo.jpeg';
import stephPhoto from './images/steph-profile-photo.jpg';


class Home extends Component {
    render() {
        return (
            <div className="Home">

                <div className="welcome-div">
                    <Container>
                        <Row>
                            <Col>
                                <div className="welcome-message">
                                    Welcome to GiveBU!
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="description">
                                    We are a group of BU students working to help connect BU students to volunteering opportunities in the Boston community.
                                </div>
                            </Col>
                        </Row>

                        <div className="start-button">
                            <Row>
                                <div>
                                    <Button href="/#/volunteer" variant="primary" size="lg" block>
                                        START NOW!
                                    </Button>
                                </div>
                            </Row>
                        </div>
                    </Container>
                </div>


                <div className="what-we-do">
                    <Container>
                        <Row>
                            <Col>
                                <div className="header">
                                    <h2 align="middle">About Us</h2>
                                    <p align="middle">We found that a common problem amongst college students who are actively seeking ways to give back to their community is miscommunication.
                                        Students who are looking to get involved are repeatedly discouraged by the difficulty of finding volunteer opportunities and the fear of hefty time commitments.
                                        This is where GiveBU comes in. We are a group of Boston University students working to connect our peers to volunteer opportunities on and around campus.
                                        Not only does GiveBU make it easy to find opportunities based on your interests and availability but we make this previously tedious task, exciting.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>

                <div className="who-we-are">
                    <Container>
                        <Row>
                            <Col>
                                <div className="header">
                                   <h2 align='middle'>Meet the Team</h2>
                                </div>
                            </Col>
                        </Row>

                        <div className="bios">

                            <Row>
                                <Col lg={3}>
                                    <Row>
                                        Maria Castellaneta
                                    </Row>
                                    <Row>
                                        <Image src={mariaPhoto} thumbnail/>
                                    </Row>
                                    <Row>
                                        Graphic Designer/Front End Engineer
                                    </Row>
                                </Col>
                                <Col lg={3}>
                                    <Row>
                                        Ali Kinay
                                    </Row>
                                    <Row>
                                        <Image src={aliPhoto} thumbnail />
                                    </Row>
                                    <Row>
                                        Full Stack Engineer
                                    </Row>
                                </Col>
                                <Col lg={3}>
                                    <Row>
                                        Gaby Rasson
                                    </Row>
                                    <Row>
                                        <Image src={gabyPhoto} thumbnail />
                                    </Row>
                                    <Row>
                                        Back End Engineer
                                    </Row>
                                </Col>

                                <Col lg={3}>
                                    <Row>
                                        Stephanie Shin
                                    </Row>
                                    <Row>
                                        <Image src={stephPhoto} thumbnail />
                                    </Row>
                                    <Row>
                                        Full Stack Engineer
                                    </Row>
                                </Col>

                             </Row>
                        </div>
                    </Container>
                </div>
            <footer align="middle">Copyrighted</footer>
            </div>


        );
    }
}

export default Home;
