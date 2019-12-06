const db = require('../config/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');

exports.login = (req, res) => {

    db.query(`SELECT * FROM tbl_users where username = $1`, [req.body.username])
        .then(result => {
            if (result.rows.length > 0) {
                bcrypt.compare(req.body.password, result.rows[0].password, function (err, response) {
                    if (response === true) {
                        let token = jwt.sign({ username: result.rows[0].username, type: result.rows[0].type, org_id: result.rows[0].org_id },
                            config.jwtsecret,
                            {
                                expiresIn: '24h' // expires in 24 hours
                            }
                        );
                        res.status(200).json({ success: true,token });
                    } else {
                        res.status(401).json({ success: false, error: 'authentication Failed' });
                    }
                });
            } else {
                res.status(401).json({ success: false, error: 'authentication Failed' });
            }
        })
        .catch(e => res.status(401).json({ success: false, error: e }))
};
