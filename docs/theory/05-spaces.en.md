# Spaces, Limits, and Continuity

> **Sources**: Rudin, Chapter 2; Munkres, Topology; Wikipedia: Metric space, Compact space.

> **Prerequisite**: number systems and algebra (real numbers, vector spaces, inner products, linear maps).  
> **Goal of this chapter**: to turn "distance, closeness, continuity" from intuition into a language that admits proof. Rudin's system of analysis enters at this point.

## 5.1 Euclidean Spaces, Norms, and Distance

The Euclidean norm on \(\mathbb R^n\):

\[
\|x\|_2=\sqrt{x_1^2+\cdots+x_n^2}.
\]

The distance is \(d(x,y)=\|x-y\|_2\). More generally, a **norm** on a vector space satisfies:

1. \(\|x\|\ge0\), and \(\|x\|=0\iff x=0\);
2. \(\|\alpha x\|=|\alpha|\|x\|\);
3. \(\|x+y\|\le\|x\|+\|y\|\).

A norm induces the distance \(d(x,y)=\|x-y\|\). A distance satisfies positive definiteness, symmetry, and the triangle inequality.

## 5.2 Metric Spaces {#spaces-metric}

A set \(X\) equipped with a distance \(d:X\times X\to[0,\infty)\) satisfying:

\[
d(x,y)=0\iff x=y,\qquad d(x,y)=d(y,x),\qquad d(x,z)\le d(x,y)+d(y,z).
\]

Examples: \(\mathbb R^n\), the discrete metric, the supremum metric on function spaces, and the \(L^1\) metric on \(C[0,1]\).

**Open ball**:

\[
B(x,r)=\{y\in X:d(x,y)<r\}.
\]

## 5.3 Open Sets, Closed Sets, Neighborhoods, and Limit Points {#spaces-open}

- \(U\) is an **open set**: \(\forall x\in U,\ \exists r>0,\ B(x,r)\subseteq U\);
- \(F\) is a **closed set**: \(X\setminus F\) is open;
- **Neighborhood**: a set that contains some open ball and contains \(x\);
- **Limit point**: every neighborhood of \(x\) contains a point of \(A\) distinct from \(x\);
- **Closure** \(\overline A\): the union of \(A\) and all its limit points.

**Key equivalence**: \(F\) is closed \(\iff\) the limit of every convergent sequence in \(F\) still lies in \(F\) (metric spaces).

## 5.4 Sequences, Convergence, and Completeness

\(x_n\to x\) is defined by:

\[
\forall\varepsilon>0,\ \exists N,\ \forall n>N:\ d(x_n,x)<\varepsilon.
\]

**Cauchy sequence**:

\[
\forall\varepsilon>0,\ \exists N,\ \forall m,n>N:\ d(x_m,x_n)<\varepsilon.
\]

A convergent sequence is necessarily a Cauchy sequence; the converse need not hold. In a **complete** metric space every Cauchy sequence converges. \(\mathbb R^n\) is complete; \(\mathbb Q\) is not complete.

## 5.5 Compactness and Connectedness {#spaces-compact}

- **Compact**: every open cover has a finite subcover. In a metric space this is equivalent to "every sequence has a convergent subsequence" (sequential compactness).
- **Heine–Borel**: a subset of \(\mathbb R^n\) is compact \(\iff\) it is bounded and closed.
- **Connected**: it cannot be written as the union of two non-empty disjoint open sets; the connected subsets of \(\mathbb R\) are the intervals.
- **Properties of continuous functions on compact sets**: boundedness, attainment of maximum and minimum, uniform continuity.

## 5.6 Limits of Functions and Continuous Mappings {#spaces-continuity}

\(f:X\to Y\) is continuous at \(x_0\):

\[
\forall\varepsilon>0,\ \exists\delta>0,\ d_X(x,x_0)<\delta\to d_Y(f(x),f(x_0))<\varepsilon.
\]

Equivalent characterizations: the preimage of an open set is open; \(x_n\to x_0\) implies \(f(x_n)\to f(x_0)\).

**Uniform continuity**: \(\delta\) does not depend on \(x_0\). A continuous function on a compact set is uniformly continuous.

## 5.7 General Topological Spaces {#spaces-topology}

