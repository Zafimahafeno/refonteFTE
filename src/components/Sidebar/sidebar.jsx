import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import fte from "../../img/fte.png";
import "./sidebar.css";


const Sidebar = () => {
  const [navbarActive, setNavbarActive] = useState("navbar-content");
  const [toggleIcon, setToggleIcon] = useState("navbar-toggle");
  const [activeLink, setActiveLink] = useState("");

  const navToggle = () => {
    if (navbarActive === "navbar-content") {
      setNavbarActive("navbar-content navbar-active");
      setToggleIcon("navbar-toggle toggle");
    } else {
      setNavbarActive("navbar-content");
      setToggleIcon("navbar-toggle");
    }
  };

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleClick1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const handleClick2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  
  
  return (
    <div className="fte-navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={fte} alt="" />
        </a>
      </div>

      <ul className={navbarActive}>
        <li>
          <NavLink className={`navLink ${activeLink === "Acceuil" ? "navLink active" : "navLink"}`}to="/" onClick={() => setActiveLink("Accueil")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`navLink ${activeLink === "Agenda" ? "navLink active" : "navLink"}`}
            to="/Programme"
            onClick={() => setActiveLink("Agenda")}
          >
            Agenda
          </NavLink>
        </li>
        <li>
        
          <div 
          className={`navLink ${showDropdown1 ? 'active' : ''}`} id="dropdown"
          
          onClick={handleClick1}
          >
            Concours
          </div>
          { showDropdown1 &&(
            <ul className="dropdown-content"
          
            >
            <li>
                <NavLink
                  to="/Jeu"
                  onClick={() => {
                    setActiveLink("Jeux");
                    setShowDropdown1(true);
                  }}
                  
                  className="dropdown-navlink"
                >
                  Jeux 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Hackathon"
                  onClick={() => {
                    setActiveLink("Hackathon");
                    setShowDropdown1(false);
                  }}
                  className="dropdown-navlink"
                >
                  Hackathon
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        
        <li>
        
          <div 
          className={`navLink ${showDropdown2 ? 'active' : ''}`} id="dropdown"
          
          onClick={handleClick2}
          >
            Je participe
          </div>
          { showDropdown2 &&(
            <ul className="dropdown-content"
          
            >
            <li>
                <NavLink
                  to="/Reservation"
                  onClick={() => {
                    setActiveLink("Reservation");
                    setShowDropdown2(true);
                  }}
                  
                  className="dropdown-navlink"
                >
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Partenariat"
                  onClick={() => {
                    setActiveLink("Partenariat");
                    setShowDropdown2(false);
                  }}
                  className="dropdown-navlink"
                >
                  Partenariat
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Sidebar;