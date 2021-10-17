console.log("using beta version!");
var uid;

function logout() {
  uid = null;
  localStorage.removeItem("login_id");
  window.alert("ログアウトしました。");
  window.location.reload();
}

function login(id) {
  if (id) {
    uid = id;
  }
  if (!uid) {
    uid = window.prompt("ユーザー名（以降も使います）を入力してください。");
  };
  if (uid === null || uid === undefined || uid === "") {
    return false;
  } else {
    localStorage.setItem("login_id", uid);
    document.getElementById("nav0").innerHTML = `<a href="#" onclick="logout();"><div style="font-size:16px;">${uid}としてログイン中</div><br>Logout<br>ログアウト</a>`;
    document.getElementById("nav0").style.display = "block";
    document.getElementById("nav1").style.display = "none";
    //document.getElementById("nav2").style.display = "block";
    document.getElementById("nav3").style.display = "block";
    document.getElementById("nav4").style.display = "block";
    document.getElementById("nav5").style.display = "block";
    document.getElementById("nav6").style.display = "none";
    document.getElementById("nav9").style.display = "none";
    if (localStorage.getItem("world_sync") {
      document.getElementById("nav10").style.display = "none";
      document.getElementById("nav12").style.display = "block";
    } else {
      document.getElementById("nav10").style.display = "block";
      document.getElementById("nav12").style.display = "none";
    }
    return false;
  }
};
//function wSave() {};
function wBackup() {
  login();
  var sendFile = {
    userid: uid,
    type: "backup",
    datas: {
      default: [],
      gravel: []
    }
  };
  for (i = 1; i < JSON.parse(localStorage.getItem("document_list")).length; i++) {
    try {
      var data = {};
      var test;
      test = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem("document_list"))[i]));
      data.worldName = JSON.parse(localStorage.getItem("document_list"))[i];
      data.worldData = localStorage.getItem(JSON.parse(localStorage.getItem("document_list"))[i]);
      sendFile.datas.default.push(data);
      login();
    } catch (e) {
      console.warn(e.message);
    }
  }
  for (i = 1; i < JSON.parse(localStorage.getItem("document_gravel")).length; i++) {
    try {
      var data = {};
      var test;
      test = JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem("document_gravel"))[i]));
      data.worldName = JSON.parse(localStorage.getItem("document_gravel"))[i];
      data.worldData = localStorage.getItem(JSON.parse(localStorage.getItem("document_gravel"))[i]);
      sendFile.datas.gravel.push(data);
      login();
    } catch (e) {
      console.warn(e.message);
    }
  }
  var s = sendData(sendFile);
  if (s == -1) {
    window.alert("不明なエラーにより操作が完了しませんでした。");
  } else {
    window.alert("バックアップしました。");
  }
};
async function wImport(id) {
  if (!id) {
    login();
    var wid = window.prompt("バックアップから復元します。復元すると現在のデータは削除されます。\n「復元」と入力してください。");
    if (wid === "復元") {
      wid = uid;
    } else {
      return false;
    }
  } else {
    wid = id;
  }
  var xmlGet = new XMLHttpRequest();
  var url = new URL('https://script.google.com/macros/s/AKfycbzzbYCHy2Wusf4l9cP6SwejPu9v2_Yc8Qm9s86Tk3kNlyo9M9e-hr5KcTxF5mUdSztq/exec');
  url.searchParams.set('name', wid);
  xmlGet.open("GET", url);
  xmlGet.send();
  await sleep(5000);
  var res = JSON.parse(xmlGet.response);
  console.log(res);
  if (res.length === undefined) {
    //import from backup
    localStorage.clear();
    var worlds = ["we start"];
    res.default.forEach(function (element) {
            worlds.push(element.worldName);
            localStorage.setItem(element.worldName, element.worldData);
        });
    localStorage.setItem("document_list", JSON.stringify(worlds));
    var worlds = ["we start"];
    res.gravel.forEach(function (element) {
            worlds.push(element.worldName);
            localStorage.setItem(element.worldName, element.worldData);
        });
    localStorage.setItem("document_gravel", JSON.stringify(worlds));
    window.alert("復元しました。再読み込みします。");
    window.location.reload();
  } else if (res.length > 0) {
    //import from backup(old)
    localStorage.clear();
    var worlds = ["we start"];
    res.forEach(function (element) {
            worlds.push(element.worldName);
            localStorage.setItem(element.worldName, element.worldData);
        });
    localStorage.setItem("document_list", JSON.stringify(worlds));
    window.alert("復元しました。再読み込みします。");
    window.location.reload();
  } else {
    window.alert("そのアカウントにバックアップ記録はありません。");
  }
  return false;
};

