var rs;
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


function gotJSON(data){ //needs to define parameters
    var articles = data.response.docs;
    if (firstSearch) {
        for(var i = 0; i<articles.length; i++) {
            var h = createElement('h1', articles[i].headline.main); 
            h.id('heading'+i);
            // var p = createP(articles[i].snippet);
            // p.id('description'+i);
            var ele = select('#heading'+i);
            styleThis(ele);
            
            var rs = new RiString(articles[i].snippet);
            var words = rs.words();
            var pos = rs.pos();
            
            for (var j=0; j < words.length; j++) {
                var span = createElement('span', words[j]); 
              
                if (pos[j] === 'jj') {
                  span.style('background', 'orange');
              } else if (pos[j] === 'nnp') {
                  span.style('background', 'blue');
              }
            }
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
            // var p = createP(articles[i].snippet);
            // p.id('description'+i);
            styleThis(ele);
            
            var rs = new RiString(articles[i].snippet);
            var words = rs.words();
            var pos = rs.pos();
            
            for (var j=0; j < words.length; j++) {
                var span = createElement('span', words[j]); 
              
                if (pos[j] === 'jj') {
                  span.style('background', 'orange');
              } else if (pos[j] === 'nnp') {
                  span.style('background', 'blue');
              }
            }
        }
    }
}

function styleThis(ele) {
    ele.style('color', 'red');
    ele.style('text-align', 'CENTER');
    ele.style('font-family', 'sans-serif');
    // p.style('text－align', 'CENTER');
}
//only showing top 10 articles


  