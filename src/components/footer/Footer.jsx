import React,{useEffect,useState} from "react";
import { NavLink ,useLocation } from "react-router-dom";
import './Footer.css';
import { FaFacebook} from "react-icons/fa";
import fte from "../../img/fte.png";

const Footer = () =>{

    // footer nav
  const location = useLocation();


  const [activeLink, setActiveLink] = useState("");

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleClick1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const handleClick2 = () => {
    setShowDropdown2(!showDropdown2);
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
                    className={`navLinkFooter ${showDropdown2 ? 'activeFooter' : ''}`} id="dropdown"
                    
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