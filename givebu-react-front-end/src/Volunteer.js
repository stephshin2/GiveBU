import React, { Component,} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Table, Nav, Row, Col, Alert, Jumbotron } from 'reactstrap';
import './Volunteer.css';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
/*        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
*/
    };
/*
    toggle() {
        this.setState({modal: !this.state.modal});
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
 */   

    componentDidMount() {
        fetch('http://localhost:3001/volunteer')
        .then(res => res.json())
        .then((data) => {
            this.setState({events: data})
            console.log(this.state.events)
        })
        .catch (console.log)
    }

    render() {
        return (
            <Jumbotron>
                <h2> Volunteer Now</h2>
                <div className="table">

            <Table>
                <thead>
                <tr>
                    <th>Organization</th>
                    <th>Event description</th>
                    <th>Dates</th>
                    <th>Location</th>
                    <th>Points</th>
                </tr>
                </thead>

                <tbody>
                    {this.state.events.map((event) => (
                        <tr>
                            <td>{event.name}</td>
                            <td>{event.descr}</td>
                            <td>{event.dates}</td>
                            <td>{event.location}</td>
                            <td>{event.points}</td>
                        </tr>                            
                    ))}
                </tbody>
            </Table>

                </div>
            </Jumbotron>
        );
    }
}


export default Volunteer;