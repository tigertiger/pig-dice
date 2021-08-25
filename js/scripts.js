
function Player(playerName, currentScore, cumulativeScore, yourTurn) {
  this.playerName = playerName;
  this.currentScore = currentScore;
  this.cumulativeScore = cumulativeScore;
  this.yourTurn = yourTurn;
}

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
  let currentScore = playerOne.currentScore;
  if (val > 1){
    scoreArray.push(val);
    console.log(scoreArray); 
  } else {
    scoreArray = [];
    console.log(val);
    alert("Your turn is over!");
  }
}

score(rollDie)

function endTurn() {

}

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