import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                <Navbar className="navbar navbar-dark" expand="lg" fixed="top">
                    <NavbarBrand href='/'>
                        <h1>Intermezzo Studios</h1>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <ul className="navbar-nav">
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'>
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/events'>
                                        Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/faq'>
                                        FAQ
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact'>
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