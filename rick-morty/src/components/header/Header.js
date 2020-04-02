import React from "react";
import {Link} from 'react-router-dom';
 
const Header = (props) => {
  return (
    
    <header className="App-header">
      <div id="App-header-tittle">
        <img id="logox" src="https://png2.cleanpng.com/sh/a549b19a2633e42bc6be3342f9bb6ba4/L0KzQYm3VMA1N6Fuj5H0aYP2gLBuTgBweqVmhJ92b4L3iX76jfl1cF53gdV0LYPkfrTvhgoufF54gNt7dD3rf7FrifUueJD3jNN1LUXkc4XpUPNjbWNnetYALkS8SIW9VcQxOWY3Sqo8OUe4RYq5WMcveJ9s/kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5.4984654015228397559287.png"/>
        <h1 id="header">The Rick & Morty</h1>
        <img id="logox" src="https://png2.cleanpng.com/sh/a549b19a2633e42bc6be3342f9bb6ba4/L0KzQYm3VMA1N6Fuj5H0aYP2gLBuTgBweqVmhJ92b4L3iX76jfl1cF53gdV0LYPkfrTvhgoufF54gNt7dD3rf7FrifUueJD3jNN1LUXkc4XpUPNjbWNnetYALkS8SIW9VcQxOWY3Sqo8OUe4RYq5WMcveJ9s/kisspng-portal-morty-smith-rick-sanchez-t-shirt-hoodie-portal-5ac4b0cbe2bbd5.4984654015228397559287.png"/>
      </div>
      <ul className="App-header-links">
        <Link to="/">
          <li id="home">HOME</li>
        </Link>
        <Link>
          <li id="chdetail">CHARACTER DETAIL</li>
        </Link>
        
        
      </ul>
    </header>
  );
};

export default Header;