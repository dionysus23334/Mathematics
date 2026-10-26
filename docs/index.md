# 经典数学理论体系

> 一套按**依赖关系**组织的数学知识库，同时保留一套按**学习阶段**组织的通识路线。
>
> 不是某本教材的现成目录；它是一张可以逐页补全的地图。

数学很难排成一条直线。合理的结构是：**共同地基之上逐渐分支**。这套网站因此提供两套并行目录：

<div class="route-grid">
  <a class="route-card route-card--theory" href="theory/">
    <span class="route-kicker">ROUTE A · DEPENDENCY</span>
    <span class="route-title">经典数学理论体系</span>
    <span class="route-desc">从逻辑、集合、数系与代数结构出发，按“定义 → 定理 → 分支”的公理化路线推进。</span>
    <span class="route-foot">按理论依赖阅读 <span>→</span></span>
  </a>
  <a class="route-card route-card--stage" href="stages/">
    <span class="route-kicker">ROUTE B · LEARNING</span>
    <span class="route-title">教育阶段体系</span>
    <span class="route-desc">从数量、图形与实际问题出发，经过中学、竞赛与大学公共基础，逐步进入抽象与证明。</span>
    <span class="route-foot">按学习阶段阅读 <span>→</span></span>
  </a>
</div>

## 两条路线的关系

| 问题 | 走哪条路线 |
|---|---|
| 我想知道“这个结论依赖哪些前置” | 经典数学理论体系 |
| 我想按年级/阶段系统学习 | 教育阶段体系 |
| 我是初学者，不想先学公理化集合论 | 从教育阶段的初等数学开始 |
| 我要补严格证明、分析或代数基础 | 从理论体系的逻辑、集合与数系开始 |
| 我要准备数学竞赛 | 中等数学 → 数学竞赛（几何/代数/数论/组合） |

两条路线**共享同一批概念**，只是组织方式不同。理论路线回答“为了证明它，必须先有什么”；教育路线回答“为了理解它，最好先经历什么”。

## 共同地基

理论体系的前四层是后面所有分支的共同地基：

<div class="dep-map">
  <div class="dep-row">
    <span class="dep-node dep-node--logic">1 · 逻辑与证明</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--set">2 · 集合与映射</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--num">3 · 自然数与数系</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--alg">4 · 代数与线性空间</span>
  </div>
  <div class="dep-down">↓</div>
  <div class="dep-row">
    <span class="dep-node dep-node--space">5 · 空间、极限与连续</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--branch">6 · 核心分支</span>
    <span class="dep-arrow">→</span>
    <span class="dep-node dep-node--deep">7 · 深入理论</span>
  </div>
</div>

这不是说“必须学完全部代数才能进入分析”。第 6 层开始分支，每条分支只要求自己需要的前置；网站会在每一页顶部列出前置清单。

## 阅读规则

1. **首次出现的概念必须定义**，或链接到已经完成的前置页。
2. **证明中使用但尚未建立的结论**，必须调整顺序、补证明，或明确标注“暂缓证明”。
3. **等价关系在商集之前**，映射在同构之前，序关系在上确界之前。
4. 理论页回答“依赖什么”；阶段页回答“怎么学、为什么这样排”。
5. 这里给的是**知识地图与学习顺序**，不是完整教材；每一页都可以继续补定义、定理与习题。

## 从这里开始

- 想先看全貌：[经典数学理论体系总览](theory/index.md)
- 想按阶段学习：[教育阶段体系总览](stages/index.md)
- 想了解内容规则：[学习规则](principles.md)
- 想查术语：[术语表](glossary.md)
