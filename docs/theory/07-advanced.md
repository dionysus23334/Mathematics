# 7 · 深入理论与交叉领域

> **前置**：第 6 层相应分支。每一条深入路线都必须单独列前置，不能用“数学分析学过”一笔带过。

| 深入领域 | 进入前必须完成的主要内容 | 与前面哪一层连接 |
|---|---|---|
| 测度论与 Lebesgue 积分 | 集合的可数运算、实分析、函数列与收敛 | 第 2、5、6 层 |
| 公理化概率论 | 测度论与积分 | 第 7 层测度论 |
| 复分析 | 复数、单变量与多变量分析的相关基础 | 第 3、5、6 层 |
| 泛函分析 | 线性代数、度量空间、赋范空间；部分路线需测度与积分 | 第 4–5、7 层 |
| 微分几何 | 多变量微积分、线性代数、拓扑基础 | 第 4–6 层 |
| 代数拓扑 | 拓扑学、群论及相应代数工具 | 第 4、6 层 |
| 代数数论 | 环、域、域扩张及进一步代数 | 第 4、6 层 |
| 解析数论 | 数论、实分析与复分析的相关部分 | 第 6、7 层 |
| 微分方程 | 线性代数、微积分；按专题补充更深分析 | 第 4–6 层 |
| 优化 | 线性代数、微积分、凸分析基础 | 第 4–6 层 |
| 数值分析 | 线性代数、微积分、误差与稳定性 | 第 4–6 层 |

## 进入规则

1. **测度论之前**：必须能熟练处理可数并/交、上确界、函数列与一致收敛；否则先回第 2、5 层。
2. **复分析之前**：必须理解复数运算、级数、连续与可微；不要只在实数情形学过极限就直接进入。
3. **泛函分析之前**：必须掌握赋范空间、完备性、线性算子；只学过矩阵计算不够。
4. **微分几何之前**：必须掌握多变量微分、隐函数定理、线性代数与拓扑基础。
5. **代数拓扑之前**：必须掌握群论（商群、同态）与一般拓扑（商空间、紧致）。
6. **公理化概率论之前**：必须先完成测度论；不要把“概率=频率”当成公理。

## 深入路线之间的关系

- 测度论是公理化概率论、泛函分析（部分）、调和分析的基础；
- 复分析既服务解析数论，也服务微分几何/物理；
- 代数拓扑依赖拓扑与群论，进一步连接同调代数；
- 微分几何依赖分析、线性代数、拓扑，进一步连接几何分析；
- 代数数论依赖交换代数与域论，解析数论依赖复分析。

## 暂缓证明的标记

深入理论中有些结论（如 Riemann 映射定理、Hahn–Banach、Sylow 定理）证明很长。网站允许：

- **完整证明**：给出全部细节；
- **证明提纲**：写清关键步骤与依赖；
- **暂缓证明**：明确写“本页暂不证明，只使用结论”，并列出所需前置。

不允许的是：不标注来源、不说明前置，直接把结论当定义使用。


## 7.1 测度与积分：核心结论

测度 \(\mu\) 在可测空间 \((\Omega,\mathcal F)\) 上满足：

1. \(\mu(\varnothing)=0\)；
2. 非负性；
3. **可数可加性**：若 \(A_i\) 两两不交，则
\[
\mu\left(\bigcup_{i=1}^\infty A_i\right)=\sum_{i=1}^\infty\mu(A_i).
\]

核心收敛定理（本站**暂缓证明**，需测度论）：

- **单调收敛定理（MCT）**：若 \(0\le f_n\uparrow f\) 且 \(f_n\) 可测，则 \(\int f_n\to\int f\)；
- **Fatou 引理**：\(\int\liminf f_n\le\liminf\int f_n\)；
- **控制收敛定理（DCT）**：若 \(f_n\) 可测、\(f_n\to f\) a.e.，且 \(|f_n|\le g\)、\(\int g<\infty\)，则 \(\int f_n\to\int f\)。

这些定理是“积分与极限交换”的正式条件；Riemann 积分没有同等的一般定理。

## 7.2 复分析：核心结论

- **Cauchy 积分定理**：全纯函数在单连通区域内的闭路积分为 0；
- **Cauchy 积分公式**：\(f(z)=\frac1{2\pi i}\oint_\gamma\frac{f(\zeta)}{\zeta-z}d\zeta\)；
- **Liouville 定理**：有界整函数为常数（可证代数基本定理）；
- **留数定理**：\(\oint_\gamma f(z)dz=2\pi i\sum\operatorname{Res}(f,z_k)\)。

复分析的核心是“全纯”比“实可微”强得多：全纯函数自动解析，具有无限阶导数。以上定理本站**暂缓证明**。

## 7.3 泛函分析：核心结论

- **Hahn–Banach 定理**：在适当条件下（实/复向量空间、次线性泛函或半范数控制），线性泛函可保范延拓；
- **开映射定理**：Banach 空间之间的连续线性满射是开映射；
- **闭图像定理**：Banach 空间之间的线性映射，若图像闭，则有界（连续）；
- **一致有界原理（Banach–Steinhaus）**：逐点有界的线性算子族一致有界。

这些定理依赖完备性（Banach 空间），不能只在线性空间层面使用；本站**暂缓证明**。

## 7.4 几何与拓扑：核心结论

- **Gauss–Bonnet 定理**：紧致曲面的 Euler 示性数由高斯曲率积分决定；
- **基本群**：\(\pi_1(X,x_0)\) 记录空间的“洞”；
- **Brouwer 不动点定理**：\(\mathbb R^n\) 中闭单位球到自身的连续映射有不动点；
- **Mayer–Vietoris**：用子空间覆盖计算同调。

## 7.5 参考

- [Measure (mathematics)](https://en.wikipedia.org/wiki/Measure_(mathematics))
- [Lebesgue integration](https://en.wikipedia.org/wiki/Lebesgue_integration)
- [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem)
- [Complex analysis](https://en.wikipedia.org/wiki/Complex_analysis)
- [Residue theorem](https://en.wikipedia.org/wiki/Residue_theorem)
- [Functional analysis](https://en.wikipedia.org/wiki/Functional_analysis)
- [Hahn–Banach theorem](https://en.wikipedia.org/wiki/Hahn%E2%80%93Banach_theorem)
- [Differential geometry](https://en.wikipedia.org/wiki/Differential_geometry)
- [Algebraic topology](https://en.wikipedia.org/wiki/Algebraic_topology)
- [Brouwer fixed-point theorem](https://en.wikipedia.org/wiki/Brouwer_fixed-point_theorem)

## 检查点

- 能说明测度论为什么需要可数运算，而不是仅有限运算。
- 能列出复分析、泛函分析、微分几何各自的三条核心前置。
- 能解释“暂缓证明”与“循环论证”的区别。
