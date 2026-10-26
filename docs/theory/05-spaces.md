# 5 · 空间、极限与连续性

> **前置**：第 3–4 层（实数、向量空间、内积、线性映射）。  
> **这一层的目标**：把“距离、靠近、连续”从直观变成可证明的语言。Rudin 的分析体系从这里进入。

## 5.1 欧氏空间、范数与距离

\(\mathbb R^n\) 上的欧氏范数：

\[
\|x\|_2=\sqrt{x_1^2+\cdots+x_n^2}.
\]

距离 \(d(x,y)=\|x-y\|_2\)。更一般地，向量空间上的**范数**满足：

1. \(\|x\|\ge0\)，且 \(\|x\|=0\iff x=0\)；
2. \(\|\alpha x\|=|\alpha|\|x\|\)；
3. \(\|x+y\|\le\|x\|+\|y\|\)。

范数诱导距离 \(d(x,y)=\|x-y\|\)。距离满足正定性、对称性、三角不等式。

## 5.2 度量空间 {#spaces-metric}

集合 \(X\) 配距离 \(d:X\times X\to[0,\infty)\)，满足：

\[
d(x,y)=0\iff x=y,\qquad d(x,y)=d(y,x),\qquad d(x,z)\le d(x,y)+d(y,z).
\]

例子：\(\mathbb R^n\)、离散度量、函数空间上的上确界度量、\(C[0,1]\) 上的 \(L^1\) 度量。

**开球**：

\[
B(x,r)=\{y\in X:d(x,y)<r\}.
\]

## 5.3 开集、闭集、邻域与聚点 {#spaces-open}

- \(U\) 是**开集**：\(\forall x\in U,\ \exists r>0,\ B(x,r)\subseteq U\)；
- \(F\) 是**闭集**：\(X\setminus F\) 是开集；
- **邻域**：包含某个开球且包含 \(x\) 的集合；
- **聚点**：\(x\) 的每个邻域都含有 \(A\) 中异于 \(x\) 的点；
- **闭包** \(\overline A\)：\(A\) 与所有聚点的并。

**重要等价**：\(F\) 闭 \(\iff\) \(F\) 中任意收敛序列的极限仍在 \(F\) 中（度量空间）。

## 5.4 数列、收敛与完备性

\(x_n\to x\) 定义为：

\[
\forall\varepsilon>0,\ \exists N,\ \forall n>N:\ d(x_n,x)<\varepsilon.
\]

**Cauchy 列**：

\[
\forall\varepsilon>0,\ \exists N,\ \forall m,n>N:\ d(x_m,x_n)<\varepsilon.
\]

收敛列一定是 Cauchy 列；反之不一定。**完备**度量空间中，每个 Cauchy 列都收敛。\(\mathbb R^n\) 完备；\(\mathbb Q\) 不完备。

## 5.5 紧致性与连通性 {#spaces-compact}

- **紧致**：每个开覆盖都有有限子覆盖。度量空间中等价于“每个序列都有收敛子列”（列紧）。
- **Heine–Borel**：\(\mathbb R^n\) 的子集紧致 \(\iff\) 有界且闭。
- **连通**：不能写成两个非空不交开集的并；\(\mathbb R\) 的连通子集是区间。
- **连续函数在紧集上的性质**：有界、取得最大最小值、一致连续。

## 5.6 函数极限与连续映射 {#spaces-continuity}

\(f:X\to Y\) 在 \(x_0\) 连续：

\[
\forall\varepsilon>0,\ \exists\delta>0,\ d_X(x,x_0)<\delta\to d_Y(f(x),f(x_0))<\varepsilon.
\]

等价刻画：开集的原像是开集；\(x_n\to x_0\) 推出 \(f(x_n)\to f(x_0)\)。

**一致连续**：\(\delta\) 不依赖 \(x_0\)。紧集上的连续函数一致连续。

## 5.7 一般拓扑空间 {#spaces-topology}

把“开集”作为原始结构：拓扑 \(\tau\subseteq\mathcal P(X)\) 满足包含 \(\varnothing,X\)、任意并、有限交。度量空间是拓扑空间的特例。

一般拓扑可以从此分出独立路线；经典微积分只需要度量空间基础，不必先学完整一般拓扑。

## Rudin 的分析路线放在哪里

Rudin 的《数学分析原理》从实数系、拓扑/度量空间语言开始，进入数列与级数、连续、微分、积分、函数列与一致收敛、多变量分析。对应本体系：

1. 第 3 层实数完备性；
2. 第 5 层度量空间与连续；
3. 第 6 层分析分支（级数 → 微分/积分 → 函数列 → 多变量）。

不需要先学完整抽象代数，但需要线性代数中的范数、内积、线性映射。


## 5.8 完备性的等价刻画

在度量空间 \((X,d)\) 中：

- \(X\) 完备 \(\iff\) 每个 Cauchy 列收敛；
- \(X\) 完备 \(\iff\) 每个绝对收敛级数收敛（在赋范空间语境）；
- 在 \(\mathbb R^n\) 中，完备 \(\iff\) 每个有界闭集完备；
- **压缩映射原理（Banach）**：若 \(T:X\to X\) 满足 \(d(Tx,Ty)\le qd(x,y)\)（\(0\le q<1\)）且 \(X\) 完备，则 \(T\) 有唯一不动点。

压缩映射原理是常微分方程存在唯一性、数值迭代收敛性的常用工具。

## 5.9 紧致性：Heine–Borel 与 Bolzano–Weierstrass

**Heine–Borel（\(\mathbb R^n\)）**：子集 \(K\subseteq\mathbb R^n\) 紧致 \(\iff\) \(K\) 有界且闭。

**Bolzano–Weierstrass**：\(\mathbb R^n\) 中每个有界序列都有收敛子列。

在度量空间中：

\[
\text{紧致}\iff\text{序列紧致}\iff\text{完备且完全有界}.
\]

**注意**：在一般拓扑空间中，紧致、序列紧致、列紧不一定等价；需要第一可数/可度量等条件。

## 5.10 紧集与连通集上的连续函数

- 连续映射把紧集映成紧集；
- 连续映射把连通集映成连通集；
- 紧集上的实值连续函数有界，并取得最大值和最小值（**极值定理**）；
- 紧集上的连续函数一致连续；
- \(\mathbb R\) 上连续函数的介值定理：若 \(f\) 在 \([a,b]\) 连续，\(f(a)<c<f(b)\)，则存在 \(\xi\in(a,b)\) 使 \(f(\xi)=c\)。

这些结论是分析中“存在性”证明的常用来源：先证紧致/连通，再取极值/介值。

## 5.11 参考

- [Metric space](https://en.wikipedia.org/wiki/Metric_space)
- [Topological space](https://en.wikipedia.org/wiki/Topological_space)
- [Compact space](https://en.wikipedia.org/wiki/Compact_space)
- [Continuous function](https://en.wikipedia.org/wiki/Continuous_function)
- [Heine–Borel theorem](https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem)
- [Bolzano–Weierstrass theorem](https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem)
- [Banach fixed-point theorem](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem)

## 检查点

- 能证明开球的并是开集、闭集的补是开集。
- 能区分收敛、Cauchy、完备。
- 能说明紧集上连续函数为什么取得最大值。
- 能写出连续映射的 \(\varepsilon\)-\(\delta\) 定义与开集原像刻画，并证明等价。
