# 第 2 章 · 基础拓扑

> **状态**：已展开。带“暂缓证明”的定理明确标注，不把提纲当完整证明。  
> **所属**：Rudin 体系 · 第二卷 · 基础拓扑  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 2 章；Munkres, *Topology*（拓扑部分）。

## 前置

- 常规体系第 1–4 卷：逻辑、集合、数系、代数；
- 第 5 卷：度量空间、收敛、连续的基本语言。

## 2.1 度量空间

**度量空间**是集合 \(X\) 配一个函数 \(d:X\times X\to[0,\infty)\)，满足：

\[
d(x,y)=0\iff x=y,\qquad d(x,y)=d(y,x),\qquad d(x,z)\le d(x,y)+d(y,z).
\]

**开球**：

\[
B(x,r)=\{y\in X:d(x,y)<r\}.
\]

**开集**：\(U\subseteq X\) 开，若每个 \(x\in U\) 存在 \(r>0\) 使 \(B(x,r)\subseteq U\)。  
**闭集**：补集是开集。

### 定理 2.1（开球是开集）

每个开球 \(B(x,r)\) 是开集。

**证明**：设 \(y\in B(x,r)\)，令 \(s=r-d(x,y)>0\)。对任意 \(z\in B(y,s)\)，

\[
d(x,z)\le d(x,y)+d(y,z)<d(x,y)+s=r,
\]

所以 \(B(y,s)\subseteq B(x,r)\)。证毕。

### 定理 2.2（闭集 ↔ 开集）

\(F\subseteq X\) 闭 \(\iff F^c\) 开。

**证明**：按定义，\(F\) 闭就是 \(F^c\) 开；反之亦然。证毕。

### 定理 2.3（闭包的刻画）

设 \(E\subseteq X\)，则

\[
\overline E=E\cup E',
\]

