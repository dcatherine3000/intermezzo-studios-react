import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Intro from './IntroComponent';
import HomeInfo from './HomeInfoComponent';
import HomeContact from './HomeContactComponent';
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
                        <HomeContact />
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;