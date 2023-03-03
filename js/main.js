$(document).ready(function () {
  // Load footer dyamically
  $("body #footer").load("_footer.html", function () {
    console.log("Footer loaded.");
    $('[data-toggle="tooltip"]').tooltip();
  });
});
// document.ready
