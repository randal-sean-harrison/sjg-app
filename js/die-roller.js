$(document).ready(function () {
  $(document).on("click", "#die-roller .dicey", function () {
    // Get the die clicked on and create random number
    var dieClickedOn = parseInt($(this).data("die"));
    var roll = Math.floor(Math.random() * dieClickedOn) + 1;

    // if ($(this).hasClass("bg-green") || $(this).hasClass("bg-blue")) {
    //   $(this).fadeOut(100).fadeIn(100);
    // } else {
    //   $(this).fadeOut(100).fadeIn(100);
    // }

    // Fade the die roll results circle
    // $("#die-roll-result span").stop().fadeOut(150).fadeIn(150);

    // Write the roll to the div
    // $("#die-roll-result span").text(roll);

    // fade all others but die clicked on
    $(".dicey").addClass("reduced-opacity");
    $(this).removeClass("reduced-opacity");

    function writeEllipses() {
      $(".dicey").find("div").empty().html("<h1 class='text-center text-white'>&hellip;</h1>");
    }

    // Set the roll color and die wobble
    switch (dieClickedOn) {
      case 4:
        writeEllipses();
        $("#write-unemployed-roll").html("<h1 class='text-white'>" + roll + "</h1>");
        break;
      case 6:
        writeEllipses();
        $("#write-employee-roll").html("<h1 class='text-white'>" + roll + "</h1>");
        break;

      case 8:
        writeEllipses();
        $("#write-manager-roll").html("<h1 class='text-white'>" + roll + "</h1>");
        break;

      case 10:
        writeEllipses();
        $("#write-owner-roll").html("<h1 class='text-white'>" + roll + "</h1>");
        break;
    }
  });
});
// document ready closes
