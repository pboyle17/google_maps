var mongoose = require('mongoose');

var CrimeSchema = new mongoose.Schema({
  name:String
});

module.exports = mongoose.model('Crime',CrimeSchema);
