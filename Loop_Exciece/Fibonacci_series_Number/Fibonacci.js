function fibonacci() {
  const number = parseInt(document.getElementById("input").value);
  let n1 = 0,
    n2 = 1,
    nextTerm,
    fib = "";
  for (let i = 1; i <= number; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    fib += n1 + "<br>";
    document.getElementById("demo").innerHTML =
      number + " Fibonacci Series: <br>" + fib;
  }
}
