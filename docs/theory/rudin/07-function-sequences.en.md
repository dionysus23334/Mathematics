# Chapter 7 · Sequences of Functions and Series of Functions

> **Status**: Expanded. Proofs are supplied for the core theorems on uniform convergence; Arzelà–Ascoli and Stone–Weierstrass are stated with their guiding ideas.  
> **Part of**: Rudin System · Chapter 7 · Sequences of Functions and Series of Functions  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 7.

## Prerequisites

- Continuity, differentiation, integration;
- Chapter 3: series;
- Chapter 2: compactness.

## 7.1 Pointwise and Uniform Convergence {#r7-1}
A sequence of functions \(f_n:X\to Y\) **converges pointwise** to \(f\) if for every \(x\), \(f_n(x)\to f(x)\).  
**Uniform convergence**: if

\[
\forall\varepsilon>0,\ \exists N,\ \forall n>N,\ \forall x\in X:\ d_Y(f_n(x),f(x))<\varepsilon.
\]

Equivalently, \(\sup_{x\in X}d_Y(f_n(x),f(x))\to0\).

### Theorem 7.1 (Uniform convergence ⇒ pointwise convergence)

Uniform convergence implies pointwise convergence.

**Proof**: Immediate from the definition. Q.E.D.

### Theorem 7.2 (Uniform convergence preserves continuity)

If \(f_n\) is continuous and \(f_n\rightrightarrows f\) converges uniformly, then \(f\) is continuous.

**Proof**: Given \(\varepsilon>0\), choose \(N\) such that \(d(f_n(x),f(x))<\varepsilon/3\) for all \(x\) whenever \(n>N\). Fix \(n>N\); since \(f_n\) is continuous, choose \(\delta>0\) such that \(d(x,y)<\delta\Rightarrow d(f_n(x),f_n(y))<\varepsilon/3\). Then

\[
d(f(x),f(y))\le d(f(x),f_n(x))+d(f_n(x),f_n(y))+d(f_n(y),f(y))<\varepsilon.
\]

Q.E.D.

### Theorem 7.3 (Interchange of uniform convergence and integration)

If \(f_n\) is continuous on \([a,b]\) and \(f_n\rightrightarrows f\), then

\[
\int_a^b f_n\to\int_a^b f.
\]

**Proof**:

\[
\left|\int f_n-\int f\right|\le\int|f_n-f|\le(b-a)\|f_n-f\|_\infty\to0.
\]

Q.E.D.

### Theorem 7.4 (Interchange of uniform convergence and differentiation)

If \(f_n\) is differentiable on \([a,b]\), \(f_n(x_0)\) converges, and \(f_n'\) converges uniformly to \(g\) on \([a,b]\), then \(f_n\) converges uniformly to some \(f\), and \(f'=g\).

**Proof sketch**: Use the MVT on \(f_n-f_m\) to control the difference and first establish uniform convergence; then pass to the limit in

\[
f_n(x)=f_n(x_0)+\int_{x_0}^x f_n'(t)\,dt
\]

and apply Theorem 7.3 to obtain \(f(x)=f(x_0)+\int g\), so that \(f'=g\).

## 7.2 Series of Functions {#r7-2}
If the partial sums of \(\sum f_n\) converge uniformly, the series is said to converge uniformly.

### Theorem 7.5 (Weierstrass M-test)

If \(|f_n(x)|\le M_n\) and \(\sum M_n<\infty\), then \(\sum f_n\) converges uniformly.

**Proof**: By the Cauchy criterion, for \(m>n\),

\[
\left|\sum_{k=n+1}^m f_k(x)\right|\le\sum_{k=n+1}^m M_k\to0,
\]

independently of \(x\), hence the series is uniformly Cauchy. Q.E.D.

## 7.3 Equicontinuity and Arzelà–Ascoli {#r7-3}
A family of functions \(\mathcal F\subseteq C(X,Y)\) is **equicontinuous** if for every \(\varepsilon>0\) there exists \(\delta>0\) such that \(d(f(x),f(y))<\varepsilon\) for all \(f\in\mathcal F\) whenever \(d(x,y)<\delta\).

### Theorem 7.6 (Arzelà–Ascoli)

If \(X\) is compact and \(\mathcal F\subseteq C(X,\mathbb R^n)\) is uniformly bounded and equicontinuous, then \(\mathcal F\) contains a subsequence that converges in the uniform metric.

**Proof status**: Full proof deferred. Idea: take a countable dense subset of \(X\) and use the diagonal argument to extract a pointwise convergent subsequence; equicontinuity then upgrades pointwise convergence to uniform convergence.

### Theorem 7.7 (Stone–Weierstrass)

If \(X\) is compact and \(\mathcal A\subseteq C(X,\mathbb R)\) is an algebra of functions containing the constants and separating points (for any \(x\ne y\) there exists \(f\in\mathcal A\) with \(f(x)\ne f(y)\)), then \(\mathcal A\) is uniformly dense in \(C(X,\mathbb R)\).

**Proof status**: Full proof deferred. The classical proof uses the Weierstrass approximation theorem together with lattice methods.

## Exercises {#r7-ex}
### Basic

1. Determine whether \(f_n(x)=x^n\) converges uniformly on \([0,1]\).
2. Determine whether \(f_n(x)=x/n\) converges uniformly on \(\mathbb R\).
3. Use the M-test to prove that \(\sum x^n/n!\) converges uniformly on every bounded interval.

### Intermediate

4. Prove that uniform convergence preserves continuity (complete Theorem 7.2).
5. Construct a sequence of continuous functions converging pointwise to a discontinuous function, showing that pointwise convergence does not suffice.
6. Prove that if \(f_n\) converges uniformly and each \(f_n\) is bounded, then the limit is bounded.

### Challenge

7. Prove the Arzelà–Ascoli theorem (one may first prove the case \(X=[0,1]\)).
8. Use Stone–Weierstrass to prove that the polynomials are uniformly dense in \(C[0,1]\).

> Hint: for Exercise 8, take \(\mathcal A\) to be the algebra of polynomials, verify that it contains the constants and separates points, and then invoke the theorem.

## Interface with the Regular System

- Chapter 3: [Sequences and Series](03-sequences-series.md)
- Chapter 4: [Continuity](04-continuity.md)
- Chapter 8: [Special Functions](08-special-functions.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r7-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 7.
- [Uniform convergence](https://en.wikipedia.org/wiki/Uniform_convergence)
- [Arzelà–Ascoli theorem](https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem)
- [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem)
