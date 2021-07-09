(document.getElementsByTagName("body"))[0].innerHTML = '<form id="dt"><label><select name="opts" size="4"><option value="n" disabled>以下から選んでください</option><option value="import">取得する</option><optgroup label="共有する--ワールドを以下から選択" id="share"></optgroup></select><br><button type="button" id="sendData">決定</button></label></form><br><form action="#"><label><button type="submit">元に戻る</button></label></form>';
var dList = JSON.parse(localStorage.getItem("document_list"));
var ls = dList.splice(1,dList.length - 1);
for (var i = 0; i < ls.length; i++) {
    document.getElementById("share").innerHTML += `<option value="` + ls[i] + `">` + ls[i] + `</option>`;
}

// ページ読込完了後にボタンにclickイベントを登録する
window.addEventListener("load", function(){
	document.getElementById("sendData").addEventListener("click", function(){
		// FoemDataオブジェクトに要素セレクタを渡して宣言する
		var formDatas = document.getElementById("dt");
		var mixedDatas = new FormData(formDatas);

		// appendメソッドでキーとデータの組をセットする
		// append("キー(FORMで云うところのname属性値)",  "データ")でデータをセットできる
		// appendではデータは追加となる

		// XHRの宣言
		var XHR = new XMLHttpRequest();

		// openメソッドにPOSTを指定して送信先のURLを指定します
		XHR.open("POST", "https://script.google.com/macros/s/AKfycbz1wcN8hmiUfsPOewChFVbMzWH_AQRNxvbHkzaArVALQXK9dTEXyx9iPVP8GJRzf7Ar/exec", true);

		// sendメソッドにデータを渡して送信を実行する
		XHR.send(mixedDatas);

		// サーバの応答をonreadystatechangeイベントで検出して正常終了したらデータを取得する
		XHR.onreadystatechange = function(){
			if(XHR.readyState == 4 && XHR.status == 200){
				// POST送信した結果を表示する
				document.getElementById(null).innerHTML = XHR.responseText;
			}
		};
	} ,false);
}, false);
