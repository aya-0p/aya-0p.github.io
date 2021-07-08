let oReq;
var craft,
    num = "0",
    lang = "Japanese";
oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){craft = JSON.parse(this.responseText)});
oReq.open("GET", "https://aya-0p.github.io/other/foods/crafts.json");
oReq.send();
setTimeout(function(){
  document.getElementById("name").innerHTML = craft[num][lang];
  document.getElementById("recovery").innerHTML = craft[num]["Recovery"];
  document.getElementById("amount").innerHTML = craft[num]["Amount"];
  document.getElementById("size").innerHTML = craft[num]["Size"];
  document.getElementById("other").innerHTML = craft[num]["Other"];
},100);