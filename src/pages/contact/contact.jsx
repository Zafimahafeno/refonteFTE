import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar';
import NavBar from '../../components/navBar/NavBar';
import './contact.css'
import {FaFacebook, FaTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";
import {FaLocationDot} from "react-icons/fa6";
import {FaPhone} from "react-icons/fa6";


const Contact = () => {
  return (
    <div className="contact">
        <Sidebar/>
        {/* <NavBar/> */}
        <section>
        
        <div class="container">
            <div class="contactInfo">
                <div>
                    <h2> Contactez nous </h2>
                    <ul class="info">
                        <li>
                            <span><FaLocationDot/></span>
                            <span>
                               Bloc SCA CCO, porte n°05 , Isaha Fianarantsoa
                            </span>
                        </li>
                        <li>
                            <span><FaEnvelope/></span>
                            <span>
                               origamitechgrp@gmail.com
                            </span>
                        </li>
                        <li>
                            <span><FaPhone/></span>
                            <span>
                               +261 34 00 000 00
                            </span>
                        </li>
                    </ul>
                </div>
                <ul class="sci">
                    <li> <a href="#"><FaFacebook/></a></li>
                    <li> <a href="#"><FaInstagram/></a></li>
                    <li> <a href="#"><FaLinkedin/></a></li>
                    <li> <a href="#"><FaTwitter/></a></li>


                </ul>
            </div>
            <div class="contactForm">
                
                <div class="formBox">
                    <div class="inputBox w50">
                        <input type="text" className="styled-input" required/>
                        <span>Nom</span>
                    </div>

                  

                    <div class="inputBox w50">
                        <input type="text" className="styled-input"  required/>
                        <span>Adresse Email</span>
                    </div>

                    <div class="inputBox w50">
                        <input type="text" className="styled-input"  required/>
                        <span>Numero Telephone</span>
                    </div>

                    <div class="inputBox w100">
                        <textarea className="styled-input"  required></textarea>
                        <span>Ecrire votre message...</span>
                    </div>

                    <div class="inputBox w100">
                        <input type="submit" value="Envoyer"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
           
    </div>
      
      
   
  );
};

export default Contact;