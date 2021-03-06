import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Events from './EventsComponent';
import Faq from './FAQComponent';
import Contact from './ContactComponent';
import Mission from './MissionComponent';
import History from './HistoryComponent';
import Team from './TeamComponent';
import Lessons from './LessonsComponent';
import Rentals from './RentalsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MODEL } from '../shared/model';
import { QUESTIONS } from '../shared/questions';
import { EVENTS } from '../shared/events';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            model: MODEL,
            questions: QUESTIONS,
            events: EVENTS
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
                    <Route exact path='/about/mission' component={Mission} />
                    <Route exact path='/about/history' component={History} />
                    <Route exact path='/about/team' component={Team} />
                    <Route exact path='/about/lessons' component={Lessons} />
                    <Route exact path='/about/rentals' component={Rentals} />
                    <Route exact path='/events' render={() => <Events events={this.state.events} />} />
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