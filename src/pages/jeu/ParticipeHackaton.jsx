import React, { useState } from 'react';
import './ParticipeHackaton.css'; // Importez votre fichier CSS de style
import axios from 'axios';

function HackathonForm() {
  const [formData, setFormData] = useState({
    nom_Ph: '',
    nombrePersonne_Ph: '',
    chefDeGroupe_Ph: '',
    tel_Ph: '',
    payment_Ph: '',
    dateInscription_Ph: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    console.log(formData);

    axios.post('http://localhost:8081/Create_participant_hackaton', formData)
      .then((response) => {
        if (response.data.succee) {
          setSuccessMessage(response.data.succee);
          setErrorMessage(null);
        } else {
          setErrorMessage('Erreur lors de l\'ajout du participant hackaton.');
          setSuccessMessage(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Erreur lors de l\'ajout de participant stand.');
        setSuccessMessage(null);
      });
  };

  return (
    <div className="hackathon-form-container">
      <h1>Participation au Hackathon</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom du participant :</label>
          <input
            type="text"
            name="nom_Ph"
            value={formData.nom_Ph}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nombre de personnes :</label>
          <input
            type="number"
            name="nombrePersonne_Ph"
            value={formData.nombrePersonne_Ph}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Chef de groupe :</label>
          <input
            type="text"
            name="chefDeGroupe_Ph"
            value={formData.chefDeGroupe_Ph}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Téléphone :</label>
          <input
            type="tel"
            name="tel_Ph"
            value={formData.tel_Ph}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Méthode de paiement :</label>
          <select
            name="payment_Ph"
            value={formData.payment_Ph}
            onChange={handleChange}
            required
          >
            <option value="carte">Carte de crédit</option>
            <option value="paypal">PayPal</option>
            <option value="virement">Virement bancaire</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date d'inscription :</label>
          <input
            type="date"
            name="dateInscription_Ph"
            value={formData.dateInscription_Ph}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Envoyer</button>
        </div>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default HackathonForm;
