# 4 · 基本代数结构与线性空间

> **出处**：标准抽象代数教材；Wikipedia: Group、Ring、Field、Vector space。

> **前置**：第 2–3 层（集合、映射、等价关系、数系）。  
> **这一层的目标**：从具体数系中抽象出共同结构，并建立线性代数的语言。

## 4.1 运算与代数结构

集合 \(A\) 上的**二元运算**是一个映射 \(A\times A\to A\)。它必须对每个有序对给出唯一结果，并且结果仍在 \(A\) 中（封闭）。

一个代数结构 = 集合 + 若干运算 + 这些运算满足的公理。

## 4.2 群 {#algebra-groups}

群 \((G,\cdot)\) 满足：

1. **结合律**：\((ab)c=a(bc)\)；
2. **单位元**：存在 \(e\in G\)，使 \(ea=ae=a\)；
3. **逆元**：每个 \(a\in G\) 存在 \(a^{-1}\)，使 \(aa^{-1}=a^{-1}a=e\)。

若还满足交换律 \(ab=ba\)，称为**阿贝尔群**。

例子：\((\mathbb Z,+)\)、\((\mathbb Q\setminus\{0\},\cdot)\)、\(GL_n(\mathbb R)\)（可逆矩阵乘法）、置换群 \(S_n\)。

**子群**：\(H\subseteq G\) 非空，且对乘法与逆元封闭。拉格朗日定理：有限群中子群的阶整除群的阶。

## 4.3 环与域 {#algebra-rings}

环 \((R,+,\cdot)\) 满足：\((R,+)\) 是阿贝尔群；乘法结合；乘法对加法分配。

- **交换环**：乘法交换；
- **含幺环**：存在乘法单位元 \(1\)；
- **整环**：交换含幺、无零因子（\(ab=0\to a=0\) 或 \(b=0\)）。

**域**是每个非零元素都有乘法逆元的交换含幺环。例子：\(\mathbb Q,\mathbb R,\mathbb C,\mathbb F_p\)（\(p\) 为素数）。

## 4.4 同态与同构

保持运算的映射叫**同态**：

- 群同态：\(\varphi(ab)=\varphi(a)\varphi(b)\)；
- 环同态：\(\varphi(a+b)=\varphi(a)+\varphi(b)\)，\(\varphi(ab)=\varphi(a)\varphi(b)\)。

双射同态叫**同构**。同构的两个结构在代数上“相同”，只是元素名字不同。

**核**：\(\ker\varphi=\{g:\varphi(g)=e\}\)。群同态基本定理：\(G/\ker\varphi\cong \operatorname{im}\varphi\)。

## 4.5 向量空间 {#algebra-vector}

设 \(F\) 是域。向量空间 \(V\) 是一个阿贝尔群，配有数乘 \(F\times V\to V\)，满足：

\[
1v=v,\qquad a(bv)=(ab)v,
\]

\[
a(u+v)=au+av,\qquad (a+b)v=av+bv.
\]

元素叫向量，\(F\) 叫基域。\(\mathbb R^n\) 是最典型的例子。

## 4.6 基、维数与线性映射 {#algebra-basis}

- **线性组合**：\(\sum_{i=1}^n a_i v_i\)；
- **张成**：\(V\) 中每个向量都可写成有限线性组合；
- **线性无关**：若 \(\sum a_i v_i=0\)，则所有 \(a_i=0\)；
- **基**：线性无关且张成 \(V\)。

若 \(V\) 有一组含 \(n\) 个向量的基，则任意基都含 \(n\) 个向量，称 \(n\) 为**维数**。

**线性映射** \(T:V\to W\) 满足 \(T(au+bv)=aT(u)+bT(v)\)。线性映射由它在一组基上的取值唯一决定。

## 4.7 矩阵与线性方程组

选定基后，线性映射表示为矩阵；复合对应矩阵乘法。线性方程组 \(Ax=b\) 的解集：

