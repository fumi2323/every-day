//Rubyで出来ること
メリットとして大きいのはRuby on RailsというWEBアプリケーションフレームワークを使うことが出来る。

WEBベースの業務システムを効率よく会はtできる


Rubyを使うにはインストールしなくてはいけない


print ("Hello")

test1.rbってなまえつければ完成

Java言語ならmainメソッドが実行されるが、Rubyにはトップレベルは何かのクラスのメソッドじゃない。


selfとmain

selfを実行すると「main」というオブジェクトを返してくる。
print(self.to_s)


Rubyは基本1つの処理を1行に記述する

puts("Hello")
puts("world")

putsメソッドを使用している

？改行しなかったら

puts("Hello")puts("world")

文法エラーになる

そういうときはセミコロン;で区切るJavascriptなどと同じ

コメント
#コメントはシャープ

複数行は
=bigin
コメント
コメント
コメント
=end

で囲む

print("日本語簿表示")
保存時Shift-JIS

ruby -K[kcode] プログラムファイル名

ruby -Ks プログラムファイル名
ruby -Ke プログラムファイル名
ruby -Ku プログラムファイル名
ruby -Kn プログラムファイル名
ってやる

でもめんどくさい

それなら、プログラムの先頭行に文字コード記入してればいい
#! ruby -Ks

ってね

Rubyはオブジェクト指向言語　文字列もオブジェクトの１つ

String.new([文字列])
ただそのままかいてもいい
'文字列'
"文字列"

#! ruby -Ku
require "kconc"

print(Kconv.tosjis("こににちわ"))
print(Kconv.tosjis('Hello'))


文字列の追加

#! ruby -Ku
require "kconv"
print(Kconv.tosjis("こんにちは" << "ヤマダさん" + "¥n"))
