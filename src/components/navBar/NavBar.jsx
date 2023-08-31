import React, { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring';
import { NavLink } from "react-router-dom";
import './NavBar.css';
import fte from "../../img/fte.png";

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
        transform: isScrolled ? 'translateY(0)' : 'translateY(-100%)',
    });

    return (
        <animated.nav style={navBarAnimation} className={isScrolled ? "navBar scrolled" : "navBar"}>
            <div className="landing-header-logo">
                <img src={fte} alt="Logo" />
            </div>
            <div className="nav-content" >
                <ul>
                    <li>
                        <NavLink className='navLink ' to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink ' to="/programme">Programme</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink ' to="/reservation">Réservation</NavLink>
                    </li>   
                    <li>
                        <NavLink className='navLink' to="/jeu-et-concours">Jeu et Concours</NavLink>
                    </li>
                    <li>
                        <NavLink className='navLink' to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </animated.nav>
    );
}

export default NavBar;
