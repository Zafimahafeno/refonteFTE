import React,{useEffect,useState} from "react";
import { NavLink ,useLocation } from "react-router-dom";
import './Footer.css';
import { FaFacebook} from "react-icons/fa";
import fte from "../../img/fte.png";

const Footer = () =>{

    // footer nav
  const location = useLocation();


  const [activeLink, setActiveLink] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);


  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
    return(
        <div className="footer">
            <div className="footer-logo">
            <img src={fte} alt="" />
            </div>
            <div className="footer-nav">
            <ul className="ulFooter">
                <li>
                <NavLink
                className={`navLinkFooter ${location.pathname === "/" ? "activeFooter" : ""}`}
                to="/"
                >
                Accueil
                </NavLink>
            </li>
            <li>
                <NavLink
                className={`navLinkFooter ${location.pathname === "/Programme" ? "activeFooter" : ""}`}
                to="/Programme"
                >
                Agenda
                </NavLink>
            </li>
            <li>
                <NavLink
                className={`navLinkFooter ${location.pathname === "/Jeu" ? "activeFooter" : ""}`}
                to="/Jeu"
                >
                Concours
                </NavLink>
            </li>
                <li>
                
                    <div 
                    className={`navLinkFooter ${showDropdown ? 'activeFooter' : ''}`} id="dropdown"
                    
                    onClick={handleClick}
                    >
                    Je participe
                    </div>
                    { showDropdown &&(
                    <ul className="dropdown-content"
                    
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
            </div>
            <div className="footer-icon">
                <div className="reseaux-sociaux">
                    <FaFacebook/>
                </div>
                <div className="qr-code">
                    
                </div>
            </div>
            <div className="copyright">
             <p>  &copy; 2023 ||   Copyright   || FTE </p>
            </div>
        </div>
    )
}

export default Footer;