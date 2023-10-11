

// import React, { useState } from 'react';
// import './Jeux.css';
// import gifImage from './florid-hands-holding-mobile-game-controller (1).gif';
// import axios from 'axios';

// function Jeu() {
//   const [inputs, setInputs] = useState({
//     name_pg: '',
//     mail_pg: '',
//     number_pg: '',
//     phone_pg: '',
//     name_lg: '',
//     dateInscription_pg: '',
//     payment_pg: '',
//   });
import React from 'react'
import Sidebar from '../../components/Sidebar/sidebar';
import fond from '../../img/Plan de travail 1@4x.png'

function Jeu() {
  return (
    <div className='jeu'>
      <Sidebar/>
      div
      <img src={fond} alt="" />
      </div>
  )
}

//   const [formStatus, setFormStatus] = useState(null); // Ajout de la variable d'état
//   const [file, setFile] = useState({}); // Ajout de la variable d'état

//   const handleInputChange = (event) => {
//     const { name, value, } = event.target;
//     setInputs((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//         console.log(inputs);
//   };

//   const handleChangeFile = (event) => {
//     const file = event.target.files[0];
//     setFile(file);
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formDataToSend = new FormData();

//     formDataToSend.append('name_pg', inputs.name_pg);
//     formDataToSend.append('mail_pg', inputs.mail_pg);
//     formDataToSend.append('number_pg', inputs.number_pg);
//     formDataToSend.append('phone_pg', inputs.phone_pg);
//     formDataToSend.append('name_lg', inputs.name_lg);
//     formDataToSend.append('dateInscription_pg', inputs.dateInscription_pg);
//     formDataToSend.append('payment_pg', inputs.payment_pg);
//     formDataToSend.append('photo_pg', file);

//     try {
//       const response = await axios.post('http://localhost:8081/Create_participant_game', formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         console.log('Formulaire soumis avec succès !');
//         setFormStatus('success'); // Définition de l'état de succès
//         // Réinitialisez le formulaire ou effectuez d'autres actions nécessaires
//       } else {
//         console.error('Erreur lors de la soumission du formulaire.');
//         setFormStatus('error'); // Définition de l'état d'erreur
//       }
//     } catch (error) {
//       console.error('Erreur lors de la soumission du formulaire :', error);
//       setFormStatus('error'); // Définition de l'état d'erreur en cas d'erreur
//     }
//   };

//   return (
//     <div>
//       {formStatus === 'success' ? ( // Affichage de la page de succès en cas de succès
//         <div>
//           <h2>Formulaire soumis avec succès !</h2>
//           {/* Vous pouvez afficher un message de réussite ou rediriger l'utilisateur vers une autre page ici */}
//         </div>
//       ) : formStatus === 'error' ? ( // Affichage de la page d'erreur en cas d'erreur
//         <div>
//           <h2>Erreur lors de la soumission du formulaire.</h2>
//           {/* Vous pouvez afficher un message d'erreur ici */}
//         </div>
//       ) : (
//         <div>
//           <h2 className="form-title">Participez à notre jeu concours !</h2>

//           <div className="form-container">
//             <div className="gifImage-container">
//               <img src={gifImage} alt="GIF" className="left-image" />
//             </div>

//             <form onSubmit={handleSubmit} className="form-wrapper">
//             <div className="input-section">
//             <div className="input-group">
//               <label>Nom :</label>
//               <input
//                 type="text"
//                 name="name_pg"
//                 value={inputs.name_pg}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
            
//             <div className="input-group">
//               <label>Email :</label>
//               <input
//                 type="email"
//                 name="mail_pg"
//                 value={inputs.mail_pg}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Numéro de Téléphone :</label>
//               <input
//                 type="tel"
//                 name="phone_pg"
//                 value={inputs.phone_pg}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="input-group">
//               <label>Date d'inscription :</label>
//               <input
//                 type="date"
//                 name="dateInscription_pg"
//                 value={inputs.dateInscription_pg}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="input-section">
//             <div className="input-group">
//               <label>Photos :</label>
//               <input
//                 type="file"
//                 name="photo_pg"
//                 onChange={handleChangeFile}
//                 accept="image/*"
//                 //required
//               />
//             </div>
//             <div className="input-group">
//               <label>Concours :</label>
//               <select
//                 name="name_lg"
//                 value={inputs.name_lg}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Sélectionnez un type de concours</option>
//                 <option value="Call of duty">Call of duty</option>
//                 <option value="Blur">Blur</option>
//                 <option value="Free Fire">Free Fire</option>
//                 <option value="FIFA">FIFA</option>
//                 <option value="Escape Game">Escape Game</option>
//                 <option value="Hackaton">Hackaton</option>
//                 <option value="Concours Projet Numerique">Concours Projet Numerique</option>
//               </select>
//             </div>
//             <div className="input-group">
//               <label>Paiement:</label>
//               <select
//                 name="payment_pg"
//                 value={inputs.payment_pg}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Sélectionnez un type de concours</option>
//                 <option value="Espece">Espece</option>
//                 <option value="Mobile Money">Mobile Money</option>
//                 <option value="Carte">Carte</option>
//               </select>
//             </div>
//             <div className="input-group">
//               <label>Nombre de Participant :</label>
//               <input
//                 type="number"
//                 name="number_pg"
//                 value={inputs.number_pg}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//           </div>
//               <button className="bouton-participer" type="submit">
//                 PARTICIPER
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

export default Jeu;

