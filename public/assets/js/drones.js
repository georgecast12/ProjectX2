// $(document).ready(function() {
//   $("#droneRun").click(function() {
//     $.ajax({
//       method: "GET",
//       url: "/drone",
//     });
//   });
// });
$(document).ready(function() {
  $("#droneRun").click(function() {
    console.log("I might about to break");
    $.get("/drone", function() {
      alert("IT WORKS");
    });
  });
});
