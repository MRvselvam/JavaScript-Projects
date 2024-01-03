// function oddOrEven() {
//   var inputNum = parseInt(document.getElementById("inpNum").value);
//   for (i = 0; i <= inputNum; i++) {
//     if (i % 2 === 0) {
//       var Even =
//         i + " These all numbers are Even Numbers within " + inputNum + ".";
//       document.getElementById("even").innerHTML = Even;
//       console.log("Even num: " + i);
//     } else {
//       var Odd =
//         i + " These all numbers are Odd Numbers within " + inputNum + ".";
//       document.getElementById("odd").innerHTML = Odd;
//       console.log("Odd num: " + i);
//     }
//   }
// }

function oddOrEven() {
  let inputNum = parseInt(document.getElementById("inpNum").value);
  let Even = "",
    Odd = "";
  for (i = 1; i <= inputNum; i++) {
    if (i % 2 === 0) {
      Even += i + " ";
      document.getElementById("even").innerHTML =
        Even + " These all numbers are Even Numbers within " + inputNum + ".";
    } else {
      Odd += i + " ";
      document.getElementById("odd").innerHTML =
        Odd + " These all numbers are Odd Numbers within " + inputNum + ".";
    }
  }
}
