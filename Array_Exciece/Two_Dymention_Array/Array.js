var map = [
  [1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 1, 0], 
  [1, 1, 0, 0, 0, 1],
  [0, 1, 1, 0, 1, 0],
  [1, 0, 1, 0, 0, 0],
];
  
var Rows = map.length;
var Columns = map[0].length;
const stage = document.getElementById("stage");

for (let row = 0; row < Rows; row++) {
  for (let col = 0; col < Columns; col++) {
    let img = document.createElement("img");
    img.classList.add("cell");
    stage.appendChild(img);
    if (map[row][col] == 0) {
      img.src = "./Images/images_red_chair.webp";
      img.style.width = "160px";
      img.style.border = "5px solid black";
      img.style.marginLeft = "5px";
    } else if (map[row][col] == 1) {
      img.src = "./Images/images_green_chair.webp";
      img.style.width = "160px";
      img.style.border = "5px solid black";
      img.style.marginLeft = "5px";
    }
  }
  console.log(stage);
}
