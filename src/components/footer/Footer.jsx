import React,{useEffect,useState} from "react";
import { NavLink ,useLocation } from "react-router-dom";
import './Footer.css';
import { FaFacebook,FaPhoneAlt ,FaEnvelope} from "react-icons/fa";
import fte from "../../img/fte.png";


const Footer = () =>{

    return(
        <div className="footer">
          <div className="footer-flex">
            <div className="footer-logo">
              <img src={fte} alt="" />
              </div>
              <div className="footer-coordonne">
                <h3>CONTACT</h3>
                <p><FaPhoneAlt/> 038 61 069 97</p>
                <p><FaEnvelope/> origamitechgrp@gmail.com</p>
              </div>
              
              <div className="reseaux-sociaux">
                    <h3>RESEAU SOCIAL</h3>
                    <a href="https://www.facebook.com/profile.php?id=61551897785530">
                     <FaFacebook/>
                    </a>
                    
              </div>
              <div className="qr-code">
                      
              </div>
             
          </div>
          <div className="copyright">
             <p>  &copy; Origami Tech 2023 </p>
          </div> 
            
        </div>
    )
}

export default Footer;