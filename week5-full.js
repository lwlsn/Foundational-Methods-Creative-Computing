// Week 5 - Variables and Conditionals

// Task 1 - fill in the colours for the sketch 
// Task 2 - Cover the sun with the clouds.
// Task 3 - Animate them to move out of the frame 
// Task 4 - Animate the sun to start getting larger. 
// Task 5 - If the clouds reach the edge of the screen, make them appear at the other side of the screen 
// Task 6 - If the sun's radius is  > 200, make it decrease 
// Task 7 - If the sun's radius is < 50, make it increase

let leftX = 150; 
let rightX = 250; 
let sunRadius= 50;
let speed = 1;

let speedIsIncreasing = true; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Blue sky background
  if(speedIsIncreasing) {
    background(185,230,255);
  }
  else {
    background(0);
  }
  
  //Sun 
  noStroke();
  
  if (speedIsIncreasing){
    fill(255, 210, 20);
  }
  else {
    fill(255,250,180);
  }
  ellipse(200, 100, sunRadius, sunRadius);
  
  
  
  // clouds 
  fill(255, 255, 255);
  // left cloud
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX+62, 150, 70, 60);
  ellipse(leftX-62, 150, 70, 60);
    
  // right cloud
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX+62, 100, 70, 60);
  ellipse(rightX-62, 100, 70, 60);
  

  // Cloud animation
  leftX -= 1;
  rightX += 1;
  
  if ( (leftX-62) == 0) {
    leftX = width;   
  }
  
  if ( (rightX-62) == width) {
    rightX = 0;
  }
  
  
  // Sun animation
  sunRadius += speed;
  
  if (sunRadius > 200 ) {
    speed = - speed;
    speedIsIncreasing = false;
  }
  
  if (sunRadius < 50) {
    speed = -speed;
    speedIsIncreasing = true;
  }
  
  
}
