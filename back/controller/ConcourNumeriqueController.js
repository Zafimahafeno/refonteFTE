const db = require('../dbConfig/db');

// create Concours Numerique.
exports.create = (req, res) => {
    const sql = "INSERT INTO concour_Numerique (nom_Cn,nombrePersonne_Cn, chefDeGroupe_Cn, tel_Cn, photo_Cn, payment_Cn) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.nom_Cn,
        req.body.nombrePersonne_Cn,
        req.body.chefDeGroupe_Cn,
        req.body.tel_Cn,
        req.body.photo_Cn,
        req.body.payment_Cn
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Concours Numerique ajoutée avec succèe.' });
    });
}

// findAll Concours Numerique.
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM concour_Numerique";
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// find Concours Numerique by id
exports.findOne = (req, res) => {
    const sql = "SELECT * FROM concour_Numerique WHERE id_Cn = ?";
    const id_Cn = req.params.id_Cn;

    db.query(sql, [id_Cn], (err, result) => {
        if (err) {
            return res.send({ Message: "Error inside server" });
        }
        return res.send(result);
    });
}

// update Concours Numeriques
exports.update = (req, res) => {
    const sql = "UPDATE concour_Numerique SET `nom_Cn`=?, `nombrePersonne_Cn`=?, `chefDeProjet_Cn`=?, 'tel_Cn'=?, 'photo_Cn=?', 'payment_Cn=?' WHERE id_Cn=?";
    const id_Cn = req.params.id_Cn;
    const { nom_Cn, nombrePersonne_Cn, chefDeGroupe_Cn, tel_Cn, photo_Cn } = req.body;
    db.query(sql, [nom_Cn, nombrePersonne_Cn, chefDeGroupe_Cn, tel_Cn,photo_Cn,payment_Cn, id_Cn], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Concours Numerique modifiée avec succèe.' });
    });
}

// delete Concours Numeriques
exports.delete = (req, res) => {
    const sql = "DELETE FROM concour_Numerique WHERE id_Cn = ?";
    const id_Cn = req.params.id_Cn;
    db.query(sql, [id_Cn], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Concours Numerique supprimée avec succèe.' });
    });
}