Take "open set" as the primitive structure: a topology \(\tau\subseteq\mathcal P(X)\) is required to contain \(\varnothing,X\), and to be closed under arbitrary unions and finite intersections. Metric spaces are a special case of topological spaces.

General topology can branch off from this point as an independent route; classical calculus requires only the foundations of metric spaces, and one need not first study general topology in its entirety.

## Where the Rudin Analysis Route Belongs

Rudin's Principles of Mathematical Analysis begins with the real number system and the language of topological/metric spaces, then proceeds to sequences and series, continuity, differentiation, integration, sequences of functions and uniform convergence, and multivariable analysis. The correspondence with this system is:

1. number systems: completeness of the real numbers;
2. spaces: metric spaces and continuity;
3. branches: the analysis branch (series → differentiation/integration → sequences of functions → multivariable).

A complete course in abstract algebra is not required first, but norms, inner products, and linear maps from linear algebra are required.


## 5.8 Equivalent Characterizations of Completeness {#spaces-complete}

In a metric space \((X,d)\):

- \(X\) is complete \(\iff\) every Cauchy sequence converges;
- \(X\) is complete \(\iff\) every absolutely convergent series converges (in the context of normed spaces);
- in \(\mathbb R^n\), complete \(\iff\) every bounded closed set is complete;
- **Contraction mapping principle (Banach)**: if \(T:X\to X\) satisfies \(d(Tx,Ty)\le qd(x,y)\) (\(0\le q<1\)) and \(X\) is complete, then \(T\) has a unique fixed point; for the complete proof see [proofs page §15](proofs.md#proof-banach).

The contraction mapping principle is a common tool for the existence and uniqueness of ordinary differential equations and for the convergence of numerical iterations.

## 5.9 Compactness: Heine–Borel and Bolzano–Weierstrass

**Heine–Borel (\(\mathbb R^n\))**: a subset \(K\subseteq\mathbb R^n\) is compact \(\iff\) \(K\) is bounded and closed. This site **defers the proof** (it requires real analysis).

**Bolzano–Weierstrass**: every bounded sequence in \(\mathbb R^n\) has a convergent subsequence.

In a metric space:

\[
\text{compact}\iff\text{sequentially compact}\iff\text{complete and totally bounded}.
\]

**Note**: in a general topological space, compactness, sequential compactness, and limit point compactness need not be equivalent; conditions such as first countability or metrizability are required.

## 5.10 Continuous Functions on Compact and Connected Sets

- a continuous mapping carries compact sets to compact sets;
- a continuous mapping carries connected sets to connected sets;
- a real-valued continuous function on a non-empty compact set is bounded and attains its maximum and minimum (**extreme value theorem**); for the complete proof see [proofs page §12–13](proofs.md#proof-compact-image).
- a continuous function on a compact set is uniformly continuous;
- the intermediate value theorem for continuous functions on \(\mathbb R\): if \(f\) is continuous on \([a,b]\) and \(f(a)<c<f(b)\), then there exists \(\xi\in(a,b)\) such that \(f(\xi)=c\).

These conclusions are a common source of "existence" proofs in analysis: first prove compactness/connectedness, then take an extremum or apply the intermediate value theorem. For the proof of the open-preimage characterization of continuity and of the continuous image of a compact set, see [proofs page §11–12](proofs.md#proof-continuity).

## 5.11 References

- [Metric space](https://en.wikipedia.org/wiki/Metric_space)
- [Topological space](https://en.wikipedia.org/wiki/Topological_space)
- [Compact space](https://en.wikipedia.org/wiki/Compact_space)
- [Continuous function](https://en.wikipedia.org/wiki/Continuous_function)
- [Heine–Borel theorem](https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem)
- [Bolzano–Weierstrass theorem](https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem)
- [Banach fixed-point theorem](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem)

## Checkpoints

- Be able to prove that a union of open balls is open and that the complement of a closed set is open.
- Be able to distinguish convergence, the Cauchy property, and completeness.
- Be able to explain why a continuous function on a compact set attains its maximum.
- Be able to write down the \(\varepsilon\)-\(\delta\) definition of a continuous mapping and the open-preimage characterization, and to prove that they are equivalent.
