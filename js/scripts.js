
function Game(players, currentScore, currentPlayer) {
  this.players = {};
  this.currentScore = 0;
  this.currentPlayer = currentPlayer;
}

Game.prototype.addPlayer = function(player){
  this.players[player.playerName] = player;
};

Game.prototype.assignTurn = function() {
  let currentPlayer = player1;
  for (let i = 0; i < players.length; i++) {
  if (this.yourTurn === true) {
  currentPlayer = this.playerName;
  this.yourTurn === false;
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