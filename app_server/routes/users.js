var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/',function(req,res){
  res.send('zomg you sent somethiing to the server');
});

module.exports = router;
