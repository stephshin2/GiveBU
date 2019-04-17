import request from 'request';
import React, { Component,} from 'react';
import cookie from 'react-cookies'

import bu_weblogin_Photo from './images/bu_weblogin.png';


import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

import {Row, Col} from 'react-bootstrap';

import './Profile.css';

import buLogo from './images/bu_weblogin.png';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: undefined,
            password: undefined,
        }
    }

    loginUser(username, password){

        var options = {
            method: 'GET',
            url: 'http://localhost:3001/login',
            qs: {username, password}
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            cookie.save('username', username)
            this.setState({'authentication_status': body})


        }.bind(this));

        // this.props.history.push('/');
    }

    render() {
        return (

            <div align="middle">

                <Form>

                    <FormGroup>
                        <img src={bu_weblogin_Photo}/>
                    </FormGroup>

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
                        <Button color='primary' size= 'lg' active onClick={() => this.loginUser(this.state.username, this.state.password)}>Log In</Button>
                        {this.state.authentication_status}
                    </FormGroup>


                </Form>
            </div>

        );
    }
}


export default Profile;
