function setup() {
    createCanvas(windowWidth, windowHeight);
    loadJSON('colors.json', showData);
    textAlign(CENTER);
}

function showData(data) {
    fill(data.yellow);
    text(data.yellow, width/2, height/2); //show content
}


