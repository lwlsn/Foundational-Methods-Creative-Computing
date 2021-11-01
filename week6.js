
// Week 6 - lab

// Task 1 -  Give the variables an initial value. 
let xPos=200;
let yPos=200;
let size=50;

// Task 2a - Create a variable for speed.
// Task 2c - Separate into x-speed, y-speed. 


function setup() {
  createCanvas(400, 400);
}

function draw() {
    
  // Task 5 + 6, change the background of the canvas using an if/else statement. 
  background(220);

  
  noStroke();
  // Task 8 - Extension, create four circles next to each other using a for loop. Make sure these all move on the arrow keys.
  ellipse(xPos, yPos, size, size);
  

  // Task 2b, 2c increment the x and y by variable speeds. 
  // xPos = xPos +;
  // yPos = yPos +;
  

// Task 3a - check the edge conditions for the x-position. 
// Task 4a - add an OR operator to check both conditions.
//   if (xPos > ) {
        
//   }
  
  
// Task 3b - check the edge conditions for the y-position.
// Task 4b - add an OR operator to check both conditions.
//   if (yPos > ) {
    
// }
  
  
}


// Task 7  - Extension
function keyPressed() {
  if (keyCode === UP_ARROW) {
      // move circle up
  } else if (keyCode === DOWN_ARROW) {
     // move circle down
  }
  if (keyCode === LEFT_ARROW) {
     // move circle left
  } else if (keyCode === RIGHT_ARROW) {
     // move circle right
  }
  
}