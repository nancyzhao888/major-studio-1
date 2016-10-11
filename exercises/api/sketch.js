var data;

function preload(){
    data = loadJSON("dogs.json");
}
function setup() {
  createCanvas(300, 300);
  textAlign(CENTER);
}

function draw() {
  background(0);
  for (var i = 0; i < data.dogs.length, i++) { // the json have have two parts under the overarching "data" layer
    fill(data.dogs[i].r,data.dogs[i].g, data.dogs[i].b);
    text(data.dogs[i].breed, width/2, height/data.dogs.length);
  }
}