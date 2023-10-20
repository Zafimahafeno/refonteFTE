import React  from 'react';
import Sidebar from '../../components/Sidebar/sidebar';
import Footer from "../../components/footer/Footer";
import './Hackathon.css';
import ordinateur from '../../img/ordi.png';
import background from '../../img/25328.jpg';
import { NavLink } from 'react-router-dom'; // Importez NavLink depuis react-router-dom

const Hackathon = () => {
  return (
    <div className="hackathon">
      <Sidebar />
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="contenu">
        <div className="ordinateur">
          <img src={ordinateur} alt="" />
        </div>
        <div className="content">
          <h2>NEXT GEN ELO</h2>
          <h1>BOOSTING</h1>
          <p>We meet very high requirements that you can expect from a trusted League of Legends ranked service</p>
          <div>
            <button className="button">CHECK DEMO</button>
            <br />
            <br />
            <br />
            <br />
                <NavLink // Utilisez NavLink pour créer le lien vers '/jeux'
                  className='participer-button'
                  to='/ParticipeHackaton'
                >
                  Participer
                </NavLink>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>

    
  );
}

export default Hackathon;