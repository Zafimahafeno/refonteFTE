import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import Footer from '../../components/footer/Footer';
import './programme.css';
 


const Programme = () => {
  const[toggle, setToggle] = useState(1)

  function updateToggle(id){
    setToggle(id)
  }
  return (
      <div className='programme'>
        <Sidebar/>
        <div className="date-container">
          
              <div   className={`date ${toggle === 1 ? 'activeToggle' : ''}`} onClick={()=>updateToggle(1)}>Matin </div>
              <div className={`date ${toggle === 2 ? 'activeToggle' : ''}`} onClick={()=>updateToggle(2)}>Après-midi </div>
          
          
        </div>
      <div className="big-boite-container">
           {/* matin */}
       
           <div id="boite-container"  className= {toggle === 1 ? "show-detail-container" : "hide-detail-container"}>
             <div className="date-active">Je veux mettre qlqch ici mais je sais pas encore.</div>
             <div className="flex-container">
                {/* mercredi */}
                <div className="boite-content mer-un">
                   <div className="boite-glassmorph">
                     <div className="jour">Mercredi</div>
                    
                      <div className="heure">08:00</div>
                      <div className="activite">Ouverture Officielle </div>
                      <div className="autre-contenu">Discours des autorités\ Présentation de l'événement et des organisateurs   </div>
                    </div>
                    
                </div>

                <div className="boite-content mer-deux">
                 <div className="boite-glassmorph">
                    <div className="jour">Mercredi</div>
                    
                      <div className="heure">11:00</div>
                      <div className="activite">Ouverture Officielle du Salon FTE</div>
                      <div className="autre-contenu">Visite et Ouverture Officielle des Stands du Salon FTE</div>
                    </div>
                    
                </div>

                <div className="boite-content mer-trois">
                  <div className="boite-glassmorph">
                    <div className="jour">Mercredi</div>
                   
                      <div className="heure">12:00</div>
                      <div className="activite">Cocktail d’Ouverture </div>
                    </div>
                    
                </div>
             </div>

             {/* jeudi */}
             <div className="flex-container">
                <div className="boite-content jeu-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Jeudi</div>
                    
                      <div className="heure">08:00</div>
                      <div className="activite">Salon FTE</div>
                      <div className="autre-contenu">Entrée gratuite</div>
                    </div>
                    
                </div>
                
             </div>
             {/* vendredi */}
             <div className="flex-container">
                <div className="boite-content ven-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                   
                      <div className="heure">08:00</div>
                      <div className="activite">Masterclass 3</div>
                      <div className="autre-contenu">Entrée gratuite et Invitation payante</div>
                    </div>
                   
                </div>

                <div className="boite-content ven-deux">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                   
                      <div className="heure">10:00</div>
                      <div className="activite">Speed Recruting 2</div>
                      <div className="autre-contenu">Visite et Ouverture Officielle des Stands du Salon FTE</div>
                    </div>
                    
                </div>
                <div className="boite-content ven-trois">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                    
                      <div className="heure">11:00</div>
                      <div className="activite">Masterclass 4</div>
                      <div className="autre-contenu">Entrée gratuite et Invitation payante</div>
                    </div>
                    
                </div>
             </div>
             {/* samedi */}
             <div className="flex-container">
                <div className="boite-content sam-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Samedi</div>
                    
                      <div className="heure">08:00</div>
                      <div className="activite"> Divers jeux et Concours, Final Hackathon FTE</div>
                      <div className="autre-contenu">Concours Jeu Vidéo, concours DJ-ing, Escape Game</div>
                    </div>
                    
                </div>
             </div>
           </div>

           {/* apres-midi */}

           <div id="boite-container"  className= {toggle === 2 ? "show-detail-container" : "hide-detail-container"}>
             <div className="date-active">Je veux mettre qlqch ici mais je sais pas encore.</div>
             <div className="flex-container">
                {/* mercredi */}
                <div className="boite-content mer-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Mercredi</div>
                   
                      <div className="heure">17:00</div>
                      <div className="activite">Fermeture </div>
                     
                    </div>
                    
                </div>
             </div>

             {/* jeudi */}
             <div className="flex-container">
                <div className="boite-content jeu-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Jeudi</div>
                    
                      <div className="heure">14:00</div>
                      <div className="activite">Masterclass 1</div>
                      <div className="autre-contenu">Entrée gratuite et Invitation Payante</div>
                    </div>
                   
                </div>
                <div className="boite-content jeu-deux">
                  <div className="boite-glassmorph">
                    <div className="jour">Jeudi</div>
                    
                      <div className="heure">16:00</div>
                      <div className="activite">Speed Recruting 1</div>
                      <div className="autre-contenu">Entrée gratuite </div>
                    </div>
                    
                </div>
                <div className="boite-content jeu-trois">
                  <div className="boite-glassmorph">
                    <div className="jour">Jeudi</div>
                    
                      <div className="heure">19:00</div>
                      <div className="activite">Cocktail de réseautage 1</div>
                      <div className="autre-contenu">Invitation Payante</div>
                    </div>
                    
                </div>
                
             </div>
             {/* vendredi */}
             <div className="flex-container">
                <div className="boite-content ven-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                   
                      <div className="heure">13:00</div>
                      <div className="activite">Speed Recruting 3</div>
                      <div className="autre-contenu">Entrée gratuite</div>
                    </div>
                    
                </div>

                <div className="boite-content ven-deux">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                    
                      <div className="heure">14:00</div>
                      <div className="activite">Masterclass 5</div>
                      <div className="autre-contenu">Entrée gratuite et Invitation payante</div>
                    </div>
                    
                </div>
                <div className="boite-content ven-trois">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                    
                      <div className="heure">16:00</div>
                      <div className="activite">Speed Recruting 4</div>
                      <div className="autre-contenu">Entrée gratuite</div>
                    </div>
                    
                </div>
                <div className="boite-content ven-quatre">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                    
                      <div className="heure">17:00</div>
                      <div className="activite">Masterclass 6</div>
                      <div className="autre-contenu">Entrée gratuite et Invitation payante</div>
                    </div>
                    
                </div>
                <div className="boite-content ven-cinq">
                  <div className="boite-glassmorph">
                    <div className="jour">Vendredi</div>
                   
                      <div className="heure">19:00</div>
                      <div className="activite">Coktail de reseautage 2</div>
                      <div className="autre-contenu">Invitation payante</div>
                    </div>
                    
                </div>
             </div>
             {/* samedi */}
             <div className="flex-container">
                <div className="boite-content sam-un">
                  <div className="boite-glassmorph">
                    <div className="jour">Samedi</div>
                    
                      <div className="heure">15:00</div>
                      <div className="activite"> Fermeture Officielle, Remise des Prix</div>
                    </div>
                </div>
                <div className="boite-content sam-deux">
                  <div className="boite-glassmorph">
                    <div className="jour">Samedi</div>
                    
                      <div className="heure">17:00</div>
                      <div className="activite">Festivités</div>
                      <div className="autre-contenu">Animation DJ et Artiste local</div>
                    </div>
                    
                </div>
             </div>
           </div>
        </div>
        <Footer/>
      </div>
    
  )
}

export default Programme