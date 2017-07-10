#!/usr/bin/perl  //お約束　自分の環境に合わせて
use strict;　// 厳密にperlの文法をチェックしれくれます。
use warnings; //詳細な警告を出力してくれます。

// 外部ファイルを読み込む
//open (「ファイルハンドル」, "「ファイル名」") or die("Error!");
// or die("Error")はファイルが見つからなかった場合の処理。
//　標準出力でErrorと表示する場合。

//テキストの内容
//りんご
//みかん
//なし
//いちご

//例：同じフォルダ内のdata.txtを読み込む場合
open (DATA, "data.txt") or die("Error");//ココではファイブファイルを探しただけ

while (my $line = <DATA>) { // 1行ずつ($line)に格納する
  chomp($line); // 行末の改行コードを削除する
  print "$line¥n"; // $lineに入った文字を表示
}
//上のテキストの内容が表示されます。

//テキストの内容が配列、ハッシュの場合がデータとして使われる場合が多いからそこを
//メモしておく

//テキストの内容２
//りんご,150
//みかん,100
//なし,300
//いちご,500

//と、カンマで区切られている場合
while (my $line = <DATA>) { // 1行ずつ($line)に格納する
  chomp($line); // 行末の改行コードを削除する
  my ($name, $price) = split(/,/, $line); // $lineには「りんご,150」って入るので、カンマで分割してそれぞれの変数に代入する
  print "$nameの値段は、$price円です¥n"; // $lineに入った文字を表示
}
//りんごの値段は、150円です
//みかんの値段は、100円です
//なしの値段は、300円です
//いちごの値段は、550円です

//と表示されます。

