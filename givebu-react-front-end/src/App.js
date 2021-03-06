import React, { Component,} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";


import { Navbar, Nav, NavItem, NavbarBrand, MenuItem, button, toggler, icon} from 'react-bootstrap';


import { CookiesProvider } from 'react-cookie';

import logo from './images/givebu-logo.png';
import './App.css';

import Home from "./Home";
import Volunteer from "./Volunteer";
import Profile from "./Profile";
import Cookies from 'universal-cookie';


export const cookies = new Cookies();

class App extends Component {

  render() {

    return (



<HashRouter>

        <header className="header" id ="myTopnav">
            <NavLink to="/"> <img src={logo} className="Home-App-logo" alt="logo"/> </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/#/volunteer">Volunteer</a></li>
                <li><a href="/#/profile">Profile</a></li>
            </ul>
        </header>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/volunteer" component={Volunteer}/>
                <Route path="/profile" component={Profile}/>
            </div>




</HashRouter>





    );
  }
}

export default App;
