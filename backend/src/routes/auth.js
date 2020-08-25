var express = require('express');
var router = express.Router();
const authCtrller = require('../controllers/authController');

/* GET users listing. */
router.get('/login', authCtrller.getLogin);
router.get('/register', authCtrller.getRegister);
router.get('/getLastUser', authCtrller.getLastUser);
router.post('/login', authCtrller.login);
router.post('/register', authCtrller.register);

module.exports = router;