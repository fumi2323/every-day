# Settionを生成する方法

perlで使う場合はuse CGI::Session qw/-ip_match/;ライブラリを利用すると楽。
qw/-ip_matchはIPアドレスまでマッチさせる場合。スマホとかだとエラーになる可能性がある・


use CGI::Session qw/-ip_match; ライブラリ読込

my $session = CGI::Session->new(undef,undef,{Directory=>$session_dir});新規作成
＄session->expore();有効期限
$session->param(name, value);


セッションを読み込むときは
$session = CGI::Session->load(undef, $sid,{Directory => $session_dir});

※ただし、セッションを普通に読み込むと時間も更新されるので、タイムアウトが正常に動作しない場合がある。
読み込みだけを行いたい場合は
{
  no warnings 'redefine';
  *CGI::Session::DESTROY = sub{};ここでサブを上書きする
}
その後、反映したくなったら
$sessionf->lush();を使う。
と、更新されない。がコアをいじっているので、今後使えなるかもしれない。



一緒に使うといいモジュール
use CGI::Session::ExpireSessions; 
CGI::Sesstion::ExpireSessions->new() -> expire_file_sessions();

これは生成されたセッションを一定時間立つと削除するモジュール。
黙々と溜まっていくセッションファイルを掃除することができます。
