import React, { Component } from 'react';
import Intro from './IntroComponent';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Intro />
            </React.Fragment>
        );
    }
}

export default Home;