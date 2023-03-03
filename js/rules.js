$(document).ready(function () {
  // show and hide the cards, based on select

  $("#view-rules-select").on("change", function () {
    let choice = "." + $(this).val();

   if (choice === ".card-container") {
      $(choice).fadeIn();
   } else {
      $(".card-container").hide().fadeOut();
      $(choice).fadeIn();
   }

   });

  // if ( $(this) === "" )
});
