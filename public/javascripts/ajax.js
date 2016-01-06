$(document).ready(function(){
  console.log('jquery ready');
  $.ajax({
    url:'https://data.cityofchicago.org/resource/ijzp-q8t2.json',
    type:'get',
    success:function(data){
      console.dir(data);
      for(var crime in data){
        console.log(data[crime].date);
      }
    },
    error:function(err){
      console.log(err);
    }
  });
});
