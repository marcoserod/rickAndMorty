import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <div 
        className="footer fixed-bottom container-fluid d-flex justify-content-center">
            
            <a href='https://github.com/marcoserod' target="_blank">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href='https://www.linkedin.com/in/marcos-rodriguez-611512144/' target="_blank">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </div>
    )
}

export default Footer;
