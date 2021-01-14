import React from 'react';
import { Container, Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Faq() {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>FAQ</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Faq;