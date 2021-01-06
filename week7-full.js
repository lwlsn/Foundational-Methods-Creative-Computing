// Week 7 - Lab. 
// This week we'll apply our knowledge of loops in our code and make sure that we understand how to use these to repeat an action. 

// Task 1 - fill in the background colours. 

// Task 2 - Use our rect command to add more rectangles at 100 pixel intervals to fill in all of the grass area. 

// Task 3 - Now replace this code with a for loop. 

// Task 4 - Add a house at 25 pixels across, 350 pixels down. Fill it in dark brown. 

//Task 5 - Use another for loop to create a row of houses. 

// Task 6 - Use one final for loop to create a row of the roof on the houses. 

 
function setup() {
  createCanvas(500, 500);
  noStroke();
  
  
}

function draw() {
  // Task 1 - Fill in the sky blue. 
  background(157, 226, 245);
  
  // Task 1 - Draw the sun- orange
  fill(250, 195, 55);
  ellipse(335, 66, 70, 70);
  

  // Task 1 - Draw the grass lawn green 
  fill(16, 145, 33);


  // Task 2 - Add more rectangles to complete the grass.
  // rect(0,   400, 100, 100);
  // rect(100, 400, 100, 100);
  // rect(200, 400, 100, 100);
  // rect(300, 400, 100, 100);
  // rect(400, 400, 100, 100);
  
  
  // Task 3 - Replace our code we just wrote with a for loop. 
  
  for (let i=0; i < width; i += 100 ) {
    rect(i, 400, 100, 100 );
  }
  
  // Task 4 & 5 - Add another for loop for our houses. 
  
  fill(148, 60, 9);
  // rect(25, 350, 50, 50);
  
  for (let i= 25; i < width; i += 100){
    rect(i, 350, 50, 50);
  }
  
  // Task 6 - Add rooves to each of our houses. 
  
  fill(50);
  // triangle(25, 350, 50, 325, 75, 350 );
  
  for (let i = 25; i < width; i+= 100) {
    triangle(i, 350, i+25, 325, i+50, 350);
  }
  
}
