import request from 'request';
import React, { Component,} from 'react';
import cookie from 'react-cookies'


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

            <div>
                <input placeholder="username" onChange={event => this.setState({username: event.target.value})}></input>
                <input placeholder="password" onChange={event => this.setState({password: event.target.value})}></input>
                <button onClick={() => this.loginUser(this.state.username, this.state.password)}>LOGIN BITCHH</button>
                {this.state.authentication_status}
            </div>
        );
    }
}

export default Profile;
