
// this.player1 = !this.player1;


//call it with this:
gameOne.assignTurn();

function Game(players, activePlayer) {
  this.players = {};
  this.activePlayer = 1;
}

// in the UI, we'll say ...what? to assign activePlayer??
// if (game.currentplayer === "player1") {
//   game.currentPlayer = "player2";
// } else {
//   game.currentPlayer = "player1";
// }

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

function Player(playerName, cumulativeScore, yourTurn) {
  this.playerName = playerName;
  this.cumulativeScore = cumulativeScore;
  this.yourTurn = yourTurn;
}


let gameOne = new Game();
let player1 = new Player("Cody", 0, 1, true);
let player2 = new Player("Jafaar", 0, 2, false);

gameOne.addPlayer(player1);
gameOne.addPlayer(player2);

gameOne.assignTurn();


// die roll function

Player.prototype.rollDie = function()  {
  let min = 1;
  let max = 6;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

Player.prototype.score = function() {
  let scoreArray = [];
  let val = rollDie();
  if (val > 1){
    scoreArray.push(val);
    console.log(scoreArray); 
 
  } else {
    scoreArray = [];
    console.log(val);
    alert("Your turn is over!");
    Game.activePlayer = !Game.activePlayer;
  } 
}
// game.player1 = !game.player1;
 // let currentScore = playerOne.currentScore;



let sum = scoreArray.reduce(function(a, b) {
  return a +b;
})


Player.prototype.score = function(currentScore, yourTurn) {
  if (rollDie() > 1){
    this.currentScore += rollDie(); 
  } else {
    this.currentScore = 0;
    this.yourTurn = false;
  }
}

Player.prototype.turnDetermine = function(playerName) {
  if (this.players[yourTurn] === true) {
    return true;
  }
    return false;
}
