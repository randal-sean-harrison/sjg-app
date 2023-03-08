$(document).ready(function () {
  // Pop modal on click property name
  $(".realties li").on("click", function () {
    var modalTitle = $(this).data("title");
    var modalNeighborhood = $(this).data("neighborhood");
    var pricePerHouse = $(this).data("price-per-house");

    // Set the value of the range slider on open modal
    $("body #numberOfHouses").val(0);

    // Add title to the card
    $("#modal-properties #modal-title").text(modalTitle);
    // Set the color of the card header
    $("#modal-properties .modal-header").removeClass().addClass("modal-header").addClass(modalNeighborhood);

    // Get base price and write to card
    var base = $(this).data("base");
    $(".new-base-price").text(base);

   // Write price per house to modal
   $(".modal").find(".price-per").text(pricePerHouse);

    // Show the modal
    $("#modal-properties").modal("show");
  
   });

$("#numberOfHouses").on("change", function(){
   var numberOfHouses = Number($(this).val());
   var PricesPerHouses = Number($(".price-per").text());
   var newBasement = Number($("#modal-properties .new-base-price").text());
   var finalPrice = (numberOfHouses * PricesPerHouses) + newBasement;

   // Write finalPrice to card
   $(".new-base-price").text(finalPrice);


});










});
// document.ready


