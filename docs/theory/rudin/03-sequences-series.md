# 第 3 章 · 数列与级数

> **状态**：已展开。核心定理给证明或明确“暂缓”，不把提纲当完整证明。  
> **所属**：Rudin 体系 · 第三卷 · 数列与级数  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 3 章。

## 前置

- 第 1–2 卷：逻辑、集合、数系；
- 第 2 章：度量空间、紧致性；
- 第 5 卷：数列收敛的初步语言。

## 3.1 收敛与基本性质 {#r3-1}
数列 \(\{a_n\}\subseteq\mathbb R\) 收敛到 \(a\)，若

\[
\forall\varepsilon>0,\ \exists N,\ \forall n>N:\ |a_n-a|<\varepsilon.
\]

### 定理 3.1（极限唯一）

收敛数列的极限唯一。

**证明**：若 \(a_n\to a\) 且 \(a_n\to b\)，取 \(\varepsilon=|a-b|/2\)（若 \(a\ne b\)）。存在 \(N\) 使 \(n>N\) 时 \(|a_n-a|<\varepsilon\)、\(|a_n-b|<\varepsilon\)。则

\[
|a-b|\le|a-a_n|+|a_n-b|<2\varepsilon=|a-b|,
\]

矛盾。故 \(a=b\)。证毕。

### 定理 3.2（收敛 ⇒ 有界）

收敛数列有界。

**证明**：取 \(\varepsilon=1\)，存在 \(N\) 使 \(n>N\) 时 \(|a_n-a|<1\)。令

\[
M=\max\{|a_1|,\dots,|a_N|,|a|+1\},
\]

则所有 \(|a_n|\le M\)。证毕。

### 定理 3.3（单调有界 ⇒ 收敛）

若 \(\{a_n\}\) 单调递增且有上界，则 \(a_n\to\sup\{a_n\}\)。

**证明**：令 \(L=\sup\{a_n\}\)。对任意 \(\varepsilon>0\)，\(L-\varepsilon\) 不是上界，故存在 \(N\) 使 \(a_N>L-\varepsilon\)。由单调性，\(n>N\) 时

\[
L-\varepsilon<a_N\le a_n\le L,
\]

所以 \(|a_n-L|<\varepsilon\)。证毕。

## 3.2 子列、Cauchy 与完备性 {#r3-2}
**子列**：\(\{a_{n_k}\}\)，其中 \(n_1<n_2<\cdots\)。

### 定理 3.4（收敛 ⇒ 子列收敛）

若 \(a_n\to a\)，则每个子列也收敛到 \(a\)。

**证明**：给定 \(\varepsilon>0\)，取原数列的 \(N\)；因为 \(n_k\ge k\)，当 \(k>N\) 时 \(n_k>N\)，所以 \(|a_{n_k}-a|<\varepsilon\)。证毕。

**Cauchy 列**：

\[
\forall\varepsilon>0,\ \exists N,\ \forall m,n>N:\ |a_m-a_n|<\varepsilon.
\]

### 定理 3.5（Cauchy 准则）

\(\mathbb R\) 中数列收敛 \(\iff\) 它是 Cauchy 列。

**证明提纲**：

- 收敛 ⇒ Cauchy：用三角不等式；
- Cauchy ⇒ 有界：取 \(\varepsilon=1\)，只有有限项在区间外；
- 由 Bolzano–Weierstrass 取收敛子列 \(a_{n_k}\to a\)；
- 用 Cauchy 性与子列收敛证明 \(a_n\to a\)。

完整证明依赖 BW；本站把 BW 标为暂缓（见下）。

### 定理 3.6（Bolzano–Weierstrass）

\(\mathbb R^n\) 中每个有界数列都有收敛子列。

**证明状态**：暂缓完整证明。常用证法：反复二分区间，取包含无穷多项的一半，得到嵌套区间；由区间套定理取交点，再取子列。

## 3.3 上极限与下极限 {#r3-3}
\[
\limsup_{n\to\infty}a_n=\lim_{n\to\infty}\sup_{k\ge n}a_k,
\qquad
\liminf_{n\to\infty}a_n=\lim_{n\to\infty}\inf_{k\ge n}a_k.
\]

允许取值 \(\pm\infty\)。若 \((a_n)\) 有界，则 \(\limsup a_n\) 是最大的子列极限，\(\liminf a_n\) 是最小的子列极限。

