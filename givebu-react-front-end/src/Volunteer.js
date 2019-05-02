import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Table, Nav, Row, Col, Alert, Jumbotron, Badge} from 'reactstrap';
import './Volunteer.css';
import Profile from './Profile.js';

import { cookies } from './App.js';

class Volunteer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            nestedModal:false,
            closeAll: false,
            events: []
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.register = this.register.bind(this);

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

    register(event) {
        var request = require("request");
        let user = cookies.get('username');
        console.log(user);
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/register/'+event.toString()+'/'+user
        };
        
        request(options, function(error,response,body) {
             console.log(body);
        }.bind(this));
    }


    componentDidMount() {
        var request = require("request");

        var options = { method: 'GET',
            url: 'http://localhost:3001/volunteer',
            headers:
                { json: true,
                    'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'accept-encoding': 'gzip, deflate',
                    Host: 'localhost:3001',
                    'Postman-Token': 'ad7ef7f9-d42c-422f-a78b-874e17baf6d9,42e9af57-bc9d-4b2d-b960-c29848a289d0',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    'User-Agent': 'PostmanRuntime/7.11.0' } };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body,"body")
            console.log(typeof body,"body type")
            var parsedbody = JSON.parse(body)

            this.setState({events: parsedbody.data})
        }.bind(this));
    }



    render() {

        return (
            <div>
                <Jumbotron className="volunteer-page">
                    {/*<Container>*/}
                    <Row>
                        <h4 className="volunteer-header">
                            VOLUNTEER NOW
                        </h4>
                    </Row>

                    <Table>
                        <thead>
                        <tr>
                            <th>Organization</th>
                            <th>Description</th>
                            <th>Register</th>
                            <th>Dates</th>
                            <th>Location</th>
                            <th>Points</th>
                        </tr>
                        </thead>

                        <tbody>
                        {this.state.events.map((event) => (
                            <tr>
                                <td>
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

                                </td>
                                <td>{event.descr}</td>
                                <td><Button color="success" onClick={() => this.register(event.id)}>REGISTER</Button></td>
                                <td>{event.dates}</td>
                                <td>{event.location}</td>
                                <td>{event.points}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    {/*</Container>*/}
                </Jumbotron>
            </div>

        );
    }
}


export default Volunteer;
