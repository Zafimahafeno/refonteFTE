const db = require('../dbConfig/db');

// Create a new partner
exports.create = (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO partenaire (partenaire_type, company_name, contact_partenaire, mail_partenaire, responsable) VALUES (?, ?, ?, ?, ?)";
    const values = [
        req.body.partenaire_type,
        req.body.company_name,
        req.body.contact_partenaire,
        req.body.mail_partenaire,
        req.body.responsable,
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ success: 'Partenaire ajouté avec succès.' });
    });
}

// Get all partners
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM partners";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL :', err);
            return res.send(err);
        }
        return res.send(result);
    });
}

// Get a single partner by ID
exports.findOne = (req, res) => {
    const sql = "SELECT * FROM partners WHERE id = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.send({ Message: "Erreur interne du serveur" });
        }
        return res.send(result);
    });
}

// Update a partner by ID
exports.update = (req, res) => {
    const sql = "UPDATE partners SET partner_type=?, company_name=?, contact_name=?, email=?, phone=?, message=? WHERE id=?";

    const id = req.params.id;
    const data = req.body;

    db.query(sql, [data.partner_type, data.company_name, data.contact_name, data.email, data.phone, data.message, id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ message: "Erreur interne du serveur" });
        }
        return res.send({ success: 'Partenaire modifié avec succès.' });
    });
}

// Delete a partner by ID
exports.delete = (req, res) => {
    const sql = "DELETE FROM partners WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur interne du serveur" });
        }
        return res.send({ success: 'Partenaire supprimé avec succès.' });
    });
}
