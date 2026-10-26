# Chapter 4 · Continuity

> **Status**: Expanded. Core theorems are either proved or explicitly marked "deferred".  
> **Part of**: Rudin System · Chapter 4 · Continuity  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 4.

## Prerequisites

- Sets and number systems;
- Chapter 2: compactness, connectedness;
- Spaces, Limits, and Continuity: the preliminary definitions of metric spaces and continuous mappings.

## 4.1 Limits of Functions {#r4-1}
Let \(E\subseteq X\), let \(f:E\to Y\), and let \(p\) be a limit point of \(E\). We write

\[
\lim_{x\to p}f(x)=q
\]

if

\[
\forall\varepsilon>0,\ \exists\delta>0,\ 0<d_X(x,p)<\delta\Rightarrow d_Y(f(x),q)<\varepsilon.
\]

**Continuity**: \(f\) is continuous at \(p\in E\) if \(\lim_{x\to p}f(x)=f(p)\) (when \(p\) is an isolated point it is automatically continuous).

### Theorem 4.1 (Continuity ↔ Sequential Continuity)

\(f\) is continuous at \(p\) \(\iff\) for every \(x_n\to p\) (with \(x_n\in E\)), we have \(f(x_n)\to f(p)\).

**Proof sketch**:

- Continuity ⇒ sequences: use the \(\varepsilon\)-\(\delta\) definition;
- Sequences ⇒ continuity: suppose not; then there is \(\varepsilon>0\) such that for every \(n\) one can choose \(x_n\) with \(d(x_n,p)<1/n\) but \(d(f(x_n),f(p))\ge\varepsilon\), contradicting sequential continuity.

## 4.2 Continuous Mappings {#r4-2}
### Theorem 4.2 (Composition of Continuous Maps)

If \(f:X\to Y\) is continuous at \(p\) and \(g:Y\to Z\) is continuous at \(f(p)\), then \(g\circ f\) is continuous at \(p\).

**Proof**: Given \(\varepsilon>0\), choose \(\eta>0\) such that \(d_Y(y,f(p))<\eta\Rightarrow d_Z(g(y),g(f(p)))<\varepsilon\); then choose \(\delta>0\) such that \(d_X(x,p)<\delta\Rightarrow d_Y(f(x),f(p))<\eta\). This completes the proof.

### Theorem 4.3 (Continuous Image of a Compact Set)

A continuous mapping carries compact sets to compact sets, and connected sets to connected sets.

**Proof**: For the compact part see [proof page §12](../proofs.md#proof-compact-image); for the connected part see Theorem 2.9 of Chapter 2. This completes the proof.

### Theorem 4.4 (Extreme Value Theorem)

A real-valued continuous function on a non-empty compact set is bounded and attains its maximum and minimum.

**Proof**: See [proof page §13](../proofs.md#proof-evt).

### Theorem 4.5 (Intermediate Value Theorem)

If \(f:[a,b]\to\mathbb R\) is continuous and \(f(a)<c<f(b)\), then there exists \(\xi\in(a,b)\) such that \(f(\xi)=c\).

**Proof**: Let \(S=\{x\in[a,b]:f(x)<c\}\). \(S\) is non-empty and bounded above; let \(\xi=\sup S\). By continuity, \(f(\xi)\le c\). If \(f(\xi)<c\), then \(f(x)<c\) still holds in a neighbourhood of \(\xi\), contradicting that \(\xi\) is an upper bound. Hence \(f(\xi)=c\). This completes the proof.

## 4.3 Uniform Continuity {#r4-3}
\(f:X\to Y\) is uniformly continuous if

\[
\forall\varepsilon>0,\ \exists\delta>0,\ \forall x,y\in X:\ d_X(x,y)<\delta\Rightarrow d_Y(f(x),f(y))<\varepsilon.
\]

### Theorem 4.6 (Continuous on a Compact Set ⇒ Uniformly Continuous)

A continuous function on a compact metric space is uniformly continuous.

**Proof sketch**: Given \(\varepsilon>0\), for each \(p\) choose \(\delta_p\) such that \(f(B(p,\delta_p))\subseteq B(f(p),\varepsilon/2)\). The balls \(B(p,\delta_p/2)\) cover \(X\); take a finite subcover \(p_1,\dots,p_m\) and set \(\delta=\min\delta_{p_i}/2\). If \(d(x,y)<\delta\), choose \(p_i\) with \(x\in B(p_i,\delta_{p_i}/2)\); then \(y\in B(p_i,\delta_{p_i})\), so that \(d(f(x),f(y))<\varepsilon\).

## 4.4 Points of Discontinuity and Monotone Functions {#r4-4}
**Discontinuity of the first kind**: both one-sided limits exist; **of the second kind**: at least one of them fails to exist.  
**Jump discontinuity**: both one-sided limits exist but are unequal.

### Theorem 4.7 (Points of Discontinuity of a Monotone Function)

A monotone function on an interval has at most countably many points of discontinuity, and all of them are jump discontinuities.

**Proof sketch**: Each point of discontinuity \(x\) corresponds to a non-empty open interval \((f(x-),f(x+))\); distinct points of discontinuity correspond to disjoint intervals, and each interval contains a rational number, so there are at most countably many.

## Exercises {#r4-ex}
### Basic

1. Use the definition to prove that \(f(x)=x^2\) is continuous on \(\mathbb R\).
2. Determine whether \(f(x)=1/x\) is uniformly continuous on \((0,1)\).
3. Find the limit of \(f(x)=\sin(1/x)\) at \(x=0\); state whether it admits a continuous extension.

### Intermediate

4. Prove that a continuous function carries connected sets to connected sets.
5. Prove that if \(f\) is continuous and strictly monotone on \([a,b]\), then \(f^{-1}\) is continuous.
6. Construct a function that is discontinuous at every point of \([0,1]\).

### Challenge

7. Prove that a continuous function on a compact set is uniformly continuous (fill in the details of Theorem 4.6).
8. Prove that a monotone function has only jump discontinuities, and at most countably many of them.

> Hint: In Exercise 8, associate each interval of jump with a rational number; note the endpoint cases.

## Interface with the Regular System

- Spaces, Limits, and Continuity: [Spaces, Limits, and Continuity](../05-spaces.md)
- Chapter 3: [Sequences and Series](03-sequences-series.md)
- Chapter 5: [Differentiation](05-differentiation.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r4-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 4.
- [Continuous function](https://en.wikipedia.org/wiki/Continuous_function)
- [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity)
- [Intermediate value theorem](https://en.wikipedia.org/wiki/Intermediate_value_theorem)
