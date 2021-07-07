function main(){}
function reqListener () {
  document.getElementById("1").innerHTML = this.responseText;
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://aya-0p.github.io/other/foods/crafts.json");
oReq.send();
