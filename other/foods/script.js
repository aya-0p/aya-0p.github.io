let oReq;
var craft,
    num = "a",
    lang = "Japanese";
oReq = new XMLHttpRequest();
oReq.addEventListener("load", function(){craft = JSON.parse(this.responseText)});
oReq.open("GET", "https://aya-0p.github.io/other/foods/crafts.json");
oReq.send();
function a() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve();
    }, 100);
  });
}
async function b() {
await a();
document.getElementById("name").innerHTML = craft[num][lang];
document.getElementById("recovery").innerHTML = craft[num]["Recovery"];
document.getElementById("amount").innerHTML = craft[num]["Amount"];
document.getElementById("size").innerHTML = craft[num]["Size"];
document.getElementById("other").innerHTML = craft[num]["Other"];
}
b();