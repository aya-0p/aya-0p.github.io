function main(){}
fetch("crafts.json")
  .then(response => response.json())
  .then(data => document.getElementById("1").innerHTML = data);