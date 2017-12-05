$(document).ready(function(){
  $(".transportation").submit(function(event) {
    event.preventDefault();
    $("#outputwork").show();
    $("input:checkbox[name=work-transport]:checked").each(function(){
      var worktransportmode = $(this).val();
      $('#outputwork').append(worktransportmode + "<br>");
    })
    $("#outputother").show();
    $("input:checkbox[name=other-transport]:checked").each(function(){
      var othertransportmode = $(this).val();
      $('#outputother').append(othertransportmode + "<br>");
    });
     $(".transportation").hide();
  });
});
