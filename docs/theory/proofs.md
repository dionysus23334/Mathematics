# 证明状态与核心证明

> 这一页回答两个问题：**哪些定理有完整证明？哪些只是陈述/提纲？**
>
> 原则：不能把“证明思路”写成“证明”。完整证明必须能逐步检查；暂缓证明必须明确标注，并列出所需前置。

## 状态约定

| 状态 | 含义 |
|---|---|
| **完整证明** | 从定义/公理出发，给出可检查的全部步骤 |
| **证明提纲** | 给出关键构造与步骤，省略技术细节；不声称完整 |
| **暂缓证明** | 本页只使用结论，证明留给后续分支/教材；必须列前置 |
| **定义/公理** | 不作为定理证明，作为出发点 |

## 状态总表

| 定理/结论 | 状态 | 位置 |
|---|---|---|
| De Morgan 等值式、逆否、量词否定 | 完整证明 | 本页 §1 |
| 命题/一阶逻辑可靠性与完备性 | 暂缓证明 | 本页 §4；需证明系统与模型论 |
| 等价关系 ↔ 划分 | 完整证明 | 本页 §2 |
| Cantor 定理（幂集严格大于原集） | 完整证明 | 本页 §3 |
| Cantor–Schröder–Bernstein | 完整证明 | 本页 §4 |
| ZF/ZFC、AC、Zorn 引理、良序定理 | 暂缓证明 | 本页 §5；需公理化集合论 |
| Peano 归纳原理 | 公理/定义 | 第 3 层 |
| Dedekind 分割的上确界性质 | 完整证明 | 本页 §6 |
| 实数完备性五种形式等价 | 部分：上确界已证；其余暂缓 | 本页 §6、§7 |
| 代数基本定理 | 暂缓证明 | 第 3 层；需复分析 |
| 群同态基本定理 | 完整证明 | 本页 §8 |
| 秩-零化度定理 | 完整证明 | 本页 §9 |
| 实对称矩阵谱定理 | 暂缓证明 | 第 4 层；需内积空间与归纳 |
| 开球是开集 | 完整证明 | 本页 §10 |
| 连续映射的 \(\varepsilon\)-\(\delta\) 与开集原像等价 | 完整证明 | 本页 §11 |
| 紧集的连续像是紧集 | 完整证明 | 本页 §12 |
| 紧集上连续函数取得极值（EVT） | 完整证明 | 本页 §13 |
| Banach 压缩映射原理 | 完整证明 | 本页 §15 |
| Heine–Borel、Bolzano–Weierstrass | 暂缓证明 | 第 5 层；需实分析 |
| MCT、Fatou、DCT | 暂缓证明 | 第 7 层；需测度论 |
| Cauchy 积分定理/公式、留数定理 | 暂缓证明 | 第 7 层；需复分析 |
| Hahn–Banach、开映射、闭图像、一致有界 | 暂缓证明 | 第 7 层；需泛函分析 |
| Gauss–Bonnet、Brouwer、Mayer–Vietoris | 暂缓证明 | 第 7 层；需几何/代数拓扑 |

> 状态表是“诚实性检查表”：看到“暂缓证明”，就不应把该结论当作已经在本站证明。

---

## 1. 命题等值式与量词否定 {#proof-logic}

### 1.1 De Morgan

要证 \(\neg(P\land Q)\equiv\neg P\lor\neg Q\)。列真值表：

| \(P\) | \(Q\) | \(P\land Q\) | \(\neg(P\land Q)\) | \(\neg P\lor\neg Q\) |
|---|---|---|---|---|
| T | T | T | F | F |
| T | F | F | T | T |
| F | T | F | T | T |
| F | F | F | T | T |

两列相同，故等值。\(\neg(P\lor Q)\equiv\neg P\land\neg Q\) 同理。

### 1.2 逆否

\[
P\to Q\equiv\neg P\lor Q\equiv Q\lor\neg P\equiv\neg(\neg Q)\lor\neg P\equiv\neg Q\to\neg P.
\]

### 1.3 量词否定

按定义，\(\forall x\in S,\ P(x)\) 为假当且仅当存在 \(x\in S\) 使 \(P(x)\) 为假：

\[
\neg\forall x\in S,\ P(x)\equiv\exists x\in S,\ \neg P(x).
\]

同理 \(\neg\exists x\in S,\ P(x)\equiv\forall x\in S,\ \neg P(x)\)。

