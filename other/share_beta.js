//developer ver 0.3.12
console.log("developer ver 0.3.12");
if (localStorage.getItem("document_list") == null) {
    localStorage.setItem("document_list", JSON.stringify(["we start"]));
}
(document.getElementsByTagName("body"))[0].innerHTML = '<div id="b1"></div><br><div id=b2></div><div id="b3"></div><div id="b35"></div><div id="b36"></div><div id="b4"></div><footer><div>Version 0.3.12</div><a href="javascript:(function(d,j,s)%7Bs=d.createElement(\'script\');s.src=j;d.body.appendChild(s);%7D)(document,\'https://aya-0p.github.io/other/share_beta.js\')">開発版を利用する</a><style>footer{position: absolute;bottom: 0;}</style></footer>';
function setDefault() {
    document.getElementById("b1").innerHTML = '<p>以下から選んでください</p><form action="#" onsubmit="return getData()"><label><button type="submit">ダウンロードする</button></label></form><br>';
    document.getElementById("b2").innerHTML = '<form action="#" onsubmit="return postData()" name="nam"><label><select name="opts" id="share"><option value="" selected>アップロードする--ワールドを以下から選択</option></select><br><br><button type="submit">決定</button></label></form><br>';
    document.getElementById("b3").innerHTML = '<form action="http://zonest.cn/z/"><label><button type="submit" id="rev">元の画面に戻る</button></label></form>';
    document.getElementById("b35").innerHTML = '<br><br><form action="#" onsubmit="return addData()"><label><button type="submit">通常では作れない大きさのワールドを生成する</button></label></form><br>';
    document.getElementById("b36").innerHTML = '<br><form action="#" onsubmit="setBu();return false"><label><button type="submit">データのバックアップをとる</button></label></form>';
    document.getElementById("b4").innerHTML = '<br><br><br><br><br><form action="#" onsubmit="return del()"><label><button type="submit">ワールドを強制削除する</button></label></form>';
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
    document.getElementById("b35").innerHTML = null;
    document.getElementById("b36").innerHTML = null;
    document.getElementById("b4").innerHTML = null;
}
function setDel() {
    document.getElementById("b1").innerHTML = "ワールドを削除します。zonest.cn/zが起動しなくなった場合はお使いください<br>完全消去はされません";
    document.getElementById("b2").innerHTML = null;
    document.getElementById("b3").innerHTML = '<form action="#" onsubmit="return delData()" name="nam"><label><select name="opts" id="share"><option value="" selected>削除するワールドを以下から選択</option></select><br><br><button type="submit">削除</button></label></form><br>';
    document.getElementById("b35").innerHTML = null;
    document.getElementById("b36").innerHTML = null;
    document.getElementById("b4").innerHTML = '<br><br><form action="#" onsubmit="setDefault();return false"><label><button type="submit" id="rev">1つ前の画面に戻る</button></label></form>';
}
function setBu() {
    document.getElementById("b1").innerHTML = "ワールドのバックアップ";
    document.getElementById("b2").innerHTML = null;
    document.getElementById("b3").innerHTML = '<form action="#" onsubmit="return dlData()"><label><button type="submit">バックアップをとる</button></label></form><br>';
    document.getElementById("b35").innerHTML = '<br>バックアップから復元する';
    document.getElementById("b36").innerHTML = '<form><label><input id="file" type="file" name="file"></label></form><br>';
    document.getElementById("b4").innerHTML = '<br><br><form action="#" onsubmit="setDefault();return false"><label><button type="submit" id="rev">1つ前の画面に戻る</button></label></form>';
    var input = document.getElementById('file');
    var reader = new FileReader();
    input.addEventListener('change', () => {
　　    for(file of input.files){
            reader.readAsText(file, 'UTF-8');
            reader.onload = ()=> {
                ulData(reader.result);
            };
        }
    });
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
            var wN = window.prompt("保存名を入力してください");
            if (wN == null||wN == "" || wN == undefined || wN == "document_list" || wN == "file1" || wN == "A1") {
                var wN = LoadProc();
                localStorage.setItem(wN, res);
                var n = JSON.parse(localStorage.getItem("document_list"));
                n.push(wN);
                localStorage.setItem("document_list", JSON.stringify(n));
                window.alert("ダウンロードされました\n保存名は利用できない名前のため保存時の時刻です");
                setDefault();
            } else if((JSON.parse(localStorage.getItem("document_list"))).indexOf(wN) == -1) {
                localStorage.setItem(wN, res);
                var n = JSON.parse(localStorage.getItem("document_list"));
                n.push(wN);
                localStorage.setItem("document_list", JSON.stringify(n));
                window.alert("ダウンロードされました");
                setDefault();
            } else {
                localStorage.setItem(wN, res);
                window.alert("上書きダウンロードされました");
                setDefault();
            }
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
function addData() {
    var t = window.prompt("縦の大きさを入力してください");
    if (t == "" || t == null || t == undefined) {
        plWait();
        setDefault();
        return false;
    } else {
        var y = window.prompt("横の大きさを入力してください");
        if (t > 0 && t <= 100 && y > 0 && y <= 100) {
            var w = window.prompt("ワールド名を入力してください");
            if (((JSON.parse(localStorage.getItem("document_list"))).indexOf(w) != -1) || w == null || w == "" || w == undefined || w == "document_list" || w == "file1" || w == "A1") {
                window.alert("そのワールド名で作ることはできません");
                plWait();
                setDefault();
                return false;
            } else {
                localStorage.setItem(w, JSON.stringify([y,t,"earth_1"]));
                var n = JSON.parse(localStorage.getItem("document_list"));
                n.push(w);
                localStorage.setItem("document_list", JSON.stringify(n));
                window.alert("ワールドを生成しました");
                plWait();
                setDefault();
                return false;
            }
        } else if (y == "" || y == null || y == undefined) {
            plWait();
            setDefault();
            return false;
        } else {
            window.alert("縦または横を1より小さい、または100より大きい数字を指定することはできません");
            plWait();
            setDefault();
            return false;
        }
    }
}
function ulData(e) {
    //console.log(JSON.parse(e));
    var datas = JSON.parse(e);
    console.log(datas);
    if (datas[0] != "backupDatasForZonestcn") {
        window.alert("ファイルが正しくないです");
    } else {
        var datas2 = datas.splice(1, datas.length - 1);
        var wns = ["we start"];
        datas2.forEach(function(value, index) {
            console.log(datas2[index][0]);
            console.log(datas2[index][1]);
            wns.push(datas2[index][0]);
        });
        console.log(wns);
    }
    setDefault();
    setWorld();
}
function dlData() {
    var datas = ["backupDatasForZonestcn"];
    var wList = JSON.parse(localStorage.getItem("document_list"));
    wList.forEach(elm => {
        var sn = localStorage.getItem(elm);
        if (sn != null) {
            datas.push([elm,sn]);
        }
    });
    console.log(datas);
    let blob = new Blob([JSON.stringify(datas)],{type:"application/json"});
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'worlds.json';
    link.click();
    return false;
}
