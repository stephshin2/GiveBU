import React, { Component,} from 'react';
import logo from './givebu-logo.png';

import {
    Button,
    Row,
    Col,
    Container,
} from 'react-bootstrap';

import './Home.css';


class Home extends Component {
    render() {
        return (

            <div className="home">
                <Container>
                    <Row>
                        <Col>
                            <div className="welcome">
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

                    <Row>
                        <div>
                            <Button href="/#/volunteer" variant="primary" size="lg" block>
                                START NOW!
                            </Button>
                        </div>;
                    </Row>
                </Container>

            </div>

        );
    }
}

export default Home;
