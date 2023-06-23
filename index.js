var mypix = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
var randomnum = Math.floor(Math.random() * mypix.length);
document.getElementById("mydice1").src = mypix[randomnum];
var mypix1 = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
var randomnum1 = Math.floor(Math.random() * mypix1.length);
document.getElementById("mydice2").src = mypix1[randomnum1];
if(randomnum === randomnum1)
document.querySelector("h1").innerHTML = "draw";
if(randomnum > randomnum1)
document.querySelector("h1").innerHTML = "player1 wins";
if(randomnum1 > randomnum)
document.querySelector("h1").innerHTML = "player2 wins";
