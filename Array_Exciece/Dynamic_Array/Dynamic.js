var h1Tag = document.createElement("h1");
h1Tag.textContent = "Dynamic Creation!";

var h2Tag = document.createElement("h2");
h2Tag.textContent = "Create, Update and Delete!";

var inputTag = document.createElement("input");
inputTag.placeholder = "Enter your message";
inputTag.id = "inpValue";

var dynamicBtn = document.createElement("button");
dynamicBtn.textContent = "Create";

var delAllBtn = document.createElement("button");
delAllBtn.textContent = "Delete All";
delAllBtn.id = "delAllId";

var brTag = document.createElement("br");

var dynamicContainer = document.getElementById("container"); // Corrected this line
dynamicContainer.appendChild(h1Tag);
dynamicContainer.appendChild(h2Tag);
dynamicContainer.appendChild(inputTag);
dynamicContainer.appendChild(brTag);
dynamicContainer.appendChild(dynamicBtn);
dynamicContainer.appendChild(delAllBtn);

var dynamicArray = []; // Array to store values

dynamicBtn.addEventListener("click", function () {
  var inputValue = inputTag.value;
  if (inputValue) {
    var newDiv = document.createElement("div");
    newDiv.id = "divId";

    var newElement = document.createElement("input");
    newElement.id = "newElementId";
    newElement.value = inputValue;

    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.id = "editId";

    var updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.id = "updateId";

    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.id = "delId";

    dynamicArray.push(newElement); // Add the new element to the array

    editBtn.addEventListener("click", function () {
      newElement.style.background = "lightgray";
      newElement.style.color = "blue";
      newElement.style.pointerEvents = "visible";
      editBtn.style.background = "lightgreen";
      updateBtn.style.background = "green";
      delBtn.style.pointerEvents = "none";
      delBtn.style.background = "rgb(251, 95, 95)";
    });

    updateBtn.addEventListener("click", function () {
      newElement.value = newElement.value;
      newElement.style.pointerEvents = "none";
      newElement.style.background = "transparent";
      newElement.style.color = "rgb(199, 0, 113)";
      editBtn.style.background = "rgb(0, 149, 0)";
      delBtn.style.background = "rgb(255, 0, 0)";
      updateBtn.style.background = "rgba(1, 91, 182, 0.748)";
      delBtn.style.pointerEvents = "visible";
    });

    delBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this message?")) {
        var index = dynamicArray.indexOf(newElement);
        if (index !== -1) {
          dynamicArray.splice(index, 1);
        }
        dynamicContainer.removeChild(newDiv); // Remove the entire div
      }
    });

    delAllBtn.style.display = "block";
    delAllBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete all message?")) {
        for (i = dynamicArray.length; i > 0; i--) {
          dynamicContainer.removeChild(newDiv);
        }
      }
    });

    newDiv.appendChild(newElement);
    newDiv.appendChild(editBtn);
    newDiv.appendChild(updateBtn);
    newDiv.appendChild(delBtn);
    dynamicContainer.appendChild(newDiv);

    inputTag.value = "";
  } else {
    console.log("Please, Enter some values first!");
    alert("Please, Enter some values first!");
  }
});
