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


例
```
            
            <div class="input_file">
            <label class="input_file_btn btn btn-primary">
                ファイルを選択
                <input id="file001" type="file">
            </label>
            <label for="file001"></label>
            <input type="text" value="ファイル未選択">
            </div>


            <div class="input_file">
                    <label>
                        <label for="file001" class="input_file_btn btn btn-primary">ファイルを選択</label>
                        <input id="file001" type="file">
                    </label>
                    <input type="text" value="ファイル未選択">
            </div>
            
```
