const db = require('../config/database');
const bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
    const { username, password, type } = req.body;

    bcrypt.hash(password, 12, function (err, hash) {
        if (err) {
            res.status(500).json({ success: false, err });
        }
        db.query(`WITH user_id AS ( INSERT INTO tbl_users ( username, password, type ) VALUES ( $1, $2, $3, ) returning id ) INSERT INTO tbl_user_data ( fname, lname, email, phone, fk_userid ) VALUES ( $4, $5, $6, $7, user_id )`, [username, hash, type, 'jackson', 'john', 'jajsja.com', '7011564545'])
            .then(result => {
                res.status(200).json({ success: true });
            })
            .catch(e => {
                console.log(e)
                res.status(500).json({ success: false, err: e });
            })
    });

}