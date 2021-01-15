import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Accordion, Card, Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RenderQuestions({questions}) {
    return (
        <div>
            <Container>
                <Accordion>
                    <Card>
                        <Card.Header className="faq-header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {questions.question}
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="faq-answer">{questions.answer}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        </div>
    )
}

function Faq(props) {

    const faq = props.questions.map(question => {
        return (
            <div key={question.id}>
                <RenderQuestions questions={question} />
            </div>
        )
    })

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
            {faq}
        </div>
    );
}

export default Faq;