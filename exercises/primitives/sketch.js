var x = [];
var y = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  fill(255,0,0,100)
}

function draw() { 
  background (150)
  line(0,0,mouseX,100);
  rect(mouseX, mouseY, 100, 100,10);
  
  beginShape(LINES);
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(30, 75);
  endShape(); //must put CLOSE if we want to close shape
  
  beginShape();
  for(var i=0; i<x.length; i++) { //for(var; test condition; expression)
    vertex(x[i],y[i]);
    text(i, x[i], y[i]);
  }
  endShape();
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