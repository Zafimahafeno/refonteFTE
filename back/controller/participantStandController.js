const db = require('../dbConfig/db');

// create particiant_stand
exports.create = (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO participant_stand (id_ps, id_os, name_ps, phone_ps, mail_ps, payment_ps, dateIncription_Ps) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
        req.body.id_ps,
        req.body.id_os,
        req.body.name_ps,
        req.body.phone_ps,
        req.body.mail_ps,
        req.body.payment_ps, 
        req.body.dateIncription_Ps,

    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Participant stand ajoutée avec succèe.' });
    });
}

// findAll particiant_stand
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM participant_stand";
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// findOne particiant_stand
exports.getOne = (req, res) => {
    const sql = "SELECT * FROM participant_stand WHERE id_ps = ?";
    const id_ps = req.params.id_ps;

    db.query(sql, [id_ps], (err, result) => {
        if (err) {
            return res.send({ Message: "Error inside server" });
        }
        return res.send(result);
    });
}

// update particiant_stand
exports.update = (req, res) => {
    const sql = "UPDATE participant_stand SET `id_os`=?, `name_ps`=?, `phone_ps`=?, `mail_ps`=?, `payment_ps`=? WHERE id_ps=?";
    const id_ps = req.params.id_ps;
    const { id_os, name_ps, phone_ps, mail_ps, payment_ps } = req.body;
    db.query(sql, [id_os, name_ps, phone_ps, mail_ps, payment_ps, id_ps], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Participant stand modifiée avec succèe.' });
    });
}

// delete particiant_stand
exports.delete = (req, res) => {
    const sql = "DELETE FROM participant_stand WHERE id_ps = ?";
    const id_ps = req.params.id_ps;
    db.query(sql, [id_ps], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Participant stand supprimée avec succèe.' });
    });
}