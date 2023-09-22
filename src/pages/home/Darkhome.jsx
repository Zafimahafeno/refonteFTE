import React,{useEffect,useState} from "react";

import './Darkhome.css';
import { FaLongArrowAltUp} from "react-icons/fa";
import background from "../../img/landing-bg.mp4";
import Sidebar from '../../components/Sidebar/sidebar';
import NavBar from '../../components/navBar/NavBar';
import Masterclass from "../../components/masterclass/masterclass";

import Slider from '../../components/slider/slider'


// import des images
import imagepro1 from '../../img/gallery/3.jpg'
import imagepro2 from '../../img/gallery/2.jpg'
import imagepro3 from '../../img/gallery/9.jpg'
import imagepro4 from '../../img/gallery/4.jpg'
import imagepro5 from '../../img/gallery/5.jpg'







const Darkhome = () =>{
   const [showBackToTop, setShowBackToTop] = useState(false);
   const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
   const handleScroll = () => {
    if (window.scrollY > 100) { // Vous pouvez ajuster cette valeur selon vos préférences
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
// scroll to a propos
  const scrollToSection = () => {
    const sectionToScrollTo = document.getElementById('about');
    if (sectionToScrollTo) {
      sectionToScrollTo.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return(
        <div className="big-container">
            <NavBar/> 
            <div className="first-container">
            
                {/* Landing page avec le background video */}
                <video autoPlay loop muted playsInline>
                    <source src={background} />
                </video>
             <div className="landing-page">
                 <div className="landing-header">
                  
                    <Sidebar/>
                    
                 </div>
                 
                 
            
                 {/* contenu sur le landing page  */}
                 <div className="landing-content">
                     <div className="grand-titre">
                         <h4>BIENVENUE À LA </h4> 
                         <h1> <span>FIANARA <span>TECH</span> EXPO</span></h1>
                        
                         <button className="about-btn" onClick={scrollToSection}>
                            À propos de l'événement
                         </button>
                          {/* <a href="#" className='play-btn'> <FaPlayCircle /></a> */}
                      </div>
                 </div>
             </div>

             

         </div>
          
           
          

              
           <div className="second-container">
             {/* ****a propos de fte*** */}
              <div className="about-content" id='about'>
                  {/* <div className="tiret"></div> */}
                  <div className="about-titre">
                    <h2> A propos </h2>
                  </div>
    
                  <div className="about-para">
                       <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. A quas maxime illo necessitatibus totam sunt aut eaque ipsam, laborum dolores voluptatum inventore cupiditate labore veniam ipsum at ut placeat vero?
                       </p>

                   </div>
              </div>

              
                {/* section programme */}

                <div className="fte-pro">
                    <div className="titre-container">
                        {/* <div className="tiret"></div> */}
                            <div className="about-titre">
                                <h2>Au programme </h2>
                                <p>Retrouvez les divers activités durant FIANARA TECH EXPO </p>
                            </div>
                        </div>
                        <div className="pro-container">
                            <div className="pro-boite">
                                <div className="pro-image">
                                    <img src={imagepro1} alt=""/>
                                </div>
                                
                                <div className="pro-info">
                                    <h1 className="pro-titre">
                                       Salon des entreprises
                                    </h1>
                                    <p className="pro-descri">
                                        Divers stands des  differentes entreprises dans le pays. 
                                    </p>
                                    <a href="/">Decouvrir le programme</a>
                                </div>
                            </div>
                            <div className="pro-boite">
                              <div className="pro-image">
                                    <img src={imagepro2} alt=""/>
                                </div>
                                <div className="pro-info">
                                    <h1 className="pro-titre">
                                       Masterclass
                                    </h1>
                                    <p className="pro-descri">
                                        Différents Masterclass 
                                    </p>
                                    <a href="/">Decouvrir le programme</a>
                                </div>
                            </div>
                            <div className="pro-boite">
                              <div className="pro-image">
                                    <img src={imagepro3} alt=""/>
                                </div>
                                <div className="pro-info">
                                    <h1 className="pro-titre">
                                         Jeu et concours 
                                    </h1>
                                    <p className="pro-descri">
                                        Participer au divers jeu et concours
                                    </p>
                                    <a href="/">Decouvrir le programme</a>
                                </div>
                            </div>
                            <div className="pro-boite">
                              <div className="pro-image">
                                    <img src={imagepro4} alt=""/>
                                </div>
                                <div className="pro-info">
                                    <h1 className="pro-titre">
                                        Hackathon
                                    </h1>
                                    <p className="pro-descri">
                                        
                                    </p>
                                    <a href="/">Decouvrir le programme</a>
                                </div>
                            </div>
                            <div className="pro-boite">
                               <div className="pro-image">
                                    <img src={imagepro5} alt=""/>
                                </div>
                                <div className="pro-info">
                                    <h1 className="pro-titre">
                                      Un After Party
                                    </h1>
                                    <p className="pro-descri"></p>
                                    <a href="/">Decouvrir le programme</a>
                                </div>
                            </div>
                        </div>
                    </div>
             </div>
               {/* ****section de presentation des organisateurs */}
               <Slider/>

             {/* section masterclass */}
              {/* <Masterclass/> */}

               {/* le bouton back to top  */}
               {showBackToTop && (
                    <div className="back-to-top back-to-top-fixed">
                        <button onClick={toTop} className="top"><FaLongArrowAltUp/></button>
                    </div>
                 )}
              <div className="footer">
                 
              </div>
        </div>
        

    
    )
}

export default Darkhome;