import React from 'react';
import { Container, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
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
        </div>
    );
}

export default About;