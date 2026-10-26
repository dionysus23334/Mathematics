# 第 6 章 · Riemann–Stieltjes 积分

> **状态**：已展开。存在性证明给关键步骤；大定理明确标注。  
> **所属**：Rudin 体系 · 第六卷 · Riemann–Stieltjes 积分  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 6 章。

## 前置

- 第 3–5 卷：数列、连续、微分；
- 第 2 章：紧致与一致连续；
- 第 5 卷：度量空间。

## 6.1 分划与上下和 {#r6-1}
设 \([a,b]\) 区间，\(f,\alpha:[a,b]\to\mathbb R\) 有界。分划

\[
P=\{a=x_0<x_1<\cdots<x_n=b\}.
\]

令

\[
M_i=\sup_{[x_{i-1},x_i]}f,\qquad m_i=\inf_{[x_{i-1},x_i]}f,
\]

定义上、下和：

\[
U(P,f,\alpha)=\sum_{i=1}^n M_i\Delta\alpha_i,
\qquad
L(P,f,\alpha)=\sum_{i=1}^n m_i\Delta\alpha_i,
\]

其中 \(\Delta\alpha_i=\alpha(x_i)-\alpha(x_{i-1})\)（先假设 \(\alpha\) 单调递增，保证非负）。

定义

\[
\overline{\int_a^b}f\,d\alpha=\inf_P U(P,f,\alpha),
\qquad
\underline{\int_a^b}f\,d\alpha=\sup_P L(P,f,\alpha).
\]

若上下积分相等，称 Riemann–Stieltjes 积分存在，记为 \(\int_a^b f\,d\alpha\)。

### 定理 6.1（加细分划）

若 \(P^*\) 是 \(P\) 的加细，则

\[
L(P,f,\alpha)\le L(P^*,f,\alpha)\le U(P^*,f,\alpha)\le U(P,f,\alpha).
\]

**证明思路**：只需看在一个子区间中加入一个分点；上确界在更小区间上不超过原上确界，下确界反过来。逐项相加即得。

### 定理 6.2（可积的充要条件）

\(f\) 关于 \(\alpha\) 可积 \(\iff\) 对任意 \(\varepsilon>0\)，存在分划 \(P\) 使

\[
U(P,f,\alpha)-L(P,f,\alpha)<\varepsilon.
\]

**证明提纲**：

- 若可积，取 \(P_1,P_2\) 使上/下和接近上下积分，用共同加细夹逼；
- 反之，上下积分被夹在差小于 \(\varepsilon\) 的两个数之间，令 \(\varepsilon\to0\) 得相等。

## 6.2 存在性 {#r6-2}
### 定理 6.3（连续 × 单调）

若 \(f\) 在 \([a,b]\) 连续，\(\alpha\) 在 \([a,b]\) 单调递增，则 \(\int_a^b f\,d\alpha\) 存在。

**证明**：\(f\) 在紧区间上一致连续。给定 \(\varepsilon>0\)，取 \(\delta>0\) 使 \(|x-y|<\delta\Rightarrow|f(x)-f(y)|<\varepsilon\)。取分划 \(P\) 使每个子区间长度 \(<\delta\)。则

\[
M_i-m_i<\varepsilon,
\]

所以

\[
U(P,f,\alpha)-L(P,f,\alpha)
\le \varepsilon\sum_{i=1}^n\Delta\alpha_i
=\varepsilon(\alpha(b)-\alpha(a)).
\]

由定理 6.2 可积。证毕。

### 定理 6.4（有界变差 × 连续）

若 \(\alpha\) 在 \([a,b]\) 上有界变差，\(f\) 连续，则 \(\int f\,d\alpha\) 存在。

**证明状态**：暂缓完整证明。思路：把 \(\alpha\) 写成两个单调递增函数之差 \(\alpha=\alpha_1-\alpha_2\)（Jordan 分解），分别对 \(\alpha_1,\alpha_2\) 用定理 6.3，再相减。

