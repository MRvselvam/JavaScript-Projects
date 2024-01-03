function whetherCheck() {
  var randomNumber = Math.round(Math.random() * 1);
  var image = document.getElementById("img");

  if (randomNumber > 0) {
    image.src = "./Images/rainGif.gif";
    document.getElementById("r-1").innerHTML = "Random Number: " + randomNumber;
    console.log("Random Number: ", randomNumber);
  } else {
    image.src = "./Images/CloudyImg.png";
    console.log("Random Number: ", randomNumber);
    document.getElementById("r-1").innerHTML = "Random Number: " + randomNumber;
  }
}
