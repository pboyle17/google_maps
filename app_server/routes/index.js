var express = require('express');
var router = express.Router();
var controllerMain = require('../controllers/index');


/* GET home page. */
router.get('/', controllerMain.index);
router.get('/infoWindow',controllerMain.infoWindow);
module.exports = router;
