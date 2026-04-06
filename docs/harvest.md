---
sidebar_position: 6
title: 畑の仕様と半自動化
---

## 畑の半自動化
* 小麦以外の畑の作物はさらさらいわで枯らすことで、地面に落ちる。
:::warning[畑は完全には自動化できない]
* 畑の作物はしわけるで回収されない。
* エリア移動で消えてしまう。  
:::
* 半自動化法として、現在以下の2つの案がある。
	- ボタンを押したらなるべく早く水流で手元に持ってくる。
	- メタモン自体が動いて、一瞬で回収する。
* しかし、水で押し流す際、野菜はたとえ枯れた作物にでも引っかかってしまう。

## スプリンクラーの仕様
* 上方向にも判定があるため、地下に埋めることが可能。
* スプリンクラーを中心に、5マス分まで水が届く。
* より詳しい範囲はさらさらいわの仕様を参照。

<iframe width="560" height="315" src="https://www.youtube.com/embed/8Fsp-5SFedw?si=34crwwLNTeb8DHqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## さらさらいわの仕様

* 5秒に1回、41マスの中から10マスが選ばれて乾燥する。
* さらさらいわの上下+1～-2マスまで影響がある。
* 範囲内に植物があった場合は、範囲外の地面も植物と同時に枯れる。
	- 逆に地面があった場合も植物が枯れる。
	- プランターの場合は影響しない。

<Twitter tweetId="2037713234124566849" />

<Twitter tweetId="2037505471075303895" />

## 半自動化

### 段を使った水流式
前述のように、枯れた植物に水流で流されるアイテムは引っかかってしまうため、段差を付けて押し流す方式。  

<Twitter tweetId="2036979216835846356" />

### 高速移動吸い込み方式
アイテムが流れてくるまでに時間がかかるため、吸い込みながらメタモンが高速移動する方法。  

<Twitter tweetId="2038182227574751286" />

※高速移動はRedditで報告された[^1] もので、それを元に改良されたもの[^2] に[かざぐるま](/circuit/items#かざぐるま)[^3] を組み合わせて作ったとのこと。


[^1]: https://www.reddit.com/r/Pokopia/comments/1s15twd/i_made_horizontal_fast_travel/
[^2]: いのせ [Twitter@innocentroad](https://x.com/innocentroad/status/2036034534131872017)
[^3]: KYU [Twitter@kyuphd](https://x.com/kyuphd/status/2036056447147229642)
