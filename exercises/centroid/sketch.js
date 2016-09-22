// global variables to keep track of mouse positions
var x = [];
var y = [];
var cX, cY; // centroid x and y component
var a; // area of the polygon

function setup() {
  createCanvas(windowWidth,windowHeight);
  // center rectangles
  rectMode(CENTER);
  // half transparent red
  fill(255,0,0,100)
}

function draw() { 
  background (150)
  // line with one fixed end in coordinate system origin
  line(0,0,mouseX,100);
  
  // rectangle attached to mouse position
  rect(mouseX, mouseY, 100, 100,10);
  
  // polygon
  beginShape();
  for(var i=0; i<x.length; i++) { //for(var; test condition; expression)
    vertex(x[i],y[i]);
    text(i, x[i], y[i]);
  }
  endShape();
  
  a=0;
  cX=0;
  cY=0;
  
  // centroid formula
  for(var i=0; i<x.length -1; i++) { // summation from 0 to n-1
    // enumerate += is summation
    cX += (x[i] + x[i+1]) * (x[i]*y[i+1] - x[i+1]*y[i]);
    cY += (y[i] + y[i+1]) * (x[i]*y[i+1] - x[i+1]*y[i]);
    a += x[i] * y[i+1] - x[i+1] * y[i];
  }
  a = 0.5 * a
  cX = cX / (6*a)
  cY = cY / (6*a)
  
  ellipse(cX, cY, 10, 10)
}

function mouseReleased() {
  if (x.length <10) {
    x.push(mouseX); //push to certain array
    y.push(mouseY);
    console.log(x);
  }
}

// sequence of computation: line by line. right to left in one line.
// setup - once in the beginning
// draw - sixty times a second
// mouse released - triggered once when mouse is released