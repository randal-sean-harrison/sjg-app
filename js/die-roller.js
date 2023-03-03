$(document).ready(function () {
  $(document).on("click", "#die-roller .dicey", function () {
    // Get the die clicked on and create random number
    var dieClickedOn = $(this).data("die");
    var roll = Math.floor(Math.random() * dieClickedOn) + 1;
    // Shake the die

    if ($(this).hasClass("bg-green") || $(this).hasClass("bg-blue")) {
      $(this).fadeOut(100).fadeIn(100);
    } else {
      $(this).fadeOut(100).fadeIn(100);
    }

    // Fade the die roll results circle
    $("#die-roll-result span").stop().fadeOut(150).fadeIn(150);

    // Write the roll to the div
    $("#die-roll-result span").text(roll);
    console.log(roll);

    // fade all others but die clicked on
    $(".dicey").addClass("reduced-opacity");
    $(this).removeClass("reduced-opacity");

    // Set the roll color and die wobble
    switch (dieClickedOn) {
      case 4:
        $("#die-roll-result span").removeClass("reduced-opacity employee-green manager-purple owner-blue").addClass("unemployed-red");
        break;

      case 6:
        $("#die-roll-result span").removeClass("reduced-opacity unemployed-red manager-purple owner-blue").addClass("employee-green");
        break;

      case 8:
        $("#die-roll-result span").removeClass("reduced-opacity employee-green unemployed-red owner-blue").addClass("manager-purple");
        break;

      case 10:
        $("#die-roll-result span").removeClass("reduced-opacity employee-green unemployed-red manager-purple").addClass("owner-blue");
        break;
    }
  });
});
// document ready closes
