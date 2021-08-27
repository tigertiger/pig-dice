

function Game() {
  this.players = {};
  this.activePlayer = 1;
}


Game.prototype.addPlayer = function(player){
  this.players[player.playerName] = player;
};


function Player() {
  this.playerName = "";
  this.cumulativeScore = 0;
  this.currentScore = [];


}

Player.prototype.rollDie = function()  {
  let min = 1;
  let max = 6;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


Player.prototype.score = function() {
  let val = this.rollDie();
  if (val > 1){
    this.currentScore.push(val);
    console.log(this.currentScore);

  } else {
    this.currentScore = [];
    console.log(val);
    alert("Your turn is over!");
  } 
}

// let sum = this.currentScore.reduce(function(a, b) {
//   return a +b;
// });



// UI Logic

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
    $("#topContent").hide();
    $("#bottomContent").show();

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

  $("#startOver").click(function() {
    location.reload();
  })
})