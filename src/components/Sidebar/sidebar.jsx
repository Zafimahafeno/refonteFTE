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

  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    if (!dropdownHover) {
      setShowDropdown(false);
    }
  };

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownHover(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownHover(false);
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
          <NavLink
            className={`navLink ${activeLink === "Concours" ? "navLink active" : "navLink"}`}
            to="/Jeu"
            onClick={() => setActiveLink("Concours")}
          >
            Concours
          </NavLink>
        </li>
        <li>
        
          <div 
          className={`navLink ${showDropdown ? 'active' : ''}`} id="dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          >
            Je participe
          </div>
          { showDropdown &&(
            <ul className="dropdown-content"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            >
            <li>
                <NavLink
                  to="/Reservation"
                  onClick={() => {
                    setActiveLink("Reservation");
                    setShowDropdown(true);
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
                    setShowDropdown(false);
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