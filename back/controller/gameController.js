const db = require('../dbConfig/db');

// create game.
exports.create = (req, res) => {
    const sql = "INSERT INTO liste_game (name_lg, tarif_lg, photo_lg) VALUES (?, ?, ?)";
    const values = [
        req.body.name_lg,
        req.body.tarif_lg,
        req.body.photo_lg
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.send(err);
        return res.send({ succee: 'Game ajoutée avec succèe.' });
    });
}

// find all name_game
exports.getName_liste= (req, res) => {
    const sql = "SELECT id_lg, name_lg FROM `liste_game`"
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// findAll game
exports.getAll = (req, res) => {
    const sql = "SELECT * FROM liste_game";
    db.query(sql, (err, result) => {
        if (err) {
            return res.send(err);
        }
        return res.send(result);
    });
}

// find game by id
exports.findOne = (req, res) => {
    const sql = "SELECT * FROM liste_game WHERE id_lg = ?";
    const id_lg = req.params.id_lg;

    db.query(sql, [id_lg], (err, result) => {
        if (err) {
            return res.send({ Message: "Error inside server" });
        }
        return res.send(result);
    });
}

// update game
exports.update = (req, res) => {
    const sql = "UPDATE liste_game SET `name_lg`=?, `tarif_lg`=?, `photo_lg`=? WHERE id_lg=?";
    const id_lg = req.params.id_lg;
    const { name_lg, tarif_lg, photo_lg } = req.body;
    db.query(sql, [name_lg, tarif_lg, photo_lg, id_lg], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Game modifiée avec succèe.' });
    });
}

// delete game
exports.delete = (req, res) => {
    const sql = "DELETE FROM liste_game WHERE id_lg = ?";
    const id_lg = req.params.id_lg;
    db.query(sql, [id_lg], (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de l\'enregistrement :', err);
            return res.status(500).send({ Message: "Erreur serveur interne" });
        }
        return res.send({ succee: 'Game supprimée avec succèe.' });
    });
}