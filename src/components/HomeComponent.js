import React, { Component } from 'react';
import Intro from './IntroComponent';
import HomeInfo from './HomeInfoComponent';
import { MODEL } from '../shared/model';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: MODEL
        }
    }

    render() {
        return (
            <React.Fragment>
                <Intro />
                <hr />
                <HomeInfo model={MODEL} />
            </React.Fragment>
        );
    }
}

export default Home;