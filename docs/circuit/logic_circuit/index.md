---
title: ぽこあ回路図鑑
slug: /circuit/logic_circuit
sidebar_label: ぽこあ回路図鑑
description: ぽこあの基本仕様・論理回路・制御回路・演算回路・応用設備を体系的にまとめた資料
keywords:
  - ぽこあ
  - ポケモン
  - 回路
  - 論理回路
  - 加算器
---

# ぽこあ回路図鑑

**回路を覚える → 組み合わせる → 作品を作る。**

ぽこあ内の状態変化をセンサーで検出し、信号の**保持・反転・遅延・選択・加算**へ発展させる方法をまとめています。

<div className="row">
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header"><h3>📘 はじめての方へ</h3></div>
      <div className="card__body"><p>基本仕様から学ぶ最短ルート。</p></div>
      <div className="card__footer"><a className="button button--primary button--block" href="#start-here">読む</a></div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header"><h3>🌳 回路の系統図</h3></div>
      <div className="card__body"><p>回路同士のつながりを見る。</p></div>
      <div className="card__footer"><a className="button button--primary button--block" href="#circuit-tree">見る</a></div>
    </div>
  </div>
  <div className="col col--4">
    <div className="card margin-bottom--lg">
      <div className="card__header"><h3>🔎 目的から探す</h3></div>
      <div className="card__body"><p>保持・遅延・演算などから探す。</p></div>
      <div className="card__footer"><a className="button button--primary button--block" href="#find-by-purpose">探す</a></div>
    </div>
  </div>
</div>

:::info この図鑑の方針
確認できていない数値や条件は推測で埋めません。動画・検証・説明を確認できた内容から更新します。
:::

<a id="start-here"></a>

## はじめての方へ

最初に、次の3項目を読むと回路の動作理由を追いやすくなります。

1. [信号の出力条件](./basics/signal-output.md)
2. [センサー矢印の仕様](./basics/sensor-arrow.md)
3. [水・窓による信号伝達](./basics/water-window.md)

### 学ぶ順番

| 段階 | 内容 | 入口 |
|---:|---|---|
| 1 | 信号・センサー・水流の基本を知る | [基本仕様](./basics/signal-output.md) |
| 2 | 条件判定と状態保持を覚える | [基礎論理回路](./logic/and.md) |
| 3 | 遅延・周期・回数を制御する | [信号制御回路](./control/delay.md) |
| 4 | 選択・順番・ロックへ進む | [選択・順序制御](./sequence/selector.md) |
| 5 | 半加算器・加算器・BCDを学ぶ | [演算回路](./arithmetic/power-half-adder.md) |
| 6 | 電卓・アート・自動設備へ応用する | [応用設備](./devices/calculator.md) |

### 目的別のおすすめルート

**条件がそろったときだけ動かしたい**  
[信号の出力条件](./basics/signal-output.md) → [少し早いAND回路](./logic/and.md) → [フィードバックAND回路](./logic/feedback-and.md)

**状態を記憶したい**  
[フィードバック機構](./logic/feedback.md) → [セットリセット回路](./logic/sr.md) → [入力保持回路](./control/input-hold.md)

**順番に動かしたい**  
[16F遅延回路](./control/delay.md) → [ステップアップ回路](./sequence/stepup.md) → [循環セレクタ](./sequence/selector.md)

**計算機へ進みたい**  
[少し早いAND回路](./logic/and.md) → [電源状態式半加算器](./arithmetic/power-half-adder.md) → [2進数加算回路](./arithmetic/adder.md) → [BCD補正回路](./arithmetic/bcd.md) → [電卓](./devices/calculator.md)

<a id="circuit-tree"></a>

## 回路の系統図

### 基本から計算機へ

```text
信号の出力条件
      │
      ├─────────────┐
      ▼             ▼
フィードバック     AND回路
      │             │
      ▼             │
セットリセット     │
      │             │
      └──────┬──────┘
             ▼
      電源状態式半加算器
             │
             ▼
        2進数加算回路
             │
             ▼
          BCD補正
             │
             ▼
            電卓
```

### 遅延から順序制御へ

```text
水・窓による信号伝達
          │
          ▼
       16F遅延
          │
    ┌─────┴─────┐
    ▼           ▼
任意周期出力  操作速度判定
    │           │
    ▼           ▼
一定回数出力  順番入力ロック
    │
    ▼
ステップアップ
    │
    ▼
循環セレクタ
```

### 状態保持から選択回路へ

```text
フィードバック
      │
      ▼
セットリセット
      │
 ┌────┴────┐
 ▼         ▼
入力保持   相互ロック
 │         │
 └────┬────┘
      ▼
 1個だけON
      │
      ▼
 循環セレクタ
```

<a id="find-by-purpose"></a>

## 目的から探す

### 状態を保持する

- [フィードバック機構](./logic/feedback.md)
- [セットリセット回路](./logic/sr.md)
- [1回ANDしたら水が途切れない回路](./control/persistent-water-and.md)
- [入力保持回路](./control/input-hold.md)

### 条件を判定する

