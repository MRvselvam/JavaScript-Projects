function table() {
  let number = parseInt(document.getElementById("input").value);
  let limit = parseInt(document.getElementById("inpLimit").value);
  let Error = "Error, Please you put a value is only a natural numbers.";

  let i = 1,
    MultiTable = "";
  if (number <= 0) {
    console.log(Error);
    document.getElementById("demo").innerHTML = Error;
  } else {
    while (i <= limit) {
      MultiTable += i + " x " + number + " = " + i * number + "<br>";
      console.log(i + " x " + number + " = " + i * number);
      document.getElementById("demo").innerHTML = MultiTable;
      i++;
    }
  }
}
