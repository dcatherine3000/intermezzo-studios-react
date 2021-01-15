import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Events from './EventsComponent';
import Faq from './FAQComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MODEL } from '../shared/model';
import { QUESTIONS } from '../shared/questions';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: MODEL,
            questions: QUESTIONS
        }
    }

    render() {
        const HomePage = () => {
            return (
                <Home model={this.state.model} />
            );
        };

        const FaqPage = () => {
            return (
                <Faq questions={this.state.questions} />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/events' component={Events} />
                    <Route exact path='/faq' component={FaqPage} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;