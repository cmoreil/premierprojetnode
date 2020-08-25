var express = require('express');
var router = express.Router();
const dashboardCtrller = require('../controllers/dashboardController');

/* GET users listing. */

router.post('/postMessage', dashboardCtrller.postMessage);
router.post('/getMessage', dashboardCtrller.getMessage);
// router.put('/editOneMessage/:id', dashboardCtrller.editOneMessage);
router.post('/getMessage', dashboardCtrller.getMessage);
router.get('/getLastMessage', dashboardCtrller.getLastMessage);

module.exports = router;