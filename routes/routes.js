const express = require("express");
const router = express.Router();
const loginCtrl = require('../controllers/loginCtrl');
const orgCtrl = require('../controllers/orgCtrl');
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middlewares/jwtCheck')

//login route
router.post('/login',loginCtrl.login);

//organisation routes
router.get('/org/:id', auth.checkToken, orgCtrl.viewOrg);
router.get('/org', auth.checkToken, orgCtrl.viewOrgs);
router.post('/org', auth.checkToken, orgCtrl.registerOrg);
router.patch('/org/:id', auth.checkToken, orgCtrl.updateOrg);
router.delete('/org/:id', auth.checkToken, orgCtrl.disableOrg);

//User Routes
router.post('/user', auth.checkToken, userCtrl.registerUser);
router.get('/user', auth.checkToken, userCtrl.viewUsers);
router.get('/user/:id', auth.checkToken, userCtrl.viewUser);
router.delete('/user/:id', auth.checkToken, userCtrl.disableUser);

module.exports = router;