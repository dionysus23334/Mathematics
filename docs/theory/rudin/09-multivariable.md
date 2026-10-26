# 第 9 章 · 多元函数

> **状态**：已展开。反函数/隐函数定理给条件与思路，完整证明标注暂缓。  
> **所属**：Rudin 体系 · 第九卷 · 多元函数  
> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 9 章。

## 前置

- 第 4 卷：线性代数；
- 第 5 卷：度量空间、紧致；
- 第 4–5 章：连续、微分。

## 9.1 线性变换与范数

设 \(A\in\mathbb R^{m\times n}\)，定义算子范数

\[
\|A\|=\sup_{\|x\|=1}\|Ax\|.
\]

则 \(\|Ax\|\le\|A\|\|x\|\)，且

\[
\|A+B\|\le\|A\|+\|B\|,\qquad \|AB\|\le\|A\|\|B\|.
\]

### 定理 9.1（有限维线性变换连续）

每个线性映射 \(A:\mathbb R^n\to\mathbb R^m\) 都连续。

**证明**：设 \(A\) 的矩阵元素为 \(a_{ij}\)，则

\[
\|Ax-Ay\|=\|A(x-y)\|\le\|A\|\|x-y\|,
\]

取 \(\delta=\varepsilon/\|A\|\)（\(\|A\|=0\) 时平凡）。证毕。

## 9.2 导数

\(f:\Omega\subseteq\mathbb R^n\to\mathbb R^m\) 在 \(x\) 可微，若存在线性映射 \(Df(x):\mathbb R^n\to\mathbb R^m\) 使

\[
f(x+h)-f(x)=Df(x)h+o(\|h\|).
\]

\(Df(x)\) 是 Jacobian 矩阵。

### 定理 9.2（可微 ⇒ 连续）

可微蕴含连续。

**证明**：

\[
\|f(x+h)-f(x)\|\le\|Df(x)\|\|h\|+o(\|h\|)\to0.
\]

证毕。

### 定理 9.3（链式法则）

若 \(f\) 在 \(x\) 可微，\(g\) 在 \(f(x)\) 可微，则

\[
D(g\circ f)(x)=Dg(f(x))\,Df(x).
\]

**证明提纲**：把 \(g(f(x+h))-g(f(x))\) 展开为 \(Dg(f(x))(f(x+h)-f(x))+o(\|f(x+h)-f(x)\|)\)，再用 \(f\) 的可微性。

## 9.3 压缩映射与反函数定理

### 定理 9.4（压缩映射原理）

若 \((X,d)\) 完备，\(T:X\to X\) 满足 \(d(Tx,Ty)\le qd(x,y)\)（\(0\le q<1\)），则 \(T\) 有唯一不动点。

**证明**：见[证明页 §15](../proofs.md#proof-banach)。

### 定理 9.5（反函数定理）

设 \(f:\Omega\subseteq\mathbb R^n\to\mathbb R^n\) 是 \(C^1\)，\(a\in\Omega\)，且 \(Df(a)\) 可逆。则存在 \(a\) 的邻域 \(U\) 和 \(f(a)\) 的邻域 \(V\)，使 \(f:U\to V\) 是 \(C^1\) 同胚，且

\[
D(f^{-1})(y)=[Df(f^{-1}(y))]^{-1}.
\]

**证明提纲**：令 \(F(x)=x+[Df(a)]^{-1}(y-f(x))\)，把解 \(f(x)=y\) 转化为 \(F\) 的不动点；在 \(a\) 附近用 \(Df\) 的连续性与压缩映射原理，再证逆映射可微。

### 定理 9.6（隐函数定理）

若 \(F:\mathbb R^{n+m}\to\mathbb R^m\) 是 \(C^1\)，\(F(a,b)=0\)，且 \(\partial F/\partial y(a,b)\) 可逆，则存在 \(a\) 的邻域 \(U\) 与唯一的 \(C^1\) 函数 \(g:U\to\mathbb R^m\)，使 \(g(a)=b\) 且

\[
F(x,g(x))=0.
\]

**证明提纲**：对 \(G(x,y)=(x,F(x,y))\) 用反函数定理，再取局部逆的第二个分量。

### 定理 9.7（秩定理，陈述）

若 \(f\) 在 \(a\) 附近 \(C^1\)，\(Df(a)\) 的秩为 \(r\)，则存在局部坐标变换使 \(f\) 化为

\[
(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0).
\]

**证明状态**：暂缓；需要反函数定理与线性坐标变换。

## 习题

### 基础

1. 计算 \(f(x,y)=(x^2y,\sin y)\) 的 Jacobian。
2. 证明 \(\|AB\|\le\|A\|\|B\|\)。
3. 判断 \(f(x,y)=x^2+y^2\) 在 \((0,0)\) 是否可微。

### 提升

4. 证明链式法则（补全定理 9.3 的 \(o(\|h\|)\) 估计）。
5. 用压缩映射原理证明方程 \(x=\cos x\) 在 \([0,1]\) 有唯一解。
6. 说明反函数定理中 \(Df(a)\) 可逆为什么必要（给反例）。

### 挑战

7. 证明隐函数定理（由反函数定理推出）。
8. 证明秩定理的线性代数情形，再说明如何用反函数定理推广。

> 提示：第 8 题先做线性映射的秩分解 \(A=P\begin{pmatrix}I_r&0\\0&0\end{pmatrix}Q\)。

## 与常规体系的接口

- 第 4 卷：[代数结构与线性空间](../04-algebra.md)
- 第 5 卷：[空间、极限与连续](../05-spaces.md)
- 第 5 章：[微分法](05-differentiation.md)
- 证明状态：[证明状态与核心证明](../proofs.md)

## 参考

- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 9 章。
- [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem)
- [Implicit function theorem](https://en.wikipedia.org/wiki/Implicit_function_theorem)
- [Contraction mapping](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem)
