const db = require('../config/database');
const bcrypt = require('bcryptjs');

exports.registerUser = (req, res) => {
    const { username, password, department, type, org_id, firstname, middlename, lastname, email, phone } = req.body;

    bcrypt.hash(password, 12, (err, hash) => {
        if (err) {
            res.status(500).json({ success: false, err });
        }
        db.query(`WITH user_id AS ( INSERT INTO tbl_users ( username, password, type, org_id ) VALUES ( $1, $2, $3, $4) returning id ) INSERT INTO tbl_user_data ( fname, mname, lname, email, phone, department, fk_userid ) VALUES ( $5, $6, $7, $8, $9, $10, (select id from user_id) )`, [username, hash, type, org_id, firstname, middlename, lastname, email, phone, department])
            .then(result => {
                res.status(200).json({ success: true });
            })
            .catch(e => {
                console.log(e)
                res.status(500).json({ success: false, err: e });
            })
    });
}

// exports.updateProfile = (req, res) => {
//     db.query('')
//         .then(result => {
//             res.status(200).json({ success: true });
//         })
//         .catch(e => {
//             res.status(500).json({ success: false, err: e });
//         })
// }

exports.disableUser = (req, res) => {
    db.query(`UPDATE tbl_users SET disabled = NOT disabled WHERE id = ${parseInt(req.params.id)}`)
        .then(result => {
            res.status(200).json({ success: true });
        })
        .catch(e => {
            res.status(500).json({ success: false, err: e });
        })
}

exports.viewUser = (req, res) => {
    db.query(`SELECT * FROM tbl_users FULL OUTER JOIN tbl_user_data on tbl_users.id = tbl_user_data.fk_userid WHERE tbl_users.id = ${parseInt(req.params.id)}`)
        .then(result => {
            res.status(200).json(result.rows);
        })
        .catch(e => {
            res.status(500).json({ success: false, error: e });
        })
}

exports.viewUsers = (req, res) => {
    db.query(`SELECT * FROM tbl_users FULL OUTER JOIN tbl_user_data on tbl_users.id = tbl_user_data.fk_userid WHERE tbl_users.type = '${req.params.type}' ORDER BY tbl_users.id`)
        .then(result => {
            res.status(200).json(result.rows);
        })
        .catch(e => {
            console.log(e);
            res.status(500).json({ success: false, err: e });
        })
}

exports.AnalystPagination = (req, res) => {
    const page = parseInt( req.query.page );
    const per_page = parseInt( req.query.per_page );
    db.query(`SELECT * FROM tbl_users FULL OUTER JOIN tbl_user_data on tbl_users.id = tbl_user_data.fk_userid WHERE tbl_users.type = '${req.params.type}' ORDER BY tbl_users.id LIMIT ${per_page} OFFSET ${page}`)
    .then(result => {
        db.query(`SELECT count( * ) FROM tbl_users FULL OUTER JOIN tbl_user_data on tbl_users.id = tbl_user_data.fk_userid WHERE tbl_users.type = '${req.params.type}'`)
        .then((resp)=>{
            res.status(200).json({data: result.rows, count: resp.rows[0].count});
        });
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({ success: false, err: e });
    })
}
