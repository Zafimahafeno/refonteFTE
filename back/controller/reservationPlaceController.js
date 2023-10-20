const db = require('../dbConfig/db');

// create
exports.create = (req, res) => {
    const sql = "INSERT INTO place_vip (id_pvi, name_pvi, phone_pvi, mail_pvi, number_pvi, payment_pvi, date_pvi, theme) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.id_pvi,
        req.body.name_pvi,
        req.body.phone_pvi,
        req.body.mail_pvi,
        req.body.number_pvi,
        req.body.payment_pvi,
        req.body.date_pvi,
        req.body.theme,
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Place reservée avec succèe.' });
    });
}

// findAll
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM place_vip";
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    })
}

// delete
exports.delete = (req, res) => {
    const sql = "DELETE FROM place_vip WHERE id_pvi = ?";
    const id_os = req.params.id_pvi;
    db.query(sql, [id_pvi], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Reservation annulée avec succèe.' });
    });
}