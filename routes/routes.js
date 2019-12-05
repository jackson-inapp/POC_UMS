const express = require("express");
const router = express.Router();
const loginCtrl = require('../controllers/loginCtrl');
const orgCtrl = require('../controllers/orgCtrl');
const userCtrl = require('../controllers/userCtrl');

//login route
router.post('/login',loginCtrl.login);

//organisation routes
router.get('/org/:id', orgCtrl.viewOrg);
router.get('/org', orgCtrl.viewOrgs);
router.post('/org', orgCtrl.registerOrg);
router.patch('/org/:id', orgCtrl.updateOrg);
router.delete('/org/:id', orgCtrl.disableOrg);

//User Routes
router.post('/user',userCtrl.registerUser);

module.exports = router;