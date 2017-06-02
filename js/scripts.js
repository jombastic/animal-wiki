$(document).ready(function() {
  $("ul").on("click","li",function() {
  	$(".thumbnail").hide();
    $("#" + $(this).data("details-id")).show();
  });
});
