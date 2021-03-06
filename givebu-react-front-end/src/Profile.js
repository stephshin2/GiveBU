import request from 'request';
import React, { Component,} from 'react';

import Cookies from 'universal-cookie';

import bu_weblogin_Photo from './images/bu_weblogin.png';

import heartbeat from './images/heartbeat.gif';
import coupon from './images/coupon.png';

import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table, Jumbotron, Progress} from 'reactstrap';

import {Container, Row, Col} from 'react-bootstrap';

import './Profile.css';
import Home from "./Home";

import { cookies } from './App.js';

class Profile extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: cookies.get('username'),
            password: undefined,
            events: [],

            loading: true,

            hideLogin: cookies.get('username') == undefined ? false : true,
            hideProfile: cookies.get('username') == undefined ? true : false,

            incorrectLogin: false,
            loggedOut: false,

            modal: false,
            nestedModal:false,
            closeAll: false,

            canRedeem: false,

            points: 0,
            pointsToRedeem: 0,

            couponRedeemed: false

        };


        this.handleLogin = this.handleLogin.bind(this);
        this.incorrectLogin = this.incorrectLogin.bind(this);

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);

        this.logOut = this.logOut.bind(this);

        this.redeem = this.redeem.bind(this);

        this.userEvents = this.userEvents.bind(this); 
        this.deleteEvents = this.deleteEvents.bind(this);


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

        const options = {
            method: 'GET',
            url: 'http://localhost:3001/points/' + cookies.get('username'),
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log(body, "checking points body");
            var parsedbody = JSON.parse(body);
            var points = parsedbody[0].points;
            this.setState({points: points});
            this.setState({pointsToRedeem: 500-points});

            if (this.state.pointsToRedeem === 0) {
                this.setState({canRedeem: true});
            }


        }.bind(this));
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
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
        this.setState({
            couponRedeemed: true,
            canRedeem: false,
            points: 0
        });
        
    }

    loginUser(username, password){

        const options = {
            method: 'GET',
            url: 'http://localhost:3001/login',
            qs: {username, password}
        };

        this.setState({loading : true});

        request(options, function (error, response, body) {

            this.setState({loading : false});

            if (error) throw new Error(error);
            cookies.set('username', username);

            console.log("cooooookie", cookies.get('username'));

            this.setState({'authentication_status': body});


            if (body === "SUCCESS") {
                this.setState({userId: username});
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


    logOut() {
        cookies.remove('username');
        console.log("post log out cookie", cookies.get('username'));

        this.setState({hideLogin: false});
        this.setState({hideProfile: true});
        this.setState({loggedOut: true})
    }

    userEvents() {

        console.log("fetching event ids for user");

        var request = require("request");

        var options = { method: 'GET',
          url: 'http://localhost:3001/register/'+cookies.get('username'),
          headers: 
           { 'cache-control': 'no-cache',
             Connection: 'keep-alive',
             'accept-encoding': 'gzip, deflate',
             Host: 'localhost:3001',
             'Postman-Token': 'a2d47e23-3832-4b2c-9ade-3c5be9bbde49,c0467497-cd82-46b0-98c2-fd0215f8d9d7',
             'Cache-Control': 'no-cache',
             Accept: '*/*',
             'User-Agent': 'PostmanRuntime/7.11.0' } };

        request(options, function(error, response, body) {
            if (error) throw new Error(error);
            console.log(body, "body")
            console.log(typeof body, "body type")
            var parsedbody = JSON.parse(body)
            console.log(typeof parsedbody, "parsed body type");
            console.log(parsedbody.data); 
            console.log(parsedbody.data.length === 0);
            if (parsedbody.data.length !== 0) {

                console.log(parsedbody.data[0].event_id, "event id");
                var event_id = parsedbody.data[0].event_id;

                this.getEvent(event_id);
            }

            

        }.bind(this));

    }

    getEvent(event_id) {
        var options = { 
            method: 'GET', 
            url: 'http://localhost:3001/volunteer/' + event_id,
        };
        request(options, function(error, response, body) {
            console.log(event_id, "HOPE THIS WORKS"); 
            if (error) throw new Error(error); 
            console.log(body, "body"); 
            var parsedbody = JSON.parse(body)
            this.setState({
                events: parsedbody[0]
            })
            console.log(this.state.events);
        }.bind(this));
    }

    deleteEvents() {
        this.setState({
            events: []
        })
        console.log("deleting events");

        var options = {
            method: 'GET', 
            url: 'http://localhost:3001/volunteer/delete/' + this.state.events.id + '/' + cookies.get('username'),
        }; 
        request(options, function(error, response, body) {
            console.log(body); 
        }) 
    }

    componentWillMount() {
        this.userEvents(); 

    }

    render() {

        const loading = this.state.loading ? {} : {display: 'none'};
        const loginFields = this.state.hideLogin ? {display: 'none'} : {};
        const profilePage = this.state.hideProfile ? {display: 'none'} : {};
        const incorrectLogin = this.state.incorrectLogin ? {} : {display: 'none'};
        const loggedOut = this.state.loggedOut ? {} : {display: 'none'};

        const canRedeem = this.state.canRedeem ? {} : {display: 'none'};
        const cannotRedeem = this.state.canRedeem ? {display: 'none'} : {};
        const couponRedeemed = this.state.couponRedeemed ? {display: 'none'} : {};
        const couponNotRedeemed = this.state.couponRedeemed ? {} : {display: 'none'};

        const noEvents = this.state.events.length === 0 ? {} : {display: 'none'};
        const someEvents = this.state.events.length === 0 ? {display: 'none'} : {}; 

        console.log(noEvents, "NO EVENTS"); 
        console.log(someEvents, "SOME EVENTS")

        console.log(this.state.events);

        return (


            <div align="middle">
                <div style={loading} className="loader">
                    <img src={heartbeat}/>
                </div>

                <div style={loginFields}>

                    <div>

                        <Form onSubmit={this.onSubmit}>

                            <FormGroup>
                                <img className='login-logo' src={bu_weblogin_Photo}/>
                            </FormGroup>

                            <div style={incorrectLogin}>
                                <div className="alert alert-danger invalid-login-alert" role="alert">
                                    <strong>ERROR: Invalid username/password combination</strong>
                                </div>
                            </div>

                            <div style={loggedOut}>
                                <div className="alert alert-success invalid-login-alert" role="alert">
                                    <strong>You have successfully logged out. </strong>
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

                                        <div style={noEvents}>
                                            <h4> You have no events... </h4>
                                           <Button href="/#/volunteer" color="danger">GET EVENTS</Button>
                                        </div>



                                        <div  style={someEvents}>

                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>Event</th>
                                                    {/* <th>Date</th> */}
                                                    <th>Points</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <Button color="danger" onClick={this.toggle}> {this.state.events.name} </Button>
                                                        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle}>
                                                            <ModalHeader toggle={this.toggle}> {this.state.events.name} </ModalHeader>
                                                            <ModalBody>
                                                                <p>
                                                                {this.state.events.descr}
                                                                </p>
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
                                                    {/* <td> {this.state.events.dates} </td> */ }
                                                    <td> {this.state.events.points} </td>
                                                </tr>
                                                </tbody>
                                            </Table>

                                            <div>
                                                <Button onClick={this.deleteEvents}> Delete Events </Button>
                                            </div>

                                        </div>


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
                                            <div style={cannotRedeem} className="text-center point-header">{this.state.pointsToRedeem} points until free Starbucks!</div>
                                            <div style={canRedeem} className="text-center point-header">Get your FREE Starbucks!</div>

                                            <Progress animated color="success" value={this.state.points} max="500">{this.state.points}</Progress>
                                        </Row>
                                        <Row>
                                            <div className="points-btns">
                                                <Button color="success" className="redeem-btn" onClick={this.toggle} disabled={!this.state.canRedeem}>REDEEM NOW</Button> {' '}
                                                <Button href="/#/volunteer" color="danger" disabled={this.state.canRedeem}>GET MORE POINTS</Button> {' '}

                                                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                                    <ModalHeader toggle={this.toggle}> FREE STARBUCKS COUPON </ModalHeader>

                                                    <ModalBody>
                                                        <img className="coupon" src={coupon}></img>
                                                    </ModalBody>

                                                    <ModalFooter>
                                                        <Button style={couponRedeemed} color="success" onClick={this.redeem}> Redeem this prize </Button>
                                                        <Button style={couponNotRedeemed} color="danger" onClick={this.toggle}> Redeemed! </Button>
                                                    </ModalFooter>
                                                </Modal>

                                            </div>
                                        </Row>

                                    </Container>
                                </Jumbotron>
                            </Col>

                        
                            <Col lg={6}>
                                <Jumbotron fluid>
                                    <Container>
                                        <Row>
                                            <h4 className="profile-headers">
                                                 BEFORE YOU GO
                                            </h4>
                                        </Row>
                                        <Row>
                                            <div className="text-center">
                                                <p>All students who volunteer with programs that work with minors and other vulnerable populations must be compliant in two processes within the last three years</p>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="forms-btn">

                                                <a href="https://www.bu.edu/csc/about/cori-forms/" className="btn btn-success" role="button">GO TO FORMS</a>

                                            </div>
                                        </Row>

                                    </Container>
                                </Jumbotron>
                            </Col>


                            <Col lg={6}>
                                <Jumbotron fluid>
                                    <Container>
                                        <Row>
                                            <h4 className="profile-headers">
                                                LEADER BOARD
                                            </h4>
                                        </Row>
                                        <Row>
                                            <div className="text-center">
                                                <p>See the users with the most points! </p>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="leader-btn">

                                                <a href="#" className="btn btn-success" role="button">LEADER BOARD</a>
                                            </div>
                                        </Row>

                                    </Container>
                                </Jumbotron>
                            </Col>
                            


                        </Row>

                        <div className="logout-btn">
                        <Row>
                            <Button color="danger" onClick={this.logOut}>LOG OUT </Button>
                        </Row>
                        </div>
                    </Container>
                </div>
            </div>

        );
    }
}
export default Profile;
