var videos = [];
var response;
var popular;

//ASYNC
function reqListener () {
  response = JSON.parse(this.responseText);

  for (var i = 0; i < response.items.length; i++) {
    document.getElementById("searchRow").appendChild(youtubeNode(i, 0));
  }
}

function loadPopular () {
  popular = JSON.parse(this.responseText);

  for (var i = 0; i < popular.items.length; i++) {
    document.getElementById("popularesRow").appendChild(youtubeNode(i, 1));
  }
}

function searchVideos() {
  // Case-insensitive search
  var text = document.getElementById("buscador").value.toLowerCase();

  if (text == "") {
    return;
  }

  var ajaxASYNC = {
    request: function (url){
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", reqListener);
      xhr.open("GET", url, true);
      xhr.send();
    }
  };

  ajaxASYNC.request("https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&order=viewCount&q=" + text + "&maxResults=10&type=video&videoDefinition=high&key=AIzaSyA4fK-XwuzdoWRTs7l0L9UdVyBz4UHg8ik");

  document.getElementById("resultados").style.display = "block";
}

function youtubeNode (i, type){
  var item;
  var tipo;

  if (type == 0) {
    item = response.items[i];
    tipo = "resultado ";
  }
  else {
    item = popular.items[i];
    tipo = "popular ";
  }

  var divNode = document.createElement("div");
  divNode.setAttribute("class", "col-sm-12 col-md-6 col-lg-4 col-xl-4");

  var figureNode = document.createElement("figure");
  divNode.appendChild(figureNode);

  var imgNode = document.createElement("img");
  imgNode.setAttribute("src", item.snippet.thumbnails.high.url);
  imgNode.setAttribute("alt", "Vista previa del vídeo llamado " + item.snippet.title);
  figureNode.appendChild(imgNode);

  var figcaptionNode = document.createElement("figcaption");
  var h6Node = document.createElement("h6");
  var textnode = document.createTextNode(item.snippet.title);
  h6Node.appendChild(textnode);
  figcaptionNode.appendChild(h6Node);
  figureNode.appendChild(figcaptionNode);
  console.log(tipo + (i+1) + " : " + item.snippet.title);

  return divNode;
}

function noResultsFoundNode() {
  var pNode = document.createElement("p");
  var textnode = document.createTextNode("No se han encontrado resultados. Prueba una búsqueda con otras palabras.");
  pNode.appendChild(textnode);
  return pNode;
}

window.onload = function() {

  var ajaxASYNC = {
    request: function (url){
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", loadPopular);
      xhr.open("GET", url, true);
      xhr.send();
    }
  };

  ajaxASYNC.request("https://www.googleapis.com/youtube/v3/videos?chart=MostPopular&regionCode=es&maxResults=10&videoCategoryId=0&key=AIzaSyA4fK-XwuzdoWRTs7l0L9UdVyBz4UHg8ik&part=snippet,player");

  document.getElementById("resultados").style.display = "block";
};
