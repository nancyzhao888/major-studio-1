var id;
var slider;

function setup() {
  id = select('#kafka') // select function - select one element, can only deliver back one element
  id.mousePressed(click);
  id.mouseReleased(release);
  slider = createSlider(0, windowWidth, 128); // createSlider(min, max, defaultValue)
  slider.position(windowWidth/2, windowHeight/2); //position - gives specific x, y position
  slider.changed(change);
  noCanvas(); //DOM always creates a default canvas
}

function click() { //call function once
    console.log("click");
    id.style('color', 'orange'); // style with CSS
}

function release() {
    id.style('color','blue');
    id.style('font-size', '90pt');
}

function change() {
    //calling slider, get the value of it out, and then plug it in as the x of the id position.
    id.position(slider.value(), windowHeight/2); 
}