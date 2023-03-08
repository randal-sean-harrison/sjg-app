$(document).ready(function () {
  // Load footer dyamically
  $("body #footer").load("footer.html", function () {
    console.log("Footer loaded, dooood!");
    $('[data-toggle="tooltip"]').tooltip();
  });
});
// document.ready
