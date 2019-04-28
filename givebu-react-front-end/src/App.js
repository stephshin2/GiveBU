import React, { Component,} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import {
    Nav,
} from 'react-bootstrap';

import { CookiesProvider } from 'react-cookie';

import logo from './images/givebu-logo.png';
import './App.css';

import Home from "./Home";
import Volunteer from "./Volunteer";
import Profile from "./Profile";


class App extends Component {
    render() {
        return (
            <CookiesProvider>
            <HashRouter>
                <div>
                    <ul className="header">
                        <NavLink to="/"> <img src={logo} className="Home-App-logo" alt="logo"/> </NavLink>
                        <Nav variant="pills" defaultActiveKey="/home" className="nav-bar-items">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/volunteer">Volunteer</NavLink></li>
                            <li><NavLink to="/profile">Profile</NavLink></li>
                        </Nav>
                    </ul>


                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/volunteer" component={Volunteer}/>
                        <Route path="/profile" component={Profile}/>
                    </div>

                </div>
            </HashRouter>
            </CookiesProvider>

        );
    }
}

export default App;