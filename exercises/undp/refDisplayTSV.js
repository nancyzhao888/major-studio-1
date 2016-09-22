// store extrema in a global variables
var minVal = 10000;
var maxVal = 0; // start with something unlikely

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noFill();
  textSize(10);
  // load the "tsv" formatted data from the undp source
  // the data structure is "tsv" and we have a "header" in the file
  loadTable("LaborInNonAgricultSector.txt", "tsv", "header", showData);
  colorMode(HSB, 360, 1.0, 1.0); //HSB:hue saturation brightness
}

//call back function when table is loaded
function showData(data) { // called only once
    // count the rows in our table
    var count = data.getRowCount();
    // parse the data returned by loadStrings()
    var rowHeight = 30; //space things out
    // loop through all rows to determine global minimum annd maximum
    for (var row = 0; row < count; row++) {
        // loop through all the columns
        for (col = 3; col <26; col ++) {
            var val = data.getString(row, col);
            // display the text on the canvas
            val = parseFloat(val);
            if(minVal>val)
                minVal = val;
            if (maxVal < val)
                maxVal = val; // what is our scope? iterate through all data to know range
        }
    }
    console.log("minimum:" + minVal + "| maximum:" + maxVal);
    //display
    for (row = 0; row < count; row++) {
        beginShape()
        // loop through all the columns
        for (var col = 3; col <26; col++) {
            val = data.getString(row, col); //display the text on the canvas
            val = parseFloat(val);
            vertex(map(col,3,25,0,width), map(val, minVal,maxVal, height, 0));
            //map: takes 5 parameters (input, min, max, desired min, desired max(full screen)) make a linear scale
        }
        endShape ();
    }
}
