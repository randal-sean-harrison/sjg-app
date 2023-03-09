$(document).ready(function () {
  var base = 0;
  var rents = 0;
  var finalRent = 0;

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

    // Get base price and base rent
    base = $(this).data("base");
    rents = $(this).data("base-rent");

    // Write base price to the card
    $(".new-base-price").text(base);
    //  Write base rent to card
    $(".final-rent").text(rents);
    console.log(rents);
    $(".final-rent").attr("data-base-rent-number", rents);

    // Write price per house to modal
    $(".modal").find(".price-per").text(pricePerHouse);

    // Show the modal
    $("#modal-properties").modal("show");
  });

  $("#numberOfHouses").on("change", function () {
    var numberOfHouses = Number($(this).val());
    var PricesPerHouses = Number($(".price-per").text());
    //  var newBasement = Number($("#modal-properties .new-base-price").text());
    var finalPrice = numberOfHouses * PricesPerHouses + base;

    // Write finalPrice to card
    $(".new-base-price").text(finalPrice);

    // Get rent base number
    var baseRent = $(".final-rent").data("base-rent-number");

    // Write rents
    switch (numberOfHouses) {
      case 0:
        finalRent = baseRent;
        $(".final-rent").text(finalRent);
        break;
      case 1:
        finalRent = baseRent * 5;
        $(".final-rent").text(finalRent);
        break;
      case 2:
        finalRent = baseRent * 15;
        $(".final-rent").text(finalRent);
        break;
      case 3:
        finalRent = baseRent * 45;
        $(".final-rent").text(finalRent);
        break;
      default:
        break;
    }
  });
});
// document.ready
