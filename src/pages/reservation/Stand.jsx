import React, { useState } from 'react';
import './StandeForm.css';
import axios from 'axios';

function StandForm() {
  const [formData, setFormData] = useState({
    name_ps: '',
    phone_ps: '',
    mail_ps: '',
    payment_ps: '',
    dateIncription_Ps: '',
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

    axios.post('http://localhost:8081/Create_stand', formData)
      .then((response) => {
        if (response.data.succee) {
          setSuccessMessage(response.data.succee);
          setErrorMessage(null);
        } else {
          setErrorMessage('Erreur lors de l\'ajout du participant stand.');
          setSuccessMessage(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Erreur lors de l\'ajout du participant stand.');
        setSuccessMessage(null);
      });
  };

  return (
    <div className="centered-form">
      <form onSubmit={handleSubmit}>
       
        <div className="form-group">
          <div className="input-group">
            <label>Nom du participant stand :</label>
            <input
              type="text"
              name="name_ps"
              value={formData.name_ps}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Téléphone du participant stand :</label>
            <input
              type="text"
              name="phone_ps"
              value={formData.phone_ps}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Email du participant stand :</label>
            <input
              type="email"
              name="mail_ps"
              value={formData.mail_ps}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <label>Méthode de paiement :</label>
            <select
              name="payment_ps"
              value={formData.payment_ps}
              onChange={handleInputChange}
              required
            >
              <option value="">Sélectionnez une méthode de paiement</option>
              <option value="Espece">Espece</option>
              <option value="Mobile Money">Mobile Money</option>
              <option value="Carte">Carte</option>
            </select>
          </div>
          <div className="form-group">
          <div className="input-group">
            <label>Date d'inscription :</label>
            <input
              type="date"
              name="dateIncription_Ps"
              value={formData.dateIncription_Ps}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        </div>
        <button type="submit">Ajouter le participant stand</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}

export default StandForm;
