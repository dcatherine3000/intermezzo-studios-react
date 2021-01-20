import React from 'react';
import { Link } from 'react-router-dom';


function HomeContact() {
    return (
        <div className="col text-center">
            <button className="btn btn-dark btn-lg home-button active"><Link className="home-link" to='/contact'>Contact Us</Link></button>
        </div>
    );
}

export default HomeContact;