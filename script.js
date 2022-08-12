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
    let pixel = document.querySelectorAll("div");
    pixel.forEach((pixel) => {
      pixel.addEventListener("mouseover", (event) => {
        event.target.styles.backgroundColor = "white";
      });
    });
  }
}
makeRows(30);

/*figured out that the problem may be the creation of grid item
in the makeRows function. The error "listener event is not a function"
indicates that either the element that I am trying add the listener event
doesn't exist yet (the code for the listener event initiates before the
gridItems are created). If I create a function with an IF statement and
have the eventlistener only initate IF the gridItems have populated it might
solve the problem*/

/* The above is wrong - you cannot use an addEventListener to multiple
elements. I believe I have to create a loop for this to work see below *?

//I will be reading discord for awhile tonight to see if 
//anyone has come across simliar issues
// I really think I'm missing a general concept somewhere.


//The "getElementsByClassName" method returns an element collection, but the "addEventListener" method is only available on an individual element.

/*var i =0;
while (i<number_of_elements) {
  document.getElementsByClassName('your_class_name')[i].style.backgroundColor= 'red';
  //selecting each class and changing it's backgroundcolor
  i++;
} */
