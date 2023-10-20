const db = require('../dbConfig/db');

exports.register = (req, res) => {
    const sql = "INSERT INTO admin (admin_mail, admin_name, admin_password) VALUES (?, ?, ?)";
    const values = [req.body.email, req.body.name, req.body.password];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.send(err);
        }
        return res.send({ succee: 'Compte admin créé avec succèe.' });
    })
}

exports.login = (req, res) => {
    const sql = "SELECT * FROM admin WHERE 'admin_mail' = ? AND 'admin_password' = ? ";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }else {
            return res.json("failed");
        }
    })
}