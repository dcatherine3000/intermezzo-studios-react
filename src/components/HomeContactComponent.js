import React from 'react';
import { Button } from 'reactstrap';

function HomeContact() {
    return (
        <div>
            <Button dark block className="home-button btn-lg" href='/contact'>Contact Us</Button>
        </div>
    );
}

export default HomeContact;