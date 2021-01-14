import React from 'react';
import { Container, Row, Breadcrumb, BreadcrumbItem, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div className="col-4">
                        <ul class="nav flex-column">
                            <NavItem>
                                <NavLink>Mission</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>History</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Lessons</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Rentals</NavLink>
                            </NavItem>
                        </ul>
                    </div>
                    <div className="col-8" id="about-content">
                        <h2 className="display-4">Welcome!</h2>
                        <p>We at Intermezzo Studios believe that musicians thrive in an environment where they are able to collaborate with other musicians and artists at every opportunity. Our model is holistic, focusing on the musician's journey from beginning to end. We offer lessons for musicians of all ages and skill levels. Our instructors come from diverse backgrounds and offer lessons in a variety of styles.</p>
                        <p>Performance is an important aspect of a musician's growth, which is why we offer so many opportunities for performance at Intermezzo. Not only do our students have the opportunity to perform in studio recitals, but they may also find opportunities to collaborate with other musicians to organize their own performances in our spaces.</p>
                        <p>Between our small recording studio and our rehearsal spaces, local musicians will find plenty of opportunities to shine at Intermezzo. Rentals are available for nearly all our spaces, and being part of our community of musicians provides ample opportunity to find other gigs as well.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default About;