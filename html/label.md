# labelについて

### 使い方
1.idとforを同じにする
```
<input id="input" type="checkbox">
<label for="input">りんご</label>
```
※label側はforで紐付けるから、離れてていても使えるし、複数の箇所から同じ動作を行うことが出来る

2.labelで囲む
```
<label>
  <input type="input" type="checkbox">りんご
</label>
```
※idでヒモ付がいらないのでシンプルに書ける
