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
router.get('/user',userCtrl.viewUsers);
router.get('/user/:id',userCtrl.viewUser);
router.delete('/user/:id',userCtrl.disableUser);

module.exports = router;