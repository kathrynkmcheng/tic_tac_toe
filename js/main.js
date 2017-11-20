$(document).ready(function(){

  var playerOne = "X";
  var playerTwo = "O";

  var currentPlayer = playerOne;

  $("td").on("click", function(){
    var cellValue = $(this).html();

    if (cellValue === "X" || cellValue === "O"){
      $("#alert").html("This space has already been taken!")
      return;
    }

    $(this).html(currentPlayer);

    if (currentPlayer === playerOne){
      currentPlayer = playerTwo;
      $("#alert").html("");
    } else {
      currentPlayer = playerOne;
      $("#alert").html("");
    }
  });

});
