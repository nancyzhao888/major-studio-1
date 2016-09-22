// store extrema in a global variables. start with min and max that is unlikely.
var minVal = 20;
var maxVal = 0;
var minVal2 = 20;
var maxVal2 = 0;

function setup() {
    createCanvas(windowWidth, 4850);
    noLoop();
    noFill();
    textSize(10);
    textFont("Garamond");
    loadTable("giniAfrica3.csv", "csv", "header", showData);
    loadTable("educationSpending2.txt", "tsv", "header", showDataE);
}

// giniAfrica and axes
function showData(data) {
    var count = data.getRowCount(); // count the rows in our table
    var rowHeight = 150; //space things out
    
    for (var i = 0; i < count; i ++) {
        stroke(200);
        strokeWeight(1);
        line(350,rowHeight*(i+1.1),width-350,rowHeight*(i+1.1));
        line(350,rowHeight*(i+1.1),350,rowHeight*(i+1.1)-120);
        line(width-350,rowHeight*(i+1.1),width-350,rowHeight*(i+1.1)-120);
        for (var j = 0; j<22; j++) {
            var year = 1990 + j;
            line(400+j*(width-800)/21, rowHeight*(i+1.1)-5, 400+j*(width-800)/21, rowHeight*(i+1.1));
            textSize(5);
            textAlign(CENTER);
            strokeWeight(0.3);
            text(year, 400+j*(width-800)/21, rowHeight*(i+1.1)+10);
        }
    }
    

// loop through all rows to determine global minimum annd maximum
    for (var row = 0; row<count; row++) {
        var category = data.getString(row, 0);
        for(var col=1; col<23; col++) {
            var val = data.getString(row, col);
            val = parseFloat(val);
            if (minVal > val)
                minVal = val;
            if (maxVal < val)
                maxVal = val;
        }
    }
    
    console.log("minimum:" + minVal + "| maximum:" + maxVal);
        
     for (row = 0; row < count; row++) {  
         // line chart
            beginShape();
            // loop through all the columns
            for (var col = 1; col < 23; col++) {
                stroke(242,70,50);
                strokeWeight(1);
                val = data.getString(row, col);
                val = parseFloat(val);
                vertex(map(col, 1, 22, 400, width-400), map(val, minVal, maxVal, rowHeight*(row+1), rowHeight*(row+1)-100));
            }
            endShape();

        }
    
    for (row = 0; row < count; row++) {  
            // category names
            var category = data.getString(row, 0);
            strokeWeight(0);
            fill(0);
            textAlign(RIGHT);
            textStyle(BOLD);
            textSize(16);
            text(category, 300, rowHeight*(row+1)-50);
    }
    
    textSize(6);
            text('Angola, Cameroon, Central African Republic, Chad, Gabon,', 300, rowHeight-25);
            text('Gambia, Guinea, Guinea-Bissau, Liberia, Madagascar,', 300, rowHeight-15);
            text('Mauritania, Sierra Leone, Sudan Uganda, Zambia', 300, rowHeight-5);
            text('Benin, Mauritius, Niger', 300, rowHeight*2.1-40);
            text('Burkina, Faso, Burundi, Congo, Cote D\'Ivoire,', 300, rowHeight*3.1-40);
            text('Ethiopia, Mali, Mozambique, Rwanda, Senegal, Togo', 300, rowHeight*3.1-30);
            text('Botswana, Comoros, Djibouti, Ghana, Kenya, Lesotho,', 300, rowHeight*4.1-40);
            text('Malawi, Namibia, Sao Tome And Principe,', 300, rowHeight*4.1-30);
            text('Seychelles, South Africa, Swaziland, Zimbabwe', 300, rowHeight*4.1-20);
    textSize(10);
            text('Education Spending < 3.4', 300, rowHeight-35);
            text('3.4 < Education Spending < 3.7', 300, rowHeight*2.1-50);
            text('3.7 < Education Spending < 4.6', 300, rowHeight*3.1-50);
            text('Education Spending > 4.6 ', 300, rowHeight*4.1-50);
            fill(242,70,50);
            text('Gini Coefficient', width-375, 50);
            fill(13, 150, 158);
            text('Education Spending', width-375, 40);
}

// education spending
function showDataE(data) {
    var count = data.getRowCount();
    var rowHeight = 150;

    for (var row = 0; row<count; row++) {
            var category = data.getString(row, 0);
            for(var col=1; col<23; col++) {
                var val = data.getString(row, col);
                val = parseFloat(val);
                if (minVal2 > val)
                    minVal2 = val;
                if (maxVal2 < val)
                    maxVal2 = val;
        }
    }
    
     for (row = 0; row < count; row++) {  
        beginShape();
            // loop through all the columns
        stroke(13, 150, 158);
        strokeWeight(1);
        for (var col = 1; col < 23; col++) {
            val = data.getString(row, col);
            val = parseFloat(val);
            vertex(map(col, 1, 22, 400, width-400), map(val, minVal2, maxVal2, rowHeight*(row+1), rowHeight*(row+1)-100));
        }
        endShape();
    }
}