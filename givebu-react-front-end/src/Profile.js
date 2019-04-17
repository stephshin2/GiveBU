import request from 'request';
import React, { Component,} from 'react';
import cookie from 'react-cookies'


import {
    Image,
    Row,
    Col,
    Container
} from 'react-bootstrap';

import buLogo from './images/bu_weblogin.png';

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

            <div className="login">

                <Container>
                    <Row>
                        <Col>
                            <Image src={buLogo}/>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <input className="username" placeholder="username" onChange={event => this.setState({username: event.target.value})}></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <input placeholder="password" onChange={event => this.setState({password: event.target.value})}></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button onClick={() => this.loginUser(this.state.username, this.state.password)}>LOGIN</button>
                        </Col>
                    </Row>

                    {this.state.authentication_status}

                </Container>

            </div>
        );
    }
}

export default Profile;
