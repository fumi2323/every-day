# 指定フォーマットで文字列に時間変換
```
変数　＝Timeオブジェクト.strftime(format文字列)
```

format文字列に形式を表す文字を入れる。

例：
```
t = Time.now
str = t.strftime("現在時刻　％H時　％M分　％S秒")
```

のように
