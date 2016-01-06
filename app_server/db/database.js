var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/google_maps';

mongoose.connect(connectionString);

mongoose.connection.on('connected',function(){
  console.log('connected to the database'+connectionString);
});

mongoose.connection.on('disconnected',function(){
  console.log('disconnected from the database');
});

mongoose.connection.on('error',function(err){
  console.log(err);
});
