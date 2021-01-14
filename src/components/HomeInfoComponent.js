import React from 'react';
import { Card, CardImg, CardText, CardBody, Container, Row } from 'reactstrap';

function RenderModel({model}) {
    return (
        <div>
            <Card className="home-card">
                <CardImg src={model.image} alt={model.name} />
                <CardBody>
                    <CardText>{model.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function HomeInfo(props) {

    const info = props.model.map(model => {
        return (
            <div key={model.id} className="col-md-4">
                <RenderModel model={model} />
            </div>
        );
    });

    return (
        <Container>
            <Row>
                <div className="model-header">
                    <h2 className="display-4">Our Model</h2>
                    <p>We strive to create a thriving musical community by providing everything necessary for musicians to thrive, grow, and connect with other artists.</p>
                </div>
            </Row>
            <Row>
                {info}
            </Row>
        </Container>
    )
}

export default HomeInfo;