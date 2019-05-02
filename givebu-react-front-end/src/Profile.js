import request from 'request';
import React, { Component,} from 'react';
import cookie from 'react-cookies';

import buLogin_Photo from './images/buLogin.png';


import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table, Jumbotron, Progress} from 'reactstrap';

import heartbeat from './images/heartbeat.gif';

import {Container, Row, Col} from 'react-bootstrap';

import './Profile.css';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: undefined,
            password: undefined,

            loading: true,

            hideLogin: false,
            hideProfile: true,

            incorrectLogin: false,

            modal: false,
            nestedModal:false,
            closeAll: false,

            // TODO: attach this to backend so that button is enabled
            canRedeem: false

        };

        this.handleLogin = this.handleLogin.bind(this);
        this.incorrectLogin = this.incorrectLogin.bind(this);

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

    }

    handleLogin() {
        this.setState({hideLogin: true});
        this.setState({hideProfile: false});
    }


    incorrectLogin() {
        this.setState({incorrectLogin: true});
    }


    componentDidMount() {
        this.setState({loading : false});
    }

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

    redeem() {
        // TODO: redeem should link somewhere?
    }


    loginUser(username, password){

        const options = {
            method: 'GET',
            url: 'http://localhost:3001/login',
            qs: {username, password}
        };

        this.setState({loading : true});
        console.log(this.state.loading);
        console.log("HELLO");

        request(options, function (error, response, body) {

            this.setState({loading : false});

            console.log(this.state.loading);

            if (error) throw new Error(error);
            cookie.save('username', username);
            this.setState({'authentication_status': body});


            if (body === "SUCCESS") {
                this.checkUser(username);
                this.handleLogin();
            }
            else {
                this.incorrectLogin();
                console.log("is the login incorrect? " + this.state.incorrectLogin);
            }

        }.bind(this));

    }


    checkUser(username) {
        const options = {
            method: 'GET',
            url: 'http://localhost:3001/users/'+username
        };

        request(options, function(error, response,body) {
            console.log(body);
            console.log(body.length);
            if (body.length === 2) {
                this.saveUser(username);
            }
        }.bind(this)); 
    }

    saveUser(username) {
        console.log(username);
        const options = {
            method: 'POST',
            url: 'http://localhost:3001/users/'+username
        };

        request(options, function(error, response, body) {
            console.log(body);
        }.bind(this));
    }


    render() {

        const loading = this.state.loading ? {} : {display: 'none'};
        const loginFields = this.state.hideLogin ? {display: 'none'} : {};
        const profilePage = this.state.hideProfile ? {display: 'none'} : {};
        const incorrectLogin = this.state.incorrectLogin ? {} : {display: 'none'};

        return (

            <div align="middle">

                <div style={loading} className="loader">
                    <img src={heartbeat}/>
                </div>

                <div style={loginFields}>

                    <div>

                        <Form onSubmit={this.onSubmit}>

                            <FormGroup>
                                <img className='login-logo' src={buLogin_Photo} />
                            </FormGroup>

                            <div style={incorrectLogin}>
                                <div className="alert alert-danger invalid-login-alert" role="alert">
                                    <strong>ERROR: Invalid username/password combination</strong>
                                </div>
                            </div>

                            <FormGroup>
                                <Row>
                                    <Label className="login-label" for="exampleEmail">BU login name</Label> {' '}
                                </Row>

                                <Row>
                                    <input className="login-input" placeholder="username" onChange={event => this.setState({username: event.target.value})}></input>
                                </Row>

                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Label className="login-label" for="examplePassword">Password</Label> {' '}
                                </Row>

                                <Row>
                                    <input className="login-input" placeholder="password" type= "password" onChange={event => this.setState({password: event.target.value})}></input>
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Button className='login-btn' color='primary' size= 'lg' active onClick={() => this.loginUser(this.state.username, this.state.password)}>Log In</Button>
                            </FormGroup>

                        </Form>
                    </div>
                </div>

                <div style = {profilePage}>
                    <Container>
                        <Row>
                            <h2>
                                Let's get volunteering, {this.state.username}!
                            </h2>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Jumbotron fluid>

                                    <Container>
                                        <Row>
                                            <h4 className="profile-headers">
                                                YOUR VOLUNTEERING EVENTS
                                            </h4>
                                        </Row>
                                        <Table>
                                            <thead>
                                            <tr>
                                                <th>Event</th>
                                                <th>Date</th>
                                                <th>Points</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr>
                                                <td>
                                                    <Button color="danger" onClick={this.toggle}>Aids Action Committee</Button>
                                                    <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
                                                        <ModalHeader toggle={this.toggle}>Aids Action Committee</ModalHeader>

                                                        <ModalBody>
                                                            <p>Since 1993, Check-In volunteers have provided information and referrals, along with a sensitive and caring ear, to AIDS Action Committee’s clients, helping to maintain a strong connection between clients and staff members.
                                                                Volunteers complement our services by helping clients work through problems and encouraging successes over the phone. </p>

                                                            <div align="middle">
                                                                <iframe width="400" height="300" id="gmap_canvas"
                                                                        src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>

                                                        </ModalBody>

                                                        <Button color="primary" onClick={this.toggleNested}>Invite Friends</Button>

                                                        <ModalFooter>
                                                            <Button color="danger" onClick={this.toggle}>SEE YOUR OTHER EVENTS</Button>
                                                        </ModalFooter>
                                                    </Modal>
                                                </td>

                                                <td>5/2/19</td>

                                                <td>100</td>
                                            </tr>

                                            </tbody>
                                        </Table>
                                    </Container>
                                </Jumbotron>

                            </Col>

                            <Col lg={6}>
                                <Jumbotron fluid>

                                    <Container>

                                        <Row>
                                            <h4 className="profile-headers">
                                                YOUR POINTS
                                            </h4>
                                        </Row>

                                        <Row>
                                            <div className="text-center point-header">400 points until free Dunkin!</div>
                                            <Progress animated color="success" value="100" max="500">100</Progress>
                                        </Row>

                                        <Row>
                                            <div className="points-btns">
                                                <Button color="success" className="redeem-btn" onClick={this.redeem()} disabled={!this.state.canRedeem}>REDEEM NOW</Button> {' '}
                                                <Button href="/#/volunteer" color="danger" disabled={this.state.canRedeem}>GET MORE POINTS</Button> {' '}
                                            </div>
                                        </Row>

                                    </Container>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>



        /*{


                        <input placeholder="username" onChange={event => this.setState({username: event.target.value})}></input>
                        <input placeholder="password" onChange={event => this.setState({password: event.target.value})}></input>
                        <button onClick={() => this.loginUser(this.state.username, this.state.password)}>LOGIN</button>
                        {this.state.authentication_status}
        }*/


        );

    }
}

export default Profile;
