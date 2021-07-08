let oReq;
var craft,
    num = "a",
    lang = "Japanese";
oReq = new XMLHttpRequest();
oReq.addEventListener("load", (e) => JSON.parse(e));
oReq.open("GET", "https://aya-0p.github.io/other/foods/crafts.json");
oReq.send();
document.getElementById("name").innerHTML = craft[num][lang];
document.getElementById("recovery").innerHTML = craft[num]["Recovery"];
document.getElementById("amount").innerHTML = craft[num]["Amount"];
document.getElementById("size").innerHTML = craft[num]["Size"];
document.getElementById("other").innerHTML = craft[num]["Other"];