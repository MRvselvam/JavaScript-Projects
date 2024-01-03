function createPatten() {
  const input = 5;
  let patten1 = "",
    patten2 = "",
    patten3 = "",
    patten4 = "",
    divP1 = "",
    divP2 = "",
    divP3 = "",
    divP4 = "",
    divP5 = "";
  if (isNaN(input) || input < 0) {
    alert("Enter a number positive integer number only!");
  } else {
    // Squre Patten
    document.getElementById("h2-demo-1").innerHTML = "Squre Patten";
    for (i = 0; i < input; i++) {
      for (j = 0; j < input; j++) {
        patten1 += " @ ";
      }
      for (j = 0; j < input; j++) {
        patten1 += " & ";
      }
      patten1 += "<br>";
    }
    document.getElementById("demo-1").innerHTML = patten1;

    // Triangle Patten
    document.getElementById("h2-demo-2").innerHTML = "Triangle Patten";
    for (i = 0; i < input; i++) {
      for (j = 0; j <= i; j++) {
        patten2 += " * ";
      }
      patten2 += "<br>";
    }
    document.getElementById("demo-2").innerHTML = patten2;

    // Reverce Triangle Patten
    document.getElementById("h2-demo-3").innerHTML = "Reverce Triangle Patten";
    for (i = input; i >= 0; i--) {
      for (j = 0; j < i; j++) {
        patten3 += " * ";
      }
      patten3 += "<br>";
    }
    document.getElementById("demo-3").innerHTML = patten3;

    // Combining Patten Block - Top to Bottom
    document.getElementById("h2-demo-4").innerHTML =
      "Combining Patten Block - Top to Bottom";
    for (i = input; i >= 0; i--) {
      for (j = 0; j < i; j++) {
        patten4 += " * ";
      }
      patten4 += "<br>";
    }
    for (i = 0; i <= input; i++) {
      for (j = 0; j < i; j++) {
        patten4 += " * ";
      }
      patten4 += "<br>";
    }
    document.getElementById("demo-4").innerHTML = patten4;

    // Combine Top, Bottom, Left, Right - all side Patten
    document.getElementById("h2-demo-5").innerHTML =
      "Combine All side(Top, Bottom, Left, Right) in this Patten";
    for (i = 0; i < input; i++) {
      // Top Left
      for (j = 0; j <= i; j++) {
        divP1 += " * ";
      }

      // Top Right
      for (j = 0; j <= i; j++) {
        divP2 += " * ";
      }
      divP1 += "<br>";
      divP2 += "<br>";
    }
    document.getElementById("p-1").innerHTML = divP1;
    document.getElementById("p-2").innerHTML = divP2;

    // Center
    for (i = 0; i < input; i++) {
      for (j = 0; j < input; j++) {
        divP3 += " * ";
      }
      divP3 += "<br>";
    }
    document.getElementById("p-3").innerHTML = divP3;

    for (i = input; i > 0; i--) {
      // Bottom Left
      for (j = 0; j < i; j++) {
        divP4 += " * ";
      }

      // Botton Right
      for (j = 0; j < i; j++) {
        divP5 += " * ";
      }

      divP4 += "<br>";
      divP5 += "<br>";
    }
    document.getElementById("p-4").innerHTML = divP4;
    document.getElementById("p-5").innerHTML = divP5;
  }
}
