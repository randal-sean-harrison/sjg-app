$(document).ready(function () {
  // Load footer and header dyamically
  $("body #footer").load("footer.html", function () {
    console.log("Footer loaded");
    $('[data-toggle="tooltip"]').tooltip();

    $("header").load("header.html", function () {
      console.log("header loaded!");
    });

  });

});
// document.ready
