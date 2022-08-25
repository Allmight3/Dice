function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var player1Src = "./images/dice" + randomNumber1 + ".png";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var player2Src = "./images/dice" + randomNumber2 + ".png";
  document.querySelector(".img1").setAttribute("src", player1Src);
  document.querySelector(".img2").setAttribute("src", player2Src);
  var winnerMessage;
  if (randomNumber1 === randomNumber2) {
    winnerMessage = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    winnerMessage = "Player 1 Wins!";
  } else {
    winnerMessage = "Player 2 Wins!";
  }
  document.querySelector("h1").textContent = winnerMessage;
}
