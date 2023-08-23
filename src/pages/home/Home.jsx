import React from "react";
import './Home.css';
import fte from "../../img/fte.png";


const Home = () => {
  return (
    <div className="landing-page">
      <div className="landing-header">
        <div className="landing-header-logo">
         <img src={fte} alt="" />
        </div>
       
        <div className="landing-nav">
          <ul>
            <li><a href="/" className="nav-content">Programme</a></li>
            <li><a href="/" className="nav-content">Reservation</a></li>
            <li><a href="/" className="nav-content">Jeu et concours</a></li>
            <li><a href="/" className="nav-content" >Contact</a></li>

          </ul>
        </div>
      </div>
      <div className="landing-content">

      </div>
    </div>

  );
};

export default Home;
