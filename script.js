// don't mind me I have no idea what I'm doing yet.
// reboot. Deleted all code for a start over
//

const container = document.getElementById("container");
const outerbox = document.getElementById("outerbox");
const gridItem = document.getElementsByClassName("gridItem");

function makeRows(input) {
  container.style.setProperty("--grid-rows", input);
  container.style.setProperty("--grid-cols", input);
  for (c = 0; c < input * input; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridItem";
  }
}

makeRows(100);

// I need to work on the piece of code below
//I am not sure what is wrong with it as of yet
//there are no errors on it
//it should change the color of the griditem to white

container.addEventListener("mouseover", (e) => {
  gridItem.style.backgroundColor = "white";
});
