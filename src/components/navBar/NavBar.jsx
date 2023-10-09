import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import {Link } from "react-router-dom";
import './NavBar.css';
import fte from "../../img/fte.png";
import Dropdown1 from '../Sidebar/dropdown1';
import Dropdown2 from '../Sidebar/dropdown2';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
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
    const [click, setClick] = useState(false);
    const [dropdown1,setDropdown1] = useState(false);
    const [dropdown2,setDropdown2] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);
    const onMouseEnter1 = () => {
      if (window.innerWidth < 960) {
        setDropdown1(false);
      } else {
        setDropdown1(true);
        
      }
     
    };
    const onMouseEnter2 = () => {
      if (window.innerWidth < 960) {
        setDropdown2(false);
      } else {
        setDropdown2(true);
        
      }
    };
  
    const onMouseLeave1 = () => {
      if (window.innerWidth < 960) {
        setDropdown1(false);
      } else {
        setDropdown1(false);
      }
    };
    const onMouseLeave2 = () => {
      if (window.innerWidth < 960) {
        setDropdown2(false);
      } else {
        setDropdown2(false);
      }
    };
    const handleNavItemClick = (itemName) => {
      if (activeNavItem === itemName) {
        setActiveNavItem(null); 
      } else {
        setActiveNavItem(itemName);
        
      }
    };
    const handleClick = () => setClick (!click);
    const showDropdown1 = () => setDropdown1 (!dropdown1);
    const showDropdown2 = () => setDropdown2 (!dropdown2);
    const closeMobileMenu = () => setClick (false);
  
  
    return (
        <animated.nav style={navBarAnimation} className={isScrolled ? "navBar scrolled" : "navBar notScrolled"}>
           <nav className="navbar">
        <Link to = '/' className='navbar-logo'>
           <img src={fte} alt="Logo Fte" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' :  'nav-menu'}>
          <li className={`nav-item ${activeNavItem === 'Accueil' ? 'active' : ''}`}  onClick={() => handleNavItemClick('Accueil')}>
            <Link to= '/' className="nav-links" onClick={closeMobileMenu}>
               Acceuil
            </Link>
          </li>
            <li className={`nav-item ${activeNavItem === 'Agenda' ? 'active' : ''}`} onClick={() => handleNavItemClick('Agenda')}>
            <Link to= '/Programme' className="nav-links" onClick={closeMobileMenu}>
               Agenda
            </Link>
          </li>
          <li className={`nav-item`} onClick={() => handleNavItemClick('Concours')}
          onMouseEnter={onMouseEnter1}
          onMouseLeave={onMouseLeave1}>
            <div  className="nav-links"onClick={() =>{
              showDropdown1()}}>
               Concours <i className='fas fa-caret-down' />
            </div>
            {dropdown1 && <Dropdown1/>}
          </li>
          <li className={`nav-item`}  onClick={() => handleNavItemClick('JeParticipe')}
          onMouseEnter={onMouseEnter2}
          onMouseLeave={onMouseLeave2}>
            <div  className="nav-links" onClick={() =>{
              showDropdown2()}}>
               Je participe<i className='fas fa-caret-down' />
            </div>
              {dropdown2 && <Dropdown2/>}
          </li>
        </ul>
      </nav>
        </animated.nav>
    );
}

export default NavBar;

