import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
    return (
        <div 
        className="footer fixed-bottom container-fluid d-flex justify-content-center">
            
            <a href='https://github.com/marcoserod' target="_blank" rel="noopener noreferrer"
>
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href='https://www.linkedin.com/in/marcos-rodriguez-611512144/' target="_blank" rel="noopener noreferrer"
>
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=mer.marcosr@gmail.com&su=[Rick+and+Morty+Marcoserod+APP]+Hi+Marcos,+I'm+contacting+you" target="_blank" rel="noopener noreferrer"
>
                <FontAwesomeIcon icon={faEnvelope}/>
            </a>
        </div>
    )
}

export default Footer;
