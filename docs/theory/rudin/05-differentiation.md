# 第 5 章 · 微分法

> **状态**：已展开。核心定理给证明或明确“暂缓”。  
> **所属**：Rudin 体系 · 第五卷 · 微分法  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 5 章。

## 前置

- 第 3–4 卷：数列、连续；
- 第 5 卷：极限。

## 5.1 导数

\(f:(a,b)\to\mathbb R\) 在 \(x\) 可导，若

\[
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
\]

存在。

### 定理 5.1（可导 ⇒ 连续）

若 \(f\) 在 \(x\) 可导，则 \(f\) 在 \(x\) 连续。

**证明**：

\[
f(x+h)-f(x)=\frac{f(x+h)-f(x)}{h}\cdot h\to f'(x)\cdot0=0.
\]

证毕。

### 定理 5.2（求导法则）

若 \(f,g\) 可导，则

\[
(f+g)'=f'+g',\qquad (fg)'=f'g+fg',\qquad \left(\frac fg\right)'=\frac{f'g-fg'}{g^2}\ (g\ne0).
\]

**证明**：前两条直接由极限定义；商法则把 \(1/g\) 看作复合，或用差商通分。证毕。

### 定理 5.3（链式法则）

若 \(f\) 在 \(x\) 可导，\(g\) 在 \(f(x)\) 可导，则

\[
(g\circ f)'(x)=g'(f(x))f'(x).
\]

**证明提纲**：写

\[
\frac{g(f(x+h))-g(f(x))}{h}
=\frac{g(f(x+h))-g(f(x))}{f(x+h)-f(x)}\cdot\frac{f(x+h)-f(x)}{h},
\]

当 \(f(x+h)\ne f(x)\) 时取极限；若 \(f(x+h)=f(x)\) 需单独处理，或用连续性补定义。

## 5.2 中值定理

### 定理 5.4（Rolle）

若 \(f\) 在 \([a,b]\) 连续、在 \((a,b)\) 可导，且 \(f(a)=f(b)\)，则存在 \(\xi\in(a,b)\) 使 \(f'(\xi)=0\)。

**证明**：\(f\) 在紧区间上取最大/最小值。若极值在内部，Fermat 引理给出导数为 0；若两端都是极值，则 \(f\) 为常数，任意 \(\xi\) 即可。证毕。

### 定理 5.5（Lagrange 中值定理）

若 \(f\) 在 \([a,b]\) 连续、在 \((a,b)\) 可导，则存在 \(\xi\in(a,b)\) 使

\[
f(b)-f(a)=f'(\xi)(b-a).
\]

**证明**：令

\[
g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a).
\]

则 \(g(a)=g(b)\)，对 \(g\) 用 Rolle。证毕。

### 定理 5.6（Cauchy 中值定理）

若 \(f,g\) 在 \([a,b]\) 连续、在 \((a,b)\) 可导，\(g'(x)\ne0\)，则存在 \(\xi\) 使

\[
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}.
\]

**证明**：对

\[
h(x)=f(x)(g(b)-g(a))-g(x)(f(b)-f(a))
\]

用 Rolle。证毕。

### 定理 5.7（导数的 Darboux 性质）

导函数具有介值性质：若 \(f\) 在区间上可导，则 \(f'\) 取到任意两个值之间的值。

**证明提纲**：设 \(a<b\)，\(f'(a)<\lambda<f'(b)\)。考虑 \(g(x)=f(x)-\lambda x\)；在端点附近 \(g\) 的单调性相反，故 \(g\) 在内部取得极值，Fermat 给出 \(g'=0\)，即 \(f'=\lambda\)。

## 5.3 Taylor 与 L'Hôpital

### 定理 5.8（Taylor 定理，Lagrange 余项）

若 \(f\) 在含 \(a\) 的区间上有 \(n\) 阶导数，则

\[
f(x)=\sum_{k=0}^{n-1}\frac{f^{(k)}(a)}{k!}(x-a)^k
+\frac{f^{(n)}(\xi)}{n!}(x-a)^n
\]

对某个 \(\xi\) 介于 \(a,x\) 之间成立。

**证明提纲**：令余项 \(R_n(x)\)，构造辅助函数并用 Rolle 反复应用；或对 \(n=1\) 用 MVT，再归纳。

### 定理 5.9（L'Hôpital 法则）

在 \(0/0\) 或 \(\infty/\infty\) 型下，若 \(\lim f'/g'=L\)，则 \(\lim f/g=L\)（在适当邻域与可导条件下）。

**证明状态**：暂缓完整证明；关键是 Cauchy 中值定理与端点极限处理。使用前必须检查型与邻域条件。

## 习题

### 基础

1. 求 \(f(x)=x^3-3x\) 的单调区间与极值。
2. 用 MVT 证明：若 \(f'\equiv0\)，则 \(f\) 为常数。
3. 求 \(\lim_{x\to0}\frac{\sin x-x}{x^3}\)。

### 提升

4. 证明 \(e^x\ge1+x\) 对所有 \(x\) 成立。
5. 证明：若 \(f'\) 有界，则 \(f\) 一致连续。
6. 用 Taylor 公式估计 \(\sin x\) 在 \(0\) 附近的三阶近似误差。

### 挑战

7. 证明导数的 Darboux 性质。
8. 构造一个可导但导函数不连续的函数，并说明 Darboux 性质仍成立。

> 提示：第 8 题考虑 \(x^2\sin(1/x)\)（\(x\ne0\)）与 \(f(0)=0\)。

## 与常规体系的接口

- 第 4 章：[连续性](04-continuity.md)
- 第 6 章：[Riemann–Stieltjes 积分](06-riemann-stieltjes.md)
- 第 5 卷：[空间、极限与连续](../05-spaces.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考

- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 5 章。
- [Derivative](https://en.wikipedia.org/wiki/Derivative)
- [Mean value theorem](https://en.wikipedia.org/wiki/Mean_value_theorem)
- [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem)
