import React, { Component,} from 'react';

import {
    Nav,
    Container,
    Row,
    Col,
    Button,
    Badge
} from 'react-bootstrap';

class Volunteer extends Component {
    render() {
        return (
            <div>
                <h1>
                    This is our volunteering page.
                </h1>

                <h2> Volunteer Now!</h2>

                <Row>
                <Button variant="primary" className="Cause 1">
                    Aids Action Committee
                    <Badge variant="light">Tue/Wed 5-6pm </Badge>
                    <Badge variant="light">75 Amory Street </Badge>
                    <Badge variant="light">100 points </Badge>
                    <span className="sr-only">Volunteering Page</span>
                </Button>;
                </Row>


                <Row>
                <Button variant="primary" className="Cause 2">
                    Boston Center for Refugee Health and Human Rights
                    <Badge variant="light">Mon-Fri 9-5 </Badge>
                    <Badge variant="light">Boston Medical Center </Badge>
                    <Badge variant="light">90 points </Badge>
                    <span className="sr-only">Volunteering Page</span>
                </Button>;
                </Row>

            </div>

        );
    }
}

export default Volunteer;
