$(document).ready(function() {
  $("ul").on("click","li",function() {
    if ($.trim($(this).html()) === 'Turtles') {
      $(".thumbnail").hide();
      $("#turtles").show();
    } else if ($.trim($(this).html()) === 'Snakes') {
      $(".thumbnail").hide();
      $("#snakes").show();
    } else {
      $(".thumbnail").hide();
      $("#tigers").show();
    }
  });
});
