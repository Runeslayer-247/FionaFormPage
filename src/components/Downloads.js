import React from 'react';

import Hand from '../files/Picture5.png';
import Collab from '../files/Collaborative-Working[1140].docx';
import Fundraise from '../files/Fundraising-Registration-Form[1139].docx';
import Volunteer from '../files/Volunteer-Application-Form[1141].docx';

function Downloads () {
    return (
        <div className="fionitas-downloads">     
        <h1>Download a Form</h1>
        <p id="mailus">Once you've filled it out, <a href="mailto:pierre.cervello@gmail.com">email it to us.</a>. Don't forget to download the appropriate documetns and attach them to your email.</p>
        
        <img src={Hand} alt="handshake picture" />

        <a href={Collab} download>
            <div className="downloadables dOne">
                <h3>Collaborate</h3>
                <p>We welcome businesses to work with us, in saving lives.</p>
            </div>
        </a>
        
        <a href={Fundraise} download>
            <div className="downloadables dTwo">
                <h3>Fundraise</h3>
                <p>Let us know about your ideas and we'll see how we can support you in your fundraising efforts</p>
            </div>
        </a>

        <a href={Volunteer} download>
            <div className="downloadables dThree">
                <h3>Volunteer</h3>
                <p>A good team is needed to make accomplish any mission, join our and help us make a diffrence</p>
            </div>
        </a>
    </div>
    );
}

export default Downloads;