function main(){}
fetch("https://aya-0p.github.io/other/foods/crafts.json")
  .then(response => response.json())
  .then(data => document.getElementById("1").innerHTML = data);
