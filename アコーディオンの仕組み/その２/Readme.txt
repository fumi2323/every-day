//gitとコードの学習のため、プッシュしています。
//今わかったこと
//PCからからpushしても「Your Contributions」に緑色が塗られなかった。
//原因。pushするPC（プロジェクトディレクトリ＝リポジトリ）にuser情報がなかったから。

gitのディレクトリで
・git config user.mail
とやっても次の行が空欄だと情報が入っていない。
git config user.name "ユーザー名"
git config user.email "git登録メアド"
を設定してれば反映される。

コメント追加
