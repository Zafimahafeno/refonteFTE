const db = require('../dbConfig/db');

// create
exports.create = (req, res) => {
    const sql = "INSERT INTO theme (id_th, title_th, date_th, hour_th) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.id_th,
        req.body.title_th,
        req.body.date_th,
        req.body.hour_th
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Theme ajoutée avec succèe.' });
    });
}

// findAll
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM theme";
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// delete
exports.delete = (req, res) => {
    const sql = "DELETE FROM theme WHERE id_th = ?";
    const id_th = req.params.id_th;
    db.query(sql, [id_th], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Theme supprimée avec succèe.' });
    });
}