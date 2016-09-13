function setup() {
    createCanvas(windowWidth, windowHeight);
    loadTable('groceries.tsv', 'tsv', 'header', showData); //loadTable(filename, [option], [callback])
    textAlign(CENTER);
}

function showData(data) {
    var count = data.getRowCount();
    var rowHeight=height/count;
    
    for (var i=0; i<count; i++) {
        //iterate one at a time with i++
        var amount=data.getString(i, 0);
        var unit = data.getString(i, 1); //first column
        var item = data.getString(i, 2);
        var source = data.getString(i, 3)
        
        if(source === 'market')
            fill(0, 255, 0);
        else
            fill(128);
            
        text(amount +' ' + unit + ' ' + item + ' - ' + source, width/2, rowHeight * (i + 1));
        //center horizontally then vertically

    }
}


