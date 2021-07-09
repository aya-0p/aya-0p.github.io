(document.getElementsByTagName("body"))[0].innerHTML = '<div id="b1"></div><br><div id=b2></div><div id="b3"></div>';
document.getElementById("b1").innerHTML = '<p>以下から選んでください</p><form action="#" onsubmit="return getData()"><label><button type="submit">受け取る</button></label></form><br>';
document.getElementById("b2").innerHTML = '<form action="#" onsubmit="return postData()"><label><select name="opts" size="4"><optgroup label="共有する--ワールドを以下から選択" id="share"></optgroup></select><br><button type="submit" id="sendData">決定</button></label></form><br>'
document.getElementById("b3").innerHTML = '<form action="#"><label><button type="submit">元に戻る</button></label></form>'
var dList = JSON.parse(localStorage.getItem("document_list"));
var ls = dList.splice(1,dList.length - 1);
for (var i = 0; i < ls.length; i++) {
    document.getElementById("share").innerHTML += `<option value="` + ls[i] + `">` + ls[i] + `</option>`;
}
function getData() {
    var worldName = window.prompt("受け取るワールド名を入力してください");
    var nw = new XMLHttpRequest();
    var url = new URL('https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec');
    url.searchParams.set('name', worldName);
    nw.open("GET", url, false);
    nw.send();
    var res = nw.response;
    window.alert(res);
    return false;
}
function postData() {
    return false;
}
