# 经典数学理论体系 · 总览

> 采用经典的公理化、定义与证明路线。每一层只使用前面已经定义或明确列为前置的内容。
>
> 这是一张**依赖地图**，不是某本教材的目录；分支之间可以并行，但每条路径的前置必须完整。
>

## 七层结构

| 层 | 名称 | 核心对象 | 这一层结束后，你应当能…… | 前置 |
|---|---|---|---|---|
| 1 | 逻辑语言与证明 | 命题、谓词、量词、证明 | 判断一个数学句子是否表达清楚，写出基本证明 | 无 |
| 2 | 集合、关系与映射 | 集合、关系、等价类、映射 | 用集合语言定义对象，判断单射/满射/双射 | 第 1 层 |
| 3 | 自然数与数系 | 自然数、整数、有理数、实数、复数 | 说明数系怎样构造，运算与次序为何成立 | 第 1–2 层 |
| 4 | 代数结构与线性空间 | 群、环、域、向量空间、线性映射 | 从具体数系抽象出结构，做线性代数 | 第 2–3 层 |
| 5 | 空间、极限与连续 | 度量空间、开集、收敛、紧致、连续 | 严格处理极限与连续，进入现代分析 | 第 3–4 层 |
| 6 | 核心学科分支 | 分析、代数、数论、几何、拓扑、组合、概率 | 按分支继续深入 | 按分支要求 |
| 7 | 深入理论 | 测度、复分析、泛函、微分几何、代数拓扑等 | 进入专业理论 | 按专题要求 |

## 依赖图

<div class="dep-map">
  <div class="dep-row">
    <span class="dep-node dep-node--logic">1 逻辑与证明</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--set">2 集合与映射</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--num">3 自然数与数系</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--alg">4 代数与线性空间</span>
  </div>
  <div class="dep-down">↓</div>
  <div class="dep-row">
    <span class="dep-node dep-node--space">5 空间、极限与连续</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--branch">6 核心分支</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--deep">7 深入理论</span>
  </div>
</div>

**共同地基**：逻辑与证明、集合与映射、自然数与数系、基本代数结构。地基之后，第 5 层建立空间与极限，第 6 层开始分支。

## 为什么不是一条直线

数学无法始终排成一条直线。原因有三类：

1. **同一对象有多种进入方式**：实数可以先通过 Dedekind 分割构造，也可以在分析中先使用其完备性；严格顺序需要标明“何时补构造”。
2. **分支依赖不同**：分析需要实数与度量空间，代数需要群环域，几何需要线性代数与拓扑；它们不必互相等待。
3. **教学顺序与证明顺序不同**：初等阶段可以先使用实数计算，但理论页若声称“已严格建立实数”，就必须补构造与证明。

因此，本体系保证的是：**每条学习路径的前置完整**，而不是“所有分支排成唯一队列”。

## 每一页的固定结构

理论页统一按以下顺序编写：

1. **前置**：本页默认你已经掌握什么；
2. **核心对象**：这一层引入哪些对象；
3. **定义与结论**：关键定义、定理、典型例子；
4. **依赖说明**：为什么这个顺序不能交换；
5. **向下连接**：这一层为哪些分支提供语言；
6. **检查点**：能用自己的话解释/证明什么。

## 七层入口

