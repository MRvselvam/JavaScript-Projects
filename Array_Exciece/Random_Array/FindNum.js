// Function to generate an array of random numbers
function orderNumInRandomArray() {
  const length = parseInt(document.getElementById("lengthInp").value);
  const min = parseInt(document.getElementById("minInp").value);
  const max = parseInt(document.getElementById("maxInp").value);
  var randomArray = [],
    dissending = [];

  if (isNaN(length) || isNaN(min) || isNaN(max)) {
    alert("Please enter a valid numbers.");
    return;
  } else {
    if (min > max) {
      alert(
        "The Start value is greter then End value. So, Please enter the correct values."
      );
    } else {
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
      }
    }
    alert("Random Array is Created!");
    console.log("Random Array: " + randomArray);
  }

  // Asconding Order a numbers in that Random Array
  const assending = randomArray.sort(function (a, b) {
    return a - b;
  });
  console.log("Assending Order: " + assending);
  document.getElementById("assendingVal").innerHTML =
    "Assending Order: " + assending;

  // Dissending Order a numbers in that Random Array
  for (i = assending.length - 1; assending.length > 0; i--) {
    const ass = assending.pop();
    dissending.push(ass);
  }
  document.getElementById("dissendingVal").innerHTML =
    "Dissending Order: " + dissending;
  console.log("Dissending Order: " + dissending);
}

// Function to generate an array of random numbers
function findNumberInRandomArray() {
  const length = parseInt(document.getElementById("lengthInp-2").value);
  const min = parseInt(document.getElementById("minInp-2").value);
  const max = parseInt(document.getElementById("maxInp-2").value);
  const randomArray = [];

  if (isNaN(length) || isNaN(min) || isNaN(max)) {
    alert("Please enter a valid numbers.");
    return;
  } else {
    if (min > max) {
      alert(
        "The Start value is greter then End value. So, Please enter the correct values."
      );
    } else {
      for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
      }
    }
    alert("Random Array is Created!");
    console.log("Random Array: " + randomArray);
  }

  // User entered a input number, That guessing  number is inside a randomArray isthere or not.

  const userInp = parseInt(document.getElementById("userInp").value);

  if (randomArray.indexOf(userInp) !== -1) {
    document.getElementById("isThere").innerHTML =
      "Nice! Your guessing number " + userInp + " is in the array.";
    document.getElementById("thisIndex").innerHTML =
      "This Index value is " + [userInp];
    console.log(`Your guessing number ${userInp} is in the array.`);
  } else {
    document.getElementById("isThere").innerHTML =
      "Your guessing number " + userInp + " is not in the array.";
    console.log(`Your guessing number ${userInp} is not in the array.`);
  }
}
