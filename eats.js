var updateEat = function(data){
  $('#eats').fadeOut("fast", function(){
      $('#eats').text(data);
      $('#eats').fadeIn("fast");
  });
}

$.get("http://api.ieeeatuhm.com/eats", updateEat);

$(document).keypress(function(e) {
  if(e.which == 13) {
    $.get("http://api.ieeeatuhm.com/eats", updateEat);
  }
});
