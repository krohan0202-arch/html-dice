// var pics = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

// 1st dice
var random = Math.floor(Math.random() * 6 + 1);

if (random === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
} 
else if (random === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if (random === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if (random === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if (random === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else if (random === 6) {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

 else {
  console.log(random);
}

  // 2nd dice

var random2 = Math.floor(Math.random() * 6 + 1);
if (random2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if (random2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if (random2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if (random2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}else if (random === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else if (random2 === 6) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (random > random2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (random < random2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}