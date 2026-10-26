# 3 · 自然数与数系构造

> **前置**：第 1–2 层（证明、集合、等价关系、映射）。  
> **这一层的目标**：不只“认识各种数”，而是说明它们怎样得到、运算为何成立。

## 3.1 自然数 {#numbers-peano}

自然数可以用 **Peano 公理**刻画（从一个初始对象和后继运算出发）：

1. \(0\in\mathbb N\)；
2. 存在后继映射 \(S:\mathbb N\to\mathbb N\)；
3. \(S(n)\ne 0\) 对所有 \(n\) 成立；
4. \(S\) 是单射；
5. 若 \(A\subseteq\mathbb N\) 包含 \(0\)，且 \(n\in A\to S(n)\in A\)，则 \(A=\mathbb N\)。

第 5 条就是**归纳原理**。它使“对全体自然数成立”的证明可以分成两步：基础情形与归纳步。

**递归定义**：若每一步的新值只依赖前一步（或前若干步），则可在 \(\mathbb N\) 上递归定义函数。例如阶乘：

\[
0!=1,\qquad (n+1)!=(n+1)\cdot n!.
\]

## 3.2 自然数运算与整除

- 加法：\(m+0=m\)，\(m+S(n)=S(m+n)\)；
- 乘法：\(m\cdot 0=0\)，\(m\cdot S(n)=m\cdot n+m\)；
- 次序：\(a\le b\) 当且仅当存在 \(k\) 使 \(a+k=b\)。

**除法算法**：对 \(a\in\mathbb Z\)、\(b>0\)，存在唯一 \(q,r\) 使

\[
a=bq+r,\qquad 0\le r<b.
\]

**素数**：大于 1 且只有 1 和自身两个正因数的自然数。**算术基本定理**：每个大于 1 的自然数可唯一分解为素数乘积（不计顺序）。

## 3.3 整数

整数可以看作自然数对的等价类：

\[
(a,b)\sim(c,d)\iff a+d=b+c.
\]

直观上 \((a,b)\) 表示 \(a-b\)。加法与乘法定义为

\[
[(a,b)]+[(c,d)]=[(a+c,b+d)],
\]

\[
[(a,b)]\cdot[(c,d)]=[(ac+bd,\ ad+bc)].
\]

需要验证这些定义与代表元选择无关（良定义）。整数使减法封闭。

## 3.4 有理数

有理数可以看作整数对的等价类：

\[
(a,b)\sim(c,d)\iff ad=bc,\qquad b,d\ne 0.
\]

\((a,b)\) 表示 \(a/b\)。加法、乘法、次序由整数运算诱导；需要排除分母为零，并验证良定义。有理数使除法（除以非零数）封闭，并且是**稠密**的：任意两个有理数之间还有有理数。

## 3.5 实数与 Dedekind 分割 {#numbers-real}

有理数虽然稠密，但不完备：例如 \(\sqrt2\) 不是有理数。构造实数的一种方式是 **Dedekind 分割**。

\(A\subseteq\mathbb Q\) 称为一个分割，若：

1. \(A\ne\varnothing\)，\(A\ne\mathbb Q\)；
2. 若 \(a\in A\) 且 \(b<a\)，则 \(b\in A\)（向下封闭）；
3. \(A\) 没有最大元。

每个分割代表一个实数；有理数 \(q\) 对应分割 \(\{x\in\mathbb Q:x<q\}\)。实数运算与次序由分割的包含、并、平移等定义。

**完备性（最小上界性质）**：每个非空有上界的实数子集都有上确界。这是分析中极限、连续、紧致等结论的基础。

> 也可以用 Cauchy 序列构造实数；它需要先有极限/度量语言，因此放在后面作为“另一种构造”补充。Dedekind 分割的优点是不依赖极限理论。

## 3.6 复数

复数可以看作实数对 \((a,b)\)，定义

\[
(a,b)+(c,d)=(a+c,b+d),
\]

\[
(a,b)\cdot(c,d)=(ac-bd,\ ad+bc).
\]

