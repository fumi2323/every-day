#IEについて

テスト環境
OS:Windws10 64bit
ブラウザ：IE１１　64bit
使用言語:Ruby

## Seleniumでの文字入力：send_keysが遅い場合
原因：ブラウザ、ドライバの何処かで６４bitが動作している。

- WebDriver：32bitを使用。
- IEのインターネットオプションー＞詳細設定内の拡張機能を両方外すー＞再起動

これでうまく行った。
