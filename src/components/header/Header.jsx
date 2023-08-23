import React from "react";
import fte from "../../img/fte.png";
import './Header.css';

 export const Header = () => {
  return (
    <div className="container">
      <div className="logo-fte">
        <img src={fte} alt="" />
      </div>
      <div className="nav-bar">
       <ul>
        <li><a href="/" className="nav-content">Programme</a></li>
        <li><a href="/" className="nav-content">Reservation</a></li>
        <li><a href="/" className="nav-content">Jeu et concours</a></li>
        <li><a href="/" className="nav-content" >Contact</a></li>

       </ul>
      </div>
    </div>
  );
}

export default Header;