### 定理 3.7（收敛 ↔ 上下极限相等）

有界数列 \(\{a_n\}\) 收敛 \(\iff\)

\[
\liminf a_n=\limsup a_n.
\]

此时极限等于公共值。

**证明提纲**：若收敛到 \(a\)，则尾部上确界与下确界都趋于 \(a\)；反之，若上下极限都等于 \(a\)，用定义夹逼。

## 3.4 级数 {#r3-4}
级数 \(\sum a_n\) 收敛，若部分和

\[
s_n=a_1+\cdots+a_n
\]

收敛。

### 定理 3.8（收敛的必要条件）

若 \(\sum a_n\) 收敛，则 \(a_n\to0\)。

**证明**：\(a_n=s_n-s_{n-1}\to s-s=0\)。证毕。

逆命题不成立：调和级数 \(\sum 1/n\) 发散。

### 定理 3.9（绝对收敛 ⇒ 收敛）

若 \(\sum|a_n|\) 收敛，则 \(\sum a_n\) 收敛。

**证明**：令 \(p_n=\max(a_n,0)\)、\(q_n=\max(-a_n,0)\)。则 \(0\le p_n,q_n\le|a_n|\)，由比较判别法 \(\sum p_n,\sum q_n\) 收敛；而 \(a_n=p_n-q_n\)，所以 \(\sum a_n\) 收敛。证毕。

### 定理 3.10（比值与根值判别）

设 \(a_n\ne0\)。

- 若 \(\limsup |a_{n+1}/a_n|<1\)，则 \(\sum a_n\) 绝对收敛；
- 若 \(\liminf |a_{n+1}/a_n|>1\)，则 \(\sum a_n\) 发散；
- 若 \(\limsup |a_n|^{1/n}<1\)，则绝对收敛；
- 若 \(\limsup |a_n|^{1/n}>1\)，则发散。

**证明提纲**：与几何级数比较；根值判别用 \(|a_n|^{1/n}\le q<1\) 推出 \(|a_n|\le q^n\)。

### 定理 3.11（幂级数）

对幂级数 \(\sum c_n x^n\)，存在收敛半径 \(R\in[0,\infty]\) 使

\[
|x|<R\Rightarrow\text{绝对收敛},\qquad |x|>R\Rightarrow\text{发散}.
\]

并且

\[
\frac1R=\limsup_{n\to\infty}|c_n|^{1/n}.
\]

在 \(|x|<R\) 内闭一致收敛。

**证明提纲**：对 \(\sum c_nx^n\) 用根值判别；内闭一致收敛用 Weierstrass 判别法（第 7 章）。

## 习题 {#r3-ex}
### 基础

1. 求极限：\(\displaystyle \lim_{n\to\infty}\frac{3n^2+2}{n^2-n}\)。
2. 证明：若 \(a_n\to a\)，则 \(|a_n|\to|a|\)；反之是否成立？
3. 判断级数 \(\sum \frac{1}{n^2}\)、\(\sum \frac{1}{n}\)、\(\sum \frac{(-1)^n}{n}\) 的收敛性。

### 提升

4. 证明 \(\lim_{n\to\infty}n^{1/n}=1\)。
5. 求 \(\sum_{n=1}^\infty \frac{x^n}{n}\) 的收敛半径与收敛区间。
6. 举例：有界数列不收敛，但 \(\limsup\) 与 \(\liminf\) 都存在且不相等。

### 挑战

7. 证明：若 \(\sum a_n\) 绝对收敛，则任意重排也收敛到同一点。
8. 证明：若 \(a_n>0\) 且 \(\sum a_n\) 收敛，则 \(\sum \sqrt{a_n}/n\) 收敛（提示：Cauchy–Schwarz）。

> 提示：第 8 题把 \(\sqrt{a_n}\) 与 \(1/n\) 配对，用有限和估计后取极限。

## 与常规体系的接口

- 第 5 卷：[空间、极限与连续](../05-spaces.md)
- 第 2 章：[基础拓扑](02-basic-topology.md)
- 第 7 章：[函数序列与函数项级数](07-function-sequences.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考 {#r3-ref}
- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 3 章。
- [Limit of a sequence](https://en.wikipedia.org/wiki/Limit_of_a_sequence)
- [Cauchy sequence](https://en.wikipedia.org/wiki/Cauchy_sequence)
- [Series (mathematics)](https://en.wikipedia.org/wiki/Series_(mathematics))
