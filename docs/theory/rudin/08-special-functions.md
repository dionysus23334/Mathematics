# 第 8 章 · 特殊函数

> **状态**：已展开。重点是把指数、对数、三角函数、Fourier 级数、Gamma 函数纳入统一框架。  
> **所属**：Rudin 体系 · 第 8 章 · 特殊函数  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 8 章。

## 前置

- 第 3 章：幂级数；
- 第 5 章：微分；
- 第 6–7 章：积分、一致收敛。

## 8.1 指数函数 {#r8-1}
定义

\[
e^z=\sum_{n=0}^\infty\frac{z^n}{n!},\qquad z\in\mathbb C.
\]

级数在全平面绝对收敛（比值判别），且在任意紧集上一致收敛。

### 定理 8.1（指数律）

\[
e^{z+w}=e^z e^w.
\]

**证明**：由绝对收敛级数的 Cauchy 乘积，

\[
e^z e^w=\sum_{n=0}^\infty\sum_{k=0}^n\frac{z^k}{k!}\frac{w^{n-k}}{(n-k)!}
=\sum_{n=0}^\infty\frac{(z+w)^n}{n!}=e^{z+w}.
\]

证毕。

**推论**：\(e^0=1\)，\(e^{-z}=1/e^z\)，\(e^z\ne0\)。

### 定理 8.2（导数）

\[
(e^z)'=e^z.
\]

**证明**：逐项求导（幂级数在紧集上一致收敛），

\[
\frac{d}{dz}\sum\frac{z^n}{n!}=\sum_{n\ge1}\frac{z^{n-1}}{(n-1)!}=e^z.
\]

证毕。

## 8.2 对数函数 {#r8-2}
对 \(x>0\)，定义

\[
\log x=\int_1^x\frac{dt}{t}.
\]

### 定理 8.3（对数性质）

\[
\log(xy)=\log x+\log y,\qquad \log(e^x)=x,\qquad e^{\log x}=x.
\]

**证明**：换元 \(t=xu\) 得

\[
\log(xy)=\int_1^{xy}\frac{dt}{t}
=\int_1^x\frac{dt}{t}+\int_x^{xy}\frac{dt}{t}
=\log x+\int_1^y\frac{du}{u}=\log x+\log y.
\]

其余两式由定义与反函数定理。证毕。

## 8.3 三角函数 {#r8-3}
定义

\[
\cos z=\frac{e^{iz}+e^{-iz}}2,\qquad
\sin z=\frac{e^{iz}-e^{-iz}}{2i}.
\]

则

\[
\cos^2 z+\sin^2 z=1,\qquad \sin(z+w)=\sin z\cos w+\cos z\sin w,
\]
\[
(\sin z)'=\cos z,\qquad (\cos z)'=-\sin z.
\]

\(\pi\) 定义为 \(2\) 倍的最小正零点；三角函数的周期性由此得到。

## 8.4 Fourier 级数 {#r8-4}
设 \(f\) 以 \(2\pi\) 为周期、在 \([-\pi,\pi]\) Riemann 可积。Fourier 系数：

\[
\hat f(n)=\frac1{2\pi}\int_{-\pi}^{\pi}f(t)e^{-int}\,dt,
\]

Fourier 级数：

\[
f(x)\sim\sum_{n=-\infty}^\infty\hat f(n)e^{inx}.
\]

### 定理 8.4（Fourier 收敛，概述）

若 \(f\) 在 \([-\pi,\pi]\) 上分段 \(C^1\)，则 Fourier 级数在每点收敛到

\[
\frac{f(x+)+f(x-)}2.
\]

特别地，连续点收敛到 \(f(x)\)。

**证明状态**：暂缓完整证明；需要 Dirichlet 核与 Riemann–Lebesgue 引理。

### 定理 8.5（Parseval）

若 \(f\in L^2[-\pi,\pi]\)，则

\[
\frac1{2\pi}\int_{-\pi}^{\pi}|f(x)|^2\,dx
=\sum_{n=-\infty}^\infty|\hat f(n)|^2.
\]

**证明状态**：暂缓；需要 \(L^2\) 完备性与 Fourier 基。

## 8.5 Gamma 函数 {#r8-5}
对 \(x>0\)，定义

\[
\Gamma(x)=\int_0^\infty t^{x-1}e^{-t}\,dt.
\]

### 定理 8.6（递推与延拓）

\[
\Gamma(x+1)=x\Gamma(x),\qquad \Gamma(n+1)=n!.
\]

\(\Gamma\) 可解析延拓为 \(\mathbb C\setminus\{0,-1,-2,\dots\}\) 上的亚纯函数，在 \(x=-n\) 有单极点，留数为 \((-1)^n/n!\)。

**证明**：分部积分得递推；延拓用 \(\Gamma(x)\Gamma(1-x)=\pi/\sin(\pi x)\) 或 Weierstrass 乘积。证毕。

## 习题 {#r8-ex}
### 基础

1. 证明 \(e^z\ne0\) 对所有 \(z\in\mathbb C\) 成立。
2. 求 \(\log 2\) 的积分表示，并估计其值在 \(1/2\) 与 \(1\) 之间。
3. 证明 \(\sin^2 x+\cos^2 x=1\)。

### 提升

4. 证明 \(e^x>1+x\)（\(x>0\)）。
5. 计算 \(f(x)=x\) 在 \([-\pi,\pi]\) 上的 Fourier 系数。
6. 证明 \(\Gamma(1)=1\)，\(\Gamma(1/2)=\sqrt\pi\)。

### 挑战

7. 证明 Parseval 等式在三角多项式情形成立，并说明如何逼近一般 \(L^2\) 函数。
8. 用 Fourier 级数证明 \(\sum_{n=1}^\infty 1/n^2=\pi^2/6\)（提示：对 \(f(x)=x^2\) 展开）。

## 与常规体系的接口

- 第 3 章：[数列与级数](03-sequences-series.md)
- 第 7 章：[函数序列与函数项级数](07-function-sequences.md)
- 第 11 章：[Lebesgue 理论](11-lebesgue.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考 {#r8-ref}
- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 8 章。
- [Exponential function](https://en.wikipedia.org/wiki/Exponential_function)
- [Fourier series](https://en.wikipedia.org/wiki/Fourier_series)
- [Gamma function](https://en.wikipedia.org/wiki/Gamma_function)
