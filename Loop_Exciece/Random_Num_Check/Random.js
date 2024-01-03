const ohNo = "This Random Number is 1 to 15 between only.",
  itsRight = "Wow! You are right! That random number is 9.",
  maxChances = 5;
let remainingChances = maxChances,
  image = document.getElementById("img");

function randomCheck() {
  const tagetNumber = 9;
  const number = parseInt(document.getElementById("input").value);
  if (remainingChances === 0) {
    image.src = "Images/sorryNoChances.jpg";
    document.getElementById("demo").innerHTML =
      "Sorry, you've run out of chances. The correct number was " +
      tagetNumber +
      ".";
    return;
  }
  if (number === tagetNumber) {
    image.src = "./Images/itsRight.jpg";
    document.getElementById("demo").innerHTML = itsRight;
    return;
  } else {
    remainingChances--;
    image.src = "Images/niceTry_Emoji.jpg";
    document.getElementById("demo").innerHTML = "Wrong guess." + ohNo;
    document.getElementById("chance").innerHTML =
      "Let's try to best! You have " + remainingChances + " chances left.";
  }
}
