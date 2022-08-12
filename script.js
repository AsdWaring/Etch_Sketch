// don't mind me I have no idea what I'm doing yet.
// reboot. Deleted all code for a start over
//

const container = document.getElementById("container");
const outerbox = document.getElementById("outerbox");
const gridItem = document.getElementsByName("gridItem");

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
        pixel.setAttribute("style", "background-color: white;");
      });
    });
  }
}
makeRows(100);
