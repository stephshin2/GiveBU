import request from 'request';
import React, { Component,} from 'react';
import cookie from 'react-cookies'

import buLogin_Photo from './images/buLogin.png';

import {Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Profile.css';

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: undefined,
            password: undefined
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
    }

    render() {
        return (

            <div className= "myDiv">
             <Form>
                <FormGroup>
                    <img src={buLogin_Photo}/>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">BU login name</Label> {' '}
                    <input placeholder="username" onChange={event => this.setState({username: event.target.value})}></input>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Password</Label> {' '}
                    <input placeholder="password" type= "password" onChange={event => this.setState({password: event.target.value})}></input>
                </FormGroup>

                <FormGroup>
                    <Button color= 'primary' size= 'lg' active onClick={() => this.loginUser(this.state.username, this.state.password)}>Log In</Button>
                    {this.state.authentication_status}
                </FormGroup>
            </Form>

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
