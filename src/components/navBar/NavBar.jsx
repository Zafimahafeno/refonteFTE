import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { NavLink } from "react-router-dom";
import './NavBar.css';
import fte from "../../img/fte.png";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navBarAnimation = useSpring({
        opacity: isScrolled ? 1 : 0,
        transform: isScrolled ? 'translateY(0)' : 'translateY(-10%)',
    });
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
        <animated.nav style={navBarAnimation} className={isScrolled ? "navBar scrolled" : "navBar notScrolled"}>
            <div className="navbar-logo">
             <a href="/">
                 <img src={fte} alt="" />
             </a>
            </div>
            <ul className={navbarActive}>
                <li>
                <NavLink className={activeLink === "Accueil" ? "navLink active" : "navLink"} to="/" onClick={() => setActiveLink("Accueil")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "Programme" ? "navLink active" : "navLink"}
            to="/Programme"
            onClick={() => setActiveLink("Programme")}
          >
            Programme
          </NavLink>
        </li>
        <li>
          <NavLink
            className={activeLink === "Reservation" ? "navLink active" : "navLink"}
            to="/Reservation"
            onClick={() => setActiveLink("Réservation")}
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
        </animated.nav>
    );
}

export default NavBar;

