import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import Footer from "../../components/footer/Footer";
import './Partenaire.css';

// import des images
import ptlogo1 from '../../img/logopt/1.png'
import ptlogo2 from '../../img/logopt/2.jfif'
import ptlogo3 from '../../img/logopt/3.png'
import ptlogo4 from '../../img/logopt/4.jfif'
import ptlogo5 from '../../img/logopt/5.jfif'
import ptlogo6 from '../../img/logopt/6.png'
import ptlogo7 from '../../img/logopt/7.png'
import ptlogo8 from '../../img/logopt/8.jfif'
import ptlogo9 from '../../img/logopt/9.jfif'
import ptlogo10 from '../../img/logopt/10.png'
import ptlogo11 from '../../img/logopt/11.png'
 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';


const Partenariat = () => {
    const[boiteActif, setBoiteActif] = useState(1)
    const boiteMax = 4; // Nombre maximal de boîtes
  const delay = 4000; // Délai en millisecondes entre chaque changement de boîte

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       updateBoiteActif(boiteActif === boiteMax ? 1 : boiteActif + 1);
//     }, delay);

  // Fonction pour mettre à jour boiteActif
  function updateBoiteActif(id) {
    setBoiteActif(id);
  }

  useEffect(() => {
    // Utilisez window.innerWidth pour obtenir la largeur de l'écran
    const isMobile = window.innerWidth <= 769; // Par exemple, déterminez ici la largeur à laquelle vous considérez que c'est un appareil mobile

    // Utilisez isMobile pour décider si vous devez activer ou désactiver le useEffect
    if (!isMobile) {
      const intervalId = setInterval(() => {
        updateBoiteActif(boiteActif === boiteMax ? 1 : boiteActif + 1);
      }, delay);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [boiteActif, delay]);

 
    return (
        <div className='partenariat'>
        <Sidebar/>
         <div className="pt-container">
           <div  className={`pt-boite un ${boiteActif === 1 ? 'activeBoite' : ''}`} onClick={()=>updateBoiteActif(1)}>
               
                   <div className="pt-titre">
                     Sponsors Officiel
                   </div>
                   <div className="pt-contenu">
                       petite contenu a propos
                   </div>
                   <div className="pt-bouton">
                       <a href=""> Je participe </a>
                   </div>
               
           </div>
           <div className={`pt-boite deux ${boiteActif === 2 ? 'activeBoite' : ''}`} onClick={()=>updateBoiteActif(3)}>
                   
                   <div className="pt-titre">
                     Sponsors 
                   </div>
                   <div className="pt-contenu">
                       petite contenu a propos
                   </div>
                   <div className="pt-bouton">
                       <a href=""> Je participe </a>
                   </div>
               
               
           </div>
          
           <div className={`pt-boite trois ${boiteActif === 3 ? 'activeBoite' : ''}`} onClick={()=>updateBoiteActif(3)}>
                   
                  <div className="pt-titre">
                     Partenaire Officiel
                   </div>
                   <div className="pt-contenu">
                       petite contenu a propos
                   </div>
                   <div className="pt-bouton">
                       <a href=""> Je participe </a>
                   </div>
               
           </div>
           <div className={`pt-boite quatre ${boiteActif === 4 ? 'activeBoite' : ''}`} onClick={()=>updateBoiteActif(4)}>
               
                  <div className="pt-titre">
                     Partenaire
                   </div>
                   <div className="pt-contenu">
                       petite contenu a propos
                   </div>
                   <div className="pt-bouton">
                       <a href=""> Je participe </a>
                   </div>
               
           </div> 
         </div>

             {/* format responsive */}
             <div className="pt-container-responsive">
             <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    // loop={true}
                    // navigation={true}
                    modules={[Pagination]}
                    className="mySwiper"
                    onSlideChange={(swiper) => {
                        updateBoiteActif(swiper.activeIndex + 1);
                      }}
                >
                    <SwiperSlide>
                        <div  className="pt-boite un" onClick={()=>updateBoiteActif(1)}>
                
                        <div className="pt-titre">
                            Sponsors Officiel
                        </div>
                        <div className="pt-contenu">
                            petite contenu a propos
                        </div>
                        <div className="pt-bouton">
                            <a href=""> Je participe </a>
                        </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div  className="pt-boite deux" onClick={()=>updateBoiteActif(2)}>
                    
                        <div className="pt-titre">
                            Sponsors 
                        </div>
                        <div className="pt-contenu">
                            petite contenu a propos
                        </div>
                        <div className="pt-bouton">
                            <a href=""> Je participe </a>
                        </div>
                                    
                        </div>
          
                    </SwiperSlide>
                    <SwiperSlide>
                         <div className="pt-boite trois" onClick={()=>updateBoiteActif(3)}>
                   
                         <div className="pt-titre">
                            Partenaire Officiel
                        </div>
                        <div className="pt-contenu">
                            petite contenu a propos
                        </div>
                        <div className="pt-bouton">
                            <a href=""> Je participe </a>
                        </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="pt-boite quatre" onClick={()=>updateBoiteActif(4)}>
                
                        <div className="pt-titre">
                            Partenaire
                        </div>
                        <div className="pt-contenu">
                            petite contenu a propos
                        </div>
                        <div className="pt-bouton">
                            <a href=""> Je participe </a>
                        </div>
                            
                        </div> 
                    </SwiperSlide>
                    
                </Swiper>
              
            </div>



         <div  className= {boiteActif === 1 ? "pt-logo fade-in-left": "hide"}    >
           <img src={ptlogo1}alt="" />
           <img src={ptlogo2}alt="" />
           <img src={ptlogo3}alt="" />
         </div>
         <div   className= {boiteActif === 2 ? "pt-logo  fade-in-left" : "hide"}>
           <img src={ptlogo4}alt="" />
           <img src={ptlogo5}alt="" />
           <img src={ptlogo6}alt="" />
            </div>
            <div  className= {boiteActif === 3 ? "pt-logo  fade-in-left": "hide"}>
                <img src={ptlogo7}alt="" />
            <img src={ptlogo8}alt="" />
            <img src={ptlogo9}alt="" />
            </div>
            <div   className= {boiteActif === 4 ? "pt-logo  fade-in-left" : "hide"}>
                <img src={ptlogo9}alt="" />
            <img src={ptlogo10}alt="" />
            <img src={ptlogo11}alt="" />
            </div>  

            <Footer/>
       </div>
    )
}

export default Partenariat;