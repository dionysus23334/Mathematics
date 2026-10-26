# 第 10 章 · 微分形式的积分

> **状态**：已展开。Stokes 定理给陈述与证明思路；完整证明需第 9 章反函数/隐函数工具。  
> **所属**：Rudin 体系 · 第 10 章 · 微分形式的积分  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 10 章。

## 前置

- 线性代数、行列式；
- 第 9 章：多元微分、反函数定理；
- 第 6 章：积分。

## 10.1 微分形式 {#r10-1}
设 \(U\subseteq\mathbb R^n\) 开。一个 \(k\)-形式可写成

\[
\omega=\sum_{1\le i_1<\cdots<i_k\le n} f_{i_1\cdots i_k}(x)\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},
\]

其中 \(f_I\) 是光滑函数，\(\wedge\) 是反称双线性积：

\[
dx_i\wedge dx_j=-dx_j\wedge dx_i,\qquad dx_i\wedge dx_i=0.
\]

**外微分**：

\[
d\omega=\sum_I df_I\wedge dx_I
=\sum_I\sum_{j=1}^n\frac{\partial f_I}{\partial x_j}dx_j\wedge dx_I.
\]

### 定理 10.1（d² = 0）

对光滑形式 \(\omega\)，有

\[
d(d\omega)=0.
\]

**证明**：由

\[
\frac{\partial^2 f}{\partial x_i\partial x_j}
=\frac{\partial^2 f}{\partial x_j\partial x_i}
\]

与 \(dx_i\wedge dx_j=-dx_j\wedge dx_i\)，混合偏导项两两抵消。证毕。

**闭形式**：\(d\omega=0\)。**恰当形式**：\(\omega=d\eta\)。定理 10.1 说明恰当 ⇒ 闭；反之一般不对，取决于区域拓扑。

## 10.2 单纯形与链 {#r10-2}
标准 \(k\)-单纯形：

\[
\Delta^k=\left\{(t_1,\dots,t_k):t_i\ge0,\ \sum t_i\le1\right\}.
\]

奇异 \(k\)-单纯形是光滑映射 \(\sigma:\Delta^k\to U\)。\(k\)-链是有限形式和 \(\sum a_i\sigma_i\)。

**边界**：

\[
\partial\sigma=\sum_{i=0}^k(-1)^i\sigma\circ F_i,
\]

其中 \(F_i\) 是把标准单纯形的第 \(i\) 个面嵌入的仿射映射。

### 定理 10.2（∂² = 0）

\[
\partial(\partial\sigma)=0.
\]

**证明**：按面映射的组合逐项计算，符号 \((-1)^{i+j}\) 在两次面映射交换时抵消。证毕。

## 10.3 形式的积分与 Stokes 定理 {#r10-3}
对 \(k\)-形式 \(\omega\) 与奇异 \(k\)-单纯形 \(\sigma\)，定义

\[
\int_\sigma\omega=\int_{\Delta^k}\sigma^*\omega.
\]

对链线性延拓。

### 定理 10.3（Stokes）

若 \(\omega\) 是 \(U\) 上的光滑 \((k-1)\)-形式，\(c\) 是 \(k\)-链，则

\[
\int_{\partial c}\omega=\int_c d\omega.
\]

**证明思路**：先对标准单纯形与单项式形式证明；用 Fubini 定理把边界积分化为累次积分，再用微积分基本定理；最后用 pullback 与链的线性性推广。

**特例**：

- \(k=1\)：\(\int_a^b f'(x)dx=f(b)-f(a)\)；
- \(k=2\)：Green 公式；
- \(k=3\)：经典 Stokes 与 Gauss 公式。

## 10.4 闭形式与恰当形式 {#r10-4}
### 定理 10.4（Poincaré 引理）

若 \(U\subseteq\mathbb R^n\) 是星形区域，\(\omega\) 是闭 \(k\)-形式（\(k\ge1\)），则存在 \((k-1)\)-形式 \(\eta\) 使

\[
\omega=d\eta.
\]

**证明状态**：暂缓完整证明。构造用径向同伦：沿 \(x\) 到原点的线段积分 \(\omega\)，得到 \(\eta\)；闭性保证 \(d\eta=\omega\)。

**推论**：在 \(\mathbb R^n\) 中，闭形式局部恰当；全局是否恰当由 de Rham 上同调衡量。

## 习题 {#r10-ex}
### 基础

1. 计算 \(d(x\,dy+y\,dz)\)。
2. 验证 \(d(dx\wedge dy)=0\)。
3. 写出 \(\mathbb R^2\) 中 Green 公式与 Stokes 定理的对应。

### 提升

4. 证明 \(d^2=0\)（补全符号抵消）。
5. 证明 \(\partial^2=0\) 对 \(k=2\) 的情形成立。
6. 判断 \(\omega=x\,dy-y\,dx\) 在 \(\mathbb R^2\setminus\{0\}\) 上是否恰当。

### 挑战

7. 证明星形区域上的 Poincaré 引理（写出径向同伦公式）。
8. 用 Stokes 定理证明：若 \(f\) 在单位圆盘上全纯，则闭路积分为 0（与复分析对照）。

> 提示：第 6 题计算 \(d\omega\) 并用角度形式说明它不是整体恰当。

## 与常规体系的接口

- 第 9 章：[多元函数](09-multivariable.md)
- 第 6 章：[Riemann–Stieltjes 积分](06-riemann-stieltjes.md)
- [深入理论](../07-advanced.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考 {#r10-ref}
- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 10 章。
- [Differential form](https://en.wikipedia.org/wiki/Differential_form)
- [Stokes' theorem](https://en.wikipedia.org/wiki/Stokes%27_theorem)
- [De Rham cohomology](https://en.wikipedia.org/wiki/De_Rham_cohomology)
