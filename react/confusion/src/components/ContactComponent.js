import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, Label, Col, Button, FormFeedback} from 'reactstrap';

class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            Contactnum : '',
            Email : '',
            ModeOfContact : 'Tel',
            message: '',
            agree : false,
            touched : {
                firstname : false,
                lastname : false,
                Contactnum : false,
                Email : false
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched : { ...this.state.touched, [field] : true}
        });
    }
    validate(firstname, lastname, Email, Contactnum) {
        const errors = {
            firstname : '',
            lastname : '',
            Contactnum : '',
            Email : '',
        };

        if (this.state.touched.firstname && firstname.length <= 3){
            errors.firstname = "First name length is too small";
        }
        if (this.state.touched.firstname && firstname.length >= 10){
            errors.firstname = "First name length is too large";
        }
        if (this.state.touched.lastname && lastname.length <= 3){
            errors.lastname = "last name length is too small";
        }
        if (this.state.touched.lastname && lastname.length >= 10){
            errors.lastname = "last name length is too large";
        }

        return errors;
        
           
    }

    handleInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) {
        console.log("Current State of the form is " + JSON.stringify(this.state));
        alert("Current State of the form is " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.Contactnum, this.state.Contactnum);
        return(
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className = "row row-content">
                    <div className = "col-12">
                        <div className = "col-12 md-9">
                            <Form onSubmit = {this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor = "firstname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstname" name = "firstname" placeholder="First Name" onChange = {this.handleInput} value = {this.state.firstname} onBlur = {this.handleBlur('firstname')} valid = {errors.firstname === ''} invalid = {errors.firstname !== ''} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                    </Col>
                                    
                                </FormGroup>
                            
                                <FormGroup row>
                                    <Label htmlFor = "lastname" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastname" name = "lastname" placeholder="Last Name" onChange = {this.handleInput} value = {this.state.lastname} onBlur = {this.handleBlur('lastname')} valid = {errors.lastname === ''} invalid = {errors.lastname !== ''} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                    </Col>
                                    
                                </FormGroup>
                           
                                <FormGroup row>
                                    <Label htmlFor = "Contactnum" md={2}>Tel. No</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="Contactnum" name = "Contactnum" placeholder="Contactnum" onChange = {this.handleInput} value = {this.state.Contactnum} onBlur = {this.handleBlur('Contactnum')} valid = {errors.Contactnum === ''} invalid = {errors.Contactnum !== ''} />
                                        <FormFeedback>{errors.Contactnum}</FormFeedback>
                                    </Col>
                                    
                                </FormGroup>
                            
                                <FormGroup row>
                                    <Label htmlFor = "Email" md={2}>Email Address</Label>
                                    <Col md={10}>
                                        <Input type="email" id="Email" name = "Email" placeholder="Email" onChange = {this.handleInput} value = {this.state.Email} onBlur = {this.handleBlur('Email')} valid = {errors.Email === ''} invalid = {errors.Email !== ''} />
                                        <FormFeedback>{errors.Email}</FormFeedback>
                                    </Col>
                                    
                                </FormGroup>

                                <FormGroup row>
                                    <Col md = {{size: 6, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type = "checkbox" onChange = {this.handleInput} name="agree" checked = {this.state.agree} onBlur = {this.handleBlur('agree')} />{' '}<strong>Should we Contct You</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md = {{size:3, offset:1}}>
                                        <Input type = 'select' name = 'ModeOfContact' onChange = {this.handleInput} value = {this.state.ModeOfContact}>
                                            <option>Tel.</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Label htmlFor = "message" md={2}>Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="message" name = "message" rows="12" onChange = {this.handleInput} value = {this.state.message} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md = {{size:10, offset: 2}}>
                                        <Button type="submit" color = "primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        );    
    }
    
}

export default Contact;