import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    

    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid className="mb-0">
                    <div className="container header">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <a href="/home">
                                    <img src="/assets/images/Logo.svg" alt="Projhex Logo" />
                                </a>
                            </div>
                            <div className="col">
                                <h1>Projhex</h1>
                                <h6>Web Based Project Tracking</h6>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                    Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                    About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/features">
                                    Features
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                    Contact
                                    </NavLink>
                                </NavItem>
                            </Nav> 
                        </Collapse>
                        
                        
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;