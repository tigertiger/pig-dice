//testing version

function Game(players, currentScore, currentPlayer) {
  this.players = {};
  this.currentScore = currentScore;
  this.currentPlayer = playerName;
  // Some new property that just keeps track of the current active player. This could literally be an integer (1 or 2), it could be the current player (the entire object) or any other metric. 
  // this.currentPlayer = 1 (this would mean player 1 is currently active.)
}

Game.prototype.addPlayer = function(player){
  this.players[player.playerName] = player;
};

Game.prototype.assignTurn = function() {
  this.currentPlayer = player1; // player1 is a global variable in the way you're using it here. Maybe this could be an integer
  for (let i = 0; i < this.players.length; i++) {
  if (this.currentPlayer === true) { // this.currentPlayer = 1
  this.currentPlayer = this.playerName; // then set currentPlayer to 2
  this.yourTurn === false; // vise versa
  } else {
  this.yourTurn === true;
  }
}
}

function Player(playerName, cumulativeScore, yourTurn) {
  this.playerName = playerName;
  this.cumulativeScore = cumulativeScore;
  this.yourTurn = yourTurn;
}


let gameOne = new Game();
let player1 = new Player("Cody", 0, true);
let player2 = new Player("Jafaar", 0, false);

gameOne.addPlayer(player1);
gameOne.addPlayer(player2);

gameOne.assignTurn();

//end of testing version/start of old version
function Game(players, currentScore, currentPlayer) {
  this.players = {};
  this.currentScore = currentScore;
  this.currentPlayer = currentPlayer;
  // Some new property that just keeps track of the current active player. This could literally be an integer (1 or 2), it could be the current player (the entire object) or any other metric. 
  // this.currentPlayer = 1 (this would mean player 1 is currently active.)
}

Game.prototype.addPlayer = function(player){
  this.players[player.playerName] = player;
};

Game.prototype.assignTurn = function() {
  this.currentPlayer = player1; // player1 is a global variable in the way you're using it here. Maybe this could be an integer
  for (let i = 0; i < this.players.length; i++) {
  if (this.yourTurn === true) { // this.currentPlayer = 1
  this.currentPlayer = this.playerName; // then set currentPlayer to 2
  this.yourTurn === false; // vise versa
  } else {
  this.yourTurn === true;
  }
}
}

function Player(playerName, cumulativeScore, yourTurn) {
  this.playerName = playerName;
  this.cumulativeScore = cumulativeScore;
  this.yourTurn = yourTurn;
}


let gameOne = new Game();
let player1 = new Player("Cody", 0, true);
let player2 = new Player("Jafaar", 0, false);

gameOne.addPlayer(player1);
gameOne.addPlayer(player2);

gameOne.assignTurn();

//create a function that adds the players to the game. So addPlayer function.
// we could then create a function that "finds a player" and makes it that players turn.
// and then that could connect to our endTurn() function to tell it where to put the cumulative score pts????????
// endTurn() would need to sum the scoreArray and put it in currentPts, then put currentPts into cumulative pts??
// Do we even need current points, then?



// const players = [
//   {playerName: "Player One", cumulativeScore: 0},
//   {playerName: "Player Two", cumulativeScore: 0}
// ]


let playerOne = {
  playerName: "Cody",
  currentScore: 0,
  cumulativeScore: 0,
  yourTurn: true,
}

let playerTwo = {
  playerName: "Jafaar",
  currentScore: 0,
  cumulativeScore: 0,
  yourTurn: false,
}

// die roll function

function rollDie() {
  let min = 1;
  let max = 6;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let scoreArray = [];
function score() {
  let val = rollDie();
  // let currentScore = playerOne.currentScore;
  if (val > 1){
    scoreArray.push(val);
    console.log(scoreArray); 
  } else {
    scoreArray = [];
    console.log(val);
    alert("Your turn is over!");
  }
}

let sum = scoreArray.reduce(function(a, b) {
  return a +b;
})



// let scoreArray = [];
// function score() {
//   let currentScore = playerOne.currentScore;
//   if (rollDie() === 1) {
//     scoreArray = [];
//     console.log(scoreArray);
//   } else {
//     scoreArray.push(rollDie());
//     console.log(scoreArray); 
//     // alert("Your turn is over!");
//   }
// }

Player.prototype.score = function(currentScore, yourTurn) {
  if (rollDie() > 1){
    this.currentScore += rollDie(); 
  } else {
    this.currentScore = 0;
    this.yourTurn = false;
  }
}

// AddressBook.prototype.deleteContact = function(id) {
//   if (this.contacts[id] === undefined) {
//     return false;
//   }
//   delete this.contacts[id];
//   return true;
// };

Player.prototype.turnDetermine = function(playerName) {
  if (this.players[yourTurn] === true) {
    return true;
  }
    return false;
}



// Just in case we need this version
// let min = 1;
// let max = 6;
// function getRandomInt() {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }