import React, { Component } from 'react';
import Intro from './IntroComponent';
import HomeInfo from './HomeInfoComponent';
import HomeContact from './HomeContactComponent';
import Footer from './FooterComponent';
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
                <hr />
                <HomeContact />
                <hr />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;