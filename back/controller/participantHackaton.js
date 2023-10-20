const db = require('../dbConfig/db');

// create participant_Hackaton
exports.create = (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO participant_hackaton (id_Ph, nom_Ph, nombrePersonne_Ph, chefDeGroupe_Ph, tel_Ph, payment_Ph, dateInscription_Ph) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.id_Ph,
        req.body.nom_Ph,
        req.body.nombrePersonne_Ph,
        req.body.chefDeGroupe_Ph,
        req.body.tel_Ph,
        req.body.payment_Ph, 
        req.body.dateInscription_Ph,

    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Participant Hackaton ajoutée avec succèe.' });
    });
}

// findAll participant_Hackaton
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM participant_hackaton";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL :', err);
            return res.send(err);
        }
        return res.send(result);
    });
}

// findOne participant_hackaton
exports.findOne = (req, res) => {
    const sql = "SELECT * FROM participant_hackaton WHERE id_Ph = ?";
    const id_Ph = req.params.id_Ph;

    db.query(sql, [id_Ph], (err, result) => {
        if (err) {
            return res.send({ Message: "Error inside server" });
        }
        return res.send(result);
    })
}

function validateParticipantData(data) {
    const { id_Ph, nom_Ph, nombrePersonne_Ph, chefDeGroupe_Ph, tel_Ph, photo_Ph, payment_Ph} = data;
    
    if (!id_Ph || !nom_Ph || isNaN(nombrePersonne_Ph)) {
      return { valid: false, message: "Données de participant invalides." };
    }
    
    return { valid: true };
  }

  exports.update = (req, res) => {
    const sql = "UPDATE participant_Hackaton SET `id_Ph`=?, `nom_Ph`=?, `nombrePersonne_Ph`=?, `chefDeGroupe_Ph`=?, `tel_Ph`=?, `phone_Ph`=?, `payment_Ph`=? WHERE id_Ph=?";

    const id_Ph = req.params.id_Ph;
    const data = req.body;
    
    const validation = validateParticipantData(data);
    if (!validation.valid) {
      return res.status(400).send({ message: validation.message });
    }
    
    db.query(sql, [data.id_Ph, data.nom_Ph, data.nombrePersonne_Ph, data.chefDeProjet_Ph, data.tel_Ph, data.phone_Ph,data.payment_Ph,  id_Ph], (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
        return res.status(500).send({ message: "Erreur serveur interne" });
      }
      return res.send({ success: 'Participant modifié avec succès.' });
    });
}
  

// delete participant_Hackaton
exports.delete = (req, res) => {
    const sql = "DELETE FROM participant_hackaton WHERE id_Ph = ?";
    const id_Ph = req.params.id_Ph;
    db.query(sql, [id_Ph], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Participant supprimée avec succèe.' });
    });
}