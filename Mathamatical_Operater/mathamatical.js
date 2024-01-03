function adding() {
    var num1 = parseInt(document.getElementById("text-1").value);
    var num2 = parseInt(document.getElementById("text-2").value);
    var total = num1 + num2;
    console.log(total);
    document.getElementById("add").value = total;
  }

  function subraction() {
    var num1 = parseInt(document.getElementById("text-3").value);
    var num2 = parseInt(document.getElementById("text-4").value);
    var total = num1 - num2;
    console.log(total);
    document.getElementById("sub").value = total;
  }

  function multiplying() {
    var num1 = parseInt(document.getElementById("text-5").value);
    var num2 = parseInt(document.getElementById("text-6").value);
    var total = num1 * num2;
    console.log(total);
    document.getElementById("multiply").value = total;
  }

  function dividing() {
    var num1 = parseInt(document.getElementById("text-7").value);
    var num2 = parseInt(document.getElementById("text-8").value);
    var total = num1 / num2;
    console.log(total);
    document.getElementById("divid").value = total;
  }