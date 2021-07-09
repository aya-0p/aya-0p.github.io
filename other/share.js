(document.getElementsByTagName("body"))[0].innerHTML = '<form action="#" onsubmit="return rel()" name="nam"><label><select name="opts" size="4"><option value="n" disabled>以下から選んでください</option><option value="import">取得する</option><optgroup label="共有する--ワールドを以下から選択" id="share"></optgroup></select><br><button type="submit">決定</button></label></form><br><form action="#"><label><button type="submit">元に戻る</button></label></form>';
var dList = JSON.parse(localStorage.getItem("document_list"));
var ls = dList.splice(1,dList.length - 1);
for (var i = 0; i < ls.length; i++) {
    document.getElementById("share").innerHTML += `<option value="` + ls[i] + `">` + ls[i] + `</option>`;
}
