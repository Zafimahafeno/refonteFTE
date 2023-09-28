import React, { useRef, useState } from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import NavBar from '../../components/navBar/NavBar';
import './programme.css';

// importation des images
import ouverture from '../../img/ouverture.png'

function Programme() {
  const[toggle, setToggle] = useState(1)

  function updateToggle(id){
    setToggle(id)
  }
  return (
    <div> 
      <Sidebar/>
      {/* <NavBar/> */}
      <div className="agenda-container">
        <div className="agenda-header">
          <h1 className="agenda-titre">
            Ordre du jour du 06 au 09 Décembre 2023
          </h1>
          <div className="agenda-descri">
            ...
          </div>
        </div>
        <div className="agenda-detail">
          <div className="jour-container">
            <div   className={`date ${toggle === 1 ? 'activeToggle' : ''}`} onClick={()=>updateToggle(1)}>Mercredi 06 </div>
            <div className={`date ${toggle === 2 ? 'activeToggle' : ''}`} onClick={()=>updateToggle(2)}>Jeudi 07 </div>
            <div className={`date ${toggle === 3 ? 'activeToggle' : ''}`} onClick={()=>updateToggle(3)}>Vendredi 08 </div>
            <div  className={`date ${toggle === 4 ? 'activeToggle' : ''}`} onClick={()=>updateToggle(4)}>Samedi 09 </div>
        </div>
        {/* mer 06 */}
        <div  className= {toggle === 1 ? "show-detail-container" : "hide-detail-container"}>
          <div className="detail-boite">
              <div className="heure"> 09:30</div>
              <div className="activite">
                <p>Ouverture officielle</p>
                <img src={ouverture} alt="" />
                </div>
              <div className="remarque"></div>
          </div>
          <div className="detail-boite">
              <div className="heure">14:00</div>
              <div className="activite">
                <p>Salon des entreprises</p>
                <img src="" alt="" />
              </div>
              <div className="remarque"></div>
          </div>
        </div>
        {/* jeu 07 */}
        <div className= {toggle === 2 ? "show-detail-container" : "hide-detail-container"}>
          <div className="detail-boite">
              <div className="heure"> 09:00</div>
              <div className="activite">
                <div className="activite-p">
                <p>MasterClass sur ... </p>
                <span>avec ....</span>
                </div>
                
                <img src="" alt="" />
                 
              </div>
              <div className="remarque"></div>
          </div>
          <div className="detail-boite">
              <div className="heure">14:00</div>
              <div className="activite">
                
                <p>Debut du Hackaton</p>
                <img src="" alt="" />
              </div>
              <div className="remarque"></div>
          </div> 
          <div className="detail-boite">
              <div className="heure">14:30</div>
              <div className="activite">
                 
              <div className="activite-p">
                <p>MasterClass sur ... </p>
                <span>avec ....</span>
                </div>
                 <img src="" alt="" />
                 
              </div>
              <div className="remarque"></div>
          </div>
        </div>
        {/* ven 08 */}
        <div className= {toggle === 3 ? "show-detail-container" : "hide-detail-container"}>
          <div className="detail-boite">
              <div className="heure"> 09:00</div>
              <div className="activite">
                
              <div className="activite-p">
                <p>MasterClass sur ... </p>
                <span>avec ....</span>
                </div>
                <img src="" alt="" />
                 
              </div>
              <div className="remarque"></div>
          </div>
          <div className="detail-boite">
              <div className="heure">14:00</div>
              <div className="activite">
               
                <p>Concours Jeu vidéo</p>
                <img src="" alt="" />
              </div>
              <div className="remarque"></div>
          </div> 
        </div>
          {/* sam 09 */}
        <div className= {toggle === 4 ? "show-detail-container" : "hide-detail-container"}>
          <div className="detail-boite">
              <div className="heure"> 09:00</div>
              <div className="activite">
                
                <p>Présentation des projets numériques</p>
                <img src="" alt="" />
              </div>
              <div className="remarque"></div>
          </div>
          <div className="detail-boite">
              <div className="heure">14:00</div>
              <div className="activite">
                
                <p></p>
                <img src="" alt="" />
              </div>
              <div className="remarque"></div>
          </div> 
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Programme