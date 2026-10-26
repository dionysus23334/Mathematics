# Chapter 11 · Lebesgue Theory

> **Status**: Expanded. Complete statements are given for measures, measurable functions, the integral, and the three convergence theorems; proofs are marked as deferred or outlined.  
> **Part of**: Rudin System · Chapter 11 · Lebesgue Theory  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 11.

## Prerequisites

- Chapter 2: topology, open sets;
- Chapter 3: series;
- Chapters 6–7: integration, uniform convergence;
- The overview of measure in Advanced Theory.

## 11.1 Measure {#r11-1}
Let \(\mathcal M\) be a \(\sigma\)-algebra on \(X\): it contains \(X\) and is closed under complements and countable unions.  
**A measure** \(\mu:\mathcal M\to[0,\infty]\) is a mapping satisfying:

1. \(\mu(\varnothing)=0\);
2. nonnegativity;
3. **countable additivity**: if the \(A_i\) are pairwise disjoint, then

\[
\mu\left(\bigcup_{i=1}^\infty A_i\right)=\sum_{i=1}^\infty\mu(A_i).
\]

\((X,\mathcal M,\mu)\) is called a measure space. **Lebesgue measure** is the unique Borel measure on \(\mathbb R^n\) that is translation-invariant and normalized (in the sense of completion).

## 11.2 Measurable Functions {#r11-2}
\(f:X\to[-\infty,\infty]\) is measurable if, for every \(a\in\mathbb R\),

\[
f^{-1}((a,\infty])\in\mathcal M.
\]

Equivalently, \(\{f>a\}\) is measurable for every \(a\).

**Properties**: Sums, products, limits, suprema, and infima of measurable functions are again measurable (under suitable conditions that avoid \(\infty-\infty\)).

### Theorem 11.1 (Approximation by Simple Functions)

A nonnegative measurable function \(f\) can be written as the pointwise increasing limit of a sequence of simple functions:

\[
f=\lim_{n\to\infty}\phi_n,\qquad 0\le\phi_1\le\phi_2\le\cdots
\]

**Proof outline**: Stratify the range in layers of \(2^{-n}\), truncate at \(n\), and construct \(\phi_n\).

## 11.3 The Lebesgue Integral {#r11-3}
For a nonnegative simple function \(\phi=\sum a_i\chi_{A_i}\), define

\[
\int\phi\,d\mu=\sum a_i\mu(A_i).
\]

For nonnegative measurable \(f\), define

\[
\int f\,d\mu=\sup\left\{\int\phi\,d\mu:0\le\phi\le f,\ \phi\text{ simple}\right\}.
\]

For a general measurable \(f\), write \(f=f^+-f^-\); if \(\int f^+,\int f^-<\infty\), we say that \(f\) is integrable and define

\[
\int f\,d\mu=\int f^+d\mu-\int f^-d\mu.
\]

### Theorem 11.2 (Monotone Convergence Theorem, MCT)

If \(0\le f_n\uparrow f\) and the \(f_n\) are measurable, then

\[
\int f_n\,d\mu\to\int f\,d\mu.
\]

**Proof status**: The full proof is deferred; use approximation by simple functions together with the interchange of suprema.

### Theorem 11.3 (Fatou's Lemma)

If \(f_n\ge0\) is measurable, then

\[
\int\liminf_{n\to\infty}f_n\,d\mu
\le\liminf_{n\to\infty}\int f_n\,d\mu.
\]

**Proof**: Apply MCT to \(g_n=\inf_{k\ge n}f_k\), and then compare with \(g_n\le f_n\).

### Theorem 11.4 (Dominated Convergence Theorem, DCT)

If the \(f_n\) are measurable, \(f_n\to f\) a.e., and there exists an integrable \(g\) such that \(|f_n|\le g\) a.e., then

\[
\int f_n\,d\mu\to\int f\,d\mu.
\]

**Proof**: Apply Fatou's lemma to \(g+f_n\ge0\) and to \(g-f_n\ge0\) separately, and squeeze out the conclusion. This completes the proof.

## 11.4 Relation to the Riemann Integral {#r11-4}
If \(f\) is Riemann integrable on \([a,b]\), then \(f\) is Lebesgue integrable, and the two integrals have the same value.  
The converse fails: the Dirichlet function \(\mathbf 1_{\mathbb Q}\) is not Riemann integrable, but its Lebesgue integral is 0 (because \(\mathbb Q\) has measure zero).

### Theorem 11.5 (Lebesgue Characterization of Riemann Integrability)

A bounded \(f:[a,b]\to\mathbb R\) is Riemann integrable \(\iff\) the set of discontinuities of \(f\) is a set of Lebesgue measure zero.

**Proof status**: The full proof is deferred; use the oscillation function and the definition of a set of measure zero.

## 11.5 L² Spaces {#r11-5}
\[
L^2(\mu)=\left\{f:\int|f|^2\,d\mu<\infty\right\},
\]

equipped with the inner product

\[
\langle f,g\rangle=\int f\overline g\,d\mu.
\]

### Theorem 11.6 (Riesz–Fischer)

\(L^2(\mu)\) is a complete inner product space (a Hilbert space).

**Proof status**: Deferred; take a subsequence of a Cauchy sequence that converges a.e., and then control it by means of Fatou's lemma.

## Exercises {#r11-ex}
### Basic

1. Prove that every countable set is a set of Lebesgue measure zero.
2. Determine whether \(\mathbf 1_{\mathbb Q}\) is Riemann integrable and whether it is Lebesgue integrable on \([0,1]\).
3. Use MCT to compute \(\int_0^1\sum_{n\ge1}x^n\,dx\).

### Advanced

4. Prove Fatou's lemma (from MCT).
5. Prove DCT (from Fatou's lemma).
6. Give an example showing that the hypothesis "the dominating function \(g\) is integrable" cannot be removed from DCT.

### Challenge

7. Prove the Riesz–Fischer theorem (one may first prove that every \(L^2\) Cauchy sequence has a subsequence that converges a.e.).
8. Prove: a bounded function is Riemann integrable if and only if its set of discontinuities is a set of measure zero.

> Hint: For Exercise 8, use the oscillation \(\omega(x)\) and the set \(\{x:\omega(x)\ge1/k\}\).

## Interface with the Regular System

- Chapter 6: [The Riemann–Stieltjes Integral](06-riemann-stieltjes.md)
- Chapter 7: [Sequences and Series of Functions](07-function-sequences.md)
- [Advanced Theory](../07-advanced.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r11-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 11.
- [Measure (mathematics)](https://en.wikipedia.org/wiki/Measure_(mathematics))
- [Lebesgue integration](https://en.wikipedia.org/wiki/Lebesgue_integration)
- [Dominated convergence theorem](https://en.wikipedia.org/wiki/Dominated_convergence_theorem)
