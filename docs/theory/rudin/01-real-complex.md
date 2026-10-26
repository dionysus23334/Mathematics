# 第 1 章 · 实数系与复数系

> **出处**：Walter Rudin, *Principles of Mathematical Analysis*，第 1 章；本站第 3 层（数系）。
>
> **Rudin 路线**：本章是分析路线的第 1 章；第 2–11 章将在后续逐章补入。  
> **前置**：命题逻辑、集合与映射、有序域的基本语言。  
> **本章目标**：把“实数完备、复数可运算、欧氏空间有内积”从直观提升为可证明的定理。

<div class="book-nav">
  <a href="../">← 理论总览</a>
  <a href="../05-spaces/">第 5 层 · 空间</a>
  <a href="../proofs/">证明状态</a>
</div>



## 1.1 有序域

**域** \((F,+,\cdot)\)：\((F,+)\) 是阿贝尔群，\((F\setminus\{0\},\cdot)\) 是阿贝尔群，乘法对加法分配。

**有序域**：存在全序 \(\le\)，且

\[
x\le y\Rightarrow x+z\le y+z,
\]

\[
0\le x,\ 0\le y\Rightarrow 0\le xy.
\]

记 \(x<y\) 为 \(x\le y\) 且 \(x\ne y\)。

### 定理 1.1（有序域的基本后果）

设 \(x,y,z\in F\)。

1. 若 \(x+y=x+z\)，则 \(y=z\)；
2. 若 \(x+y=0\)，则 \(y=-x\)；
3. \((-x)y=-(xy)\)，\((-x)(-y)=xy\)；
4. 若 \(x\ne0\)，则 \(x^{-1}\ne0\)，且 \((x^{-1})^{-1}=x\)；
5. \(0<x\iff -x<0\)；
6. 若 \(x>0,y>0\)，则 \(xy>0\)；若 \(x>0\)，则 \(x^{-1}>0\)。

**证明**：

**第 1 步**：两边加 \(-x\)，

\[
\begin{aligned}
y &= 0+y=(-x+x)+y\\
  &= -x+(x+y)=-x+(x+z)\\
  &= (-x+x)+z=z.
\end{aligned}
\]

**第 2 步**：由第 1 步，\(x+y=x+(-x)=0\)，故 \(y=-x\)。

**第 3 步**：由分配律，

\[
0=x\cdot0=x(y+(-y))=xy+x(-y),
\]

所以 \(x(-y)=-(xy)\)。再用 \((-x)y=-(xy)\) 得 \((-x)(-y)=xy\)。

**第 4 步**：若 \(x^{-1}=0\)，则 \(1=xx^{-1}=0\)，矛盾；故 \(x^{-1}\ne0\)。又 \(x^{-1}x=1\)，所以 \((x^{-1})^{-1}=x\)。

**第 5 步**：\(0<x\iff -x<0\)：两边加 \(-x\) 即可。

**第 6 步**：由有序性 \(0<x,0<y\Rightarrow0<xy\)。若 \(x^{-1}<0\)，则 \(xx^{-1}<0\)（\(x>0\) 乘负数），即 \(1<0\)，与 \(1>0\) 矛盾；故 \(x^{-1}>0\)。

证毕。

## 1.2 上确界与完备性

设 \(S\subseteq F\) 非空。

- \(u\) 是 \(S\) 的**上界**：\(\forall s\in S,\ s\le u\)；
- \(u\) 是**上确界** \(\sup S\)：\(u\) 是上界，且任何上界 \(v\) 都满足 \(u\le v\)；
- 下界、下确界 \(\inf S\) 对偶定义。

**引理 1.2（上确界唯一）**：若 \(\sup S\) 存在，则唯一。