---

## 2. 等价关系 ↔ 划分 {#proof-equivalence}

设 \(\sim\) 是 \(A\) 上的等价关系。对每个 \(x\in A\)，令 \([x]=\{y\in A:x\sim y\}\)。

**每一步**：

1. **非空**：由自反性 \(x\in[x]\)。
2. **两两不交或相等**：若 \([x]\cap[y]\ne\varnothing\)，取 \(z\in[x]\cap[y]\)。则 \(x\sim z\)、\(y\sim z\)。由对称性 \(z\sim y\)，由传递性 \(x\sim y\)。对任意 \(w\in[x]\)，\(w\sim x\sim y\)，所以 \(w\in[y]\)；故 \([x]\subseteq[y]\)。同理 \([y]\subseteq[x]\)，所以 \([x]=[y]\)。
3. **并为 \(A\)**：每个 \(x\) 属于 \([x]\)，所以 \(\bigcup_{x\in A}[x]=A\)。

因此等价类构成一个划分。

反过来，若 \(\mathcal P\) 是 \(A\) 的划分，定义 \(x\sim y\) 当且仅当 \(x,y\) 在同一个块中。

- 自反：\(x\) 与自己在同一块；
- 对称：同块关系对称；
- 传递：若 \(x,y\) 同块、\(y,z\) 同块，则 \(x,z\) 同块。

所以 \(\sim\) 是等价关系，且等价类正好是划分的块。证毕。

---

## 3. Cantor 定理 {#proof-cantor}

**定理**：不存在满射 \(f:A\to\mathcal P(A)\)。

**证明**：反设 \(f\) 是满射。定义

\[
D=\{x\in A:x\notin f(x)\}.
\]

则 \(D\subseteq A\)，即 \(D\in\mathcal P(A)\)。由 \(f\) 满射，存在 \(d\in A\) 使 \(f(d)=D\)。

考察 \(d\in D\)：

- 若 \(d\in D\)，按 \(D\) 的定义 \(d\notin f(d)=D\)，矛盾；
- 若 \(d\notin D\)，则 \(d\notin f(d)\)，按定义 \(d\in D\)，矛盾。

两种情形都矛盾，故不存在这样的满射。证毕。

---

## 4. Cantor–Schröder–Bernstein {#proof-sb}

**定理**：若存在单射 \(f:A\to B\) 与单射 \(g:B\to A\)，则存在双射 \(h:A\to B\)。

**构造**：

\[
C_0=A\setminus g(B),\qquad C_{n+1}=g(f(C_n)),\qquad C=\bigcup_{n=0}^\infty C_n.
\]

定义

\[
h(x)=
\begin{cases}
f(x), & x\in C,\\
g^{-1}(x), & x\notin C.
\end{cases}
\]

若 \(x\notin C\)，则 \(x\notin C_0=A\setminus g(B)\)，所以 \(x\in g(B)\)，\(g^{-1}(x)\) 存在且唯一。

**良定义**：两种情形互斥；\(g^{-1}(x)\) 唯一。

**单射**：设 \(h(x)=h(y)\)。

- 若 \(x,y\in C\)，则 \(f(x)=f(y)\)，由 \(f\) 单射得 \(x=y\)。
- 若 \(x,y\notin C\)，则 \(g^{-1}(x)=g^{-1}(y)\)，得 \(x=y\)。
- 若 \(x\in C,\ y\notin C\)，则 \(f(x)=g^{-1}(y)\)，两边作用 \(g\) 得 \(g(f(x))=y\)。但 \(x\in C_n\) 对某个 \(n\)，所以 \(g(f(x))\in C_{n+1}\subseteq C\)，与 \(y\notin C\) 矛盾。

所以 \(h\) 单射。

**满射**：任取 \(y\in B\)。

- 若 \(g(y)\in C\)，则 \(g(y)\in C_{n+1}=g(f(C_n))\) 对某个 \(n\)（注意 \(g(y)\notin C_0\)），于是 \(g(y)=g(f(c))\) 对某个 \(c\in C_n\)。由 \(g\) 单射，\(y=f(c)=h(c)\)。
- 若 \(g(y)\notin C\)，则 \(h(g(y))=g^{-1}(g(y))=y\)。

所以 \(h\) 满射。证毕。

---

## 5. 选择公理、Zorn 引理与良序定理

