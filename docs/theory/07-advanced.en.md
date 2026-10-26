# Advanced Theory and Interdisciplinary Fields

> **Source**: Standard textbooks and Wikipedia entries on measure theory, complex analysis, functional analysis, differential geometry, and algebraic topology.

> **Prerequisites**: The corresponding branch for each branch. Every advanced route must list its prerequisites separately; it is not acceptable to gloss over them with "having studied mathematical analysis".

| Advanced field | Main content that must be completed before entry | Connected chapters |
|---|---|---|
| Measure theory and Lebesgue integration | Countable operations on sets, real analysis, sequences of functions and convergence | Sets, Spaces, Branches |
| Axiomatic probability theory | Measure theory and integration | Advanced: Measure Theory |
| Complex analysis | Complex numbers, the relevant foundations of single-variable and multivariable analysis | Number Systems, Spaces, Branches |
| Functional analysis | Linear algebra, metric spaces, normed spaces; some routes require measure and integration | Algebra, Spaces, Advanced |
| Differential geometry | Multivariable calculus, linear algebra, foundations of topology | Algebra, Spaces, Branches |
| Algebraic topology | Topology, group theory, and the corresponding algebraic tools | Algebra, Branches |
| Algebraic number theory | Rings, fields, field extensions, and further algebra | Algebra, Branches |
| Analytic number theory | Number theory, and the relevant parts of real and complex analysis | Branches, Advanced |
| Differential equations | Linear algebra, calculus; deeper analysis added according to the topic | Algebra, Spaces, Branches |
| Optimization | Linear algebra, calculus, foundations of convex analysis | Algebra, Spaces, Branches |
| Numerical analysis | Linear algebra, calculus, error and stability | Algebra, Spaces, Branches |

## Entry Rules

1. **Before measure theory**: one must be able to handle countable unions/intersections, suprema, sequences of functions, and uniform convergence fluently; otherwise return first to the two chapters on sets and spaces.
2. **Before complex analysis**: one must understand complex arithmetic, series, continuity, and differentiability; it is not sufficient to have studied limits only in the real case and then enter directly.
3. **Before functional analysis**: one must master normed spaces, completeness, and linear operators; having studied only matrix computations is not enough.
4. **Before differential geometry**: one must master multivariable differentiation, the implicit function theorem, linear algebra, and the foundations of topology.
5. **Before algebraic topology**: one must master group theory (quotient groups, homomorphisms) and general topology (quotient spaces, compactness).
6. **Before axiomatic probability theory**: measure theory must first be completed; one must not take "probability = frequency" as an axiom.

## Relations Among the Advanced Routes

- Measure theory is the foundation of axiomatic probability theory, functional analysis (in part), and harmonic analysis;
- Complex analysis serves both analytic number theory and differential geometry/physics;
- Algebraic topology depends on topology and group theory, and further connects to homological algebra;
- Differential geometry depends on analysis, linear algebra, and topology, and further connects to geometric analysis;
- Algebraic number theory depends on commutative algebra and field theory, while analytic number theory depends on complex analysis.

## Marking of Deferred Proofs

Some conclusions in advanced theory (such as the Riemann mapping theorem, Hahn–Banach, and Sylow's theorem) have very long proofs. The site permits:

- **Complete proof**: all details are given;
- **Proof outline**: the key steps and the dependencies are stated clearly;
- **Deferred proof**: the page states explicitly "this page does not prove it for now; only the conclusion is used", and lists the required prerequisites.

What is not permitted is to use a conclusion directly as a definition without citing a source and without stating the prerequisites.


## 7.1 Measure and Integration: Core Results

A measure \(\mu\) on a measurable space \((\Omega,\mathcal F)\) satisfies:

1. \(\mu(\varnothing)=0\);
2. non-negativity;
3. **Countable additivity**: if the \(A_i\) are pairwise disjoint, then \(\mu\left(\bigcup_{i=1}^\infty A_i\right)=\sum_{i=1}^\infty\mu(A_i)\).

Core convergence theorems (**deferred proofs** on this site; they require measure theory):

- **Monotone Convergence Theorem (MCT)**: if \(0\le f_n\uparrow f\) and the \(f_n\) are measurable, then \(\int f_n\to\int f\);
- **Fatou's Lemma**: \(\int\liminf f_n\le\liminf\int f_n\);
- **Dominated Convergence Theorem (DCT)**: if the \(f_n\) are measurable, \(f_n\to f\) a.e., and \(|f_n|\le g\) with \(\int g<\infty\), then \(\int f_n\to\int f\).

These theorems are the formal conditions for "interchanging the integral and the limit"; the Riemann integral has no general theorem of comparable strength.

## 7.2 Complex Analysis: Core Results

- **Cauchy's Integral Theorem**: the integral of a holomorphic function around a closed path in a simply connected domain is 0;
- **Cauchy's Integral Formula**: \(f(z)=\frac1{2\pi i}\oint_\gamma\frac{f(\zeta)}{\zeta-z}d\zeta\);
- **Liouville's Theorem**: a bounded entire function is constant (this yields a proof of the Fundamental Theorem of Algebra);
- **Residue Theorem**: \(\oint_\gamma f(z)dz=2\pi i\sum\operatorname{Res}(f,z_k)\).

The heart of complex analysis is that "holomorphic" is far stronger than "real differentiable": holomorphic functions are automatically analytic and possess derivatives of all orders. The theorems above are **deferred proofs** on this site.

## 7.3 Functional Analysis: Core Results

- **Hahn–Banach Theorem**: under suitable conditions (a real or complex vector space, control by a sublinear functional or a seminorm), a linear functional can be extended with its norm preserved;
- **Open Mapping Theorem**: a continuous linear surjection between Banach spaces is an open mapping;
- **Closed Graph Theorem**: a linear mapping between Banach spaces whose graph is closed is bounded (continuous);
- **Uniform Boundedness Principle (Banach–Steinhaus)**: a family of linear operators that is pointwise bounded is uniformly bounded.

These theorems depend on completeness (Banach spaces) and cannot be used at the level of linear spaces alone; they are **deferred proofs** on this site.

## 7.4 Geometry and Topology: Core Results

- **Gauss–Bonnet Theorem**: the Euler characteristic of a compact surface is determined by the integral of the Gaussian curvature;
- **Fundamental Group**: \(\pi_1(X,x_0)\) records the "holes" of a space;
- **Brouwer Fixed-Point Theorem**: a continuous mapping from the closed unit ball in \(\mathbb R^n\) to itself has a fixed point;
- **Mayer–Vietoris**: computes homology by means of a cover by subspaces.

## 7.5 References

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

## Checkpoints

- Be able to explain why measure theory requires countable operations rather than only finite ones.
- Be able to list the three core prerequisites of complex analysis, functional analysis, and differential geometry, respectively.
- Be able to explain the difference between a "deferred proof" and a "circular argument".
