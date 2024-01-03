function averageOfNum() {
  let number1 = parseInt(document.getElementById("input1").value);
  let number2 = parseInt(document.getElementById("input2").value);
  let number3 = parseInt(document.getElementById("input3").value);
  let number4 = parseInt(document.getElementById("input4").value);
  let number5 = parseInt(document.getElementById("input5").value);
  let sum = 0,
    count = 5,
    average = 0;
  sum = number1 + number2 + number3 + number4 + number5;
  average = sum / count;
  document.getElementById("demo").innerHTML =
    "Sum of these inputs value: " +
    sum +
    "<br>" +
    "Input count value: " +
    count +
    "<br>" +
    "Average formula: Sum / Count" +
    "<br>" +
    "The input numbers average is - " +
    average;
}
