import React, { Component } from 'react';
import { Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


class Contact extends Component {

    render() {
        return(
            <div>
                <div className="row row-content justify-content-center">
                <div className="col-12 text-center">
                    <h1>Let us know what you think!</h1>
                    <hr />
                </div>
                <Col>
                    <LocalForm>
                        {/* First Name */}
                        <Row className="form-gorup justify-content-center mb-3">
                            <Label htmlFor="firstName" md={2}><strong>First Name</strong></Label>
                            <Col md={7} className="justify-content-center">
                                <Control.text model=".firstName" id="firstName" name="firstName" placeholder="First Name" className="form-control" />
                            </Col>
                        </Row>
                        {/* Last Name */}
                        <Row className="form-gorup justify-content-center mb-3">
                            <Label htmlFor="lastName" md={2}><strong>Last Name</strong></Label>
                            <Col md={7} className="justify-content-center">
                                <Control.text model=".lastName" id="lastName" name="lastName" placeholder="Last Name" className="form-control" />
                            </Col>
                        </Row>
                        {/* Email */}
                        <Row className="form-gorup justify-content-center mb-3">
                            <Label htmlFor="email" md={2}><strong>Email</strong></Label>
                            <Col md={7} className="justify-content-center">
                                <Control.text model=".email" id="email" name="email" placeholder="Phone Number" className="form-control" />
                            </Col>
                        </Row>
                        {/* Phone Number */}
                        <Row className="form-gorup justify-content-center mb-3">
                            <Label htmlFor="phoneNum" md={2}><strong>Phone</strong></Label>
                            <Col md={7} className="justify-content-center">
                                <Control.text model=".phoneNum" id="phoneNum" name="phoneNum" placeholder="Phone Number" className="form-control" />
                            </Col>
                        </Row>
                        <div className="form-group row justify-content-center">
                            <label for="comments" className="col-md-2 col-form-label"><strong>Comments</strong></label>
                            <div className="col-md-7">
                                <textarea className="form-control" name="comments" id="comments" rows="8"></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-md-4 col-md-9">
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </div>
                    </LocalForm>
                    <hr />
                </Col>
            </div>

            <div className="row row-content align-items-center">
                <div className="offset-md-2 col-sm-6">
                    <h4>Company Address</h4>
                    <address>
                        Projhex Holdings<br />
                        47 Projhex Plaza<br />
                        Denver, CO 80123
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+13035556789"><i className="fa fa-phone"></i>1-303-555-6789</a><br />
                    <a role="button" className="btn btn-link" href="mailto:support@projhex.net"><i className="fa fa-envelope"></i>support@projhex.net </a>
                </div>
            </div>
            </div>
        );
    }
}



export default Contact;