import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function AboutMenu(props) {
    return (
        <ul class="nav flex-column">
            <NavItem>
                <NavLink><Link to='/about/mission'>Mission</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to='/about/history'>History</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to='/about/team'>Team</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to='/about/lessons'>Lessons</Link></NavLink>
            </NavItem>
            <NavItem>
                <NavLink><Link to='/about/rentals'>Rentals</Link></NavLink>
            </NavItem>
        </ul>
    );
}

export default AboutMenu;