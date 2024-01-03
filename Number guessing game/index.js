const less = "Your guess is low.",
  high = "Your guess is high.",
  lost = "You lost the all chance. That Random number is ",
  win = "Wow Nice! Your guessing is right.",
  targetNum = Math.floor(Math.random() * 10 + 1),
  maxChances = 5;
let remainChances = maxChances,
  image = document.getElementById("img");
document.getElementById("remainChance").innerHTML = maxChances;
console.log("Random Number: " + targetNum);

// Seconds countdown
let sec = 30;
const timer = document.getElementById("countdown");

function remainSec() {
  timer.textContent = sec + " Sec";
}
function startCountdown() {
  remainSec();

  const countdownInterval = setInterval(function () {
    sec--;
    remainSec();
    if (sec === 0) {
      clearInterval(countdownInterval);
      //alert("Time is up!");
      image.src = "Images/gameOver.gif";
      document.getElementById("newDemo").innerHTML =
        "Time is up! You lost the game.";
      document.getElementById("newDemo").style.color = "red";
      document.getElementById("newDemo").style.marginLeft = "450px";
    }
  }, 1000);
  return;
}

window.onload = startCountdown;

function randomCheck() {
  const guessNum = parseInt(document.getElementById("input").value);

  // Input number valid checking
  if (isNaN(guessNum) || guessNum <= 0 || guessNum > 10) {
    alert("Please enter a input value is 1 to 10 only!");
    return;
  } else {
    if (remainChances === 0 || sec === 0) {
      image.src = "Images/gameOver.gif";
      document.getElementById("newDemo").innerHTML = lost + targetNum + ".";
      document.getElementById("newDemo").style.color = "red";
      document.getElementById("newDemo").style.marginLeft = "350px";
      return;
    }
    if (guessNum === targetNum) {
      image.src = "Images/right.gif";
      document.getElementById("newDemo").innerHTML = win;
      document.getElementById("newDemo").style.color = "green";
      document.getElementById("newDemo").style.marginLeft = "400px";
      return;
    } else {
      remainChances--;
      if (guessNum < targetNum) {
        image.src = "Images/guess.gif";
        document.getElementById("newDemo").innerHTML = less;
        document.getElementById("newDemo").style.color = "yellow";
      } else if (guessNum > targetNum) {
        image.src = "Images/guess.gif";
        document.getElementById("newDemo").innerHTML = high;
      }
    }
    document.getElementById("remainChance").innerHTML = remainChances;
  }
}
