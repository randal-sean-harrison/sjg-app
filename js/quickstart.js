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
      //  fade out the Enter Players card
      $(this).parent().parent().parent().fadeOut();
      //  Show the roles card and start play card
      $("#assign-roles-card").removeClass("d-none");
      $("#start-play-card").removeClass("d-none");

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
            $(".list-group").prepend('<li class="list-group-item border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name"><span class="owner-blue">' + playerArray[i] + '</span></h5><span class="badge badge-pill border-0 badge-primary py-2 mr-0">Owner</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-dollar-sign owner-blue fa-fw mr-2"></i>$3,000 salary from bank</li><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-circle-user owner-blue fa-fw mr-2"></i>Uses blue token &amp; role card</li><li class="border-bottom py-2"><i class="fa-solid fa-dice-d10 owner-blue mr-2 fa-fw"></i>Moves w/ 10-sided dice</li><li class="py-2"><i class="fa-solid fa-house owner-blue mr-2 fa-fw"></i>Owns Enron Electric &amp; Flint Water already</li></ul></li>');
            break;

          case "manager":
            $(".list-group").prepend('<li class="list-group-item bg-alice-blue border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name"><span class="manager-purple">' + playerArray[i] + '</span></h5><span class="text-white badge badge-pill border-0 badge-manager py-2 mr-0">Manager</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-dollar-sign manager-purple mr-2 fa-fw"></i>$1,000 salary from bank</li><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-circle-user manager-purple mr-2 fa-fw"></i>Uses purple token &amp; role card</li><li class="border-bottom py-2"><i class="fa-solid fa-dice-d8 manager-purple mr-2 fa-fw"></i>Moves w/ 8-sided dice</li><li class="py-2"><i class="fa-solid fa-piggy-bank manager-purple mr-2 fa-fw"></i><i class="fa-solid fa-house mr-2 fa-fw manager-purple"></i>Manages the bank &amp; realty</li></ul></li>');
            break;

          case "employee":
            $(".list-group").prepend('<li class="list-group-item border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name"><span class="employee-green">' + playerArray[i] + '</span></h5><span class="badge badge-pill border-0 badge-success py-2 mr-0">Employee</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-dollar-sign employee-green mr-2 fa-fw"></i>$500 salary from bank</li><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-circle-user employee-green mr-2 fa-fw"></i>Uses green token &amp; role card</li><li class="py-2"><i class="fa-solid fa-dice-d6 employee-green mr-2 fa-fw"></i>Moves w/ 6-sided dice</li></ul></li>');
            break;

          case "unemployed":
            $(".list-group").prepend('<li class="list-group-item bg-alice-blue border-0 p-4"><div class="d-flex justify-content-between align-items-center"><h5 class="name"><span class="unemployed-red">' + playerArray[i] + '</span></h5><span class="badge badge-pill border-0 badge-danger py-2 mr-0">Unemployed</span></div><div><ul class="pt-3 pl-0 ml-0 no-bullet-list"><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-dollar-sign unemployed-red mr-2 fa-fw"></i>$200 salary from bank</li><li class="border-bottom py-2"><i class="fa-sharp fa-solid fa-circle-user unemployed-red mr-2 fa-fw"></i>Uses red token &amp; role card</li><li class="py-2"><i class="fa-solid fa-dice-d4 unemployed-red mr-2 fa-fw"></i>Moves w/ 4-sided dice</li></ul></li>');
            break;
        }
      }
    } else {
      $("#too-few-players-alert").removeClass("d-none");
      
    }
  });

// re-roll button
$("#start-over-button").on("click", function(){
      location.reload(false);
});

});
// document.ready
