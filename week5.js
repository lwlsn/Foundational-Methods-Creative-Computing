// Week 5 - Variables and Conditionals

// Task 1 - fill in the colours for the sketch 
// Task 2 - Cover the sun with the clouds.
// Task 3 - Animate them to move out of the frame 
// Task 4 - Animate the sun to start getting larger. 
// Task 5 - If the clouds reach the edge of the screen, make them appear at the other side of the screen 
// Task 6 - If the sun's radius is  > 200, make it decrease 
// Task 7 [Extension] - If the sun's radius is < 50, make it increase
// Task 8 [Extension] - When the sun is Increasing, change background to blue, when it is decreasing change to black. Change the sun's colour in the same way. 

let leftX = 45; 
let rightX = 360; 
let sunRadius= 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Blue sky background
  background(220);
  
  //Sun 
  noStroke();
  ellipse(200, 100, sunRadius, sunRadius);
  
  
  // clouds 
  
  // left cloud
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX+62, 150, 70, 60);
  ellipse(leftX-62, 150, 70, 60);
      
  // right cloud
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX+62, 100, 70, 60);
  ellipse(rightX-62, 100, 70, 60);
  

  // Task 5- Cloud animation
  
  // if ( leftX  < ) {
  //   leftX = 
  // }
  
  
  // Task 6 - Sun animation
  
  // if ( sunRadius  > ) {
  // 
  // }
  
  
}