这三者是等价的（在 ZF 中）。本站**不证明**这个等价链；它需要序数、超限递归与集合论的公理系统。

- **AC**：任意非空集合族有选择函数；
- **Zorn**：非空偏序集中，若每条链有上界，则有极大元；
- **良序定理**：每个集合可良序化。

使用 Zorn 时，必须验证“每条链有上界”；只验证有限链不够。

---

## 6. Dedekind 分割的上确界性质 {#proof-dedekind}

设 \(S\) 是一族非空 Dedekind 分割，且被分割 \(B\) 上界（即每个 \(A\in S\) 满足 \(A\subseteq B\)）。令

\[
U=\bigcup_{A\in S} A.
\]

**证明 \(U\) 是分割**：

1. \(U\ne\varnothing\)：\(S\) 非空，取 \(A\in S\)，\(A\ne\varnothing\)，故 \(U\) 非空。
2. \(U\ne\mathbb Q\)：每个 \(A\subseteq B\)，所以 \(U\subseteq B\ne\mathbb Q\)。
3. 向下封闭：若 \(q\in U\)，则 \(q\in A\) 对某个 \(A\in S\)；若 \(p<q\)，由 \(A\) 向下封闭得 \(p\in A\subseteq U\)。
4. 无最大元：若 \(q\in U\)，则 \(q\in A\) 对某个 \(A\)；\(A\) 无最大元，故存在 \(r\in A\) 使 \(q<r\)，于是 \(r\in U\)。

所以 \(U\) 是分割。

**上界**：每个 \(A\in S\) 满足 \(A\subseteq U\)，所以 \(U\) 是上界。

**最小上界**：若 \(C\) 是任意上界，则每个 \(A\subseteq C\)，所以 \(U=\bigcup A\subseteq C\)。因此 \(U\) 是最小上界。证毕。

---

## 7. 实数完备性其余等价形式

第 3 层列出五种等价形式。本站只完整证明“Dedekind 分割 ⇒ 上确界性质”（§6）。

其余 implications 需要实分析中的单调有界定理、区间套定理、Bolzano–Weierstrass 定理；它们在第 5/6 层分析分支中证明。这里不把“等价”当作已证结论反复引用，只作为路线图。

---

## 8. 群同态基本定理 {#proof-group-iso}

设 \(\varphi:G\to H\) 是群同态，\(K=\ker\varphi\)。

**核正规**：对 \(k\in K\)、\(g\in G\)，

\[
\varphi(gkg^{-1})=\varphi(g)\varphi(k)\varphi(g)^{-1}=e,
\]

所以 \(gkg^{-1}\in K\)。

**定义**：令 \(\Phi:G/K\to\operatorname{im}\varphi\)，\(\Phi(gK)=\varphi(g)\)。

**良定义**：若 \(gK=hK\)，则 \(h^{-1}g\in K\)，所以

\[
\varphi(h)^{-1}\varphi(g)=\varphi(h^{-1}g)=e,
\]

故 \(\varphi(g)=\varphi(h)\)。

**同态**：

\[
\Phi(gK\cdot hK)=\Phi(ghK)=\varphi(gh)=\varphi(g)\varphi(h)=\Phi(gK)\Phi(hK).
\]

**单射**：若 \(\Phi(gK)=e\)，则 \(\varphi(g)=e\)，所以 \(g\in K\)，即 \(gK=K\)。

**满射**：任取 \(y\in\operatorname{im}\varphi\)，存在 \(g\) 使 \(y=\varphi(g)=\Phi(gK)\)。

所以 \(\Phi\) 是同构，\(G/K\cong\operatorname{im}\varphi\)。证毕。

---

## 9. 秩-零化度定理 {#proof-rank-nullity}

设 \(V\) 有限维，\(T:V\to W\) 线性。取 \(\ker T\) 的一组基

\[
v_1,\dots,v_k.
\]

把它扩充为 \(V\) 的基

\[
v_1,\dots,v_k,v_{k+1},\dots,v_n.
\]

**证明 \(T(v_{k+1}),\dots,T(v_n)\) 是 \(\operatorname{im}T\) 的基**：

**张成**：任取 \(v=\sum_{i=1}^n a_i v_i\)，则

\[
T(v)=\sum_{i=1}^n a_iT(v_i)=\sum_{i=k+1}^n a_iT(v_i),
\]

