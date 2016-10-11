var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var apiKey = "&63242241faa04362b6f18260969f3a34";
var input; //keyword search
var firstSearch = true;

function setup() {
  noCanvas();
  var button = select("#submit"); // we are selecting an id
  button.mousePressed(searchArticles);
  input = select("#search");
  console.log(input);
}

function searchArticles(){
    var apiurl = url + input.value() + apiKey;
    loadJSON(apiurl, gotJSON);
}

function draw() {
  
}

function gotJSON(data){ //needs to define parameters
    var articles = data.response.docs;
    if (firstSearch) {
        for(var i = 0; i<articles.length; i++) {
            var h = createElement('h1', articles[i].headline.main); 
            h.id('heading'+i);
            var p = createP(articles[i].snippet);
            p.id('description'+i);
            var ele = select('#heading'+i);
            styleThis(ele, p);
        }
    firstSearch = false;
    }
    else {
        for(var i = 0; i<articles.length; i++) {
            //out with the old
            var oldHeading = select('#heading' + i)
            oldHeading.remove();
            var oldDescription = select('#description' + i)
            oldDescription.remove();
            // in with the new
            var h = createElement('h1', articles[i].headline.main); 
            h.id('heading'+i);
            var ele = select('#heading'+i);
            var p = createP(articles[i].snippet);
            p.id('description'+i);
            styleThis(ele, p);
        }
    }
}

function styleThis(ele, p) {
    ele.style('color', 'red');
    ele.style('text-align', 'CENTER');
    ele.style('font-family', 'sans-serif');
    p.style('text－align', 'CENTER');
}
//only showing top 10 articles