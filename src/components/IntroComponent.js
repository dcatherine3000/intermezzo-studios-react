import React from 'react';
import { Jumbotron } from 'reactstrap';

function Intro() {
    return (
        <React.Fragment>
            <Jumbotron fluid className="text-center">
                <div className="intro">
                    <div className="text-box">
                        <h1>Intermezzo Studios</h1>
                        <p>Educate. Perform. Collaborate.</p>
                    </div>
                </div>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Intro;