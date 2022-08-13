// don't mind me I have no idea what I'm doing yet.
// reboot. Deleted all code for a start over
//

const container = document.getElementById("container");
const outerbox = document.getElementById("outerbox");
const gridItem = document.getElementsByName("gridItem");
const reset = document.getElementById("reset");
const colorchange = document.getElementById("colorchange");
const gridsize = document.getElementById("gridsize");
let SIZE = 16;

function makeRows(input) {
  container.style.setProperty("--grid-rows", input);
  container.style.setProperty("--grid-cols", input);
  for (c = 0; c < input * input; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridItem";
  }
  if (input > 2) {
    let pixels = document.querySelectorAll(".gridItem");
    pixels.forEach((pixel) => {
      pixel.addEventListener("mouseover", () => {
        pixel.setAttribute("style", "background-color: cadetblue;");
      });
    });
  }
}
function RESETGRID() {
  let pixels = document.querySelectorAll(".gridItem");
  pixels.forEach((pixel) => {
    pixel.setAttribute("style", "background-color: black");
  });
}
reset.addEventListener("click", () => {
  RESETGRID();
});

gridsize.addEventListener("click", () => {
  let SIZE = Number(
    prompt("How Big do You Want it? Type Number Between 2-100!")
  );
  if (SIZE < 2 || SIZE > 100) {
    alert("Try Again");
  }
  if (SIZE >= 2 && SIZE <= 100) {
    RESETGRID();
    makeRows(SIZE);
  }
});
makeRows(SIZE);
