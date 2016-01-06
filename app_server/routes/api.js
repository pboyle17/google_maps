var express = require('express');
var router = express.Router();
var apiController = require('../controllers/api');

router.get('/', apiController.api);

module.exports = router;
