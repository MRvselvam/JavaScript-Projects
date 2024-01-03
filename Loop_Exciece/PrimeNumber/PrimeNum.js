function primeNum() {
  const number = parseInt(document.getElementById("InpPrime").value);
  let isPrime = true;

  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
    document.getElementById("demo").innerHTML =
      number + " is neither prime nor composite number.";
  } else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
      document.getElementById("demo").innerHTML = number + " is a Prime Number";
    } else {
      console.log(`${number} is not a prime number`);
      document.getElementById("demo").innerHTML =
        number + " is not a Prime Number";
    }
  } else {
    console.log("The number is not a prime number.");
    document.getElementById("demo").innerHTML =
      number + " is a not Prime Number";
  }
}
