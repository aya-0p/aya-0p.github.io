//developer ver 0.1.7
console.log("developer ver 0.1.7");
(document.getElementsByTagName("body"))[0].innerHTML = '<div id="b1"></div><br><div id=b2></div><div id="b3"></div><div id="b4"></div><footer><div>Version 0.1</div><style>footer{position: absolute;bottom: 0;}</style></footer>';
function setDefault() {
    document.getElementById("b1").innerHTML = '<p>以下から選んでください</p><form action="#" onsubmit="return getData()"><label><button type="submit">ダウンロードする</button></label></form><br>';
    document.getElementById("b2").innerHTML = '<form action="#" onsubmit="return postData()" name="nam"><label><select name="opts" id="share"><option value="" selected>アップロードする--ワールドを以下から選択</option></select><br><button type="submit">決定</button></label></form><br>'
    document.getElementById("b3").innerHTML = '<form action="http://zonest.cn/z/"><label><button type="submit" id="rev">元の画面に戻る</button></label></form>'
    document.getElementById("b4").innerHTML = '<br><br><br><br><br><form action="#" onsubmit="return del()"><label><button type="submit">ワールドを強制削除する</button></label></form>'
    setWorld();
}
function setWorld() {
    var dList = JSON.parse(localStorage.getItem("document_list"));
    var ls = dList.splice(1, dList.length - 1);
    for (var i = 0; i < ls.length; i++) {
        document.getElementById("share").innerHTML += `<option value="` + ls[i] + `">` + ls[i] + `</option>`;
    }
}
function plWait() {
    document.getElementById("b1").innerHTML = "しばらくお待ちください...";
    document.getElementById("b2").innerHTML = null;
    document.getElementById("b3").innerHTML = null;
    document.getElementById("b4").innerHTML = null;
}
function setDel() {
    document.getElementById("b1").innerHTML = "ワールドを削除します。zonest.cn/zが起動しなくなった場合はお使いください";
        document.getElementById("b2").innerHTML = null;
        document.getElementById("b4").innerHTML = '<form action="#" onsubmit="return delData()" name="nam"><label><select name="opts" id="share"><option value="" selected>削除するワールドを以下から選択</option></select><br><button type="submit">削除</button></label></form><br>';
        document.getElementById("b3").innerHTML = '<form action="#" onsubmit="setDefault();return false"><label><button type="submit" id="rev">1つ前の画面に戻る</button></label></form>';
}
setDefault();
function sleep(msec) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, msec);
    })
}
async function getData() {
    getData2();
    return false;
}
async function getData2() {
    var worldName = window.prompt("ダウンロードするワールド名を入力してください");
    if (worldName == "" || worldName == null || worldName == undefined) {
        window.alert("中止しました");
        plWait();
        setDefault();
    } else {
        plWait();
        var nw = new XMLHttpRequest();
        var url = new URL('https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec');
        url.searchParams.set('name', worldName);
        nw.open("GET", url);
        nw.send();
        await sleep(5000);
        var res = nw.response;
        if (res == 0) {
            window.alert("その名前のワールドは存在しません");
            setDefault();
        } else {
            var wN = LoadProc();
            localStorage.setItem(wN, res); //JSON.stringify(res)
            var n = JSON.parse(localStorage.getItem("document_list"));
            n.push(wN);
            localStorage.setItem("document_list", JSON.stringify(n));
            window.alert("ダウンロードされました\n保存名は保存時の時刻です");
            setDefault();
        }
    }
    return false;
}
async function postData() {
    postData2(document.nam.elements[0].value);
    return false;
}
async function postData2(e) {
    if (e == null || e == "" || e == undefined) {
        plWait();
        setDefault();
    } else {
        var wName = window.prompt("アップロードする名前を入力してください\nこの名前はワールドをダウンロードするときに使います\n注意：よく使われそうな名前は使わないでください、ほかの人から上書き保存される可能性があります");
        if (wName == "" || wName == null || wName == undefined) {
            window.alert("中止しました");
            setDefault();
        } else {
            plWait();
            var xl = new XMLHttpRequest();
            xl.open("POST", "https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec", false);
            xl.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            var datas = {
                name: wName,
                data: JSON.parse(localStorage.getItem(e))
            };
            xl.send(JSON.stringify(datas));
            var res = xl.response;
            if (res == 1) {
                window.alert("ワールドは上書きアップロードされました");
            } else if (res == 0) {
                window.alert("ワールドは新規にアップロードされました");
            } else {
                console.log("post error");
                console.log("error id=" + res);
                window.alert("不明なエラーによりアップロードされませんでした");
            }
            setDefault();
            return false;
        }
    }
}

function LoadProc() {
    var now = new Date();
    var Year = now.getFullYear();
    var Month = now.getMonth() + 1;
    var date = now.getDate();
    var Hour = now.getHours();
    var Min = now.getMinutes();
    var Sec = now.getSeconds();
    return (Year + "年" + Month + "月" + date + "日" + Hour + ":" + Min + ":" + Sec);
}

function del() {
    setDel();
    setWorld();
    return false;
}

function delData() {
    console.log(document.nam.elements[0].value);
    var delName = document.nam.elements[0].value;
    if (delName == "") {
        setDel();
        setWorld();
    } else {
        plWait();
        var an = window.prompt("'" + delName + "'を削除します\nよろしければ'ok'と入力してください");
        if (an == "ok") {
            var n = JSON.parse(localStorage.getItem("document_list"));
            var d = n.indexOf(delName);
            n.splice(d, 1);
            localStorage.setItem("document_list", JSON.stringify(n));
            window.alert("削除されました");
        }　
        else {
            window.alert("削除されませんでした");
        }
        setDefault();
    }
    return false;
}
