import React, { Component,} from 'react';

import {
    Nav,
    Container,
    Row,
    Col,
    Button,
    Badge,
    Card,
    ListGroup,
    Table
} from 'react-bootstrap';

class Volunteer extends Component {
    render() {
        return (

            <div>
                <h1 align="middle">
                    Here is your custom list of Volunteering events:
                </h1>

                <h2 align="middle"> Volunteer Now!</h2>
{/*
                <Row>
                <Button variant="primary" className="Cause 1">
                    Aids Action Committee

                    <Badge variant="light">Tue/Wed 5-6pm </Badge>
                    <span className="sr-only">Volunteering Page</span>
                </Button>

                </Row>

                <Row>
                <Button variant="primary" className="cause2">
                    Boston Center for Refugee Health and Human Rights
                    <Badge variant="light">Mon-Fri 9-5 </Badge>
                    <Badge variant="light">Boston Medical Center </Badge>
                    <Badge variant="light">90 points </Badge>
                    <span className="sr-only">Volunteering Page</span>
                </Button>;
                </Row>

                <Card>
                    <Card.Body>This is some text within a card body.</Card.Body>
                </Card>;

                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>;
                */}

                <container className= {"test"}>
                <Table responsive border-style='dash'>
                    <thead>
                    <tr>
                        <th>Organization</th>
                        <th>Where</th>
                        <th>When</th>
                        <th>Points</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> <a href="https://aac.org/check-in/"  target="_blank">Aids Action Committee</a></td>
                        <td>75 Amory Street</td>
                        <td>Mon-Fri 9-5</td>
                        <td>100</td>

                    </tr>
                    <tr>
                        <td><a href="http://afhboston.org" target="_blank"> Artists for Humanity</a></td>
                        <td>Boston Medical Center, 88 E Newton St</td>
                        <td>Fridays 10-12</td>
                        <td>100</td>

                    </tr>
                    <tr>
                        <td><a href="https://docs.google.com/forms/d/e/1FAIpQLSchig2UkJYYLFErQxQh-teNRUVbIkehFuWnBO8-Q8Byj5boZQ/viewform" target="_blank"> Family Gym</a></td>
                        <td>BCYF Centers across Boston</td>
                        <td>Saturdays 9-12</td>
                        <td>95</td>

                    </tr>
                    </tbody>
                </Table>;

                </container>
            </div>

        );
    }
}

export default Volunteer;
