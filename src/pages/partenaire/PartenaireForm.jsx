import React, { useState } from 'react';
import './PartenaireForm.css'; // Importez votre fichier CSS de style
import axios from 'axios';

function PartnershipForm() {
  const [formData, setFormData] = useState({
    company_name: '',
    partenaire_type: 'sponsor_officiel', // Par défaut, sponsor officiel
    contact_partenaire: '',
    responsable: '',
    mail_partenaire: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/Create_partenaire', formData)
      .then((response) => {
        if (response.data.success) {
          setSuccessMessage(response.data.success);
          setErrorMessage(null);
        } else {
          setErrorMessage('Erreur lors de la soumission du formulaire de partenariat.');
          setSuccessMessage(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Erreur lors de la soumission du formulaire de partenariat.');
        setSuccessMessage(null);
      });
  };

  return (
    <div className="partnership-form-container">
      <h1>Formulaire de Partenariat</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom de l'entreprise ou du demandeur :</label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type de partenariat :</label>
          <select
            name="partenaire_type"
            value={formData.partenaire_type}
            onChange={handleChange}
            required
          >
            <option value="sponsor_officiel">Sponsor Officiel</option>
            <option value="sponsor">Sponsor</option>
            <option value="partenaire">Partenaire</option>
            <option value="partenaire_officiel">Partenaire Officiel</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email de contact :</label>
          <input
            type="email"
            name="mail_partenaire"
            value={formData.mail_partenaire}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Téléphone de contact :</label>
          <input
            type="tel"
            name="contact_partenaire"
            value={formData.contact_partenaire}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nom du responsable du company :</label>
          <input
            type="text"
            name="responsable"
            value={formData.responsable}
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

export default PartnershipForm;