function wShare() {
  login();
  if (checkJson(localStorage.getItem("document_gravel"))　 && JSON.parse(localStorage.getItem("document_gravel")).length > 1) {
    var worldList = JSON.parse(localStorage.getItem("document_gravel"));
    var list = worldList.splice(1, worldList.length - 1);
    document.getElementById("nav6").style.display = "block";
    document.getElementById("nav6").innerHTML = `以下から共有するワールドを選択<br><form action="#" onsubmit="worldShare();return false;" name="nam"><label><select id="wld"></select><button type="submit">共有</button></label></form>`;
    for (var i = 0; i < list.length; i++) {
      document.getElementById("wld").innerHTML += `<option value="${list[i]}">${list[i]}</option>`;
    }
  } else {
    window.alert("ワールドが存在しません。");
  }
  return false;
};

function checkJson(text) {
  try {
    JSON.parse(text);
  } catch (e) {
    return false;
  }
  return true;
}

function worldShare() {
  var wName = document.nam.elements[0].value;
  if (wName === null || wName === undefined || wName === "" || !checkJson(localStorage.getItem(wName))) {} else {
    var sendFile = {
      userid: uid,
      type: "share",
      datas: [{
        type: "gravel",
        worldName: wName,
        worldData: localStorage.getItem(wName)
      }]
    };
    var a = sendData(sendFile);
    //window.alert(`共有したワールドのIDです。これを共有したい人に渡してください。\n ${a}`);
    document.getElementById("nav6").innerHTML = `共有したワールドのURLです。これを共有したい人に渡してください。\n<a href="https://aya-0p.github.io/sim/zyari/?id=${a}">URL(長押し/右クリックしてコピー/共有)</a>`;
    console.log(a);
  }
  return false;
}

function sendData(sendFile) {
  console.log(sendFile);
  var xmlSend = new XMLHttpRequest();
  xmlSend.open("POST", "https://script.google.com/macros/s/AKfycbzzbYCHy2Wusf4l9cP6SwejPu9v2_Yc8Qm9s86Tk3kNlyo9M9e-hr5KcTxF5mUdSztq/exec", false);
  xmlSend.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlSend.send(JSON.stringify(sendFile));
  var response = xmlSend.response;
  return response;
}

function wMove() {
  var worldList = JSON.parse(localStorage.getItem("document_list")); //固定
  var list = worldList.splice(1, worldList.length - 1);
  document.getElementById("nav9").style.display = "block";
  document.getElementById("nav9").innerHTML = `以下からインポートするワールドを選択<br><form action="#" onsubmit="worldMove();return false;" name="na"><label><select id="wl"></select><button type="submit">インポート</button></label></form>`;
  for (var i = 0; i < list.length; i++) {
    document.getElementById("wl").innerHTML += `<option value="${list[i]}">${list[i]}</option>`;
  }
}

function worldMove() {
  var wName = document.na.elements[0].value;
  if (!localStorage.getItem("document_gravel")) {
    localStorage.setItem("document_gravel", "[\"we start\"]");
  }
  if (wName === null || wName === undefined || wName === "" || !checkJson(localStorage.getItem(wName))) {} else {
    var document_list = JSON.parse(localStorage.getItem("document_list")); //固定
    var document_gravel = JSON.parse(localStorage.getItem("document_gravel"));
    document_list.splice(document_list.indexOf(wName), 1);
    if (document_gravel.indexOf(wName) === -1) {
      document_gravel.push(wName);
    };
    localStorage.setItem("document_list", JSON.stringify(document_list));
    localStorage.setItem("document_gravel", JSON.stringify(document_gravel));
    window.alert("インポートしました。");
    window.location.reload();
  }
}

