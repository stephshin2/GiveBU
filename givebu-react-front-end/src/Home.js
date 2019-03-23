import React, { Component,} from 'react';
import logo from './givebu-logo.png';

import {
    Nav,
    Row,
    Col,
    Container
} from 'react-bootstrap';

import './Home.css';

class Home extends Component {
    render() {
        return (

            <div>

               <Container>
                    <Row>
                        <Col className="homepage">
                            Welcome to GiveBU!
                        </Col>
                        <Col>
                            Column 2!
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            Currently in construction... Please be patient :)
                        </Col>
                    </Row>

                </Container>

            </div>

        );
    }
}

export default Home;
