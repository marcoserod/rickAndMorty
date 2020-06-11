import React from "react";
import {Link, NavLink, useLocation} from 'react-router-dom';
import Filter from "../filter/Filter";


const Header = (props) => {
  let pathN = useLocation().pathname;
  return (
    <nav id="NavHeader" class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <Link
      class="navbar-brand" 
      to="/">
      The Rick & Morty
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">          
          <NavLink 
          className="nav-item active"
          activeClassName="selected"
          exact to="/">
            <li className="nav-link">HOME</li>
          </NavLink>
          <NavLink 
          className="nav-item active"
          activeClassName="selected"
          exact to={`${useLocation().pathname}`}>
            {isNaN(parseInt(pathN.substring(1,pathN.length))) ? null : <li className="nav-link">DETAIL</li>}
          </NavLink>
          <NavLink 
          className="nav-item active"
          activeClassName="selected"
          exact to="/About">
           <li className="nav-link"> ABOUT </li>  
          </NavLink>        
          
        </ul>
      </div>
    </nav>
  );
};

export default Header;