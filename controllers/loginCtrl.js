const db = require('../config/database');
const bcrypt = require('bcryptjs');

exports.login = (req, res) => {

    db.query(`SELECT * FROM tbl_users where username = $1`, [req.body.username])
        .then(result => {
            if (result.rows.length > 0) {
                bcrypt.compare(req.body.password, result.rows[0].password, function (err, response) {
                    if(response === true){
                        res.status(200).json({ success: true });
                    }else{
                        res.status(401).json({ success: false, error: 'authentication Failed' });
                    }
                });
            } else {
                res.status(401).json({ success: false, error: 'authentication Failed' });
            }
        })
        .catch(e => res.status(401).json({ success: false, error: e }))
};
