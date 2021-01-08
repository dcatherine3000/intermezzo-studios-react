import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, NavItem } from 'reactstrap';

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark className="bg-dark" expand="lg" fixed="top">
                    <NavbarBrand>
                        <h1 className="bg-dark">Intermezzo Studios</h1>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen}  className="bg-dark" navbar>
                        <Nav navbar>
                            <ul className="navbar-nav bg-dark">
                                <NavItem className="bg-dark">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem className="bg-dark">
                                    <NavLink className="nav-link" to="/events">
                                        Events
                                    </NavLink>
                                </NavItem>
                                <NavItem className="bg-dark">
                                    <NavLink className="nav-link" to="/faq">
                                        FAQ
                                    </NavLink>
                                </NavItem>
                                <NavItem className="bg-dark">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;