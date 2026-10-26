# 2 · 集合、关系与映射

> **出处**：ZF/ZFC 标准表述；Wikipedia: Zermelo–Fraenkel set theory、Axiom of choice。

> **前置**：第 1 层（命题、量词、证明）。  
> **这一层的目标**：建立后面所有数学分支共同使用的对象语言。

## 2.1 集合与成员关系 {#sets-basic}

集合是一些对象的总体；\(x \in A\) 表示 \(x\) 是 \(A\) 的元素，\(x \notin A\) 表示不是。

- **外延公理**：两个集合相等，当且仅当它们有相同的元素。
- **子集**：\(A \subseteq B\) 表示 \(\forall x,\ x\in A \to x\in B\)。
- **真子集**：\(A \subsetneq B\) 表示 \(A\subseteq B\) 且 \(A\ne B\)。

**空集** \(\varnothing\) 是唯一没有元素的集合。注意 \(\varnothing \in \{\varnothing\}\) 与 \(\varnothing \subseteq \{\varnothing\}\) 都成立，但含义不同。

## 2.2 基本集合运算

| 运算 | 定义 | 注意 |
|---|---|---|
| 交 | \(A\cap B=\{x:x\in A\land x\in B\}\) | 交集可能为空 |
| 并 | \(A\cup B=\{x:x\in A\lor x\in B\}\) | “或”包含两者 |
| 差 | \(A\setminus B=\{x:x\in A\land x\notin B\}\) | 不要求 \(B\subseteq A\) |
| 补集 | \(A^c=\{x\in U:x\notin A\}\) | 必须先指定全集 \(U\) |
| 幂集 | \(\mathcal P(A)=\{B:B\subseteq A\}\) | 若 \(\lvert A\rvert=n\)，则 \(\lvert\mathcal P(A)\rvert=2^n\) |

**De Morgan**：

\[
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c.
\]

## 2.3 公理化集合论入门

不加限制地使用“所有集合的集合”会导致悖论（Russell 悖论）。公理化集合论用**分离公理模式**限制集合构造：

\[
\{x\in A:\ P(x)\}
\]

必须先有一个集合 \(A\)，再从中筛选；不能写成 \(\{x:\ P(x)\}\) 而不说明 \(x\) 来自哪里。

常用公理包括：空集、配对、并集、幂集、无穷、替换、选择。此处只需要知道“集合不能任意收集对象”，完整公理化留到后续集合论。

## 2.4 有序对与笛卡尔积

**有序对** \((a,b)\) 的关键是顺序：\((a,b)=(c,d)\) 当且仅当 \(a=c\) 且 \(b=d\)。

**笛卡尔积**：

\[
A\times B=\{(a,b):a\in A,\ b\in B\}.
\]

一般地，\(A_1\times\cdots\times A_n\) 表示 \(n\) 元有序组。

## 2.5 二元关系 {#sets-relations}

从 \(A\) 到 \(B\) 的二元关系是 \(A\times B\) 的子集。若 \(R\subseteq A\times A\)，称 \(R\) 是 \(A\) 上的关系。

| 性质 | 定义 |
|---|---|
| 自反 | \(\forall x\in A,\ (x,x)\in R\) |
| 对称 | \((x,y)\in R \to (y,x)\in R\) |
| 传递 | \((x,y),(y,z)\in R \to (x,z)\in R\) |
| 反对称 | \((x,y),(y,x)\in R \to x=y\) |

**等价关系** = 自反 + 对称 + 传递。它把集合分成互不相交的**等价类**：

\[
[x]=\{y\in A:(x,y)\in R\}.
\]

**划分**是 \(A\) 的一组两两不交、并为 \(A\) 的子集。等价关系与划分一一对应。

**序关系**通常指偏序（自反、反对称、传递）；全序还要求任意两个元素可比。

## 2.6 映射 {#sets-maps}

映射 \(f:A\to B\) 给每个 \(x\in A\) 指定唯一的 \(f(x)\in B\)。

- **定义域** \(A\)，**陪域** \(B\)；
- **像** \(f(A)=\{f(x):x\in A\}\)；
- **原像** \(f^{-1}(S)=\{x\in A:f(x)\in S\}\)。

