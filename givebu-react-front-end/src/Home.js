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
import stephPhoto from './images/steph_profile.jpg';


class Home extends Component {
    render() {
        return (
            <div className="Home">

                <div className="welcome-div">
                    <div className="layer">
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
                                    Find ways to give back to your community and collect rewards!
                                </div>
                            </Col>
                        </Row>

                        <div className="startButton">
                            <Row>
                                <div>
                                    <Button href="/#/volunteer" variant="primary" size="lg">
                                        START NOW!
                                    </Button>
                                </div>
                            </Row>
                        </div>
                    </Container>
                    </div>
                </div>


                <div className="what-we-do">
                    <Container>
                        <Row>
                            <Col>
                                <div className="header">
                                    <h2 align="middle">About Us</h2>
                                </div>
                                    <div className="what-we-do-content">
                                    <p> We found that a common problem amongst college students who are actively seeking ways to give back to their community is miscommunication.
                                        Students who are looking to get involved are repeatedly discouraged by the difficulty of finding volunteer opportunities and the fear of hefty time commitments.</p>
                                    <p> This is where GiveBU comes in. We are a group of Boston University students working to connect our peers to volunteer opportunities on and around campus.
                                        Not only does GiveBU make it easy to find opportunities based on your interests and availability but we make this previously tedious task, exciting. </p>
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
                            <div className="person">
                                <div className="picture">
                                    <Image src={mariaPhoto} thumbnail/>
                                </div>
                                <div className="name">
                                    Maria Castellaneta
                                </div>
                            </div>
                            <div className="person">
                                <div className="picture">
                                    <Image src={aliPhoto} thumbnail />
                                </div>
                                <div className="name">
                                    Ali Kinay
                                </div>
                            </div>
                            <div className="person">
                            <div className= "picture">
                                <Image src={gabyPhoto} thumbnail />
                            </div>
                                <div className="name">
                                    Gaby Rasson
                                </div>
                            </div>
                                <div className="person">
                                    <div className="picture">
                                        <Image src={stephPhoto} thumbnail />
                                    </div>
                                    <div className="name">
                                        Stephanie Shin
                                    </div>
                                </div>
                            </div>
                    </Container>
                        </div>



                <footer align="middle">Copyrighted</footer>
            </div>










        );
    }
}

export default Home;