其中 \(E'\) 是 \(E\) 的聚点集。并且 \(x\in\overline E\) 当且仅当每个 \(B(x,r)\) 与 \(E\) 相交。

**证明提纲**：若 \(x\in\overline E\) 且某 \(B(x,r)\cap E=\varnothing\)，则 \(E\subseteq B(x,r)^c\)，而 \(B(x,r)^c\) 闭，故 \(\overline E\subseteq B(x,r)^c\)，矛盾。反之，若每个球都与 \(E\) 相交，则 \(x\) 属于每个包含 \(E\) 的闭集，故 \(x\in\overline E\)。细节按闭集定义补全。

## 2.2 紧致性

**开覆盖**：\(\{U_i\}\) 是 \(K\) 的开覆盖，若 \(K\subseteq\bigcup_i U_i\)。  
**紧致**：每个开覆盖都有有限子覆盖。

### 定理 2.4（紧集是闭集）

度量空间中紧集 \(K\) 是闭集。

**证明**：取 \(p\notin K\)。对每个 \(q\in K\)，令 \(r_q=d(p,q)/2>0\)。球 \(B(q,r_q)\) 覆盖 \(K\)；由紧致，存在有限个 \(q_1,\dots,q_m\) 使

\[
K\subseteq\bigcup_{j=1}^m B(q_j,r_{q_j}).
\]

令

\[
\rho=\min_{1\le j\le m} d(p,q_j)>0.
\]

则 \(B(p,\rho/2)\) 与每个 \(B(q_j,r_{q_j})\) 不交，因此与 \(K\) 不交。所以 \(p\) 不在闭包中，\(K\) 闭。证毕。

### 定理 2.5（紧集是有界集）

紧集 \(K\) 有界：存在 \(p\in X\) 和 \(R>0\) 使 \(K\subseteq B(p,R)\)。

**证明**：取任意 \(p\in X\)。球族 \(\{B(p,n):n\in\mathbb N\}\) 覆盖 \(K\)；紧致给出有限子覆盖，取最大半径 \(R\)。证毕。

### 定理 2.6（紧集的闭子集紧）

若 \(K\) 紧，\(F\subseteq K\) 闭（在 \(X\) 中），则 \(F\) 紧。

**证明**：取 \(F\) 的开覆盖 \(\{U_i\}\)。加上 \(F^c\) 得到 \(K\) 的开覆盖；由 \(K\) 紧，取有限子覆盖。去掉 \(F^c\)，剩下的 \(U_i\) 覆盖 \(F\)。证毕。

### 定理 2.7（Heine–Borel，R^n）

\(K\subseteq\mathbb R^n\) 紧 \(\iff K\) 有界且闭。

**证明状态**：暂缓完整证明；需要 \(\mathbb R^n\) 的完备性、Bolzano–Weierstrass 与有限覆盖论证。证明思路是“有界闭集 \(\Rightarrow\) 序列紧 \(\Rightarrow\) 紧”，其中序列紧用坐标剖分/二分法。

## 2.3 连通性

**分离**：\(X=A\cup B\)，\(A,B\) 非空不交且都开（等价地都闭）。  
**连通**：不存在这样的分离。

### 定理 2.8（R 的连通子集是区间）

\(E\subseteq\mathbb R\) 连通 \(\iff E\) 是区间。

**证明**：若 \(E\) 不是区间，存在 \(a<b<c\)，\(a,c\in E\)，\(b\notin E\)。则

\[
E=(E\cap(-\infty,b))\cup(E\cap(b,\infty))
\]

是非空不交开集（相对拓扑）的并，故不连通。

反之，若 \(E\) 是区间且 \(E=A\cup B\) 是分离，取 \(a\in A,b\in B\)，不妨 \(a<b\)。令

\[
c=\sup(A\cap[a,b]).
\]

由 \(A\) 相对闭，\(c\in A\)；由 \(B\) 相对开，\(c<b\) 时 \(c+\varepsilon\in B\) 对充分小 \(\varepsilon\) 成立，导致 \(A\cap[a,b]\) 有更大的上界，矛盾；若 \(c=b\)，则 \(b\in A\cap B\)，也矛盾。所以 \(E\) 连通。证毕。

### 定理 2.9（连续像连通）

连续映射把连通集映成连通集。

**证明**：若 \(f(E)=A\cup B\) 是分离，则 \(E=f^{-1}(A)\cup f^{-1}(B)\) 是分离（连续映射下开集原像开），矛盾。证毕。

## 2.4 Cantor 集

从 \([0,1]\) 开始，每次去掉中间三分之一：

\[
C_0=[0,1],\quad C_1=[0,\tfrac13]\cup[\tfrac23,1],\quad C_{n+1}\subset C_n,
\]

令

\[
C=\bigcap_{n=0}^\infty C_n.
\]

**性质**：

1. \(C\) 紧、非空；
2. \(C\) 完全（没有孤立点）；
3. \(C\) 无处稠密；
4. \(C\) 不可数。

**不可数证明思路**：三进制展开只含数字 \(0,1,2\) 但不用 \(1\) 的点属于 \(C\)；把 \(0/2\) 序列编码为二进制序列，得到 \(2^{\aleph_0}\) 个点。不同二进制序列给出不同点（除去可数多个三进制歧义点），故 \(C\) 不可数。

## 习题

### 基础

1. 证明：有限个紧集的并是紧集；任意多个闭集的交是闭集。
2. 在离散度量空间中，哪些集合紧？哪些集合连通？
3. 证明 \(\mathbb Q\cap[0,1]\) 不是紧集（构造没有有限子覆盖的开覆盖）。

### 提升

4. 证明：紧度量空间中的每个无限子集都有聚点。
5. 证明：连通集的连续像是连通的；举一个连通集被连续映射映成非闭集的例子。
6. 证明 Cantor 集没有孤立点，且是无处稠密的。

### 挑战

7. 证明 Cantor 集不可数，并说明它与 \(2^{\mathbb N}\) 的基数关系。
8. 证明：度量空间中“紧致 \(\iff\) 序列紧致 \(\iff\) 完备且完全有界”。（可参考第 3 章 BW 定理后完成。）

> 提示：第 8 题先证“紧 \(\Rightarrow\) 序列紧”，用反证与开覆盖；再证“序列紧 \(\Rightarrow\) 完备且完全有界”；最后用完全有界 + 完备构造有限子覆盖。

## 与常规体系的接口

- 第 5 卷：[空间、极限与连续](../05-spaces.md)
- 第 3 章：[数列与级数](03-sequences-series.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考

- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 2 章。
- [Metric space](https://en.wikipedia.org/wiki/Metric_space)
- [Compact space](https://en.wikipedia.org/wiki/Compact_space)
- [Cantor set](https://en.wikipedia.org/wiki/Cantor_set)
