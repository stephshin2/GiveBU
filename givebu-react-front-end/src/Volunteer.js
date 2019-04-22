import React, { Component,} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Table, Nav, Row, Col, Alert, Jumbotron } from 'reactstrap';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal:false,
            closeAll: false,
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);


    };

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


    render() {
        return (

            <div>
            <Jumbotron fluid>

            <Container>

                <Row>
                    VOLUNTEER NOW
                </Row>


            <Table>
                <thead>
                <tr>
                    <th>Organization</th>
                    <th>Points</th>

                </tr>
                </thead>
                <tbody>


                <tr>
                    <td>
                        <Container>
                            <Button color="danger" onClick={ this.toggle}>Aids Action Commitee</Button>
                            {/*<Modal isOpen={this.state.modal} fade={false}*/}
                            {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>Aids Action Commitee</ModalHeader>

                                <ModalBody>
                                    <p>Since 1993, Check-In volunteers have provided information and referrals, along with a sensitive and caring ear, to AIDS Action Committee’s clients, helping to maintain a strong connection between clients and staff members.
                                        Volunteers complement our services by helping clients work through problems and encouraging successes over the phone. </p>

                                    <div align="middle">
                                    <iframe width="400" height="300" id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>

                                </ModalBody>

                                <Button color="primary" onClick={this.toggleNested}>Invite Friends</Button>

                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>

                        </td>

                    <td>100</td>
                </tr>

                <tr>
                    <td>
                        <Container>
                            <Button color="light" onClick={ this.toggle}>All Hands and Hearts</Button>
                            {/*<Modal isOpen={this.state.modal} fade={false}*/}
                            {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>All Hands and Hearts</ModalHeader>

                                <ModalBody>
                                    <p>We are currently working around the world to help communities affected by natural disasters. As a volunteer, you'd be a critical part of rebuilding homes and schools for community members post-disaster. </p>

                                    <p> Tuesday-Wednesday 12pm </p>

                                    <div align="middle">
                                        <iframe width="400" height="300" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>

                                </ModalBody>

                                <Button color="primary" onClick={this.toggleNested}>Invite Friends</Button>

                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>

                    </td>
                    <td>100</td>

                </tr>
                <tr>
                    <td>
                        <Container>
                            <Button color="primary" onClick={ this.toggle}>Cradles to Crayons</Button>
                            {/*<Modal isOpen={this.state.modal} fade={false}*/}
                            {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>Cradles to Crayons</ModalHeader>

                                <ModalBody>
                                    <p>The Champion Program is for students who would like to volunteer on a weekly or bi-weekly basis during one of our designated two and a half hour shifts . As a Champion, volunteers will be trained in at least one of our donation processing stations. Once a Champion is trained, they are responsible for leading the station with anywhere from 10-25 volunteers. For example, an Outfit Station Champion orients and oversees a group of volunteers as they put together outfit packs that contain about a week's worth of clothing. </p>

                                    <Alert color="danger"> Monday-Wednesday 10am </Alert>

                                    <div align="middle">
                                        <iframe width="400" height="300" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>


                                </ModalBody>

                                <Button color="secondary" onClick={this.toggleNested}>Invite Friends</Button>

                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>
                    </td>
                    <td>95</td>
                </tr>

                <tr>
                    <td>
                        <Container>
                            <Button color="info" onClick={ this.toggle}>Art Resource Collaborative for Kids (ARCK)</Button>
                            {/*<Modal isOpen={this.state.modal} fade={false}*/}
                            {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>Art Resource Collaborative for Kids (ARCK)</ModalHeader>

                                <ModalBody>
                                    <p></p>

                                    <Alert color="danger"> Monday-Wednesday 10am </Alert>

                                    <div align="middle">
                                        <iframe width="400" height="300" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>


                                </ModalBody>

                                <Button color="dark" onClick={this.toggleNested}>Invite Friends</Button>

                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>
                    </td>
                    <td>95</td>

                </tr>

                <tr>
                    <td>
                        <Container>
                            <Button color="danger" onClick={ this.toggle}>Artists for Humanity</Button>
                            {/*<Modal isOpen={this.state.modal} fade={false}*/}
                            {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>Artists for Humanity</ModalHeader>

                                <ModalBody>
                                    <p>The best way to volunteer with Artists For Humanity is to come visit our studios, meet our young people, and talk with us about how you can become involved. Volunteers spread the word about what our teens can do, promote our art work, refer young people who could benefit from working with us, work on special projects and/or provide 1:1 tutoring to teens. Tutoring is one of the key ways to get involved. As an after-work supplemental program, tutoring provides critical support to AFH teen artists to ensure a stronger pathway toward academic success. </p>

                                    <Alert color="danger"> Monday-Wednesday 10am </Alert>

                                    <div align="middle">
                                        <iframe width="400" height="300" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>


                                </ModalBody>

                                <Button color="primary" onClick={this.toggleNested}>Invite Friends</Button>

                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>
                    </td>
                    <td>95</td>
                </tr>


                <tr>
                    <td>
                        <Container>
                            <Button color="warning" onClick={ this.toggle}>Bilingual Education for Central America</Button>
                            {/*<Modal isOpen={this.state.modal} fade={false}*/}
                            {/*toggle={this.toggle} style={{width: "200px", display: "block"}}>*/}
                            <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} >
                                <ModalHeader toggle={this.toggle}>Bilingual Education for Central America</ModalHeader>

                                <ModalBody>
                                    <p>Since 1993, Check-In volunteers have provided information and referrals, along with a sensitive and caring ear, to AIDS Action Committee’s clients, helping to maintain a strong connection between clients and staff members.
                                        Volunteers complement our services by helping clients work through problems and encouraging successes over the phone. </p>

                                    <Alert color="danger"> Monday-Friday 2-4pm </Alert>

                                    <div align="middle">
                                        <iframe width="400" height="300" id="gmap_canvas"
                                                src="https://maps.google.com/maps?q=boston%20of%university&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe> </div>


                                </ModalBody>

                                <Button color="success" onClick={this.toggleNested}>Invite Friends</Button>

                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>REGISTER</Button>{' '}
                                    <Button color="danger" onClick={this.toggle}>EXPLORE OTHER EVENTS</Button>
                                </ModalFooter>
                            </Modal>
                        </Container>
                    </td>
                    {/*<td>BCYF Centers across Boston</td>*/}
                    {/*<td>Saturdays 9-12</td>*/}
                    <td>95</td>

                </tr>


                </tbody>
            </Table>
            </Container>



            </Jumbotron>



            </div>

        );
    }
}

export default Volunteer;
