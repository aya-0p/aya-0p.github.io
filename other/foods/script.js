let oReq,
    craft,
    num = 1,
    lang = "Japanese";
function main() {
  getJson();
  document.getElementById("name").innerHTML = craft.num.lang;
  document.getElementById("recovery").innerHTML = craft.num.Recovery;
  document.getElementById("amount").innerHTML = carft.num.Amount;
  document.getElementById("size").innerHTML = craft.num.Size;
  document.getElementById("other").innerHTML = carft.num.Other;
}
function reqListener() {
  //document.getElementById("1").innerHTML = this.responseText;
  console.log(JSON.parse(this.responseText));
  craft = JSON.parse(this.responseText);
}
function getJson() {
  oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://aya-0p.github.io/other/foods/crafts.json");
  oReq.send();
}
main()