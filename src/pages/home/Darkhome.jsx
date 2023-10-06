import React,{useEffect,useState} from "react";

import './Darkhome.css';
import { FaLongArrowAltUp} from "react-icons/fa";
 
import background from "../../img/landing-bg.mp4";
import Sidebar from '../../components/Sidebar/sidebar';
import NavBar from '../../components/navBar/NavBar';
// import Masterclass from "../../components/masterclass/masterclass";
import fteAbout from "../../img/fteA.png";
import Footer from "../../components/footer/Footer";
import { JeuData } from "../../components/jeuData/JeuData";

import Slidercomponent from '../../components/slider/slider'


// import des images
import imagepro1 from '../../img/gallery/3.jpg'
import imagepro2 from '../../img/gallery/2.jpg'
import imagepro3 from '../../img/gallery/9.jpg'
import imagepro4 from '../../img/gallery/4.jpg'
// import imagepro5 from '../../img/gallery/5.jpg'

import imageJeu1 from '../../img/Mannette@4x.png'
import imageJeu2 from '../../img/Ordinateur@4x.png'






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

  // slide jeu
  const [currentIndex, setCurrentIndex] = useState(1); // Initialisé à 1
  const delay = 5000; 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === JeuData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? JeuData.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    // Démarrez le défilement automatique lorsque le composant est monté
    const intervalId = setInterval(nextSlide, delay);

    // Arrêtez le défilement automatique lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);


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
                         <p>BIENVENUE AU </p> 
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
                    <h2>  Coup d’ oeil sur </h2>
                    <div className="titre-colore"><img src={fteAbout} alt="" /></div>
                  </div>
    
                  <div className="about-para">
                       <p>
                       FTE ,le salon de l’année , met en avant les talents, la créativité et
                        l'innovation technologique dans la ville de Fianarantsoa  afin de  promouvoir
                         le réseautage, les présentations et les opportunités de partenariat. Nous mettons tout  ceci 
                       en œuvre pour que Fianarantsoa soit un véritable hub technologique en plein essor.
                       </p>

                   </div>
              </div>

              
                {/* section programme */}


              {/* Jeu et Hackathon  */}
              <div className="jeu-container">
                <div className='jeu-boite'>
                    <div className="jeu-image">
                      {JeuData.map((slide, index) => (
                            <img
                              key={slide.key}
                              src={slide.image}
                              alt={`Slide ${index}`}
                              className={`fade-in-right ${index === currentIndex ? 'photoActive' : ''}`}
                            />
                        ))}
                    </div>
                    
                 
                  
                      {JeuData.map((slide, index) => (
                          <div
                            key={index}
                            className={`jeu-descri ${index === currentIndex ? "descriActive" : ""}`}
                          >
                            <h3>{slide.titreJeu}</h3>
                            <p>{slide.descriJeu}</p>
                            <a href="/" className="btn-16">
                              Voir plus
                            </a>
                          </div>
                          
                        ))}

                </div>
                    
                    
             
              </div>



                {/* section masterclass */}
              {/* <Masterclass/> */}

              
               {/* ****section de presentation des organisateurs */}
               <Slidercomponent/>

          

               {/* le bouton back to top  */}
               {showBackToTop && (
                    <div className="back-to-top back-to-top-fixed">
                        <button onClick={toTop} className="top"><FaLongArrowAltUp/></button>
                    </div>
                 )}

                   

                {/* footer */}
                <Footer/> 
          </div>
      </div>
        

    
    )
}

export default Darkhome;