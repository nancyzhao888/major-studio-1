var hash=[];
var sorted=[];
var textX=100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadStrings('sotu.txt', callback);
}

function callback(poem) {
  console.log(poem); //check if it's array with poem[0], see if it returns first line
  
  for(var i in poem) {
      console.log(i + ':' + poem[i]);
  }
  
  for (i in poem) {
      var li = poem[i].split(' '); //get an array of words in each line
      for (var k in li) {
          //clean up strings
          var clean = li[k].replace(/[.,-?!@#$%^&*()_~{}]/g, ''); //for each item in the li, look "g"lobally at these patterns, and replace with ''
          
          if (hash[clean] >= 1) // keeping each word as an array
            hash[clean] += 1; // index becomes the word, value is the frequency
          else 
            hash[clean] = 1;
      }
  }
  console.log('HASH --------------');
  
  for(i in hash) {
    console.log(i + ':' + hash[i]); // still a :3, counts for trailing space
}
    //console.log(hash[0]); // this numbered index will return 'undefined'

    console.log('HASH SORTED------------');
    
    for (var key in hash) { 
        sorted.push([key, hash[key]]); //if you see a yellow line, need to define the variable
        sorted.sort(function (a, b) { //arr.sort(), with a compare function
        a = a[1];
        b = b[1];
        
        return a < b ? 1 : (a > b ? -1 : 0);
        }); //HARD PART. CLARIFY!!
    }
    for(var i=0; i<sorted.length; i++) {
        console.log(sorted[i][0] + ':' + sorted[i][1]);
    }
}

function draw() {
    background(255);
    translate(textX, height/2); //textX is not fixed. drag the piece of 'paper'
    
    for (var i=0; i<sorted.length; i++) {
        var txtSize = sorted[i][1]*30;
        textSize(txtSize);
        text(sorted[i][0], 0, 0);
        
        var txtWidth = textWidth(sorted[i][0]);
        translate(txtWidth,0);
        
        if(mouseIsPressed)
            line(0, txtSize* .25, 0, -txtSize* .75)
    }
}

function mouseDragged() {
    textX += mouseX - pmouseX;
}