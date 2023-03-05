$(document).ready(function () {
  // Reset page on cancel button
  $("#roles-cancel-button").on("click", function () {
    location.reload(true);
  });

  function atLeastFourPlayers() {
    var formControls = $(".form-control");
    var nonEmptyFormControls = formControls.filter(function () {
      return this.value.trim() !== "";
    });
    return nonEmptyFormControls.length >= 4;
  }

  // Randomize the players
  $("#roles-randomize-button").on("click", function () {
    // Only do the function if the number of players is at least 4
    if (atLeastFourPlayers()) {
      $("#select-students-card .form-control").each(function () {
        // Remove extras
        if ($(this).val() === "" || $(this).val().trim() === "") {
          $(this).parent().parent().remove();
        }
      });
      //  Roll up the card body
      $(this).parent().parent().slideUp();
      // show the green check and make the header green
      $(".checkmark").removeClass("d-none").prev().text("Assigned Roles");
      //  Show the roles card
      $("#assign-roles-card").removeClass("d-none");

      // Count the number of players and read them into an array
      let numPlayers = 0;
      let playerArray = [];
      let rolesArray = ["owner", "manager", "employee", "unemployed", "employee", "unemployed"];

      $(".form-control").each(function () {
        playerArray.push($(this).val());
        numPlayers += 1;
      });

      console.log(numPlayers);
      console.log(playerArray);

      //  Randomly sort the array thrice
      for (i = 0; i < 3; i++) {
        playerArray.sort(function () {
          return Math.random() - 0.5;
        });
      }

      console.log(playerArray);

      //  rolesArray.reverse();
      //  Create the player list
      for (i = 0; i < numPlayers; i++) {
        switch (rolesArray[i]) {
          case "owner":
            $(".list-group").prepend('<li class="list-group-item border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name">' + playerArray[i] + '</h5><span class="badge badge-pill border-0 badge-primary py-2 mr-0">Owner</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2">$3,000 salary from bank<i class="fa-sharp fa-solid fa-dollar-sign owner-blue ml-2"></i></li><li class="border-bottom py-2">Uses blue token<i class="fa-sharp fa-solid fa-circle-user owner-blue ml-2"></i></li><li class="border-bottom py-2">Moves w/ 10-sided dice<i class="fa-solid fa-dice-d10 owner-blue ml-2"></i></li><li class="py-2">Begin game with Enron Electric & Flint Water<i class="fa-solid fa-cards-blank owner-blue ml-2"></i></li></ul></li>');
            break;

          case "manager":
            $(".list-group").prepend('<li class="list-group-item bg-alice-blue border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name">' + playerArray[i] + '</h5><span class="text-white badge badge-pill border-0 badge-manager py-2 mr-0">Manager</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2">$1,000 salary from bank<i class="fa-sharp fa-solid fa-dollar-sign manager-purple ml-2"></i></li><li class="border-bottom py-2">Uses purple token<i class="fa-sharp fa-solid fa-circle-user manager-purple ml-2"></i></li><li class="border-bottom py-2">Moves w/ 8-sided dice<i class="fa-solid fa-dice-d8 manager-purple ml-2"></i></li><li class="py-2">Manages the bank<i class="fa-solid fa-piggy-bank manager-purple ml-2"></i></li></ul></li>');
            break;

          case "employee":
            $(".list-group").prepend('<li class="list-group-item border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name">' + playerArray[i] + '</h5><span class="badge badge-pill border-0 badge-success py-2 mr-0">Employee</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2">$500 salary from bank<i class="fa-sharp fa-solid fa-dollar-sign employee-green ml-2"></i></li><li class="border-bottom py-2">Uses green token<i class="fa-sharp fa-solid fa-circle-user employee-green ml-2"></i></li><li class="border-bottom py-2">Moves w/ 6-sided dice<i class="fa-solid fa-dice-d6 employee-green ml-2"></i></li><li class="py-2">Manages realty<i class="fa-solid fa-house ml-2 employee-green"></i></li></ul></li>');
            break;

          case "unemployed":
            $(".list-group").prepend('<li class="list-group-item bg-alice-blue border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name">' + playerArray[i] + '</h5><span class="badge badge-pill border-0 badge-danger py-2 mr-0">Unemployed</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2">$200 salary from bank<i class="fa-sharp fa-solid fa-dollar-sign unemployed-red ml-2"></i></li><li class="border-bottom py-2">Uses red token<i class="fa-sharp fa-solid fa-circle-user unemployed-red ml-2"></i></li><li class="py-2">Moves w/ 4-sided dice<i class="fa-solid fa-dice-d4 unemployed-red ml-2"></i></li></ul></li>');
            break;
        }
      }
    } else {
      $("#too-few-players-alert").removeClass("d-none");
    }
  });
});
// document.ready