记 \(i=(0,1)\)，则 \((a,b)=a+bi\)，且 \(i^2=-1\)。复数域是代数闭域：每个非常数复系数多项式都有根（代数基本定理）。

## 3.7 有限、可数与不可数 {#numbers-cardinality}

- 集合 \(A\) 与 \(B\) **等势**，若存在双射 \(A\to B\)；
- **有限**：与某个 \(\{1,\dots,n\}\) 等势；
- **可数无限**：与 \(\mathbb N\) 等势；
- **不可数**：不是有限也不是可数无限。

Cantor 定理：\(|A|<|\mathcal P(A)|\)，所以 \(\mathbb R\) 不可数。可数集合的有限并、可数并仍可数；\(\mathbb Q\) 可数，\(\mathbb R\) 不可数。

## 依赖与顺序

- 自然数必须在归纳法之前；
- 整数/有理数必须在等价类与商集之后；
- 实数完备性必须在极限理论之前；
- 复数必须在实数运算之后；
- 基数比较必须在双射之后。


## 3.8 实数完备性的等价形式

在有序域 \(\mathbb R\) 中，下列性质等价（在 Archimedes 性质成立的前提下）：

1. **上确界性质**：非空有上界的子集有上确界；
2. **单调收敛**：有界单调数列收敛；
3. **区间套**：闭区间套的交非空（长度趋于 0 时交为一点）；
4. **Bolzano–Weierstrass**：有界数列有收敛子列；
5. **Cauchy 完备**：每个 Cauchy 列收敛。

不同教材从不同性质出发，再把其他性质作为定理。本站从 Dedekind 分割建立 \(\mathbb R\)，因此把上确界性质作为定义后的第一条完备性定理；上确界性质的完整证明见[证明页 §6](proofs.md#proof-dedekind)。其余等价形式**暂缓证明**。

**Archimedes 性质**：对任意 \(x\in\mathbb R\)，存在 \(n\in\mathbb N\) 使 \(n>x\)。它保证 \(\mathbb N\) 在 \(\mathbb R\) 中无上界，也是“\(\frac1n\to0\)”的基础。

## 3.9 代数基本定理

每个次数 \(n\ge1\) 的复系数多项式

\[
p(z)=a_nz^n+\cdots+a_1z+a_0,\qquad a_n\ne0
\]

在 \(\mathbb C\) 中至少有一个根；因此可分解为

\[
p(z)=a_n\prod_{k=1}^n(z-z_k)
\]

（计重数）。这说明 \(\mathbb C\) 是代数闭域；但 \(\mathbb R\) 不是（\(x^2+1\) 无实根）。

证明可用复分析（Liouville 定理）或代数拓扑（环绕数）；本站把它作为“复数域性质”的结论，**暂缓证明**，证明放在复分析分支。

## 3.10 基数与连续统

- \(\mathbb Q\) 可数：可以按分子分母的高度枚举；
- \(\mathbb R\) 不可数：Cantor 对角线论证；
- \(|\mathbb R|=|\mathcal P(\mathbb N)|=2^{\aleph_0}\)；
- **连续统假设（CH）**：\(2^{\aleph_0}=\aleph_1\)。CH 独立于 ZFC：既不能被证明，也不能被否证（Gödel 1938，Cohen 1963）。

> 注意：不可数不等于“比 \(\mathbb N\) 多一个”；基数比较用双射/单射定义。

## 3.11 参考

- [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms)
- [Dedekind cut](https://en.wikipedia.org/wiki/Dedekind_cut)
- [Construction of the real numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers)
- [Completeness of the real numbers](https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers)
- [Fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra)
- [Continuum hypothesis](https://en.wikipedia.org/wiki/Continuum_hypothesis)

## 检查点

- 能写出 Peano 公理，并说明归纳法为什么成立。
- 能用等价类构造整数或有理数，并验证运算良定义。
- 能说明 Dedekind 分割如何表达 \(\sqrt2\)。
- 能证明 \(\mathbb Q\) 可数、\(\mathbb R\) 不可数（至少说出对角线论证的思路）。
