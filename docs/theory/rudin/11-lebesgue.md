# 第 11 章 · Lebesgue 理论

> **状态**：已展开。给出测度、可测函数、积分与三大收敛定理的完整陈述；证明标为暂缓/提纲。  
> **所属**：Rudin 体系 · 第 11 章 · Lebesgue 理论  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 11 章。

## 前置

- 第 2 章：拓扑、开集；
- 第 3 章：级数；
- 第 6–7 章：积分、一致收敛；
- 深入理论中的测度概要。

## 11.1 测度 {#r11-1}
设 \(\mathcal M\) 是 \(X\) 上的 \(\sigma\)-代数：包含 \(X\)，对补集与可数并封闭。  
**测度** \(\mu:\mathcal M\to[0,\infty]\) 满足：

1. \(\mu(\varnothing)=0\)；
2. 非负性；
3. **可数可加性**：若 \(A_i\) 两两不交，

\[
\mu\left(\bigcup_{i=1}^\infty A_i\right)=\sum_{i=1}^\infty\mu(A_i).
\]

\((X,\mathcal M,\mu)\) 称测度空间。**Lebesgue 测度**是 \(\mathbb R^n\) 上满足平移不变、规范化的唯一 Borel 测度（在完备化意义下）。

## 11.2 可测函数 {#r11-2}
\(f:X\to[-\infty,\infty]\) 可测，若对每个 \(a\in\mathbb R\)，

\[
f^{-1}((a,\infty])\in\mathcal M.
\]

等价地，\(\{f>a\}\) 可测对每个 \(a\) 成立。

**性质**：可测函数的和、积、极限、上确界、下确界仍可测（在避免 \(\infty-\infty\) 的适当条件下）。

### 定理 11.1（简单函数逼近）

非负可测函数 \(f\) 可写成简单函数列的逐点递增极限：

\[
f=\lim_{n\to\infty}\phi_n,\qquad 0\le\phi_1\le\phi_2\le\cdots
\]

**证明提纲**：把值域按 \(2^{-n}\) 分层，截断到 \(n\)，构造 \(\phi_n\)。

## 11.3 Lebesgue 积分 {#r11-3}
对非负简单函数 \(\phi=\sum a_i\chi_{A_i}\)，定义

\[
\int\phi\,d\mu=\sum a_i\mu(A_i).
\]

对非负可测 \(f\)，定义

\[
\int f\,d\mu=\sup\left\{\int\phi\,d\mu:0\le\phi\le f,\ \phi\text{ 简单}\right\}.
\]

对一般可测 \(f\)，写 \(f=f^+-f^-\)；若 \(\int f^+,\int f^-<\infty\)，称 \(f\) 可积，定义

\[
\int f\,d\mu=\int f^+d\mu-\int f^-d\mu.
\]

### 定理 11.2（单调收敛定理，MCT）

若 \(0\le f_n\uparrow f\) 且 \(f_n\) 可测，则

\[
\int f_n\,d\mu\to\int f\,d\mu.
\]

**证明状态**：暂缓完整证明；用简单函数逼近与上确界交换。

### 定理 11.3（Fatou 引理）

若 \(f_n\ge0\) 可测，则

\[
\int\liminf_{n\to\infty}f_n\,d\mu
\le\liminf_{n\to\infty}\int f_n\,d\mu.
\]

**证明**：对 \(g_n=\inf_{k\ge n}f_k\) 用 MCT，再比较 \(g_n\le f_n\)。

### 定理 11.4（控制收敛定理，DCT）

若 \(f_n\) 可测，\(f_n\to f\) a.e.，且存在可积 \(g\) 使 \(|f_n|\le g\) a.e.，则

\[
\int f_n\,d\mu\to\int f\,d\mu.
\]

**证明**：对 \(g+f_n\ge0\) 与 \(g-f_n\ge0\) 分别用 Fatou，夹出结论。证毕。

## 11.4 与 Riemann 积分的关系 {#r11-4}
若 \(f\) 在 \([a,b]\) 上 Riemann 可积，则 \(f\) Lebesgue 可积，且积分值相同。  
反之不成立：Dirichlet 函数 \(\mathbf 1_{\mathbb Q}\) 不是 Riemann 可积，但 Lebesgue 积分为 0（因为 \(\mathbb Q\) 零测）。

### 定理 11.5（Riemann 可积的 Lebesgue 刻画）

有界 \(f:[a,b]\to\mathbb R\) Riemann 可积 \(\iff\) \(f\) 的不连续点集是 Lebesgue 零测集。

**证明状态**：暂缓完整证明；用振幅函数与零测集定义。

## 11.5 L² 空间 {#r11-5}
\[
L^2(\mu)=\left\{f:\int|f|^2\,d\mu<\infty\right\},
\]

配内积

\[
\langle f,g\rangle=\int f\overline g\,d\mu.
\]

### 定理 11.6（Riesz–Fischer）

\(L^2(\mu)\) 是完备的内积空间（Hilbert 空间）。

**证明状态**：暂缓；用 Cauchy 列取子列 a.e. 收敛，再用 Fatou 控制。

## 习题 {#r11-ex}
### 基础

1. 证明可数集是 Lebesgue 零测集。
2. 判断 \(\mathbf 1_{\mathbb Q}\) 在 \([0,1]\) 上是否 Riemann 可积、是否 Lebesgue 可积。
3. 用 MCT 计算 \(\int_0^1\sum_{n\ge1}x^n\,dx\)。

### 提升

4. 证明 Fatou 引理（由 MCT）。
5. 证明 DCT（由 Fatou）。
6. 举例说明 DCT 中“控制函数 \(g\) 可积”不能去掉。

### 挑战

7. 证明 Riesz–Fischer 定理（可先证 \(L^2\) Cauchy 列有 a.e. 收敛子列）。
8. 证明：有界函数 Riemann 可积当且仅当不连续点集为零测集。

> 提示：第 8 题用振幅 \(\omega(x)\) 与集合 \(\{x:\omega(x)\ge1/k\}\)。

## 与常规体系的接口

- 第 6 章：[Riemann–Stieltjes 积分](06-riemann-stieltjes.md)
- 第 7 章：[函数序列与函数项级数](07-function-sequences.md)
- [深入理论](../07-advanced.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考 {#r11-ref}
- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 11 章。
- [Measure (mathematics)](https://en.wikipedia.org/wiki/Measure_(mathematics))
- [Lebesgue integration](https://en.wikipedia.org/wiki/Lebesgue_integration)
- [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem)
