---
sidebar_position: 5
title: ちらかすの仕様と自動化
---


## 仕様
* ちらかすはポケモンの位置ではなく、すみかの位置で決まる。
* キットの家の場合は、周囲1マス(斜めは含まない)に散らかる。
* 自作の家の場合は、家内の床、家の壁の外1マスに散らかる。
* ちらかすマスに地面(ブロックのみ許容)が無いと、散らかされない。
* ちらかすマスに物が置いてあると散らかされない。
	- 開いている扉がある場合だけは散らかされる。
	- ただし、あげさげまどの場合は散らかされない。
* ちらかすマスに液体があると、散らかされない。
* ちらかすマスが限られている場合は、そのマスに集中して散らかされる。
* しわけるポケモンによって、拾われる。
* 視界に入っているとちらかさない。[^1]

:::warning[未確定]
* 15分おきに判定が発生している？
* 4つ以上は回収するまで散らかされない？
* みつは1つまで？
:::

## 自動化

### 水流方式1
液体があると、散らかされないため、定期的に水をON/OFFする必要がある。

<Twitter tweetId="2033079264896332094" />

### 水流方式2

<iframe width="560" height="315" src="https://www.youtube.com/embed/02WanTtH3YE?si=ysj5vGJFh56AyAOa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### 扉方式
* 扉が開いている時はちらかされることを利用して、常に近接した扉が開いている状態にする。  
* 扉は閉まる時に、落ちているアイテムを[東に移動する](/others#扉や窓によるアイテムの移動には方角が関与する)性質があるため、クロック回路で扉を移動させて回収する。

<Twitter tweetId="2036061094096367809" />

:::warning[複数の家を並べる際の注意点]
扉→センサー→扉→センサーと繋いでも、異なるセンサー間では動きが同期されません。  
全てのセンサーを完全に同時に反応させる必要があります。
:::

[^1]: ななぱーせんと [Twitter@nanapercent788](https://x.com/nanapercent788/status/2033079264896332094)