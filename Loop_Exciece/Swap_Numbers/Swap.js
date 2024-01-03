function swapNum() {
  var number1 = parseInt(document.getElementById("input1").value);
  var number2 = parseInt(document.getElementById("input2").value);
  var temp = 0;
  console.log("Before Swapping: " + number1);
  console.log("Before Swapping: " + number2);

  temp = number1;
  number1 = number2;
  number2 = temp;

  console.log("After Swapping: " + number1);
  console.log("After Swapping: " + number2);
  document.getElementById("swap1").innerHTML = "Number 1:  " + number1;
  document.getElementById("swap2").innerHTML = "Number 2:  " + number2;
}