**证明**：若 \(u,u'\) 都是上确界，则 \(u\) 是上界，\(u'\) 是最小上界，所以 \(u'\le u\)；同理 \(u\le u'\)。由反对称性 \(u=u'\)。证毕。

**最小上界性质（LUB）**：每个非空有上界的子集都有上确界。Rudin 从有序域出发，把 LUB 作为实数系的完备性公理/构造结果；本站第 3 层用 Dedekind 分割证明它。

**Archimedean 性质**：对任意 \(x,y>0\)，存在 \(n\in\mathbb N\) 使 \(nx>y\)。

## 1.3 Archimedean 性质与有理数稠密

### 定理 1.3（Archimedean）

若 \(x,y\in\mathbb R\) 且 \(x>0\)，则存在正整数 \(n\) 使 \(nx>y\)。

**证明**：反设对所有 \(n\in\mathbb N\)，\(nx\le y\)。则 \(\mathbb N\) 有上界 \(y/x\)。由 LUB，\(\alpha=\sup\mathbb N\) 存在。

因为 \(\alpha-1\) 不是上界，存在 \(n\in\mathbb N\) 使 \(n>\alpha-1\)。于是 \(n+1>\alpha\)，但 \(n+1\in\mathbb N\)，与 \(\alpha\) 是上界矛盾。证毕。

**推论 1.4**：\(\mathbb N\) 在 \(\mathbb R\) 中无上界；对任意 \(\varepsilon>0\)，存在 \(n\) 使 \(1/n<\varepsilon\)。

### 定理 1.5（有理数稠密）

若 \(x<y\) 是实数，则存在 \(q\in\mathbb Q\) 使 \(x<q<y\)。

**证明**：由 Archimedean，取正整数 \(n\) 使

\[
n(y-x)>1.
\]

令 \(m\) 是满足 \(m>nx\) 的最小整数（整数良序）。则

\[
m-1\le nx<m.
\]

由 \(m>nx\) 得 \(x<m/n\)。又 \(m\le nx+1<ny\)，所以 \(m/n<y\)。因此 \(m/n\in(x,y)\cap\mathbb Q\)。证毕。

## 1.4 n 次根

### 定理 1.6（正实数的 n 次根）

若 \(x>0\)，\(n\in\mathbb N\) 且 \(n\ge1\)，则存在唯一 \(y>0\) 使 \(y^n=x\)。记 \(y=x^{1/n}\)。

**存在性**：令

\[
S=\{t\ge0:t^n<x\}.
\]

\(0\in S\)，且 \(1+x\) 是上界（若 \(t>1+x\)，则 \(t^n>(1+x)^n\ge1+x>x\)）。令 \(y=\sup S\)。

证明 \(y^n=x\)，分两种情形。

**情形 1：\(y^n<x\)**。取 \(0<h<1\) 足够小，使

\[
n(y+1)^{n-1}h<x-y^n.
\]

由二项式展开，

\[
(y+h)^n\le y^n+n(y+1)^{n-1}h<x,
\]

所以 \(y+h\in S\)，与 \(y\) 是上界矛盾。

**情形 2：\(y^n>x\)**。取 \(0<h<y\) 足够小，使

\[
ny^{n-1}h<y^n-x.
\]

由 Bernoulli 不等式，

\[
(y-h)^n\ge y^n-ny^{n-1}h>x,
\]

所以 \(y-h\) 也是上界，与 \(y\) 是最小上界矛盾。

因此只能 \(y^n=x\)。

**唯一性**：若 \(y_1^n=y_2^n=x\) 且 \(y_1,y_2>0\)，则 \(y_1=y_2\)（函数 \(t\mapsto t^n\) 在 \(t>0\) 严格递增）。证毕。

## 1.5 绝对值与三角不等式

定义

\[
|x|=
\begin{cases}
x,&x\ge0,\\
-x,&x<0.
\end{cases}
\]

性质：

\[
|xy|=|x||y|,\qquad |x|^2=x^2,\qquad |x|\le a\iff -a\le x\le a\ (a\ge0).
\]

### 定理 1.7（三角不等式）

\[
|x+y|\le|x|+|y|.
\]

**证明**：由 \(-|x|\le x\le|x|\)、\(-|y|\le y\le|y|\)，相加得

\[
-(|x|+|y|)\le x+y\le|x|+|y|,
\]

即 \(|x+y|\le|x|+|y|\)。证毕。

**推论**：\(||x|-|y||\le|x-y|\)。

## 1.6 复数域

把复数定义为有序对 \((a,b)\in\mathbb R^2\)，运算

\[
(a,b)+(c,d)=(a+c,b+d),
\]

\[
(a,b)(c,d)=(ac-bd,\ ad+bc).
\]

记 \(i=(0,1)\)，则 \(i^2=(-1,0)=-1\)，且 \((a,b)=a+bi\)。

### 定理 1.8（复数域）

\(\mathbb C\) 在上述运算下是域；\(\mathbb R\) 通过 \(a\mapsto(a,0)\) 嵌入 \(\mathbb C\)。

**证明**：

**加法**：分量相加，构成阿贝尔群，零元 \((0,0)\)，逆元 \((-a,-b)\)。

**乘法**：交换、结合、分配可由实数运算直接验证；单位元 \((1,0)\)。

**逆元**：对非零元 \((a,b)\ne(0,0)\)，令

\[
(a,b)^{-1}=\left(\frac{a}{a^2+b^2},\frac{-b}{a^2+b^2}\right).
\]

验证乘积为 \((1,0)\)：

\[
(a,b)\left(\frac{a}{a^2+b^2},\frac{-b}{a^2+b^2}\right)
=\left(\frac{a^2+b^2}{a^2+b^2},\frac{-ab+ba}{a^2+b^2}\right)=(1,0).
\]

所以 \(\mathbb C\) 是域；嵌入 \(a\mapsto(a,0)\) 保持加法与乘法，故 \(\mathbb R\subseteq\mathbb C\)。证毕。

**共轭与模**：

\[
\overline{a+bi}=a-bi,\qquad |z|^2=z\overline z=a^2+b^2.
\]

\[
\overline{z+w}=\overline z+\overline w,\qquad \overline{zw}=\overline z\,\overline w,\qquad |zw|=|z||w|.
\]

## 1.7 欧氏空间与 Schwarz 不等式

对 \(x=(x_1,\dots,x_n),y=(y_1,\dots,y_n)\in\mathbb R^n\)，定义

\[
x\cdot y=\sum_{i=1}^n x_iy_i,\qquad \|x\|=\sqrt{x\cdot x}.
\]

### 定理 1.9（Cauchy–Schwarz）

\[
|x\cdot y|\le\|x\|\|y\|.
\]

**证明**：若 \(y=0\)，两边为 0。否则对任意 \(\lambda\in\mathbb R\)，

\[
0\le\|x-\lambda y\|^2
=\|x\|^2-2\lambda(x\cdot y)+\lambda^2\|y\|^2.
\]

取 \(\lambda=\dfrac{x\cdot y}{\|y\|^2}\)，得

\[
0\le\|x\|^2-\frac{(x\cdot y)^2}{\|y\|^2},
\]

即 \((x\cdot y)^2\le\|x\|^2\|y\|^2\)。开方得 \(|x\cdot y|\le\|x\|\|y\|\)。证毕。

**推论（三角不等式）**：

\[
\|x+y\|\le\|x\|+\|y\|.
\]

证明：展开 \(\|x+y\|^2\)，用 Schwarz 估计交叉项。

## 1.8 本章证明状态

| 结论 | 状态 |
|---|---|
| 有序域基本后果 | 完整证明 |
| 上确界唯一 | 完整证明 |
| Archimedean 性质 | 完整证明（用 LUB） |
| 有理数稠密 | 完整证明（用 Archimedean + 整数良序） |
| 正实数 n 次根 | 完整证明（用 LUB + 二项式/Bernoulli 估计） |
| 三角不等式 | 完整证明 |
| 复数域 | 完整证明（运算验证 + 逆元公式） |
| Cauchy–Schwarz | 完整证明 |

> LUB 本身在第 3 层用 Dedekind 分割证明；本章把它作为实数系的完备性性质使用。

## 检查点

- 能证明有序域中“\(x>0\Rightarrow x^{-1}>0\)”。
- 能写出 Archimedean 性质的反证，并说明为什么需要 LUB。
- 能复述有理数稠密证明中“最小整数 \(m>nx\)”的作用。
- 能说明 n 次根证明中两个反证情形分别违反了什么。
- 能独立证明复数逆元公式与 Cauchy–Schwarz。


## 全书导航

<div class="book-nav">
  <a href="../">← 理论总览</a>
  <a href="../05-spaces/">第 5 层 · 空间</a>
  <a href="../proofs/">证明状态</a>
</div>

> 下一章：[第 2 章 · 基础拓扑](02-basic-topology.md)（计划中）。

## 参考

- Walter Rudin, *Principles of Mathematical Analysis*（中文版），第 1 章。
- [Ordered field](https://en.wikipedia.org/wiki/Ordered_field)
- [Least-upper-bound property](https://en.wikipedia.org/wiki/Least-upper-bound_property)
- [Archimedean property](https://en.wikipedia.org/wiki/Archimedean_property)
- [Cauchy–Schwarz inequality](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality)