| 性质 | 定义 | 否定 |
|---|---|---|
| 单射 | \(f(x_1)=f(x_2)\to x_1=x_2\) | 存在 \(x_1\ne x_2\) 但 \(f(x_1)=f(x_2)\) |
| 满射 | \(\forall y\in B,\ \exists x\in A,\ f(x)=y\) | 存在 \(y\in B\) 不在像中 |
| 双射 | 既单射又满射 | 存在碰撞或漏掉的值 |

**注意**：满射是相对于**陪域**说的；改变陪域会改变满射性。

## 2.7 映射的运算

- **复合**：\((g\circ f)(x)=g(f(x))\)，要求 \(f\) 的陪域与 \(g\) 的定义域相容。
- **逆映射**：若 \(f:A\to B\) 是双射，则存在 \(f^{-1}:B\to A\)，满足 \(f^{-1}(f(x))=x\) 且 \(f(f^{-1}(y))=y\)。
- **限制**：把 \(f\) 的定义域限制到子集 \(S\subseteq A\)，记 \(f|_S\)。

复合一般不交换：\(f\circ g\ne g\circ f\)，甚至两边不一定都有定义。

## 2.8 集合族与商集 {#sets-quotient}

**集合族** \(\{A_i\}_{i\in I}\) 是用指标集 \(I\) 标记的一族集合；可以取并 \(\bigcup_{i\in I}A_i\) 与交 \(\bigcap_{i\in I}A_i\)。

**商集** \(A/{\sim}\) 是以等价类为元素的集合：

\[
A/{\sim}=\{[x]:x\in A\}.
\]

商集是“按等价关系识别对象”的正式语言。整数、有理数、商群、商环都通过它构造。

## 依赖规则

- 等价关系必须在商集之前；
- 映射必须在同构之前；
- 序关系必须在上确界/下确界之前；
- 幂集与笛卡尔积必须在关系、函数空间之前。


## 2.9 选择公理与 Zorn 引理

**选择公理（Axiom of Choice, AC）**：对任意由非空集合组成的集合族 \(\{A_i\}_{i\in I}\)，存在选择函数 \(f\)，使 \(f(i)\in A_i\) 对每个 \(i\) 成立。

等价形式：

- **Zorn 引理**：若非空偏序集 \(P\) 的每条链都有上界，则 \(P\) 有极大元；
- **良序定理**：每个集合都可以被良序化；
- **Tychonoff 定理**（拓扑）：任意紧空间的乘积紧致。

Zorn 引理常用于“极大理想”“Hamel 基”“代数闭包”等存在性证明。它不构造对象，只保证极大对象存在。AC、Zorn 与良序定理的等价链**暂缓证明**（需公理化集合论）。

**边界**：AC 与“有限选择”不同；有限个非空集合的选择不需要 AC。ZF 与 ZFC 的差别就在 AC 是否加入。

## 2.10 Cantor–Schröder–Bernstein 定理

若存在单射 \(f:A\to B\) 和单射 \(g:B\to A\)，则存在双射 \(h:A\to B\)。

因此“\(|A|\le|B|\) 且 \(|B|\le|A|\)”推出“\(|A|=|B|\)”。这个定理不依赖 AC；它说明基数比较可以用单射来定义。

**完整证明**：用 \(C_0=A\setminus g(B)\)、\(C_{n+1}=g(f(C_n))\)、\(C=\bigcup C_n\) 分段定义双射；见[证明页 §4](proofs.md#proof-sb)。

**Cantor 定理**：不存在从 \(A\) 到 \(\mathcal P(A)\) 的满射，因此 \(|A|<|\mathcal P(A)|\)；完整证明见[证明页 §3](proofs.md#proof-cantor)。

## 2.11 参考

- [Zermelo–Fraenkel set theory](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory)
- [Axiom of choice](https://en.wikipedia.org/wiki/Axiom_of_choice)
- [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma)
- [Schröder–Bernstein theorem](https://en.wikipedia.org/wiki/Schr%C3%B6der%E2%80%93Bernstein_theorem)
- [Equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation)

## 检查点

- 能证明“等价关系 ↔ 划分”。
- 能判断一个映射是否单射/满射，并写出否定。
- 能说明为什么 \(\{x:P(x)\}\) 不能无条件使用。
- 能解释商集与“选代表元”的区别。
