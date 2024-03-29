const db = require('../config/database');

exports.registerOrg = (req, res) => {
    const { org_Name, addr_Line_1, phone, email } = req.body
    db.query(`INSERT INTO tbl_organisation ( name, address, phone, email ) VALUES ( $1, $2, $3, $4 )`, [org_Name, addr_Line_1, phone, email])
        .then(result => {
            res.status(200).json({ success: true });
        })
        .catch(e => {
            console.log(e);
            res.status(500).json({ success: false, err: e });
        })
}

exports.updateOrg = (req, res) => {
    const { name, address, phone, email } = req.body
    db.query(`UPDATE tbl_organisation SET name = $1, address = $2, phone = $3, email = $4  WHERE id = $5`,[name, address, phone, email, parseInt(req.params.id)])
        .then(result => {
            res.status(200).json({ success: true });
        })
        .catch(e => {
            console.log(e);
            res.status(500).json({ success: false, err: e });
        })
}

exports.disableOrg = (req, res) => {
    db.query(`UPDATE tbl_organisation SET disabled = NOT disabled WHERE id = ${parseInt(req.params.id)}`)
        .then(result => {
            res.status(200).json({ success: true });
        })
        .catch(e => {
            res.status(500).json({ success: false, err: e });
        })
}

exports.viewOrg = (req, res) => {

    db.query(`SELECT * FROM tbl_organisation WHERE id = ${parseInt(req.params.id)}`)
        .then(result => {
            res.status(200).json(result.rows);
        })
        .catch(e => {
            res.status(500).json({ success: false, error: e });
        })
}

exports.viewOrgs = (req, res) => {

    db.query(`SELECT * FROM tbl_organisation`)
        .then(result => {
            res.status(200).json(result.rows);
        })
        .catch(e => {
            res.status(500).json({ success: false, error: e });
        })
}

exports.orgPagination = ( req, res) =>{
    const page = parseInt( req.query.page );
    const per_page = parseInt( req.query.per_page );
    db.query(`SELECT * FROM tbl_organisation LIMIT ${per_page} OFFSET ${page}`)
    .then(result => {
        db.query(`SELECT count( * ) FROM tbl_organisation`)
        .then((resp)=>{
            res.status(200).json({data: result.rows, count: resp.rows[0].count});
        })
        .catch(e => {
            console.log(e);
            res.status(500).json({ success: false, err: e });
        })
    })
    .catch(e => {
        console.log(e);
        res.status(500).json({ success: false, err: e });
    })
}