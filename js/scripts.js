
// this.player1 = !this.player1;


// call it with this:
// gameOne.assignTurn();

function Game() {
  this.players = {};
  this.activePlayer = 1;
}

// in the UI, we'll say ...what? to assign activePlayer??
// if (game.currentplayer === "player1") {
//   game.currentPlayer = "player2";
// } else {
//   game.currentPlayer = "player1";
// }

// make scoreArray current score and have it dump points into cumulative score?
Game.prototype.addPlayer = function(player){
  this.players[player.playerName] = player;
};

// Game.prototype.assignTurn = function() {
//   this.activePlayer = 1;
//   for (let i = 0; i < this.players.length; i++) {
//   if (this.yourTurn === true) { // this.currentPlayer = 1
//   this.currentPlayer = this.playerName; // then set currentPlayer to 2
//   this.yourTurn === false; // vise versa
//   } else {
//   this.yourTurn === true;
//   }
// }
// }

function Player() {
  this.playerName = "";
  this.cumulativeScore = 0;
  this.currentScore = [];

  // this.yourTurn = yourTurn;
}

// let gameOne = new Game();
// gameOne.addPlayer(player1);
// gameOne.addPlayer(player2);

// gameOne.assignTurn();


// die roll function

Player.prototype.rollDie = function()  {
  let min = 1;
  let max = 6;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


Player.prototype.score = function() {
  // let scoreArray = [];
  let val = this.rollDie();
  if (val > 1){
    this.currentScore.push(val);
    console.log(this.currentScore);
    // this.currentScore = scoreArray.toString();
    // this.currentScore.push(scoreArray);
    // console.log(scoreArray); 

  } else {
    this.currentScore = [];
    console.log(val);
    alert("Your turn is over!");
    // Game.activePlayer = !Game.activePlayer;
  } 
}
// game.player1 = !game.player1;
 // let currentScore = playerOne.currentScore;



// let sum = scoreArray.reduce(function(a, b) {
//   return a +b;
// });


// Player.prototype.score = function(currentScore, yourTurn) {
//   if (rollDie() > 1){
//     this.currentScore += rollDie(); 
//   } else {
//     this.currentScore = 0;
//     this.yourTurn = false;
//   }
// }

// Player.prototype.turnDetermine = function(playerName) {
//   if (this.players[yourTurn] === true) {
//     return true;
//   }
//     return false;
// }

// UI Logic??



$(document).ready(function() {
  let player1 = new Player();
  let player2 = new Player();
  $("form#players").submit(function(event) {
    event.preventDefault();
    player1.playerName = $("input#player1").val();
    player2.playerName = $("input#player2").val();
    $("#playerOneScore").text(player1.cumulativeScore);
    $("#playerTwoScore").text(player2.cumulativeScore);
    $("#player1Name").text(player1.playerName);
    $("#player2Name").text(player2.playerName);

  });

  $("#playerOneRoll").on("click",function(){
    player1.score();
    $("#player1RollScore").text(player1.currentScore);
  });

  console.log(this.scoreArray);
  $("#playerTwoRoll").on("click",function(){
    player2.score();
    $("#player2RollScore").text(player2.currentScore);
  });
  
  
  console.log(this.scoreArray);
})