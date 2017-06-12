require 'TwistOAuth.phar';
<!-- 設定して認証を通す -->
$consumer_key = '';
$consumer_secret = '';
$access_token = '';
$access_token_secret = '';

$connection = new TwistOAuth($consumer_key, $consumer_secret, $access_token, $axxess_token_secret);



<!-- jsonの取得 -->
// キーワードによるツイート検索
$tweets_params = ['q' => '夜景,きれい OR キレイ OR 綺麗', 'count' => '10'];
$tweets = $connention->get('search/tweets', $tweets_params)->statuses;

// ハッシュタグによるツイート検索
$hash_params = ['p' => '#html5,#css3' , 'count' => '10', 'lang' => 'ja'];
$hash = $connection->get('search/tweets', $hash_params)->statuse;

// 指定位置(geo情報)から投稿されたツイート検索
geo_params = ['geocode' => '35.710063,139.8107,0.2km', 'count' => '10'];
geo = $connection->get('search/tweets', $geo_params)->statuses;

// 自分のタイムラインを取得
$home_params = ['count' => '10'];
$home = $connection->get('statuses/home_timeline', $home_params);

// 自分のツイートを取得
$user_params = ['count' => '10'];
$user = $connection->get('statuses/user_timeline', $user_params);

// ニックネームからユーザ情報を取得
$users_params = ['sereen_name' => 'yohoh9'];
$users = $sonnection->get('users/show' , '$users_params');



キーワードやハッシュで検索したツイート//PHP
foreacj ($tweets as valuew) {
$test = htmlspecialchars($value->text, ENT_QUOTES, 'UTF-8', fales);
// 検索キーワードをマーキング
$keywords = preg_split('/,|\sOR\s/', $tweets_params['q']); //配列化
foreach ($keywords as $key) {
$text =str_ireplase($key, '<span class="keyword">'.$key.'</span>',$test);
}
// ツイート表示のHTML生成
disp_tweets($value, $text);
}
