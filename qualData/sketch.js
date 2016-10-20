var hash=[];
var sorted=[];
var textX=100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadStrings('pupil-teacher-ranking.txt', callback);
}

function callback(ranking) {
  console.log(ranking); //check if it's array with poem[0], see if it returns first line
  
  for(var i in ranking) {
      console.log(i + ':' + ranking[i]);
  }
  
  for (i in ranking) {
      //var li = text[i].split(' '); //get an array of words in each line
      //for (var k in li) {
          //clean up strings
          var clean = ranking[i];//.replace(/[.,-?!@#$%^&*()_~{}]/g, ''); //for each item in the li, look "g"lobally at these patterns, and replace with ''
          
          if (hash[clean] >= 1) // keeping each word as an array
            hash[clean] += 1; // index becomes the word, value is the frequency
          else 
            hash[clean] = 1;

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
  
    background(238,225,198);
    //translate(textX, 300); //textX is not fixed. drag the piece of 'paper'

    for (var i=0; i<sorted.length; i++) {
        var txtSize = sorted[i][1]*5;
        var txtWidth = textWidth(sorted[i][0])
        var txtX = random(50,windowWidth-txtWidth*2);
        var txtY = random(80,windowHeight-80)
        stroke(238,225,198)
        fill(60,83,111)
        textSize(txtSize);
        text(sorted[i][0], txtX, txtY);
        
        // var txtWidth = textWidth(sorted[i][0]);
        // translate(txtWidth,200+(i*5));
        
        if(mouseIsPressed)
            line(0, txtSize* .25, 0, -txtSize* .75)
    }
    stroke(128,0,32) //128,84,98 //202,83,92
    fill(128,0,32)
    textFont('Avenir');
    textSize(15);
    var str = 'WHO IS MOST FREQUENTLY RANKED TOP 5 IN...?'
    text(str, 50, 30);
    var titleWidth = textWidth(str);
    textSize(15);
    textStyle(ITALIC);
    text('An Education Quality Analysis of Africa', 55+titleWidth, 30)
    textSize(10);
    textStyle(NORMAL);
    text('Teacher-Pupil Ratio (1991-2010)', 50, 50);
    textSize(10);
    textStyle(ITALIC);
    textAlign(RIGHT)
    text('Data Source: UNESCO', windowWidth-50, windowHeight-70)
}

//function mouseDragged() {
   // textX += mouseX - pmouseX;
//}