function factorialNum() {
  var number = parseInt(document.getElementById("input").value);

  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
    document.getElementById("demo").innerHTML =
      "Error! Factorial for negative number does not exist.";
  } else if (number == 0) {
    console.log(number + " is Factorial of 1.");
    document.getElementById("demo").innerHTML = number + " Factorial of  1.";
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(number + " is Factorial of " + fact);
    document.getElementById("demo").innerHTML =
      number + " Factorial of  " + fact;
  }
}