- [少し早いAND回路](./logic/and.md)
- [フィードバックAND回路](./logic/feedback-and.md)
- [相互ロック回路](./logic/interlock.md)
- [操作速度判定回路](./control/speed-branch.md)

### 時間を制御する

- [16F遅延回路](./control/delay.md)
- [任意周期出力回路](./control/periodic-output.md)
- [一定回数出力回路](./control/fixed-count.md)

### 順番・選択を制御する

- [ステップアップ回路](./sequence/stepup.md)
- [循環セレクタ](./sequence/selector.md)
- [1個だけONできる回路](./sequence/one-hot.md)
- [順番入力式ロック回路](./sequence/order-lock.md)
- [動作停止読取り選択出力機構](./sequence/state-read-selector.md)

### 計算する

- [2進数2倍回路](./arithmetic/binary-double.md)
- [電源状態式半加算器](./arithmetic/power-half-adder.md)
- [2進数加算回路](./arithmetic/adder.md)
- [BCD補正回路](./arithmetic/bcd.md)

### 作品を見る

- [色替え滝](./devices/color-waterfall.md)
- [電卓](./devices/calculator.md)
- [花火演出装置](./devices/fireworks-counter.md)
- [ウェーブフローアート](./devices/wave-flow-art.md)
- [色が変わるふんすいひろば](./devices/color-fountain.md)
- [自動採取農園](./devices/auto-farm.md)
- [ソースアートとキャスケードアート](./devices/source-cascade-art.md)

---

## 基本仕様

| 項目 | 分かること |
|---|---|
| [信号の出力条件](./basics/signal-output.md) | 電源と動作状態から、いつ信号が出るか |
| [センサー矢印の仕様](./basics/sensor-arrow.md) | 監視方向と変化指令の送り先 |
| [水・窓による信号伝達](./basics/water-window.md) | 水流・窓・方角依存の基本 |

## 基礎論理回路

| 回路 | できること |
|---|---|
| [少し早いAND回路](./logic/and.md) | 2つの条件がそろったときだけ出力 |
| [相互ロック回路](./logic/interlock.md) | 片方の動作中はもう片方を禁止 |
| [フィードバック機構](./logic/feedback.md) | 出力を自身へ戻して状態を制御 |
| [フィードバックAND回路](./logic/feedback-and.md) | 電源状態と別入力を組み合わせる |
| [セットリセット回路](./logic/sr.md) | SETで保持し、RESETで解除 |

## 信号制御回路

| 回路 | できること |
|---|---|
| [16F遅延回路](./control/delay.md) | 信号を確実に16F遅らせる |
| [操作速度判定回路](./control/speed-branch.md) | 入力速度で結果を分岐 |
| [任意周期出力回路](./control/periodic-output.md) | 設定した周期で繰り返し出力 |
| [1回ANDしたら水が途切れない回路](./control/persistent-water-and.md) | 条件成立後の出力を維持 |
| [一定回数出力回路](./control/fixed-count.md) | 1回の入力を指定回数へ変換 |
| [入力保持回路](./control/input-hold.md) | 入力を後から読める状態で保存 |

## 選択・順序制御

| 回路 | できること |
|---|---|
| [循環セレクタ](./sequence/selector.md) | 入力ごとに選択先を切り替える |
| [ステップアップ回路](./sequence/stepup.md) | 処理を1段ずつ進める |
| [動作停止読取り選択出力機構](./sequence/state-read-selector.md) | 現在状態から出力先を選ぶ |
| [1個だけONできる回路](./sequence/one-hot.md) | 複数候補のうち1つだけをON |
| [順番入力式ロック回路](./sequence/order-lock.md) | 正しい順番で入力したときだけ解除 |

## 演算回路

| 回路 | できること |
|---|---|
| [電源状態式半加算器](./arithmetic/power-half-adder.md) | XORとANDを使って1bitを加算 |
| [2進数加算回路](./arithmetic/adder.md) | 各ビットの和と繰り上がりを計算 |
| [BCD補正回路](./arithmetic/bcd.md) | 10進表示用に補正 |
| [2進数2倍回路](./arithmetic/binary-double.md) | 1ビット移動で2倍にする |

## 配線・設定

- [電源を簡単に遠くまで持っていく方法](./wiring/long-distance-power.md)
- [指定したアイテムに指定した電源を設定する方法](./wiring/power-settings.md)

## 回路を利用した設備

- [色替え滝](./devices/color-waterfall.md)
- [電卓](./devices/calculator.md)
- [押した回数で花火の演出が変わる装置](./devices/fireworks-counter.md)
- [ウェーブフローアート](./devices/wave-flow-art.md)
- [押すたび色が変わるふんすいひろば](./devices/color-fountain.md)
- [滝浮上げ扉押出式自動採取農園](./devices/auto-farm.md)
- [ソースアートとキャスケードアート](./devices/source-cascade-art.md)

:::warning 再現時の確認
方角依存により、同じ形でも信号出力のタイミングが変わる場合があります。設置方向・センサーの向き・初期状態も確認してください。
:::
