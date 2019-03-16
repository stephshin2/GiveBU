import React, { Component } from 'react';
import {Button,
        Nav
        } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">

            <div role="region">
                <Nav className="justify-content-right" activeKey="/home"
                    onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link href="/home">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">VOLUNTEER</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">DONATE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            PROFILE
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>



            <p>
                Test
            </p>
            <Button variant="primary" size="lg" active>
                Primary button
            </Button>

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
