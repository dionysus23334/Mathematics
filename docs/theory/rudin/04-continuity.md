# 第 4 章 · 连续性

> **状态**：已展开。核心定理给证明或明确“暂缓”。  
> **所属**：Rudin 体系 · 第四卷 · 连续性  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 4 章。

## 前置

- 第 2–3 卷：集合、数系、数列；
- 第 2 章：紧致、连通；
- 第 5 卷：度量空间与连续映射的初步定义。

## 4.1 函数极限

设 \(E\subseteq X\)，\(f:E\to Y\)，\(p\) 是 \(E\) 的聚点。称

\[
\lim_{x\to p}f(x)=q
\]

若

\[
\forall\varepsilon>0,\ \exists\delta>0,\ 0<d_X(x,p)<\delta\Rightarrow d_Y(f(x),q)<\varepsilon.
\]

**连续性**：\(f\) 在 \(p\in E\) 连续，若 \(\lim_{x\to p}f(x)=f(p)\)（\(p\) 为孤立点时自动连续）。

### 定理 4.1（连续 ↔ 序列连续）

\(f\) 在 \(p\) 连续 \(\iff\) 对每个 \(x_n\to p\)（\(x_n\in E\)），有 \(f(x_n)\to f(p)\)。

**证明提纲**：

- 连续 ⇒ 序列：用 \(\varepsilon\)-\(\delta\) 定义；
- 序列 ⇒ 连续：反设存在 \(\varepsilon>0\)，对每个 \(n\) 取 \(x_n\) 使 \(d(x_n,p)<1/n\) 但 \(d(f(x_n),f(p))\ge\varepsilon\)，与序列连续矛盾。

## 4.2 连续映射

### 定理 4.2（复合连续）

若 \(f:X\to Y\) 在 \(p\) 连续，\(g:Y\to Z\) 在 \(f(p)\) 连续，则 \(g\circ f\) 在 \(p\) 连续。

**证明**：给定 \(\varepsilon>0\)，取 \(\eta>0\) 使 \(d_Y(y,f(p))<\eta\Rightarrow d_Z(g(y),g(f(p)))<\varepsilon\)；再取 \(\delta>0\) 使 \(d_X(x,p)<\delta\Rightarrow d_Y(f(x),f(p))<\eta\)。证毕。

### 定理 4.3（连续像紧致）

连续映射把紧集映成紧集；把连通集映成连通集。

**证明**：紧致部分见[证明页 §12](../proofs.md#proof-compact-image)；连通部分见第 2 章定理 2.9。证毕。

### 定理 4.4（极值定理）

非空紧集上的实值连续函数有界，并取得最大值和最小值。

**证明**：见[证明页 §13](../proofs.md#proof-evt)。

### 定理 4.5（介值定理）

若 \(f:[a,b]\to\mathbb R\) 连续，\(f(a)<c<f(b)\)，则存在 \(\xi\in(a,b)\) 使 \(f(\xi)=c\)。

**证明**：令 \(S=\{x\in[a,b]:f(x)<c\}\)。\(S\) 非空有上界，令 \(\xi=\sup S\)。由连续性，\(f(\xi)\le c\)；若 \(f(\xi)<c\)，则 \(\xi\) 附近仍有 \(f(x)<c\)，与 \(\xi\) 是上界矛盾。故 \(f(\xi)=c\)。证毕。

## 4.3 一致连续

\(f:X\to Y\) 一致连续，若

\[
\forall\varepsilon>0,\ \exists\delta>0,\ \forall x,y\in X:\ d_X(x,y)<\delta\Rightarrow d_Y(f(x),f(y))<\varepsilon.
\]

### 定理 4.6（紧集上连续 ⇒ 一致连续）

紧度量空间上的连续函数一致连续。

**证明提纲**：给定 \(\varepsilon>0\)，对每个 \(p\) 取 \(\delta_p\) 使 \(f(B(p,\delta_p))\subseteq B(f(p),\varepsilon/2)\)。球 \(B(p,\delta_p/2)\) 覆盖 \(X\)；取有限子覆盖 \(p_1,\dots,p_m\)，令 \(\delta=\min\delta_{p_i}/2\)。若 \(d(x,y)<\delta\)，取 \(p_i\) 使 \(x\in B(p_i,\delta_{p_i}/2)\)，则 \(y\in B(p_i,\delta_{p_i})\)，于是 \(d(f(x),f(y))<\varepsilon\)。

## 4.4 间断点与单调函数

**第一类间断**：左右极限都存在；**第二类**：至少一个不存在。  
**跳跃间断**：左右极限存在但不相等。

### 定理 4.7（单调函数的间断点）

单调函数在区间上的间断点至多可数，且都是跳跃间断。

**证明提纲**：每个间断点 \(x\) 对应一个非空开区间 \((f(x-),f(x+))\)；不同间断点对应不交区间，每个区间含一个有理数，故至多可数。

## 习题

### 基础

1. 用定义证明 \(f(x)=x^2\) 在 \(\mathbb R\) 上连续。
2. 判断 \(f(x)=1/x\) 在 \((0,1)\) 上是否一致连续。
3. 求 \(f(x)=\sin(1/x)\) 在 \(x=0\) 处的极限；说明它是否可连续延拓。

### 提升

4. 证明：连续函数把连通集映成连通集。
5. 证明：若 \(f\) 在 \([a,b]\) 连续且严格单调，则 \(f^{-1}\) 连续。
6. 构造一个在 \([0,1]\) 上处处不连续的函数。

### 挑战

7. 证明：紧集上连续函数一致连续（补全定理 4.6 的细节）。
8. 证明：单调函数只有跳跃间断，且间断点至多可数。

> 提示：第 8 题把每个跳跃区间与有理数对应；注意端点情形。

## 与常规体系的接口

- 第 5 卷：[空间、极限与连续](../05-spaces.md)
- 第 3 章：[数列与级数](03-sequences-series.md)
- 第 5 章：[微分法](05-differentiation.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考

- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 4 章。
- [Continuous function](https://en.wikipedia.org/wiki/Continuous_function)
- [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity)
- [Intermediate value theorem](https://en.wikipedia.org/wiki/Intermediate_value_theorem)
