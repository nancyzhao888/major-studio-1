var score=0;
var num = 10;

var pongBalls=[];

function setup() {
  createCanvas(600, 600)
  rectMode(CENTER);
  textAlign(CENTER);
  
  for(var i=0; i<10; i++) {
     // randomize x position only once
     // add pongballs to the array
     // add instances of PongBall to the pongBalls[] array
     pongBalls.push(new PongBall(random(30,width-30), random(30, height-80))); // random (from, to)
  }
}

function draw() {
    for(var i = 0; i<pongBalls.length; i++) {
        pongBalls[i].update();
        pongBalls[i].display();
    }
//   background(128, 128, 0)
//     // make multiple balls
//   for(var i=0; i<10; i++) {
//      x[i] += xSpeed[i];
//      y[i] += ySpeed[i];
//      ellipse(x[i], y[i], 20, 20);
     
//      if(y[i] < 0) { //include all area above the ceiling
//          ySpeed[i] *= -1; //ySpeed[i] *= -ySpeed[i]
//      }
//      if(x[i] < 10 || x[i] > width -10) { 
//          xSpeed[i] *= -1; 
//      }
     
//      //compare the distance of the center of the ellipse and the rect
//      if(y[i] > (height - 72.5) && abs(x[i]-mouseX) < width/8){
//          ySpeed[i] *= -1;
//          ySpeed[i] *= -1;
         
         
//      }
//     rect(mouseX, height-50, width/4, 25, 10, 10, 10, 10);
//     text(score, mouseX, height-50);
//     ellipse(x[i], y[i], 20, 20);
//   }
}

function keyPressed() {
    if (key === ' ')
    setup();
}

function PongBall(myX, myY) {
    this.x = myX;
    this.y = myY;
    this.speedX = random(-10, 10);
    this.speedY = random(-10, 10);
    
    console.log(this.x + '|' + this.y);
    
    this.display = function() {
        push();//grouping
        translate(this.x, this.y);//move the piece of paper
        ellipse(0,0,15,15);
        pop();
    }
    
    this.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if(this.y <= 10) { //top wall
         this.ySpeed[i] *= -1; //ySpeed[i] *= -ySpeed[i]
     }
        if(this.x <= 10) { 
         this.xSpeed[i] *= -1; //-xSpeed[i]
     }
     
     //compare the distance of the center of the ellipse and the rect
     if(this.x>= width -10){
         this.xSpeed = -this.xSpeed
    }
}
}