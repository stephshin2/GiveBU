import React, { Component,} from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";


import { Navbar, Nav, NavItem, NavbarBrand, MenuItem, button, toggler, icon} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import logo from './images/givebu-logo.png';
import './App.css';

import Home from "./Home";
import Volunteer from "./Volunteer";
import Profile from "./Profile";


class App extends Component {
  render() {
    return (

        /*
<HashRouter>
    <div>
        <ul className="topnav" id="myTopnav">
            <a href="#contact">Profile</a>
            <a href="#Volunteer">Volunteer</a>
            <a href="#home">Home</a>

        </ul>


            <div className="content">
                <Route exact path="/index" component={Home}/>
                <Route path="/volunteer" component={Volunteer}/>
                <Route path="/profile" component={Profile}/>
            </div>
    </div>

  </HashRouter>
*/


/*
        <HashRouter>
            <div>
                <ul className="topnav" id="myTopnav">
                    <NavLink to="/"> <img src={logo} className="Home-App-logo" alt="logo"/> </NavLink>
                    <Nav variant="pills" defaultActiveKey="/" className="nav-bar-items">
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
*/

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
