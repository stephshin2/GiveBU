import React, { Component,} from 'react';
import {
        Nav,
        Container
        } from 'react-bootstrap';
import logo from './givebu-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Container>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/volunteer">VOLUNTEER</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/donate">DONATE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/profile">PROFILE</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>


            <img src={logo} className="App-logo" alt="logo"/>

            <h1>
                Currently in construction... Please be patient :)
            </h1>

        </div>




      // {/*<div className="App">*/}
      // {/*<header className="App-header">*/}
      //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
      //     {/*<p>*/}
      //       {/*Edit <code>src/App.js</code> and save to reload.*/}
      //     {/*</p>*/}
      //     {/*<a*/}
      //       {/*className="App-link"*/}
      //       {/*href="https://reactjs.org"*/}
      //       {/*target="_blank"*/}
      //       {/*rel="noopener noreferrer"*/}
      //     {/*>*/}
      //       {/*Learn React*/}
      //     {/*</a>*/}
      //   {/*</header>*/}
      // {/*</div>*/}


    );
  }
}

export default App;
