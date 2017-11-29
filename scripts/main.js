var videos = [];

function searchVideos() {
  // Case-insensitive search
  var text = document.getElementById("buscador").value.toLowerCase();
  if (text == "") {
    return;
  }
  var total = 0;
  document.getElementById("searchRow").innerHTML = "";
  videos.forEach(function(element, index) {
    // Case-insensitive search
    if (element.name.toLowerCase().indexOf(text) != -1) {
      total++;
      document.getElementById("searchRow").appendChild(nodeFromVideo(element));
    }
  });
  document.getElementById("resultados").style.display = "block";
  if (total == 0) {
    document.getElementById("searchRow").appendChild(noResultsFoundNode());
  }
}


function nodeFromVideo(video) {
  var divNode = document.createElement("div");
  divNode.setAttribute("class", "col");

  var figureNode = document.createElement("figure");
  divNode.appendChild(figureNode);

  var imgNode = document.createElement("img");
  imgNode.setAttribute("src", "https://i.ytimg.com/vi/" + video.id + "/hqdefault.jpg");
  imgNode.setAttribute("alt", "Vista previa del vídeo llamado " + video.name);
  figureNode.appendChild(imgNode);

  var figcaptionNode = document.createElement("figcaption");
  var h6Node = document.createElement("h6");
  var textnode = document.createTextNode(video.name);
  h6Node.appendChild(textnode);
  figcaptionNode.appendChild(h6Node);
  figureNode.appendChild(figcaptionNode);

  return divNode;
}

function noResultsFoundNode() {
  var pNode = document.createElement("p");
  var textnode = document.createTextNode("No se han encontrado resultados. Prueba una búsqueda con otras palabras.");
  pNode.appendChild(textnode);
  return pNode;
}

window.onload = function() {

  var video1 = {id: "Xhbyj8pqUao", name: "The Velvet Underground, Nico - Sunday Morning", thumbnailServer: "img.youtube.com"};
  var video2 = {id: "nkumhBVPGdg", name: "The Velvet Underground - Sweet Jane", thumbnailServer: "img.youtube.com"};
  var video3 = {id: "H5je_eK0V1w", name: "Velvet Underground - I'm Sticking With You", thumbnailServer: "img.youtube.com"};
  var video4 = {id: "m3lF2qEA2cw", name: "Creep - Vintage Postmodern Jukebox Radiohead Cover ft. Haley Reinhart", thumbnailServer: "i.ytimg.com"};

  var video5 = {id: "arHwjrfIT-M", name: "[Video C] 바닷물에 잠긴 부산 해운대 마린시티", thumbnailServer: "i.ytimg.com"};
  var video6 = {id: "g83ppI9kqq8", name: "リンカーン芸人大運動会2016 2016.10.05", thumbnailServer: "i.ytimg.com"};
  var video7 = {id: "2xhPzlwrNvw", name: "【ゆっくり茶番】殺人パン！？ゆっくり達の文化祭 #1！【たくっち】", thumbnailServer: "i.ytimg.com"};
  var video8 = {id: "IBoOaAVpW2U", name: "【マインクラフト】ガチャガチャ作ってみた！当たるかな!?【ヒカキンのマイクラ実況 Part253】【ヒカクラ】", thumbnailServer: "i.ytimg.com"};

  var video9 = {id: "kwJYhK9ZeX4", name: "EL PSICÓLOGO LOCO", thumbnailServer: "i.ytimg.com"};
  var video10 = {id: "ZRmnVxSzJX8", name: "EL AGENTE 87 (Broma telefónica)", thumbnailServer: "i.ytimg.com"};
  var video11 = {id: "kSHReKGK_VY", name: "¡Gran rajada de 'Pichu' Cuéllar contra un periodista! ¡Sin palabras!", thumbnailServer: "i.ytimg.com"};
  var video12 = {id: "qlhzKJZ-SbU", name: "AQUÍ ESTA MI NUEVO CANAL!! KOKO DC", thumbnailServer: "i.ytimg.com"};

  videos.push(video1);
  videos.push(video2);
  videos.push(video3);
  videos.push(video4);

  videos.push(video5);
  videos.push(video6);
  videos.push(video7);
  videos.push(video8);

  videos.push(video9);
  videos.push(video10);
  videos.push(video11);
  videos.push(video12);

  videos.forEach(function(element, index) {
    if (index >= 4 && index <= 7) {
      document.getElementById("vistosRow").appendChild(nodeFromVideo(element));
      return;
    }
    if (index >= 8 && index <= 11) {
      document.getElementById("popularesRow").appendChild(nodeFromVideo(element));
      return;
    }
  });
};
