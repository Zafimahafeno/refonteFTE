const db = require('../dbConfig/db');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: '../images', // Le répertoire où les images seront stockées
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

const upload = multer({ storage });

// Créer un participant de jeu
const create = (req, res) => {
    const { id_lg, name_pg, number_pg, mail_pg, phone_pg, payment_pg, name_lg } = req.body;
    const photo_pg = `${req.file.filename}`;

    if (!name_pg || !number_pg || !phone_pg) {
        return res.status(400).send({ error: 'Les champs obligatoires doivent être remplis.' });
    }

    const dateInscription_pg = new Date().toLocaleString();

    const sql = "INSERT INTO participant_game (id_lg, name_pg, number_pg, photo_pg, mail_pg, phone_pg, payment_pg, dateInscription_pg, name_lg) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [id_lg, name_pg, number_pg, photo_pg, mail_pg, phone_pg, payment_pg, dateInscription_pg, name_lg];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: 'Erreur lors de l\'ajout du participant.' });
        }
        return res.send({ success: 'Participant ajouté avec succès.' });
    });
}

const photo = [upload.single('photo_pg'), create]

exports.create = photo

// findAll participant_game
exports.getAll = (req, res) => {
    const sql = "SELECT pg.*, (SELECT name_lg FROM liste_game WHERE id_lg = pg.id_lg) AS nom_jeu FROM participant_game AS pg;";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL :', err);
            return res.send(err);
        }
        return res.send(result);
    });
}

// findOne participant_game
exports.findOne = (req, res) => {
    const sql = "SELECT * FROM participant_game WHERE id_pg = ?";
    const id_pg = req.params.id_pg;

    db.query(sql, [id_pg], (err, result) => {
        if (err) {
            return res.send({ Message: "Error inside server" });
        }
        return res.send(result);
    })
}

    function validateParticipantData(data) {
    const { id_lg, name_pg, number_pg, photo_pg, mail_pg, phone_pg, payment_pg } = data;
    
    if (!id_lg || !name_pg || isNaN(number_pg)) {
      return { valid: false, message: "Données de participant invalides." };
    }
    
    return { valid: true };
  }

  const update = (req, res) => {
    const sql = "UPDATE participant_game SET `id_lg`=?, `name_pg`=?, `number_pg`=?, `photo_pg`=?, `mail_pg`=?, `phone_pg`=?, `payment_pg`=? WHERE id_pg=?";
    const id_pg = req.params.id_pg;
    const data = req.body;
    const photo_pg = `${req.file.filename}`;
    
    const validation = validateParticipantData(data);
    if (!validation.valid) {
      return res.status(400).send({ message: validation.message });
    }
    
    db.query(sql, [data.id_lg, data.name_pg, data.number_pg,photo_pg, data.mail_pg, data.phone_pg, data.payment_pg, id_pg], (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
        return res.status(500).send({ message: "Erreur serveur interne" });
      }
      return res.send({ success: 'Participant modifié avec succès.' });
    });
}

const photo2 = [upload.single('photo_pg'), update]
exports.update = photo2

// delete participant_game
exports.delete = (req, res) => {
    const sql = "DELETE FROM participant_game WHERE id_pg = ?";
    const id_pg = req.params.id_pg;
    db.query(sql, [id_pg], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Participant supprimée avec succèe.' });
    });
}