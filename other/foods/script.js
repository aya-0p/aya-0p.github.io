function main(){}
fetch("https://aya-0p.github.io/other/foods/crafts.json")
  .then(response => JSON.parse(reader.response)
  .then(data => document.getElementById("1").innerHTML = data);
