var map;
var canvas;
var mags = [];
var quakes = [];
var slider;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('map');
    initLeaflet();
    loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.csv', parseSource)
    slider = createSlider(0, 10, 1);
    slider.position(width-400, 25)
    slider.id('top');
}

function draw(){
    for (var i=1; i < data.length; i++) {
        quakes[i].setRadius(mags[i]);
        // if slider value larger than mag, then set mag to i. or else, set to 0
    }
}

function parseSource(data) { //data - payload?
    for (var i = 1; i < data.length; i++) { //start at 1, because there's a heading
        var row = split(data[i], ','); //cuz it's a cvs file
        mags[i] = row[4];
        quakes[i] = L.circleMarker([row[1], row[2]], {
            stroke: true, //not ';'
            weight: 1,
            opacity:0.3,
            fillOpacity: 0.8,
            // fillColor: setColor(row[4])
        });  //circleMarker (see doc)
        
        var place = row [13];
        quakes[i]
            .addTo(map)
            .setRadius(mags[i])
            .bindPopup('<b>'+ row[4] + '<b> magnitude ' + place); //leaflet
        
    } 
}
function initLeaflet() {
    L.mapbox.accessToken = 'pk.eyJ1IjoibmFuY3l6aGFvODg4IiwiYSI6ImNpdWlubDNhZjAxOG0yeXAyajk3OG51NGEifQ.K6b86YXT8rp_Ru6Rn_Jq2A';
    map = L.mapbox.map('map', 'mapbox.light').setView([20, 0], 2); //initiate map by assigning it to map //setView coordinates
    
    function onMapClick(e){
        // no need but we need the function
    }

    map.on('click', onMapClick);
}