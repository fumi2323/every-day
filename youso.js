// JavaScriptおさらい
// 要素取得のやり方

// 1.IDを指定して取得する
document.getElementById("id");

//HTML
//<div id="id1">
//test
//</div>

// 上の例を取得する場合
document.getElementById("id1");



// 2.タグを指定する場合
document.getElementsByTagName("tag");
element.getElementsByTagName("tag");

// タグ名から取得
// タグ名は1ページに1つ以上あるのでリスト形式で取得される。
// 名前もelementじゃなくてelements
// 例
// <div>
//   <ul>
//     <li>リスト1</li>
//     <li>リスト2</li>
//     <li>リスト3</li>
//   </ul>
// </div>

elements= document.getElementsByTagName("li");
// liは複数あるので、取得結果はリストになっている。

// クラスを指定して取得する
document.getElementsByClassName("className");

// これはクラス名を指定
// クラスだって1ページに複数存在するからリスト形式になる。
// 例：
// <div>
//   <div id="id1" class="test">クラステスト1</div>
//   <div id="id2" class="test">クラステスト2</div>
//   <div id="id3" class="test">クラステスト3</div>
// </div>

elements = document.getElementsByClassName("test");


// 名前(name属性)を指定して取得する
document.getElementsByName("name");

これはname属性で指定した名前で取得する
もちろん複数あるためリスト形式

<div>
  <div name="name1">テスト1</div>
  <div name="name1">テスト1</div>
  <div name="name2">テスト1</div>
</div>

elements = document.getElementsByName("name1");


そして親子兄弟の取得
例えばココまでの要素の取得でelementに格納しているとする。
したらそのelementから取得する方法

element.parentNode;//親
element.childNode;//子供
element.firstChild;//長子
element.lastChild;//末子
element.previousSibling;//兄or姉
element.nextSibling;//弟or妹

childNodeだけ要素リスト。それ以外は要素単体


要素リストから要素を取り出すには
さて、要素リストのお話

n = elements.length; //要素リストの長さを取得　個数
elm = elements[0]; //0番目の要素を取得
elm = elements(0); //0番目の要素を取得
elm = elements.item(0);//0番目の要素を取得
elm = elements.id1;//id属性がid1の要素を取得
elm = elements.item("id1");//id属性がid1の要素を取得
elm = elements.namedItem("name1");//name属性がname1の要素を取得
elm = elements.tag("span");//タグがspanの要素を取得

リストのアクセスの定番「forループ」
for (i = 0; i< elements.length; i++;){
  elm = elements[i];
}
