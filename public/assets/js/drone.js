$(document).ready(function() {
  $("#droneRun").click(function() {
    $.ajax({
      type: "GET",
      url: "/runMission",
    });
  });
});
