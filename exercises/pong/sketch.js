var score=0;
var x=[];
var y=[];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(800, 800)
  rectMode(CENTER);
  for(var i=0; i<10; i++) {
  // randomize x position only once
     x[i]=random(width);
     y[i]=random(height);
     xSpeed[i]=random(-2,2);
     ySpeed[i]=random(-2,2);
  }
}

function draw() {
  background(128, 128, 0)
    // make multiple balls
  for(var i=0; i<10; i++) {
     x[i] += xSpeed[i];
     y[i] += ySpeed[i];
     ellipse(x[i], y[i], 20, 20);
     
     if(y[i] < 0) { //include all area above the ceiling
         ySpeed[i] *= -1; //ySpeed[i] *= -ySpeed[i]
     }
     if(x[i] < 10 || x[i] > width -10) { 
         xSpeed[i] *= -1; 
     }
     
     //compare the distance of the center of the ellipse and the rect
     if(y[i] > (height - 72.5) && abs(x[i]-mouseX) < width/8){
         ySpeed[i] *= -1;
         
         
     }
  }
  rect(mouseX, height-50, width/4, 25, 10);
  text(score, mouseX, height-50);
  
}