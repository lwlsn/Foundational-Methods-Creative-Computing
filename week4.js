// Week 4 - Variables and Randomness
// Now we know the fundamentals of drawing and interaction in p5.js,
// let’s apply this knowledge by starting to extend our sketches to 
// animate through variable incrementations.


// Task 4, uncomment the line below and add this variable in the place of the sun's x co-ordinate. 
// let position = 50;

//Task 7, uncomment the line below and add this variable in place of the sun's size. 
// let size = 5;

function setup() {
  
  //Task 3 - change these co-ordinates. What happens to our frog? Why?
  createCanvas(400, 400);
  
}

function draw() {
  
  //Task 2a - Turn the background a light blue
  
  background(220);
  
  
  // Sun
  //Task 2b - Turn the sun yellow

  noStroke();
  ellipse(50,50,70,70); //Task 4,7 substitute the variable names in here
  
  
  // Task 5, uncomment the code below. What happens to our sun? 
  // position = position + 1;
  
  // Task 6, now how can we make the sun start at the right side of the screen and move to the left side? 
  
  
  // Frog
  //frog's face
  //Task 2c - Turn the frog green 
  
  stroke(2);
  //Body
  ellipse(width/2, height*3/4, 300, 150);
  ellipse(width/2, height*3/4, 200, 20);
  //left arm
  ellipse(width/2-100, height*3/4+75, 70, 40);
  //right arm
  ellipse(width/2+100, height*3/4+75, 70, 40);
  
  
  //frog's eyes
  //Task 2d - Turn the frog's eyes white with black pupils
  //left eye
  ellipse(width/2-100, height*3/4-75, 70, 70);
  ellipse(width/2-100, height*3/4-75, 40, 40);
  
  //right eye
  ellipse(width/2+100, height*3/4-75, 70,70);
  ellipse(width/2+100, height*3/4-75, 40, 40);
  
  
}
