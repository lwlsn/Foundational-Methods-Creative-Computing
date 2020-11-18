// Week 4 - Full code frog and increasing, moving sun. 

let sunPositionX;
let sunPositionY;
let sunSize = 50;

let growth = 1;

let frogX;
let frogY;

function setup() {
  createCanvas(500, 500);
  
  sunPositionX = width-50;
  sunPositionY = height*(1/4);
  

}

function draw() {

  background(180, 220, 255); 
  
  // Sun 
  noStroke();
  fill(255, 255, 80);
  ellipse(sunPositionX, sunPositionY, sunSize, sunSize);
  
  sunPositionX -= 1;
  sunSize += growth;
  
  frogX = mouseX;
  frogY = mouseY;


  // Frog 
  stroke(2);
  fill(100,255,100);
  //Body
  ellipse(frogX, frogY, 300, 150);
  ellipse(frogX, frogY, 200, 20);
  //left arm
  ellipse(frogX-100,frogY+75, 70, 40);
  //right arm
  ellipse(frogX+100, frogY+75, 70, 40);
  
  
  //frog's eyes
  //Task 2d - Turn the frog's eyes white with black pupils
  //left eye
  fill(255);
  ellipse(frogX-100, frogY-75, 70, 70);
  fill(0);
  ellipse(frogX-100, frogY-75, 40, 40);
  
  //right eye
  fill(255);
  ellipse(frogX+100, frogY-75, 70,70);
  fill(0);
  ellipse(frogX+100, frogY-75, 40, 40);
  
  
}
