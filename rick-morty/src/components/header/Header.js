import React from "react";
import {Link} from 'react-router-dom';
 
const Header = (props) => {
  return (
    <header className="App-header">
      <h1>{props.text}</h1>
      <ul className="App-header-links">
        <Link to="/">
          <li>HOME</li>
        </Link>  
      </ul>
    </header>
  );
};

export default Header;