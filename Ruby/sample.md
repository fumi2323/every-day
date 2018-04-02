```
puts "最初はグーじゃんけん..."
puts "[0]:グー\n[1]:チョキ\[2]:パー"

player_hand = gets.to_i
cpu_hand = rand(3)

if player_hand == cpu_hand
  puts "あいこです!"
elseif (player_hand == 0 && cpu_hand == 1) ||
       (player_hand == 1 && cpu_hand == 2) ||
       (player_hand == 2 && cpu_hand == 0)
  puts "あなたの勝ちです!"
else
  puts "あなたの負けです!"
end


puts "初めてのプログラム"

Javaだと
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("初めてのプログラム");
  }
}
ってちょっとながいｗｗｗ

そもそもオブジェクトとはデータと処理の集まりのこと
例えば「東京」と「大阪」があったとしたらそれらは別々の異なるオブジェクト。
東京は[point : tokyo]という状態を保持していて場所を聞くと「東京」って答える振る舞いを持っている


バージョン０のLancherコード
launcher.rb

```
#!/usr/local/bin/ruby

# Example application to demonstrate some basic Ruby features
# This code loads a given file into an assoxiated application

class Lnacher
end


```

```
class Ai
  def pub
    puts "あいちゃんは学級委員長で、真面目です"
  end
  
  def friend
    puts "知ってますよ、" + secret
  end
  
  private
  def secret
    "あいちゃんは腐女子です"
  end
end

ai = Ai.new
puts ai.pub
puts ai.friend # クラス無いから呼び出してるから表示される。
puts ai.secret #呼び出せない
```

カプセル化とは何か
オブジェクト指向基本概念の一つ。
Rubyでは、あるオブジェクトのメソッドを、他のオブジェクトからは呼び出せないようにすることが出来る。
また、インスタンス変数はそのオブジェクト内からしか参照できないようになっている。
このように、オブジェクトの状態や機能（インスタンス変数やメソッド）を、他のオブジェクトからアクセス出来ないようにすることをカプセル化と呼ぶ。
Rubyでインスタンス変数の値を他のオブジェクトから参照するには、インスタンス変数の値を他のオブジェクトから参照するには、インスタンス変数の
値を返すメソッドを定義する必要がある。

カプセル化をとりいれることによって、オブジェクトに対する必要のない操作を防ぐことが出来る。

例
```
class Student
  def initialize(name = "Yuka")
    @name = name
  end
end

yuka = Student.new
puts yuka.name # えらー

```
クラスの中にあるインスタンス変数の値を参照するためのメソッドを定義していないことが原因だ。

インスタンス変数にアクセスするためのメソッドは３つ
・attr_accessor : セッタとゲッタをともに定義する
・attr_reader : ゲッタのみを定義する
・attr_writer : セッタのみを定義する

ここではreaderを使う

```
class Student
 attr_reader :name
 def initialize(name = "Yuka")
  @name = name
 end
end

yuka = Student.new
puts yuka.name #Yuka
```
取り出すことができた。


ポリモルフィズム（多態性）
１つのメソッドが複数のオブジェクトに属していて、同じメソッドでもオブジェクトが違う異なる結果になること。
以下の例
```
str = "Thanks" 
num = Math::PI
obj = Pbject.new

p str.to_s #表示できるデータに変換


class Taiyaki
 def aji(nakami)
  put "このたい焼きは"+nakami+"味だよ"
 end
end

#　新しいインスタンスをつくり、メソッドを呼び出してみる
my_taiyaki = Taiyaki.new
puts my_taiyaki.aji("あんこ") #このたい焼きはあんこ味だよって表示
```


newなどのクラスメソッドを使ってインスタンス化してオブジェクトを生成するがクラス自身もオブジェクトになれて
このselfはクラス名を指していてクラス定義にselfが使われるときはクラス名を指す。

これを知っておくとインスタンス変数とクラスインスタンス変数を区別できるようになる。

selfはオブジェクトが指すがクラス定義ではクラス名を指し以下のコードに着目してほしい。

```
class Cat
 @siro = "kuro"
 attr_reader :siro
 
 def initialize(siro="siro")
  @siro = siro
 end
 
 def self.kuro
  @siro
 end
end

a = Cat.new
a.siro #siro
Cat.siro #kuro
```

同じ@siroのインスタンス変数だけど違う値が入ってる
aオブジェクトがselfとなるインスタンス変数かCatがselfとなるインスタンス変数がある、後者をクラスインスタンス変数という。


