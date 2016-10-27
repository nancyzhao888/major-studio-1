var c = [];

function setup() {
    noCanvas();
    loadTable('LaborInNonAgricultSector.tsv', 'tsv', 'header', showData); //loadTable(filename, filetype, [option], [callback])
}

function showData(data) { //data is in the payload
  var minVal = 10000;
  var maxVal = 0;
  var count = data.getRowCount();
  console.log("number of rows :" + count);
  for (var row =0; row < count; row++) {
    for (var col=3; col < 26; col++) {
      var val = float(data.getString(row, col));
      console.log(val);
      if(minVal>val)
        minVal = val;
      if (maxVal < val)
        maxVal = val; 
    }
  }
  console.log("minimum:" + minVal + "| maximum:" + maxVal);
  
  var width = 400;
  var height = 300;
  
  for (var row =0; row < count; row++) {
      
      // canvas c1
      c[row] = function(p) { 

       p.setup = function() {
          p.createCanvas(400, 300);
          p.rect(0, 0, width-1, height-1);
          p.text(data.getString(row, 0), 10, 20);
          p.beginShape();
              for (var col=3; col < 26; col++) {
                var val = float(data.getString(row, col));
                p.vertex(map(col, 3, 25, 0, width), map(val, minVal, maxVal, height, 0)); //horizontal position, vertical position. Height, 0 needs to be flipped, because 0 is ceiling, height is floor.
                p.ellipse(map(col, 3, 25, 0, width), map(val, minVal, maxVal, height, 0),5, 5);
              }
          p.endShape();
       }
    };

  // start canvases
  var canvas1 = new p5(c[row]);
        
  }
}


