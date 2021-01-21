import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Intro from './IntroComponent';
import HomeInfo from './HomeInfoComponent';
import { MODEL } from '../shared/model';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Intro />
                <Container>
                    <Row>
                        <HomeInfo model={MODEL} />
                    </Row>
                    <Row>
                         <div className="col text-center">
                            <Button active className="btn-dark btn-lg home-button"><Link className="home-link" to='/contact'>Contact Us</Link></Button>
                        </div>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;