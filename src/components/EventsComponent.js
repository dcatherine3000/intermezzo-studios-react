import React from 'react';
import { Container, Row, Breadcrumb, BreadcrumbItem, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Events() {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Events</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </Row>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th colSpan="6">Event Name</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="6"><strong>Elementary/Intermediate Holiday Recitals</strong></td>
                            <td>December 12, 2020</td>
                            <td>Free for families</td>
                        </tr>
                        <tr>
                            <td colSpan="6"><strong>High School Holiday Recitals</strong></td>
                            <td>December 13, 2020</td>
                            <td>Free for families</td>
                        </tr>
                        <tr>
                            <td colSpan="6"><strong>An Evening with Nat and Josh</strong></td>
                            <td>December 19, 2020, 8pm</td>
                            <td>$10</td>
                        </tr>
                        <tr>
                            <td colSpan="6"><strong>Benson Chamber Singers Christmas Concert</strong></td>
                            <td>December 20, 2020</td>
                            <td>$15</td>
                        </tr>
                    </tbody>
                </Table>
                <Row id="events-button" className="btn-block text-center">
                    <Button active className="btn-dark btn-lg">Questions?</Button>
                </Row>
            </Container>
        </div>
    );
}

export default Events;