---
title: クロック回路
label: circuit
---

## 最初に発見されたとされている回路

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">パルス回路できたわ。<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/oKAWIi1IdO">pic.twitter.com/oKAWIi1IdO</a></p>&mdash; KYU (ポケモン管理アプリ『ポケマネ』、『投稿すっかい』開発者) (@kyuphd) <a href="https://twitter.com/kyuphd/status/2032015938057539682?ref_src=twsrc%5Etfw">March 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

### 解説
* 水は伸展した時と、枯れる時それぞれでセンサーに検知される。
* センサーで扉を開け閉めできる状態にして、扉から水を流すと、以下のように繰り返される。
	- 水がセンサー前まで伸展する。
	- 水を検知して、扉が閉まる。
	- 扉がしまったため、水が枯れる。
	- 水が枯れたことを検知して、再度扉が開く。
	- 以降繰り返される。

<iframe width="560" height="315" src="https://www.youtube.com/embed/NoVifxA5dlI?si=vyMm3SbpTqLUEQxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### それ以前の報告

詳しい動きなどの動画が添付されていないが、前述のクロック回路以前に、以下のような投稿もあった。  
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">ぽこあぽけもんで水門をつかったクロック回路 <a href="https://t.co/uiyESMxl2N">pic.twitter.com/uiyESMxl2N</a></p>&mdash; はい。むのうです。 (@hai_munoudesu) <a href="https://twitter.com/hai_munoudesu/status/2031744833329811552?ref_src=twsrc%5Etfw">March 11, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>  
おそらく、2つの溝を水が流れて、それぞれを別の2つのセンサーで検出する方式と思われる。  


## 遅延回路
水を一定時間流したい場合などに非常に便利な回路。
<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">収集所で使用したマグマ式タイマー(扇風機入り)を適当に解説します<br /><br />マグマの終着点にセンサーを設置し,マグマ元のドアに出力をつなげて完成<br /><br />マグマは1秒ごとに進むためとても扱いやすいです(今回は10秒で設定)<br /><br />ただこれだけの場合5分や10分にすると莫大なスペースが必要で…(続↓)<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/PvcQarUt66">https://t.co/PvcQarUt66</a> <a href="https://t.co/CwLF60QVBZ">pic.twitter.com/CwLF60QVBZ</a></p>&mdash; ななぱーせんと (@nanapercent788) <a href="https://twitter.com/nanapercent788/status/2033479774732173787?ref_src=twsrc%5Etfw">March 16, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

### 解説
* 水より動きの遅いマグマを使うことで、クロック回路の周波数を落とすことができます。  
* しかし、一定以上遅くしようとすると、膨大な面積が必要になってしまいます。  
* この方法では、コンパクトに周波数を落とすことができます。  
* 仕組みは、2回に1回しか起動しない目覚まし時計、扇風機や洗濯機などの家電をセンサーで繋ぐことによって、  
	* センサーがマグマを検知。
	* 1つ目の目覚まし時計がON。
	* 以降の目覚まし時計も全てON。
	* 目的地の扉が開く。
	* センサーがマグマが枯れたのを検知。
	* 1つ目の目覚まし時計をOFF。
	* センサーは目覚まし時計のOFFを検知しないため、2つ目以降はONのまま。
	* 1つ目の目覚まし時計が再度ONになっても、2つ目がOFFになるだけ。
というのを各目覚まし時計で繰り返すため、2<sup>目覚まし時計の個数</sup>回に1回しか次のセンサーが反応しない回路を作ることができます。   

## クロック回路とさらさらいわ
クロック回路付近で、さらさらいわが動かなくなる問題があります。  
詳しくは[**水の仕様**](/water#液体の伸展とさらさらいわ)を参考にしてください。  

## 液体を使わない回路(半分ネタ)
さらさらいわの問題を解決するために作成されたポケモンを使った回路。
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ms7aNlU-iF4?si=KHaJe7kxJjL2Bumn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 解説
* 複雑なセンサーがあるが、本質的には窓の前に行くと、その窓を閉じ、反対側の窓を開けるだけ。
* 建築を終えたポケモンは家の近くに移動する性質がある。
* マグマなどに当たると、近くの足場に移動するが、周りに足場がない場合はポケセンにリスポーンする。
* リスポーン後は**最短経路を通って**、完成した家に一番近づける場所に向かって歩いていく。
* あげさげまどをつかうことで、家に一番近い場所を切り替えることができ、2つの道を行ったり来たりさせることができる。

## 超高速クロック回路
### 現象発見

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">絶対遊び方間違ってるぽこあ、電化物だけの高速回路も頑張れば出来るはずと思って弄ってたら偶然できた。速すぎて草(点滅注意)<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/izBaetWA7I">pic.twitter.com/izBaetWA7I</a></p>&mdash; ルカるか (@rukazanmai) <a href="https://twitter.com/rukazanmai/status/2038203770988003624?ref_src=twsrc%5Etfw">March 29, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">オンオフもできた！<br />これ完全に実用化レベル<br />クロック回路の新時代きた<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a>　<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%83%9D%E3%82%B1?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこポケ</a> <a href="https://t.co/mTUIDB3Or1">https://t.co/mTUIDB3Or1</a> <a href="https://t.co/SkmIwiju0q">pic.twitter.com/SkmIwiju0q</a></p>&mdash; アルマ (@ar481uma) <a href="https://twitter.com/ar481uma/status/2038657623432814675?ref_src=twsrc%5Etfw">March 30, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

### 最適化版
<iframe width="560" height="315" src="https://www.youtube.com/embed/vWsLvxnaa44?si=7P1Pcdm_O9qX1CIO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 解説
* つみきなどは1度発動すると、再発動するまでにクールタイムがある。
* 目覚まし時計、洗濯機、わくせいのもけいなどはクールタイムがなく、ONにした直後にOFFにすることができる。
* しかし、OFFにした際にはセンサーが反応しない。
* そのため、ONの洗濯機とOFFの洗濯機を2つ並べ、センサーで両方を検知することで、切り替わるごとにセンサーが反応する。
* センサーによって別の2つの洗濯機のON/OFFを切り替えると、洗濯機の動きがループする。
* 結果として、毎フレーム(1/60秒)ごとにセンサーが反応する理論上最高周波数のクロック回路となる。
