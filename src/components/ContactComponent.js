import React, { Component } from 'react';
import { Container, Row, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            lessons: false,
            events: false,
            rentals: false,
            collaboration: false,
            general: false,
            email: '',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validate(firstName, lastName, email) {

        const errors = {
            firstName: '',
            lastName: '',
            email:''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'Must be at least 2 characters';
            } else if (firstName.length > 15) {
                errors.firstName = 'Must be less than 15 characters';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Must be at least 2 characters';
            } else if (lastName.length > 15) {
                errors.lastName = 'Must be less than 15 characters';
            }
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Must be a valid email address';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.email);

        return (
            <div>
                <Container>
                    <Row>
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </Row>
                    <Row className="contact-row">
                        <div className="col-6 contact-info">
                            <h3>Address</h3>
                            <address>1234 Somewhere Street,<br/>Dreamland, USA 54321</address>
                            <h3>Phone</h3>
                            <a href="tel:+18005551234">1-800-555-1234</a>
                            <h3>Email</h3>
                            <a href="mailto:contact@intermezzostudios.com">contact@intermezzostudios.com</a>
                        </div>
                        <div className="col-6">
                            <img id="map" src="assets/images/map.jpg" alt="City map"/>
                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <div className="col-12 contact-title">
                            <h2 className="display-4">Contact Us</h2>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-8 mx-auto">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName">First Name:</Label>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur("firstName")}
                                    />
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName">Last Name:</Label>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur("lastName")}
                                    />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </FormGroup>
                                <Label>Areas of Interest:</Label>
                                <FormGroup row>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="lessons"
                                                checked={this.state.lessons}
                                                onChange={this.handleInputChange} 
                                            /> 
                                            Lessons
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="events"
                                                checked={this.state.events}
                                                onChange={this.handleInputChange} 
                                            />
                                            Events
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="rentals"
                                                checked={this.state.rentals}
                                                onChange={this.handleInputChange} 
                                            />
                                            Rentals
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="collaboration"
                                                checked={this.state.collaboration}
                                                onChange={this.handleInputChange} 
                                            />
                                            Collaboration
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="general"
                                                checked={this.state.general}
                                                onChange={this.handleInputChange} 
                                            />
                                            General Questions
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email">Email:</Label>
                                    <Input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur("email")}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup row>
                                    <Input 
                                        type="textarea" 
                                        id="feedback" 
                                        name="feedback"
                                        rows="6"
                                        placeholder="Questions and comments here"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}>
                                    </Input>
                                </FormGroup>
                                <FormGroup row>
                                    <Button type="submit">Submit</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }    
}

export default Contact;