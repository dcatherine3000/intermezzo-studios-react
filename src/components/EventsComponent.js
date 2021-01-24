import React from 'react';
import { Container, Row, Breadcrumb, BreadcrumbItem, Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderEvents({event}) {
    return (
        <tbody key={event.id}>
            <tr>
                <td colSpan="6"><strong>{event.name}</strong></td>
                <td>{event.date}</td>
                <td>{event.price}</td>
            </tr>
        </tbody>
    );
}

function Events(props) {

    const table = props.events.map(event => {
        return (
            <RenderEvents event={event} />
        );
    });

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
                <Table hover>
                    <thead>
                        <tr>
                            <th colSpan="6">Event Name</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {table}
                </Table>
                <Row id="events-button" className="btn-block text-center">
                    <Button active className="btn-dark btn-lg">Questions?</Button>
                </Row>
            </Container>
        </div>
    );
}

export default Events;