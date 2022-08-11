// don't mind me I have no idea what I'm doing yet.
// reboot. Deleted all code for a start over
//

const container = document.getElementById("container");
const outerbox = document.getElementById("outerbox");
const pixel = document.getElementsByClassName("gridItem");

function makeRows(input) {
  container.style.setProperty("--grid-rows", input);
  container.style.setProperty("--grid-cols", input);
  for (c = 0; c < input * input; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridItem";
  }
}

makeRows(100);

/*figured out that the problem may be the creation of grid item
in the makeRows function. The error "listener event is not a function"
indicates that either the element that I am trying add the listener event
doesn't exist yet (the code for the listener event initiates before the
gridItems are created). If I create a function with an IF statement and
have the eventlistener only initate IF the gridItems have populated it might
solve the problem*/

// I need to work on the piece of code below
//I am not sure what is wrong with it as of yet
//it should change the color of the griditem to white

//bad code still working on solution

/*
pixel.addEventListener("mouseover", (event) => {
  event.target.style.color = "white";
  return;
});*/
