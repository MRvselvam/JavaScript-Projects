function naturalNum() {
  var number = parseInt(document.getElementById("input").value);
  var n = "";
  if (number < 0) {
    console.log(
      number + " is not a Natural Number! Please, put a correct Natural Number."
    );
    document.getElementById("demo").innerHTML =
      number +
      " is not a Natural Number! Please write a correct Natural Number.";
  } else {
    for (i = 0; i < number; i++) {
      n += i + 1 + "<br>";
      document.getElementById("demo").innerHTML = "Natural Numbers: <br>" + n;
    }
  }
}
