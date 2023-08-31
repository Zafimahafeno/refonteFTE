import React, { useState, useEffect } from 'react';
import './Home.css';
import fte from "../../img/fte.png";
import Sidebar from '../../components/Sidebar/sidebar'
import NavBar from '../../components/navBar/NavBar';
import { useSpring, animated } from 'react-spring';
import { FaCalendar, FaMapMarkerAlt, FaPlayCircle } from 'react-icons/fa';
import { BiCaretRightCircle } from 'react-icons/bi';
import org1 from "../../img/org-photo/org1.png";
import org3 from "../../img/org-photo/org3.png";
import org4 from "../../img/org-photo/org4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Scrollbar, A11y } from 'swiper';


// Import Swiper styles
import 'swiper/css';






const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Définir l'animation de fondu
  const fadeUp = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(0px)',
  });

  // Fonction pour détecter le défilement
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    }
  };

  // Écouter l'événement de défilement lors de la montée du composant
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (

    <div className="container">
     <div className="landing-page">
         <div className="landing-header"> 
           <div className="landing-header-logo">
             <img src={fte} alt="" />
           </div>
           <Sidebar/>

          </div>
          {/* la nav bar qui apparait quand on scroll */}
          <NavBar/>

          {/* contenu sur le landing page  */}
          <div className="landing-content">
            <div className="grand-titre">
             <h1>BIENVENUE À LA <br /> <span>FIANARA <span>TECH</span> EXPO</span></h1>
             <p>
             <span>
                <FaCalendar /> Du 06 au 09 Décembre 2023
              </span> <br />
              <span>
                <FaMapMarkerAlt /> Lieu: KSLMD Andrainjato Fianarantsoa
              </span>
            </p>
             <a href="#about" className='about-btn'>À propos de l'événement</a> <br />
             <a href="#" className='play-btn'> <FaPlayCircle /></a>
            </div>
           {/* <animated.div style={fadeUp} className="fade-up-element"> 
              <div className="section-info">
                <div className="info-para">
                   <div className="info-titre">FIANARA TECH EXPO</div>
                   <p>Un des plus grands évènements jamais vu à Fianrantsoa,organisé par Origami Tech et ses collaborateurs.</p>
               </div>
               <div className="info-lieu">
                 <div className="info-titre">LIEU</div>
                 <p>KSLMD Andrainjato Fianrantsoa</p>
               </div>
               <div className="info-date">
                  <div className="info-titre">DATE</div>
                  <p>Du 06 au 09 Décembre 2023</p>
               </div>
             </div>
           </animated.div> */}
          </div>
          
      </div>

    {/* ****a propos de fte*** */}
      <div className="about-content">
           <div className="about-titre">
               A propos 
           </div>
           <div className="about-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas maxime illo necessitatibus totam sunt aut eaque ipsam, laborum dolores voluptatum inventore cupiditate labore veniam ipsum at ut placeat vero?

           </div>
      </div>
      
      {/* ****section de presentation des organisateurs */}
      <div className="section-organisateur" id='about'>
      <Swiper
        navigation={true}
        scrollbar={true}
        a11y={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Add autoplay with a 3-second delay
        loop={true} // Enable loop
        spaceBetween={5}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
       >
          <SwiperSlide>
            <div className="org-slide">
             <div className="photo">
                <img src={org1} alt="" />
              </div>
             <div className="org-about">
                <div className="org-description">
                  <div className="org-name">
                    ORIGAMI TECH
                  </div>
                  <div className="org-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex, libero, perspiciatis rem dolor minima odio asperiores eum veniam, fuga cumque omnis.
                  </div>
                </div>
                <div className="org-logo">

                </div>
             </div>
        
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="org-slide">
             <div className="photo">
                <img src={org3} alt="" />
              </div>
             <div className="org-about">
                <div className="org-description">
                  <div className="org-name">
                    ORIGAMI TECH
                  </div>
                  <div className="org-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex, libero, perspiciatis rem dolor minima odio asperiores eum veniam, fuga cumque omnis.
                  </div>
                </div>
                <div className="org-logo">

                </div>
             </div>
        
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="org-slide">
             <div className="photo">
                <img src={org4} alt="" />
              </div>
             <div className="org-about">
                <div className="org-description">
                  <div className="org-name">
                    ORIGAMI TECH
                  </div>
                  <div className="org-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex, libero, perspiciatis rem dolor minima odio asperiores eum veniam, fuga cumque omnis.
                  </div>
                </div>
                <div className="org-logo">

                </div>
             </div>
        
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="org-slide">
             <div className="photo">
                <img src={org3} alt="" />
              </div>
             <div className="org-about">
                <div className="org-description">
                  <div className="org-name">
                    ORIGAMI TECH
                  </div>
                  <div className="org-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex, libero, perspiciatis rem dolor minima odio asperiores eum veniam, fuga cumque omnis.
                  </div>
                </div>
                <div className="org-logo">

                </div>
             </div>
        
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="org-slide">
             <div className="photo">
                <img src={org1} alt="" />
              </div>
             <div className="org-about">
                <div className="org-description">
                  <div className="org-name">
                    ORIGAMI TECH
                  </div>
                  <div className="org-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex, libero, perspiciatis rem dolor minima odio asperiores eum veniam, fuga cumque omnis.
                  </div>
                </div>
                <div className="org-logo">

                </div>
             </div>
        
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="org-slide">
             <div className="photo">
                <img src={org4} alt="" />
              </div>
             <div className="org-about">
                <div className="org-description">
                  <div className="org-name">
                    ORIGAMI TECH
                  </div>
                  <div className="org-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ex, libero, perspiciatis rem dolor minima odio asperiores eum veniam, fuga cumque omnis.
                  </div>
                </div>
                <div className="org-logo">

                </div>
             </div>
        
            </div>
          </SwiperSlide>
          
      
      
        </Swiper>
      </div>
    </div>

  );
};

export default Home;
