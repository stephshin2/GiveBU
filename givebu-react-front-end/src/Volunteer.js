import React, { Component,} from 'react';
//import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Table, Nav, Row, Col } from 'reactstrap';
import './Volunteer.css';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal:false,
            closeAll: false,
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);


    };

    toggle() {
        this.setState({modal: !this.state.modal});
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }


    render() {
        return (

            <div className="content">
            <Container>
                <Button color="danger" onClick={ this.toggle}>Contact Us</Button>
                {/*<Modal isOpen={this.state.modal} fade={false}*/}
                       {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                        <ModalHeader toggle={this.toggle}>CAUSE DESCRIPTION</ModalHeader>

                        <ModalBody>
                            THIS EVENT DOES THIS AND THAT ON THIS DAY AND LOCATION.

                            <iframe width="400" height="300" id="gmap_canvas"
                             src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                             frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>

                        </ModalBody>

                        <Button color="primary" onClick={this.toggleNested}>Invite Friends</Button>

                        <ModalFooter>
                            <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                        </ModalFooter>
                </Modal>
            </Container>


            <Container>
            <Table>
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
            </Table>

            </Container>

            </div>

        );
    }
}

export default Volunteer;
