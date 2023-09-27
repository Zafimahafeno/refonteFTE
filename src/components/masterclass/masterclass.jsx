import React, { useState , useEffect} from 'react';
import MasterclassData from './masterclassData'; 
import MasterclassThumbs from './masterclassthumb';
import { FaCalendar, FaClock} from 'react-icons/fa';
import './masterclass.css'

const Masterclass = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Initialisé à 1
  const delay = 3000; 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === MasterclassData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? MasterclassData.length - 1 : prevIndex - 1));
  };
  useEffect(() => {
    // Démarrez le défilement automatique lorsque le composant est monté
    const intervalId = setInterval(nextSlide, delay);

    // Arrêtez le défilement automatique lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-section">
        <div className="titre-container">
           <div className="tiret"></div>
           <div className="about-titre">
               <h2></h2>
           </div>
        </div>
               
       
         <div className="slider-container">
           
            <div className="image-info">
             <h2>{MasterclassData[currentIndex].title}</h2>
             <p>{MasterclassData[currentIndex].name} , {MasterclassData[currentIndex].fonction}  </p>
           </div>
            
            <div className="thumbnails-container">
            {MasterclassThumbs.map((thumb,index) => (
            <div id="thumbnails"  
              key={thumb.id}
              className={index=== currentIndex ? 'actif' : ''}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="thumbnail-titre">{thumb.title}</div>
              {/* <div className="thumbnail-speacker">
                <span className="thumbnail-image">
                    <img src={thumb.src}  alt={`Thumbnail ${index}`}/>
                </span>
                
                <span>{thumb.name}</span>
              </div> */}
              <div className="thumbnail-date"><FaCalendar /> {thumb.date}</div>
              <div className="thumbnail-heure"><FaClock /> {thumb.heure}</div>
                
            </div>
          
            
              ))}
            </div>     
         </div>
         {/* <button onClick={prevSlide}>Précédent</button>
       <button onClick={nextSlide}>Suivant</button> */}
          <img className='image' src={MasterclassData[currentIndex].src} alt={`Slide ${currentIndex}`} />  

    </div>























  );
};

export default Masterclass;
