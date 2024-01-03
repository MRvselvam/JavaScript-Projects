function coundition() {
  var num1 = parseInt(document.getElementById("ip-1").value);
  var num2 = parseInt(document.getElementById("ip-2").value);
  console.log(num1);
  console.log(num2);
  if (num1 > num2) {
    const grater = "Num-1 grarter then Num-2";
    document.getElementById("ip-3").value = grater;
  } else if (num2 > num1) {
    const lesthen = "Num-2 greater then Num-1";
    document.getElementById("ip-3").value = lesthen;
  } else {
    const equle = "Both are equle";
    document.getElementById("ip-3").value = equle;
  }
}