因为前 \(k\) 项在核中。

**线性无关**：若 \(\sum_{i=k+1}^n a_iT(v_i)=0\)，则

\[
T\left(\sum_{i=k+1}^n a_iv_i\right)=0,
\]

所以 \(\sum_{i=k+1}^n a_iv_i\in\ker T\)。但它又是 \(v_{k+1},\dots,v_n\) 的组合；核的基是 \(v_1,\dots,v_k\)。由基的线性无关性，所有 \(a_i=0\)。

因此 \(\dim\operatorname{im}T=n-k\)，即

\[
\dim V=\dim\ker T+\dim\operatorname{im}T.
\]

证毕。

---

## 10. 开球是开集 {#proof-open-ball}

设 \(y\in B(x,r)\)，令 \(s=r-d(x,y)>0\)。对任意 \(z\in B(y,s)\)，由三角不等式

\[
d(x,z)\le d(x,y)+d(y,z)<d(x,y)+s=r,
\]

所以 \(z\in B(x,r)\)。因此 \(B(y,s)\subseteq B(x,r)\)，即 \(B(x,r)\) 是开集。证毕。

---

## 11. 连续性的两种刻画 {#proof-continuity}

设 \(f:X\to Y\)，\(X,Y\) 是度量空间。

### ε-δ ⇒ 开集原像开

设 \(V\subseteq Y\) 开，\(x\in f^{-1}(V)\)。则 \(f(x)\in V\)，存在 \(\varepsilon>0\) 使 \(B_Y(f(x),\varepsilon)\subseteq V\)。由连续性，存在 \(\delta>0\) 使

\[
f(B_X(x,\delta))\subseteq B_Y(f(x),\varepsilon)\subseteq V.
\]

所以 \(B_X(x,\delta)\subseteq f^{-1}(V)\)，即 \(f^{-1}(V)\) 开。

### 开集原像开 ⇒ ε-δ

给定 \(x\) 和 \(\varepsilon>0\)，取 \(V=B_Y(f(x),\varepsilon)\)。\(V\) 开，所以 \(f^{-1}(V)\) 开且包含 \(x\)。存在 \(\delta>0\) 使 \(B_X(x,\delta)\subseteq f^{-1}(V)\)，即 \(f(B_X(x,\delta))\subseteq V\)。这正是 \(\varepsilon\)-\(\delta\) 定义。证毕。

---

## 12. 紧集的连续像是紧集 {#proof-compact-image}

设 \(f:X\to Y\) 连续，\(X\) 紧。取 \(f(X)\) 的任意开覆盖 \(\{V_i\}_{i\in I}\)。则

\[
\{f^{-1}(V_i)\}_{i\in I}
\]

是 \(X\) 的开覆盖。由 \(X\) 紧，存在有限子覆盖

\[
X=f^{-1}(V_{i_1})\cup\cdots\cup f^{-1}(V_{i_m}).
\]

于是

\[
f(X)\subseteq V_{i_1}\cup\cdots\cup V_{i_m}.
\]

所以 \(f(X)\) 紧。证毕。

---

## 13. 紧集上的极值定理 {#proof-evt}

设 \(X\) 非空紧，\(f:X\to\mathbb R\) 连续。由 §12，\(f(X)\) 是 \(\mathbb R\) 中的紧集，因此有界且闭。

令 \(M=\sup f(X)\)。由上确界定义，存在 \(x_n\in X\) 使 \(f(x_n)\to M\)。因为 \(f(X)\) 闭，\(M\in f(X)\)，所以存在 \(x\in X\) 使 \(f(x)=M\)。最小值同理。证毕。

---

## 14. 暂缓证明的定理：需要补什么

| 定理 | 暂缓原因 | 补证明所需 |
|---|---|---|
| 一阶逻辑完备性 | 需要证明系统、模型论 | 第 1 层后续/数理逻辑 |
| AC ⇔ Zorn ⇔ 良序 | 需要序数、超限递归 | 公理化集合论 |
| 实数完备性其余等价 | 需要单调有界/区间套/BW | 第 5–6 层分析 |
| 代数基本定理 | 需要复分析或拓扑 | 第 7 层复分析 |
| 谱定理 | 需要内积空间与归纳 | 第 4 层后续/线性代数 |
| Heine–Borel/BW | 需要实分析 | 第 5–6 层 |
| MCT/Fatou/DCT | 需要测度论 | 第 7 层 |
| Cauchy 积分/留数 | 需要复分析 | 第 7 层 |
| Hahn–Banach 等 | 需要泛函分析 | 第 7 层 |
| Gauss–Bonnet/Brouwer | 需要几何/代数拓扑 | 第 7 层 |


