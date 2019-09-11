$(document).ready(function(){


//define variables
var randomNum = 0


var crystal1 = 0
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0

var totalScore = 0;


//scoreboard
var wins = 0;
var losses = 0;

//computer generate random number between 19-120
var randomNum = Math.floor(Math.random()*101 +19)
//append randomNum to html browser
$("#randomNumber").text(randomNum);


//computer generate hidden 4 random crystal values between 1- 12
var crystal1 = Math.floor(Math.random()*10 +2)
console.log(crystal1);

var crystal2 = Math.floor(Math.random() * 10 + 2)
console.log(crystal2);

var crystal3 = Math.floor(Math.random() * 10 + 2)
console.log(crystal3);

var crystal4 = Math.floor(Math.random() * 10 + 2)
console.log(crystal4);


//hide crystal amount until player clicks crystal

//click crystal
    //update player score counter

//if player score === computer random number
    //increase wins +1

//if player score > computer random number
    //increase losses by +1

//game restarts if player wins or loses

//computer generates new random number & 4 new random crystal values










});
