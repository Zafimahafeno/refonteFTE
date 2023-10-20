import React, { useState } from 'react';
import axios from 'axios';
import './Modalpage.css';
function StandForm() {
    const [formData, setFormData] = useState({
      name_pvi: '',
      phone_pvi: '',
      mail_pvi: '',
      payment_pvi: '',
      date_pvi: '',
      number_pvi: '',
      theme: '',
    });
  
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formDataToSend = new FormData();
      for (let key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      console.log(formData);
  
      axios.post('http://localhost:8081/Create_Reservation_Place', formData)
        .then((response) => {
          if (response.data.succee) {
            setSuccessMessage(response.data.succee);
            setErrorMessage(null);
          } else {
            setErrorMessage('Erreur lors du reservation de place.');
            setSuccessMessage(null);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage('Erreur lors du reservation de place pour la Master Class.');
          setSuccessMessage(null);
        });
    };
  
    return (
      <div className="centre-form">
        <form onSubmit={handleSubmit}>
         
          <div className="formgroup">
            <div className="inputgroup">
              <label>Veuillez entrer votre nom:</label>
              <input
                type="text"
                name="name_pvi"
                value={formData.name_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Veuillez entrer votre contact:</label>
              <input
                type="text"
                name="phone_pvi"
                value={formData.phone_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Votre adresse e-mail:</label>
              <input
                type="email"
                name="mail_pvi"
                value={formData.mail_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Mode de paiement :</label>
              <select
                name="payment_pvi"
                value={formData.payment_pvi}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez une méthode de paiement</option>
                <option value="Espece">Espece</option>
                <option value="Mobile Money">Mobile Money</option>
                <option value="Carte">Carte</option>
              </select>
            </div>
            <div className="formgroup">
            <div className="inputgroup">
              <label>Date de réservation:</label>
              <input
                type="date"
                name="date_pvi"
                value={formData.date_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
            <div className="inputgroup">
              <label>Nombre de place:</label>
              <input
                type="number"
                name="number_pvi"
                value={formData.number_pvi}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="formgroup">
          <div className="inputgroup">
              <label>Theme du Master Class :</label>
              <select
                name="theme"
                value={formData.theme}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez le thème selon les dates du Master Class</option>
                <option value="Theme1">Theme1</option>
                <option value="Theme2">Theme2</option>
                <option value="Theme3">Theme3</option>
              </select>
            </div>
          </div>
          </div>
          <button type="submit">Reserver</button>
        </form>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  }
  
  export default StandForm;
  