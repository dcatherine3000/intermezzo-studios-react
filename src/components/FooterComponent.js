import React from 'react';
import { Container, Row } from 'reactstrap';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <div className="col-12 footer-nav">
                        <ul>
                            <li>About</li>
                            <li>Events</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    <hr />
                    </div>
                </Row>
                <Row>
                    <div className="col-12">
                        <h6>1234 Somewhere Street, Dreamland, USA</h6>
                        <h6>&#169; Intermezzo Studios, LLC</h6>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;