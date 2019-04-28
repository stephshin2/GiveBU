import React, { Component,} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Table, Nav, Row, Col, Alert, Jumbotron } from 'reactstrap';
import './Volunteer.css';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
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
   

    componentDidMount() {
        fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then((data) => {
            this.setState({events: data})
            console.log(this.state.events)
        })
        .catch (console.log)
    }

    render() {
        return (
            <div>
            <Jumbotron fluid>
            <Container>
                <Row>
                    VOLUNTEER NOW
                </Row>
            <Table>
                <thead>
                <tr>
                    <th></th>
                    <th>Organization</th>
                    <th>Dates</th>
                    <th>Location</th>
                    <th>Points</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {this.state.events.map((event) => (
                        <tr>
                            <td>
                                <Container>
                                    <Button color="danger" onClick={ this.toggle}>{event.name}</Button>
                                    {/*<Modal isOpen={this.state.modal} fade={false}*/}
                                    {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                        <ModalHeader toggle={this.toggle}>{event.name}</ModalHeader>

                                        <ModalBody>
                                            <p>{event.descr}</p>
                                            <p>{event.dates}</p>
                                            <p>{event.location}</p>
                                            <p>For more information, email {event.contact} at {event.email}.</p>

                                            <div align="middle">
                                                <iframe width="400" height="300" id="gmap_canvas"
                                                        src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>

                                        </ModalBody>

                                        <Button color="primary" onClick={this.toggleNested}>Invite Friends</Button>

                                        <ModalFooter>
                                            <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                            <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Container>

                            </td>

                            <td>{event.dates}</td>
                            <td>{event.location}</td>
                            <td>{event.points}</td>
                        </tr>                           
                    ))}
                </tbody>
            </Table>
            </Container>
            </Jumbotron>
            </div>
        );
    }
}


export default Volunteer;