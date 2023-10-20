const db = require('../dbConfig/db');

// create
exports.create = (req, res) => {
    const sql = "INSERT INTO offre_stand (id_os, name_os, type_stand, tarif_os) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.id_os,
        req.body.name_os,
        req.body.type_stand,
        req.body.tarif_os
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Offre stand ajoutée avec succèe.' });
    });
}

// findAll
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM offre_stand";
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// find all name_Stands
exports.getName_Stands= (req, res) => {
    const sql = "SELECT id_os, name_os FROM `offre_stand`"
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// findOne
exports.findOne = (req, res) => {
    const sql = "SELECT * FROM offre_stand WHERE id_os = ?";
    const id_os = req.params.id_os;

    db.query(sql, [id_os], (err, result) => {
        if (err) {
            return res.send({ Message: "Error inside server" });
        }
        return res.send(result);
    });
}

// update
exports.update = (req, res) => {
    const sql = "UPDATE offre_stand SET `name_os`=?, `type_stand`=?, `tarif_os`=? WHERE id_os=?";
    const id_os = req.params.id_os;
    const { name_os, type_stand, tarif_os } = req.body;
    db.query(sql, [name_os, type_stand, tarif_os, id_os], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Offre stand modifiée avec succèe.' });
    });
}

// delete
exports.delete = (req, res) => {
    const sql = "DELETE FROM offre_stand WHERE id_os = ?";
    const id_os = req.params.id_os;
    db.query(sql, [id_os], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Offre stand supprimée avec succèe.' });
    });
}