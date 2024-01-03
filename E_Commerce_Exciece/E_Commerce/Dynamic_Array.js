var appleInp = document.getElementById("apple"),
  appleInputContainer = document.getElementById("appleInputContainer"),
  appleBtn = document.getElementById("appleButton");

var orangeInp = document.getElementById("orange"),
  orangeInputContainer = document.getElementById("orangeInputContainer"),
  orangeBtn = document.getElementById("orangeButton");

var grapesInp = document.getElementById("grapes"),
  grapesInputContainer = document.getElementById("grapesInputContainer"),
  grapesBtn = document.getElementById("grapesButton");

appleInp.addEventListener("click", function () {
  if (appleInp.checked) {
    appleInputContainer.style.display = "block";
  }
});
orangeInp.addEventListener("click", function () {
  if (orangeInp.checked) {
    orangeInputContainer.style.display = "block";
  }
});
grapesInp.addEventListener("click", function () {
  if (grapesInp.checked) {
    grapesInputContainer.style.display = "block";
  }
});

const orderBtn = () => {
  console.log("Waiting for your Order!");
  var toralCost = 0,
    appleCost = 0,
    appleRate = 180,
    orangeCost = 0,
    orangeRate = 120,
    grapesCost = 0,
    grapesRate = 80;
  appleBtn.addEventListener("click", function () {
    var appleInpValue = document.getElementById("appleInpField").value;
    console.log(appleInpValue);
    if (!isNaN(appleInpValue)) {
      alert("Apple " + appleInpValue + "Kg is added.");
      console.log("Apple " + appleInpValue + "Kg is added.");
      appleCost = appleInpValue * appleRate;
      console.log(appleCost);
      return appleCost;
    } else {
      alert("Please enter a valid number!");
    }
    appleInputContainer.style.display = "none";
  });
  orangeBtn.addEventListener("click", function () {
    var orangeInpValue = document.getElementById("orangeInpField").value;
    console.log(orangeInpValue);
    if (!isNaN(orangeInpValue)) {
      alert("Orange " + orangeInpValue + "Kg is added.");
      console.log("Apple " + orangeInpValue + "Kg is added.");
      orangeCost = orangeInpValue * orangeRate;
      console.log(orangeCost);
      return orangeCost;
    } else {
      alert("Please enter a valid number!");
    }
    appleInputContainer.style.display = "none";
  });
  grapesBtn.addEventListener("click", function () {
    var grapesInpValue = document.getElementById("grapesInpField").value;
    console.log(grapesInpValue);
    if (!isNaN(grapesInpValue)) {
      alert("Grapes " + grapesInpValue + "Kg is added.");
      console.log("Apple " + grapesInpValue + "Kg is added.");
      grapesCost = grapesInpValue * grapesRate;
      console.log(grapesCost);
      return grapesCost;
    } else {
      alert("Please enter a valid number!");
    }
    appleInputContainer.style.display = "none";
  });
  toralCost = appleCost + orangeCost + grapesCost;
  console.log("graoes " +grapesCost);
};
