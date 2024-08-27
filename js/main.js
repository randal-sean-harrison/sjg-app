$(document).ready(function () {
  // Load footer dyamically
  $("body #footer").load("footer.html", function () {
    console.log("Footer loaded");
    $('[data-toggle="tooltip"]').tooltip();
  });
  $("header").load("header.html", function () {
    console.log("header loaded!");
  });
});
// document.ready
