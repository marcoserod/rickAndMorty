import React from "react";
import {Link, useLocation} from 'react-router-dom';
import Filter from "../filter/Filter";


const Header = (props) => {
  return (
    <nav id="NavHeader" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <Link to="/">
        <a class="navbar-brand" href="#">The Rick & Morty</a>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li className="nav-item active">
          <Link to="/">
            <a className="nav-link" id="home" href="#">Home <span class="sr-only">(current)</span></a>
          </Link>
          </li>
          <Link to={`${useLocation().pathname}`}>
            {useLocation().pathname !== "/" ?
            <li className="nav-item"> <a className="nav-link" id="chdetail">Character Detail</a> </li> : <li></li>}
          </Link>
          
            <li className="nav-item"> <Link to="/About"><a className="nav-link"> About </a> </Link></li>

          
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;