- 齐次 \(Ax=0\) 的解空间是核；
- 非齐次若有解，则解集是一个仿射子空间（特解 + 齐次解）。

**秩-零化度定理**：

\[
\dim V=\dim\ker T+\dim\operatorname{im}T.
\]

## 4.8 行列式、特征值与内积 {#algebra-spectral}

- **行列式**：交错多重线性函数，满足 \(\det(AB)=\det A\det B\)；\(\det A\ne0\) 当且仅当 \(A\) 可逆。
- **特征值/特征向量**：\(Av=\lambda v\)，\(v\ne0\)。特征多项式 \(\det(A-\lambda I)=0\)。
- **内积**：正定、对称/共轭对称、对第一变量线性；诱导范数 \(\|v\|=\sqrt{\langle v,v\rangle}\)。
- **正交**：\(\langle u,v\rangle=0\)；正交基使坐标计算简化。

## 依赖与边界

这一层只讲**基础定义与典型例子**。完整的群论（Sylow、可解群）、交换代数（理想、局部化）、域扩张（Galois 理论）属于第 6 层代数分支。

进入分析前，需要的是：实数/复数域、向量空间、内积、范数、线性映射与矩阵；不需要先学完整套高等代数。


## 4.9 群同态基本定理

设 \(\varphi:G\to H\) 是群同态，则 \(\ker\varphi\) 是 \(G\) 的正规子群，且

\[
G/\ker\varphi\cong\operatorname{im}\varphi.
\]

同构由 \(g\ker\varphi\mapsto\varphi(g)\) 给出。这个定理把“同态的像”转化为“商群”，是群论中最早的结构定理之一；完整证明见[证明页 §8](proofs.md#proof-group-iso)。

**推论**：\(\varphi\) 是单射 \(\iff \ker\varphi=\{e\}\)。

## 4.10 秩-零化度定理

设 \(V,W\) 是域 \(F\) 上的有限维向量空间，\(T:V\to W\) 线性，则

\[
\dim V=\dim\ker T+\dim\operatorname{im}T.
\]

等价地，\(\operatorname{rank}T+\operatorname{nullity}T=\dim V\)。它说明线性映射“丢失的维数”与“保留的维数”之和等于定义域维数；完整证明见[证明页 §9](proofs.md#proof-rank-nullity)。

**推论**：若 \(\dim V=\dim W\)，则 \(T\) 单射 \(\iff\) 满射 \(\iff\) 可逆。

## 4.11 实对称矩阵的谱定理

若 \(A\) 是实对称矩阵（\(A=A^{\mathsf T}\)），则：

1. \(A\) 的特征值全为实数；
2. 属于不同特征值的特征向量正交；
3. 存在正交矩阵 \(Q\) 使 \(A=Q\Lambda Q^{\mathsf T}\)，其中 \(\Lambda\) 是对角矩阵，对角元为特征值。

也就是说，实对称矩阵有一组正交单位特征向量构成 \(\mathbb R^n\) 的基。复厄米特矩阵有类似的酉对角化。本站**暂缓证明**（需内积空间与归纳）。

## 4.12 参考

- [Group (mathematics)](https://en.wikipedia.org/wiki/Group_(mathematics))
- [Ring (mathematics)](https://en.wikipedia.org/wiki/Ring_(mathematics))
- [Field (mathematics)](https://en.wikipedia.org/wiki/Field_(mathematics))
- [Vector space](https://en.wikipedia.org/wiki/Vector_space)
- [Rank–nullity theorem](https://en.wikipedia.org/wiki/Rank%E2%80%93nullity_theorem)
- [Spectral theorem](https://en.wikipedia.org/wiki/Spectral_theorem)
- [Isomorphism theorem](https://en.wikipedia.org/wiki/Isomorphism_theorem)

## 检查点

- 能验证一个集合配某运算是否构成群/环/域。
- 能区分同态、同构、自同构。
- 能证明基的向量个数不依赖基的选择（有限维）。
- 能叙述秩-零化度定理并用它判断方程组解的结构。