function sleep(msec) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, msec);
  })
}
async function setUp() {
  var getId = (new URL(document.location)).searchParams.get("id");
  if (getId) {
    wImp(getId.replace(/\'/, ""));
  }
  if (!localStorage.getItem("document_gravel")) {
    localStorage.setItem("document_gravel", "[\"we start\"]");
  }
  if (!localStorage.getItem("document_list")) {
    localStorage.setItem("document_list", "[\"we start\"]");
  }
  if (localStorage.getItem("login_id")) {
    uid = localStorage.getItem("login_id");
  }
  if (localStorage.getItem("world_sync")) {
    worldSyncGet();
  }
  var syncId = (new URL(document.location)).searchParams.get("sid");
  if (getId) {
    syncImp(getId.replace(/\'/, ""));
  }
};
async function wImp(wid) {
    var xmlGet = new XMLHttpRequest();
    var url = new URL('https://script.google.com/macros/s/AKfycbzzbYCHy2Wusf4l9cP6SwejPu9v2_Yc8Qm9s86Tk3kNlyo9M9e-hr5KcTxF5mUdSztq/exec');
    url.searchParams.set('name', wid);
    xmlGet.open("GET", url);
    xmlGet.send();
    await sleep(5000);
    var res = JSON.parse(xmlGet.response);
    console.log(res);
    if (res.length === 1) {
        //import from share
        if (res[0].type === "default") {
          var worlds = JSON.parse(localStorage.getItem("document_list"));
          if (!worlds.includes(res[0].worldName)) {
            worlds.push(res[0].worldName);
            localStorage.setItem('document_list', JSON.stringify(worlds));
          } else {
            worlds.push(res[0].worldName + "#");
            localStorage.setItem('document_list', JSON.stringify(worlds));
          }
          var nName;
          if (localStorage.getItem(res[0].worldName)) {
            nName = res[0].worldName + "#";
          } else {
            nName = res[0].worldName;
          }
          localStorage.setItem(nName, res[0].worldData);
          window.alert("インポートしました。(同じ名前が存在した場合末尾に#がついています。)");
          window.location.href = 'https://aya-0p.github.io/sim/default/';
        } else if (res[0].type === "gravel") {
          var worlds = JSON.parse(localStorage.getItem("document_gravel"));
          if (!worlds.includes(res[0].worldName)) {
            worlds.push(res[0].worldName);
            localStorage.setItem('document_gravel', JSON.stringify(worlds));
          } else {
            worlds.push(res[0].worldName + "#");
            localStorage.setItem('document_gravel', JSON.stringify(worlds));
          }
          var nName;
          if (localStorage.getItem(res[0].worldName)) {
            nName = res[0].worldName + "#";
          } else {
            nName = res[0].worldName;
          }
          localStorage.setItem(nName, res[0].worldData);
          window.alert("インポートしました。(同じ名前が存在した場合末尾に#がついています。)");
          window.location.href = 'https://aya-0p.github.io/sim/zyari/';
        } else {};
      } else {
        window.alert("このURLは無効です。");
        window.location.href = 'https://aya-0p.github.io/sim/zyari/';
    }
    return false;
};

async function worldSyncGet() {//起動時に実行。ダウンロード(完成)
  var wid = localStorage.getItem("world_sync");
  var xmlGetSync = new XMLHttpRequest();
  var url = new URL('https://script.google.com/macros/s/AKfycbw-UyVTLISKgmbWAbELfafn9snnfL9y95rgB_prvuaEJSzMXaEujP0lVKM4sO_Fl81iGA/exec');
  url.searchParams.set('wid', wid);
  xmlGetSync.open("GET", url, false);
  xmlGetSync.send();
  var res = JSON.parse(xmlGetSync.response);
  localStorage.setItem("同期ワールド", res.data);
}

function worldSyncPost() {//ユーザーの入力で実行。アップロード(完成)
  var id = localStorage.getItem("world_sync")
  if (id) {
    var data = localStorage.getItem("同期ワールド");
    var sendFile = {type: "update", datas: data};
    syncSend(sendFile);
  }
}

function syncImp(sid) {//url末尾に{?sid=*}があり同期を開始。それだけ(完成)
  if (localStorage.getItem("world_sync") {
    window.alert(`一度に同期できるワールドは1つまでです。\n同期するには既に同期しているワールドの同期を解除してください。`);
    window.location.href = 'https://aya-0p.github.io/sim/zyari/';//変更
  } else {
    localStorage.setItem("world_sync", sid);
    localStorage.setItem("document_list", JSON.stringify(JSON.parse(localStorage.getItem("document_list")).push("同期ワールド")))
    window.location.href = 'https://aya-0p.github.io/sim/zyari/';//変更
  }
}

function newSync() {//ユーザーの入力で実行。新しく自分のデータを同期
  var wName = document.sy.elements[0].value;
  if (localStorage.getItem("world_sync")) {
    window.alert("一度に同期できるワールドは1つまでです。\n同期するには既に同期しているワールドの同期を解除してください。");
  } else {
    var sendData = {type: "upload", datas: localStorage.getItem(wName)}
    var id = syncSend(sendFile);
    localStorage.setItem("world_sync", id);
    localStorage.setItem("document_list", JSON.stringify(JSON.parse(localStorage.getItem("document_list")).push("同期ワールド")))
    var sUrl = `https://aya-0p.github.io/sim/zyari/index.html?sid=${id}`;//変更
    return sUrl;
  }
}

function syncSend(sendFile) {//同期系の送る方(完成)
  var xmlsSend = new XMLHttpRequest();
  xmlsSend.open("POST", "https://script.google.com/macros/s/AKfycbw-UyVTLISKgmbWAbELfafn9snnfL9y95rgB_prvuaEJSzMXaEujP0lVKM4sO_Fl81iGA/exec", false);
  xmlsSend.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlsSend.send(JSON.stringify(sendFile));
  var response = xmlsSend.response;
}

function syncEnd() {
  localStorage.removeItem("world_sync");
  window.alert("同期を終了しました。なお「同期ワールド」は今後再度同期する際上書きされます。");
  login();
}

function wSyncMenu() {
  var list = worldList.splice(1, worldList.length - 1);
  document.getElementById("nav11").innerHTML = `以下から同期するワールドを選択<br><form action="#" onsubmit="newSync();return false;" name="sy"><label><select id="ss"></select><button type="submit">同期</button></label></form>`;
  for (var i = 0; i < list.length; i++) {
      document.getElementById("ss").innerHTML += `<option value="${list[i]}">${list[i]}</option>`;
    }
}

setUp();
