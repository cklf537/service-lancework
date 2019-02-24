import React from 'react';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
       return (
        <div className="text-right">
        <ul className="navbar-nav bd-navbar-nav flex-row">
          <li className="nav-item"> <Link to="/Schedule">Schedule</Link></li>
          <li className="nav-item">  <Link to="/About">About Us</Link></li>
          <li className="nav-item">  <Link to="/Faq">FAQ's</Link></li>
          <li className="nav-item">  <Link to="/Discussions">Discussion Board</Link></li>
          <li className="nav-item">  <Link to="/Contact">Contact</Link></li>
        </ul>
        </div>
       )
    }
 }
 export default Navbar;
 

