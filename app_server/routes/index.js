var express = require('express');
var router = express.Router();
var controllerMain = require('../controllers/index');

/* GET home page. */
router.get('/', controllerMain.index);

module.exports = router;
