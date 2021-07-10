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
    var wN = LoadProc();
    localStorage.setItem(wN,JSON.stringify(res));
    var n = JSON.parse(localStorage.getItem("document_list"));
    nn = n.push(wN);
    localStorage.removeItem("document_list");
    localStorage.setItem("document_list",JSON.stringify(nn));
    //window.alert(res);
    return false;
}
async function postData() {
    postData2(document.nam.elements[0].value);
    return false;
}
async function postData2(e) {
    var wName = window.prompt("保存する名前を入力してください\n注意：よく使われそうな名前は使わないでください、ほかの人から上書き保存される可能性があります");
    document.getElementById("b1").innerHTML = null;
    document.getElementById("b2").innerHTML = null;
    document.getElementById("b3").innerHTML = '<form action="#"><label><button type="submit" id="rev">元の画面に戻る</button></label></form>';
    var xl = new XMLHttpRequest();
    xl.open("POST", "https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec", false);
    xl.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    var datas = {name:wName, data:JSON.parse(localStorage.getItem(e))};
    xl.send(JSON.stringify(datas));
    var res = xl.response;
    if (res == 1) {
        window.alert("ワールドは上書き保存されました");
    } else if (res == 0) {
        window.alert("ワールドは新規に保存されました");
    } else {
        console.log("post error");
        console.log("error id=" + res);
        window.alert("不明なエラーにより保存されませんでした");
    }
    return false;
}
function LoadProc() {
    var now = new Date();
    var Year = now.getFullYear();
    var Month = now.getMonth()+1;
    var Date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    return(Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec);
  }
