var rs, input;

function setup() {
  noCanvas();
  input = createInput(); //why is input on the right? there's a canvas
  input.changed(rita); 
}

function rita() {
  var str = input.value(); //read content of input
  rs = RiString(str);
  var words = rs.words();
  var pos = rs.pos();
  
  for (var i=0; i < words.length; i++) {
    var span = createElement('span', words[i]); 
    
    if (pos[i] === 'nn') {
        span.style('background', 'orange');
    }
  }
  console.log();
}