---
title: クロック回路
label: circuit
sidebar_position: 1
---

クロック回路とは、勝手にON/OFFが切り替わる回路。  
ぽこあポケモンでは、扉が開いたり閉じたりを繰り返すためや、電化製品のON/OFFを切り替えるために使われる。   
水を定期的に流すなど、アイテム回収の自動化に応用される。

以下では、発見された歴史に沿って、クロック回路とその仕組みを紹介する。

---

## おそらく最初期に発見されていた回路

詳しい動きなどの動画が添付されていないが、現在メジャーになっているクロック回路以前に、以下のような投稿もあった。  


<Twitter tweetId="2031744833329811552" />

おそらく、2つの溝を水が流れて、それぞれを別の2つのセンサーで検出する方式と思われる。  

## 現在メジャーな回路

<Twitter tweetId="2032015938057539682" />

### 必要なもの
* フタつきまど(or あげさげまど)
	- 開閉のアニメーションが短いものであれば、代用可能。
	- コストや不具合の少なさから、フタつきまどを推奨。
	- 「あげさげまど」はポケモンが勝手に触らない利点があるが、よくエリア移動で停止する。
* センサー
* 海水 or マグマ(遅くしたい時)
	- 普通の水でもよいが、海水だとキラキラが発生しない。
	- 泥は海水と同じような動作をするが、作物などを潤さない。

### 構造
* 水の横に扉を設置。
* 扉の横にセンサーを設置。
	- センサーの向きは扉と反対方向。
* センサーの横のブロックの上に積み木や扉など動かしたいものを設置。

![最小構築のクロック回路](/img/smallest_clock.jpg)

### 解説
* 水は伸展した時と、無くなる時それぞれでセンサーに検知される。
* センサーで扉を開け閉めできる状態にして、扉から水を流すと、以下のように繰り返される。
	- 水がセンサー前まで伸展する。
	- 水を検知して、扉が閉まる。
	- 扉がしまったため、水が枯れる。
	- 水が枯れたことを検知して、再度扉が開く。
	- 以降繰り返される。

<iframe width="560" height="315" src="https://www.youtube.com/embed/NoVifxA5dlI?si=vyMm3SbpTqLUEQxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 周波数を落とす方法
水を一定時間流したい場合、装置が作動する時間間隔を長くしたい時などに使える回路。

<Twitter tweetId="2033479774732173787" />


### 解説
水より動きの遅いマグマを使うことで、クロック回路の周波数を落とすことができます。しかし、一定以上遅くしようとすると、膨大な面積が必要になってしまいます。この方法では、最小限のスペースで周波数を落とすことができるようになります。  
 
この回路では、目覚まし時計がONになった時(2回に1回)だけセンサーに検知されることを利用しています。  
2回に1回だけしか後ろに信号が伝わらないため、2の(目覚まし時計)乗に1回しか後ろの扉などは動かない回路が完成します。   
![遅延回路の解説](/img/delay-circuit.svg)

絵で分かりづらかったら[**こちらを参照(YouTube)**](https://youtu.be/02WanTtH3YE?si=wbzK2CDnd-9SD5zb&t=283)。

## クロック回路とさらさらいわ
クロック回路付近で、さらさらいわが動かなくなる問題があります。  
詳しくは[**水の仕様**](/water#液体の伸展とさらさらいわ)を参考にしてください。  

## 液体を使わない回路(半分ネタだが、実用性もあり)
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

複数の電化製品をセンサーで繋ぐことで、連続して応答することを発見。

<Twitter tweetId="2038203770988003624" />

<Twitter tweetId="2038657623432814675" />

### 最適化版

メカニズムから、最小の構成にしたもの。

<iframe width="560" height="315" src="https://www.youtube.com/embed/vWsLvxnaa44?si=7P1Pcdm_O9qX1CIO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 必要なもの
* センサー x 2
* 洗濯機, わくせいのもけい, or 目覚まし時計
* 前者2つの場合は電源

### 構造
* 家電を2つ並べ、その2つ両方をセンサー範囲に入れる。
* 同じ構造を逆向きに上に乗せる。
* 2つ並んだ家電の片方だけON, もう片方をOFFにする。

### 解説

* つみきなどは1度発動すると、再発動するまでにクールタイムがある。
* 目覚まし時計、洗濯機、わくせいのもけいなどはクールタイムがなく、ONにした直後にOFFにすることができる。
* しかし、OFFにした際にはセンサーが反応しない。
* そのため、ONの洗濯機とOFFの洗濯機を2つ並べ、センサーで両方を検知することで、切り替わるごとにセンサーが反応する。
* センサーによって別の2つの洗濯機のON/OFFを切り替えると、洗濯機の動きがループする。
* 結果として、毎フレーム(1/60秒)ごとにセンサーが反応する理論上最高周波数のクロック回路となる。