## 15. Banach 压缩映射原理 {#proof-banach}

**定理**：设 \((X,d)\) 完备，\(T:X\to X\) 满足

\[
d(Tx,Ty)\le q\,d(x,y),\qquad 0\le q<1.
\]

则 \(T\) 有唯一不动点。

**存在性**：任取 \(x_0\in X\)，令 \(x_{n+1}=T(x_n)\)。归纳得

\[
d(x_{n+1},x_{n+2})\le q\,d(x_n,x_{n+1})\le q^{n+1}d(x_0,x_1).
\]

对 \(m>n\)，由三角不等式与几何级数：

\[
d(x_n,x_m)\le\sum_{k=n}^{m-1}d(x_k,x_{k+1})
\le d(x_0,x_1)\sum_{k=n}^{m-1}q^k
\le \frac{q^n}{1-q}d(x_0,x_1)\to0.
\]

所以 \(\{x_n\}\) 是 Cauchy 列。\(X\) 完备，故 \(x_n\to x\)。由 \(T\) 的连续性（Lipschitz 蕴含连续），

\[
T(x)=\lim T(x_n)=\lim x_{n+1}=x.
\]

**唯一性**：若 \(x,y\) 都是不动点，则

\[
d(x,y)=d(Tx,Ty)\le q\,d(x,y),
\]

因为 \(0\le q<1\)，只能 \(d(x,y)=0\)，即 \(x=y\)。证毕。


## Rudin 章节证明状态

| 章 | 已给证明/提纲 | 暂缓 |
|---|---|---|
| 1 实数系 | 有序域、上确界、Archimedean、稠密、n 次根、Schwarz | 完备性其余等价形式 |
| 2 基础拓扑 | 开球、闭集、紧集闭/有界、闭子集紧、连通区间、连续像连通 | Heine–Borel 完整证明 |
| 3 数列级数 | 极限唯一、有界、单调收敛、绝对收敛、M 判别 | Cauchy 准则、BW、根/比判别细节 |
| 4 连续性 | 序列刻画、复合、紧像、介值、一致连续提纲 | 单调函数间断点计数 |
| 5 微分 | 可导⇒连续、求导法则、Rolle/MVT/Cauchy MVT、Darboux 提纲 | Taylor 余项、L'Hôpital |
| 6 RS 积分 | 加细、可积准则、连续×单调、性质、分部积分提纲 | 有界变差、换元 |
| 7 函数列 | 一致收敛保持连续/积分、M 判别、导数交换提纲 | Arzelà–Ascoli、Stone–Weierstrass |
| 8 特殊函数 | 指数律、对数性质、三角恒等式、Gamma 递推 | Fourier 收敛、Parseval |
| 9 多元 | 线性变换连续、可微⇒连续、压缩映射（链接） | 反函数/隐函数/秩定理 |
| 10 微分形式 | d²=0、∂²=0、Stokes 思路 | Poincaré 引理 |
| 11 Lebesgue | MCT/Fatou/DCT 陈述与关系 | 完整测度论证明、Riesz–Fischer |

> 这张表是“章节级”索引；具体定理页内的状态标记更细。暂缓不等于错误，只表示本站尚未展开完整证明。

## 参考

- [Propositional calculus](https://en.wikipedia.org/wiki/Propositional_calculus)
- [Equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation)
- [Cantor's theorem](https://en.wikipedia.org/wiki/Cantor%27s_theorem)
- [Schröder–Bernstein theorem](https://en.wikipedia.org/wiki/Schr%C3%B6der%E2%80%93Bernstein_theorem)
- [Dedekind cut](https://en.wikipedia.org/wiki/Dedekind_cut)
- [Isomorphism theorem](https://en.wikipedia.org/wiki/Isomorphism_theorem)
- [Rank–nullity theorem](https://en.wikipedia.org/wiki/Rank%E2%80%93nullity_theorem)
- [Compact space](https://en.wikipedia.org/wiki/Compact_space)
- [Extreme value theorem](https://en.wikipedia.org/wiki/Extreme_value_theorem)
