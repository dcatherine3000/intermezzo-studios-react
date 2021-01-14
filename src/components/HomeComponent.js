import React, { Component } from 'react';
import Intro from './IntroComponent';
import HomeInfo from './HomeInfoComponent';
import HomeContact from './HomeContactComponent';
import { MODEL } from '../shared/model';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Intro />
                <hr />
                <HomeInfo model={MODEL} />
                <hr />
                <HomeContact />
                <hr />
            </React.Fragment>
        );
    }
}

export default Home;