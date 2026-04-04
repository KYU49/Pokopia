---
sidebar_position: 4
title: 木の仕様
---

## 水平方向の当たり判定
* 枯れている場合と、枯れていない場合でほとんど変わらない。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">既知情報ですが、木の仕様まとめ(1/n)<br /># 木の当たり判定(対きのみ)<br />枯れている場合、枯れていない場合で「水平」方向への当たり判定は&quot;ほぼ&quot;変わらない。<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/naemXHtJmD">pic.twitter.com/naemXHtJmD</a></p>&mdash; KYU (ポケモン管理アプリ『ポケマネ』、『投稿すっかい』開発者) (@kyuphd) <a href="https://twitter.com/kyuphd/status/2036997394815213576?ref_src=twsrc%5Etfw">March 26, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

* ただし、枯れていない場合の方がわずかに当たり判定が大きい。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">木の仕様まとめ(2/n)<br />ただし、枯れていない場合の方が僅かに当たり判定が大きい(もしくは枯れるタイミングで移動判定がある)模様。<br />枯れたタイミングで、引っかかっていたきのみの一部が落下する。<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/38bdlr4ogK">pic.twitter.com/38bdlr4ogK</a></p>&mdash; KYU (ポケモン管理アプリ『ポケマネ』、『投稿すっかい』開発者) (@kyuphd) <a href="https://twitter.com/kyuphd/status/2036997416650740090?ref_src=twsrc%5Etfw">March 26, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 垂直方向への当たり判定
* 枯れ木では、1ブロック + α
* 枯れていないと、3ブロック + α

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">木の仕様まとめ(3/n)<br /># 縦方向への当たり判定(対きのみ)<br />枯れ木では1ブロック+αの高さ。<br />枯れていないと、3ブロック+αの高さ。<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/Zu3aPZi1X9">pic.twitter.com/Zu3aPZi1X9</a></p>&mdash; KYU (ポケモン管理アプリ『ポケマネ』、『投稿すっかい』開発者) (@kyuphd) <a href="https://twitter.com/kyuphd/status/2036997422996742394?ref_src=twsrc%5Etfw">March 26, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 枯れ木が水で復活する条件(水平方向)
* 木と同じ高さの横のマスに水がある。
* 木の下マスが水で変化するブロックかつ、下のマスの横に水がある。

## 枯れ木が水で復活 **しない** 条件(水平方向)
* 木の直下のマスに水がある。
* 2マス横に水がある。
* 斜め横に水がある。
* 泥水など。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">木の仕様まとめ(4/n)<br /># 枯れ木が水で復活する条件<br />* 同じ高さの横のマスに水がある<br />* 下のマスが水で変化するブロックかつ、下のマスの横に水がある<br /><br /># 水で復活&quot;しない&quot;条件<br />* 直下のマスに水がある。<br />* 2マス横に水がある。<br />* 斜め横に水がある(data not shown)。<a href="https://twitter.com/hashtag/%E3%81%BD%E3%81%93%E3%81%82%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3?src=hash&amp;ref_src=twsrc%5Etfw">#ぽこあポケモン</a> <a href="https://t.co/FwAPEOaEY1">pic.twitter.com/FwAPEOaEY1</a></p>&mdash; KYU (ポケモン管理アプリ『ポケマネ』、『投稿すっかい』開発者) (@kyuphd) <a href="https://twitter.com/kyuphd/status/2036997432803025318?ref_src=twsrc%5Etfw">March 26, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## 枯れ木が水で復活する条件(垂直方向)
