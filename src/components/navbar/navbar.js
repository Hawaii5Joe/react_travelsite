

import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
  render() {
    return (
    
 
<nav className="navbar navbar-inverse navbar-fixed-top">
  <div className="container-fluid">
   
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      <a className="navbar-brand" href="#">My Travel Site</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Home</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">About</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Stuff</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
   
  </div>
  
</nav>
    
        );
  }
}
export default Navbar;