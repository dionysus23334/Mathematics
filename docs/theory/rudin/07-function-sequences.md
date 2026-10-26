# 第 7 章 · 函数序列与函数项级数

> **状态**：已展开。一致收敛的核心定理给证明；Arzelà–Ascoli 与 Stone–Weierstrass 给陈述与思路。  
> **所属**：Rudin 体系 · 第七卷 · 函数序列与函数项级数  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 7 章。

## 前置

- 第 4–6 卷：连续、微分、积分；
- 第 3 章：级数；
- 第 2 章：紧致。

## 7.1 逐点收敛与一致收敛

函数列 \(f_n:X\to Y\) **逐点收敛**到 \(f\)，若对每个 \(x\)，\(f_n(x)\to f(x)\)。  
**一致收敛**：若

\[
\forall\varepsilon>0,\ \exists N,\ \forall n>N,\ \forall x\in X:\ d_Y(f_n(x),f(x))<\varepsilon.
\]

等价地，\(\sup_{x\in X}d_Y(f_n(x),f(x))\to0\)。

### 定理 7.1（一致收敛 ⇒ 逐点收敛）

一致收敛蕴含逐点收敛。

**证明**：定义直接给出。证毕。

### 定理 7.2（一致收敛保持连续）

若 \(f_n\) 连续且 \(f_n\rightrightarrows f\) 一致收敛，则 \(f\) 连续。

**证明**：给定 \(\varepsilon>0\)，取 \(N\) 使 \(n>N\) 时对所有 \(x\) 有 \(d(f_n(x),f(x))<\varepsilon/3\)。固定 \(n>N\)，由 \(f_n\) 连续，取 \(\delta>0\) 使 \(d(x,y)<\delta\Rightarrow d(f_n(x),f_n(y))<\varepsilon/3\)。则

\[
d(f(x),f(y))\le d(f(x),f_n(x))+d(f_n(x),f_n(y))+d(f_n(y),f(y))<\varepsilon.
\]

证毕。

### 定理 7.3（一致收敛与积分交换）

若 \(f_n\) 在 \([a,b]\) 连续，\(f_n\rightrightarrows f\)，则

\[
\int_a^b f_n\to\int_a^b f.
\]

**证明**：

\[
\left|\int f_n-\int f\right|\le\int|f_n-f|\le(b-a)\|f_n-f\|_\infty\to0.
\]

证毕。

### 定理 7.4（一致收敛与导数交换）

若 \(f_n\) 在 \([a,b]\) 可导，\(f_n(x_0)\) 收敛，且 \(f_n'\) 在 \([a,b]\) 一致收敛到 \(g\)，则 \(f_n\) 一致收敛到某个 \(f\)，且 \(f'=g\)。

**证明提纲**：对 \(f_n-f_m\) 用 MVT 控制差，先证一致收敛；再对

\[
f_n(x)=f_n(x_0)+\int_{x_0}^x f_n'(t)\,dt
\]

取极限，用定理 7.3 得 \(f(x)=f(x_0)+\int g\)，所以 \(f'=g\)。

## 7.2 函数项级数

若 \(\sum f_n\) 的部分和一致收敛，称级数一致收敛。

### 定理 7.5（Weierstrass M-判别）

若 \(|f_n(x)|\le M_n\) 且 \(\sum M_n<\infty\)，则 \(\sum f_n\) 一致收敛。

**证明**：由 Cauchy 准则，对 \(m>n\)，

\[
\left|\sum_{k=n+1}^m f_k(x)\right|\le\sum_{k=n+1}^m M_k\to0,
\]

与 \(x\) 无关，故一致 Cauchy。证毕。

## 7.3 等度连续与 Arzelà–Ascoli

函数族 \(\mathcal F\subseteq C(X,Y)\) **等度连续**：对每个 \(\varepsilon>0\)，存在 \(\delta>0\)，使对所有 \(f\in\mathcal F\)、\(d(x,y)<\delta\)，都有 \(d(f(x),f(y))<\varepsilon\)。

### 定理 7.6（Arzelà–Ascoli）

若 \(X\) 紧、\(\mathcal F\subseteq C(X,\mathbb R^n)\) 一致有界且等度连续，则 \(\mathcal F\) 有在一致度量下收敛的子列。

**证明状态**：暂缓完整证明。思路：取 \(X\) 的可数稠密子集，用对角线法取逐点收敛子列；等度连续性把逐点收敛提升为一致收敛。

### 定理 7.7（Stone–Weierstrass）

若 \(X\) 紧，\(\mathcal A\subseteq C(X,\mathbb R)\) 是含常数的函数代数，且分离点（对任意 \(x\ne y\) 存在 \(f\in\mathcal A\) 使 \(f(x)\ne f(y)\)），则 \(\mathcal A\) 在 \(C(X,\mathbb R)\) 中一致稠密。

**证明状态**：暂缓完整证明。经典证明用 Weierstrass 逼近定理与格论（lattice）方法。

## 习题

### 基础

1. 判断 \(f_n(x)=x^n\) 在 \([0,1]\) 上是否一致收敛。
2. 判断 \(f_n(x)=x/n\) 在 \(\mathbb R\) 上是否一致收敛。
3. 用 M-判别证明 \(\sum x^n/n!\) 在任意有界区间上一致收敛。

### 提升

4. 证明：一致收敛保持连续性（补全定理 7.2）。
5. 构造连续函数列逐点收敛到不连续函数，说明逐点收敛不够。
6. 证明：若 \(f_n\) 一致收敛且每个 \(f_n\) 有界，则极限有界。

### 挑战

7. 证明 Arzelà–Ascoli 定理（可先证 \(X=[0,1]\) 的情形）。
8. 用 Stone–Weierstrass 证明：多项式在 \(C[0,1]\) 中一致稠密。

> 提示：第 8 题取 \(\mathcal A\) 为多项式代数，验证含常数、分离点，再引用定理。

## 与常规体系的接口

- 第 3 章：[数列与级数](03-sequences-series.md)
- 第 4 章：[连续性](04-continuity.md)
- 第 8 章：[特殊函数](08-special-functions.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考

- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 7 章。
- [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence)
- [Arzelà–Ascoli theorem](https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem)
- [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem)
