import React from 'react';
import { Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <div className="col-12 footer-nav">
                        <ul>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/events'>Events</Link></li>
                            <li><Link to='/faq'>FAQ</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
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