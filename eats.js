$(document).ready(function(){
    var updateEat = function(data){
      $('#eats-well').fadeOut("fast", function(){
          $('#eats').text(data);
          $('#eats-well').fadeIn("fast");
      });
    }

    $(document).keypress(function(e) {
      if(e.which == 13) {
        $.get("http://api.ieeeatuhm.com/eats", updateEat);
      }
    });

    $('#try_again').click(function(){
        $.get("http://api.ieeeatuhm.com/eats", updateEat);
    });

    $.get("http://api.ieeeatuhm.com/eat", updateEat);
});
