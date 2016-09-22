function setup() {

  var w = 650,
      h = 400,
   dims = {
      margin: {
        top: 20,
        left: 25,
        right: 15,
        bottom: 25
      }
   };
  
  dims.width = w - dims.margin.left - dims.margin.right;
  dims.height = h - dims.margin.top - dims.margin.bottom;
  
  var randomizer = d3.random.bates(10);

  // this part creates random frequency data for each letter of alphabet like [{letter: 'a', frequency:  0.2}, {letter: 'b', frequency:  0.34}, {letter: 'c', frequency:  0.21}, ...]. 
  //of course this random data is nonsense but its an easy way to create data similar to http://bl.ocks.org/mbostock/3885304

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var data = alphabet.map(function(letter) {
    return {
      letter: letter,
      frequency: randomizer()
    }
  });  
  
  // using d3 max function find the maximum frequency of letters
  var maxFrequency = d3.max(data, function(d) { return d.frequency; });

  var yScale = d3.scale.linear();
  yScale.domain([0, maxFrequency]);   
  yScale.range([dims.height , 0]);
  
  // d3 has method chaning so instead of above style, you can chain methods (note that there is no ; in the end of first 2 lines and xScale is not repeated )
  var xScale = d3.scale.ordinal()
      .domain(alphabet)  // domain of xScale are alphabet letters
      .rangeRoundBands([0, dims.width], .1); // range 



  //create canvas
  createCanvas(w, h);

  //ignore margin area.
  push();
  translate(dims.margin.left, dims.margin.top);


  // draw circles
  for (var i = 0; i < data.length; i++) {

    var d = data[i];
    push();

    translate(xScale(d.letter), yScale(d.frequency));
    
    fill('steelblue');

    rect(0, 0, xScale.rangeBand(), dims.height - yScale(d.frequency) );

    pop();

  }

  drawAxis(xScale, 'bottom', dims, 8);

  drawAxis(yScale, 'left', dims, 8);

  pop();

}

function drawAxis(scale, orient, dims, numberOfTicks) {

  numberOfTicks = numberOfTicks || 8;

  //set properties which depend on scale orientation
  var linePoints,
    tickTranslate,
    tickTextMargins,
    tickLinePoints;
  if (orient === 'bottom') {
    linePoints = [0, dims.height , dims.width, dims.height ];
    tickTranslate = [scale, function() {
      return dims.height 
    }];
    tickTextMargins = [
        scale.rangeBand ? scale.rangeBand()/2 + 2 : 5,
        15];
    tickLinePoints = [
      scale.rangeBand ? scale.rangeBand()/2 : 0,
      0,
      scale.rangeBand ? scale.rangeBand()/2 : 0,
      5]
  } else if (orient === 'left') {
    linePoints = [0, 0, 0, dims.height];
    tickTranslate = [function() {
      return 0;
    }, scale];
    tickTextMargins = [-15, 5];
    tickLinePoints = [0, 0, -5, 0];
  }


  textAlign(CENTER);
  
  var ticks;
  
  if(scale.ticks) {  //for quantitative scales
    ticks = scale.ticks(numberOfTicks);
  }
  else {  // for ordinal scales
    ticks = scale.domain();
  }

  //draw ticks for x-axis
  for (var j = 0; j < ticks.length; j++) {
    //get j-th tick
    var tick = ticks[j];
    push();
    translate(tickTranslate[0](tick), tickTranslate[1](tick));
    // draw little tick line
    line(tickLinePoints[0], tickLinePoints[1], tickLinePoints[2], tickLinePoints[3]);
    stroke(100, 30);
    if (orient === 'left') {
      line(0, 0, dims.width , 0);
    }
    // write tick value
    //    textSize(24);
    noStroke();
    fill(0);
    text(String(tick), tickTextMargins[0], tickTextMargins[1]);
    pop();
  }
  line(linePoints[0], linePoints[1], linePoints[2], linePoints[3]);

}
