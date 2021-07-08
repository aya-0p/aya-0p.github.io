let oReq;
var craft;
oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){craft = JSON.parse(this.responseText)});
oReq.open("GET", "https://aya-0p.github.io/other/foods/crafts.json");
oReq.send();