<div class="layer-grid">
  <div class="layer-card"><h3><a href="01-logic/">1 · 逻辑语言与证明</a></h3><p>命题、联结词、量词、定义与公理、直接证明、逆否、反证、分类讨论、反例。</p></div>
  <div class="layer-card"><h3><a href="02-sets/">2 · 集合、关系与映射</a></h3><p>集合运算、幂集、笛卡尔积、等价关系与商集、序关系、单射/满射/双射。</p></div>
  <div class="layer-card"><h3><a href="03-numbers/">3 · 自然数与数系</a></h3><p>Peano 公理、归纳与递归、整数/有理数/实数的构造、Dedekind 分割、复数、基数。</p></div>
  <div class="layer-card"><h3><a href="04-algebra/">4 · 代数结构与线性空间</a></h3><p>群、环、域、同态与同构、向量空间、基与维数、矩阵、行列式、特征值、内积。</p></div>
  <div class="layer-card"><h3><a href="05-spaces/">5 · 空间、极限与连续</a></h3><p>范数与距离、度量空间、开闭集、收敛与完备、紧致与连通、连续映射、一般拓扑。</p></div>
  <div class="layer-card"><h3><a href="06-branches/">6 · 核心分支</a></h3><p>分析、代数、数论、几何、拓扑、组合、概率：内部分支顺序与必要基础。</p></div>
  <div class="layer-card"><h3><a href="07-advanced/">7 · 深入理论</a></h3><p>测度论、复分析、泛函分析、微分几何、代数拓扑、代数数论、解析数论等。</p></div>
</div>


## 详细索引（可跳转）

| 层 | 关键节点 |
|---|---|
| 1 逻辑 | [命题与联结词](01-logic.md#logic-propositions) · [谓词与量词](01-logic.md#logic-quantifiers) · [证明方法](01-logic.md#logic-proofs) · [推理检查](01-logic.md#logic-check) |
| 2 集合 | [集合与成员](02-sets.md#sets-basic) · [关系](02-sets.md#sets-relations) · [映射](02-sets.md#sets-maps) · [商集](02-sets.md#sets-quotient) |
| 3 数系 | [Peano 自然数](03-numbers.md#numbers-peano) · [Dedekind 分割](03-numbers.md#numbers-real) · [基数](03-numbers.md#numbers-cardinality) |
| 4 代数 | [群](04-algebra.md#algebra-groups) · [环与域](04-algebra.md#algebra-rings) · [向量空间](04-algebra.md#algebra-vector) · [基与线性映射](04-algebra.md#algebra-basis) · [谱理论](04-algebra.md#algebra-spectral) |
| 5 空间 | [度量空间](05-spaces.md#spaces-metric) · [开集/闭集](05-spaces.md#spaces-open) · [紧致与连通](05-spaces.md#spaces-compact) · [连续映射](05-spaces.md#spaces-continuity) · [一般拓扑](05-spaces.md#spaces-topology) |
| 6 分支 | [分析](06-branches.md#branch-analysis) · [代数](06-branches.md#branch-algebra) · [数论](06-branches.md#branch-number) · [几何](06-branches.md#branch-geometry) · [拓扑](06-branches.md#branch-topology) · [组合](06-branches.md#branch-combinatorics) · [概率](06-branches.md#branch-probability) |


## 分析学（Rudin 路线）

第 6 层“分析分支”的深入版本按 Rudin 逐章展开：

- [分析学 · Rudin 第 1 章](analysis.md)：有序域、上确界、Archimedean、有理数稠密、n 次根、复数、Cauchy–Schwarz，含完整证明。
- 第 2–11 章：计划中，逐章补入。

后续章节按第 3–11 章依次展开；状态表会标明“已展开/计划中”，不把计划中的结论当作已证明。

## 使用建议

- **第一次读**：先读第 1–2 层，把“定义/证明/映射”的语言建立起来。
- **补分析**：第 3 层的实数完备性 → 第 5 层的度量空间 → 第 6 层分析分支；Rudin 的分析体系放在这里。
- **补代数**：第 2 层的等价关系 → 第 4 层的群环域 → 第 6 层代数分支。
- **补几何/拓扑**：第 4 层线性代数 → 第 5 层空间与连续 → 第 6 层几何/拓扑。
- **不要**在第 2 层还没讲等价关系时使用“商群”；也不要在第 3 层还没建立实数时使用“完备性”作为证明前提。

> 说明：本页是知识地图，不替代教材。每一页后续应继续补定义、定理、证明与习题；当前先保证依赖顺序和内容边界清楚。
