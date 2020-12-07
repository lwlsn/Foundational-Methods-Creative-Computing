// Week 6 - lab

// Task 1 - Change the background colour according to where it is on the screen (halves then quadrants) 

// Task 2 - If/else statement for mousePressed, circle vs rect.. 

// Task 3 - Change the rectangle colour when the mouse is inside the square. 

// Task 4 - Remove the previous  code  rectangle and circle by uncommenting it. 

let circleX, circleY;


function setup() {
  createCanvas(400, 400);
  noStroke();
  
  circleX = width/2;
  circleY = height/2;

}

function draw() {


  // Task 1
  if (mouseX < width/2) {
    if (mouseY < height/2){
      background(255, 220, 180);
    }
    else {
     background(220, 220, 255); 
    }
    
  }

  else {
    if ( mouseY < height/2) {
      background(180,220, 255);
    }
    else {
      background(180, 255, 190);
    }
    
  }

  fill(255);
  noStroke();
  
  
//     // Task 2
//   if (mouseIsPressed == true) {
//        ellipse(width/2, height/2, 150, 150);
//     }
//     else {
        
      
//     // Task 3 - if the mouse is over the rectangle, change the fill colour
//         let rectW = 200;
//         let rectH = 200;
        
      
//         if ( mouseX > (width/2-rectW/2) && 
//           mouseX < (width/2+rectW/2) &&
//           mouseY > (height/2-rectH/2) &&
//           mouseY < (height/2+rectH/2)) {
//           // fill it red
//           fill(255, 0, 0);
//         } else {
//            // otherwise fill it blue
//           fill(0, 0, 255);
//         }
      
//       rectMode(CENTER);
//       rect(width/2, height/2, 150, 150);
      
      
//     }
  
  

  
  //Task 4 - Remove Rectange / circle code from above. When key is pressed add our rectangle/circle. 
  
  
    if(keyIsPressed){
      
      if(key == 'g'){
        fill(0,255,0);
      }
    
      //Task 5 - red and blue .. 
      else if (key == 'r') {
        fill(255,0,0);
      }
      else if (key == 'b') {
          fill(0,0,255);
       }
    }
    else{
    	fill(255,255,255);
    }
  
    // Task 7, make a snake that you can move around the screen
    // by using a while or foor loop and repeating the circles. 
    for (let i = 0; i < 200; i += 50 ) {
       ellipse(circleX+i, circleY,50,50);
    }
   
  if (circleX <= 0) {
    circleX  = 400;
  }
    
  
}

// Task 6 
function keyPressed() {
  if (keyCode === UP_ARROW) {
    circleY = circleY - 10;
  } else if (keyCode === DOWN_ARROW) {
    circleY = circleY + 10;
  }
  if (keyCode === LEFT_ARROW) {
    circleX = circleX - 5;
  } else if (keyCode === RIGHT_ARROW) {
    circleX = circleX + 5;
  }
  
}
