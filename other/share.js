(document.getElementsByTagName("body"))[0].innerHTML = '<div id="b1"></div><br><div id=b2></div><div id="b3"></div>';
document.getElementById("b1").innerHTML = '<p>以下から選んでください</p><form action="#" onsubmit="return getData()"><label><button type="submit">受け取る</button></label></form><br>';
document.getElementById("b2").innerHTML = '<form action="#" onsubmit="return postData()" name="nam"><label><select name="opts" size="4"><optgroup label="共有する--ワールドを以下から選択" id="share"></optgroup></select><br><button type="submit">決定</button></label></form><br>'
document.getElementById("b3").innerHTML = '<form action="#"><label><button type="submit" id="rev">元の画面に戻る</button></label></form>'
var dList = JSON.parse(localStorage.getItem("document_list"));
var ls = dList.splice(1,dList.length - 1);
for (var i = 0; i < ls.length; i++) {
    document.getElementById("share").innerHTML += `<option value="` + ls[i] + `">` + ls[i] + `</option>`;
}
function sleep(msec) {
    return new Promise(function(resolve) {
        setTimeout(function() {resolve()}, msec);
    })
 }
async function getData() {
    getData2();
    return false;
}
async function getData2() {
    var worldName = window.prompt("受け取るワールド名を入力してください");
    document.getElementById("b1").innerHTML = "しばらくお待ちください...";
    document.getElementById("b2").innerHTML = null;
    document.getElementById("b3").innerHTML = null;
    var nw = new XMLHttpRequest();
    var url = new URL('https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec');
    url.searchParams.set('name', worldName);
    nw.open("GET", url);
    nw.send();
    await sleep(5000);
    var res = nw.response;
    window.alert(res);
    return false;
}
async function postData() {
    postData2(document.nam.elements[0].value);
    return false;
}
async function postData2(e) {
    var xl = new XMLHttpRequest();
    xl.open("POST", "https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec", false);
    xl.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    xl.send("name="+e+"&data="+JSON.parse(localStorage.getItem(e)));
    await sleep(5000);
    var res = xl.response;
    window.alert(res);
    return false;
}