## 6.3 积分性质 {#r6-3}
若 \(f,g\) 关于 \(\alpha\) 可积，则：

\[
\int(\lambda f+\mu g)\,d\alpha=\lambda\int f\,d\alpha+\mu\int g\,d\alpha,
\]
\[
\int f\,d(\lambda\alpha+\mu\beta)=\lambda\int f\,d\alpha+\mu\int f\,d\beta,
\]
\[
\left|\int f\,d\alpha\right|\le\int|f|\,d\alpha\quad(\alpha\text{ 单调递增}).
\]

**证明**：由上下和的线性性与夹逼；绝对值估计用 \(-|f|\le f\le|f|\)。证毕。

### 定理 6.5（分部积分）

若 \(f\) 关于 \(\alpha\) 可积，则 \(\alpha\) 关于 \(f\) 可积，且

\[
\int_a^b f\,d\alpha+\int_a^b \alpha\,df
=f(b)\alpha(b)-f(a)\alpha(a).
\]

**证明提纲**：对分划 \(P\)，考虑

\[
\sum f(x_i)(\alpha(x_i)-\alpha(x_{i-1}))
+\sum \alpha(x_{i-1})(f(x_i)-f(x_{i-1}))
=f(b)\alpha(b)-f(a)\alpha(a),
\]

取极限即得。

### 定理 6.6（换元）

若 \(\varphi:[\alpha,\beta]\to[a,b]\) 连续可导、严格单调，\(f\) 连续，则

\[
\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx
=\int_\alpha^\beta f(\varphi(t))\varphi'(t)\,dt.
\]

**证明状态**：暂缓完整证明；用 Riemann 和的拉格朗日中值定理与一致连续性。

## 6.4 可求长曲线 {#r6-4}
曲线 \(\gamma:[a,b]\to\mathbb R^n\) 的弧长：

\[
L(\gamma)=\sup_{P}\sum_{i=1}^n\|\gamma(x_i)-\gamma(x_{i-1})\|.
\]

若 \(L(\gamma)<\infty\)，称 \(\gamma\) 可求长。

### 定理 6.7（可求长 ↔ 有界变差）

\(\gamma\) 可求长 \(\iff\) 每个坐标函数 \(\gamma_j\) 在 \([a,b]\) 上有界变差。

**证明提纲**：用范数等价与有界变差的定义，逐坐标估计；有限维空间所有范数等价。

## 习题 {#r6-ex}
### 基础

1. 对 \(f(x)=x\)、\([a,b]=[0,1]\)，直接按定义计算 \(\int_0^1 x\,dx\)。
2. 证明：若 \(f\) 在 \([a,b]\) 有界，\(\alpha\) 单调递增，则 \(L(P,f,\alpha)\le U(P,f,\alpha)\)。
3. 计算 \(\int_0^1 x\,d(x^2)\)（提示：分部积分）。

### 提升

4. 证明：连续函数关于单调递增函数可积（补全定理 6.3）。
5. 证明积分对区间的可加性：若 \(a<c<b\)，则 \(\int_a^b f\,d\alpha=\int_a^c f\,d\alpha+\int_c^b f\,d\alpha\)。
6. 证明：若 \(f\) 连续、\(\alpha\) 有界变差，则 \(|\int f\,d\alpha|\le\|f\|_\infty V(\alpha)\)。

### 挑战

7. 证明分部积分公式（补全定理 6.5 的极限步骤）。
8. 证明：\(C^1\) 曲线的弧长等于 \(\int_a^b\|\gamma'(t)\|\,dt\)。

> 提示：第 8 题先对分划用 MVT 得下界，再用一致连续性得上界。

## 与常规体系的接口

- 第 5 章：[微分法](05-differentiation.md)
- 第 7 章：[函数序列与函数项级数](07-function-sequences.md)
- 第 5 卷：[空间、极限与连续](../05-spaces.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考 {#r6-ref}
- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 6 章。
- [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral)
- [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation)
