var express = require('express');
var router = express.Router();
var model = require ('../models/Crime');

router.get('/', function(req,res){
  model.find(function(err,crimes){
    res.json(crimes);
  });
});

router.post('/',function(req,res){
  new model({
    name:req.body.name
  }).save(function(err){
    if(err){
      console.log(err);
    } else {
      res.send('successfuly posted '+ req.body.name);
    }
  });
});


module.exports = router;
