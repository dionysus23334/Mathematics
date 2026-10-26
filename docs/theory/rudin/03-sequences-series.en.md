# Chapter 3 · Sequences and Series

> **Status**: Expanded. Core theorems are either proved or explicitly marked "deferred"; an outline is not treated as a complete proof.  
> **Part of**: Rudin System · Chapter 3 · Sequences and Series  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 3.

## Prerequisites

- Logic, sets, number systems;
- Chapter 2: metric spaces, compactness;
- Spaces, Limits, and Continuity: the preliminary language of convergence of sequences.

## 3.1 Convergence and Basic Properties {#r3-1}
A sequence \(\{a_n\}\subseteq\mathbb R\) converges to \(a\) if

\[
\forall\varepsilon>0,\ \exists N,\ \forall n>N:\ |a_n-a|<\varepsilon.
\]

### Theorem 3.1 (Uniqueness of the Limit)

A convergent sequence has a unique limit.

**Proof**: Suppose \(a_n\to a\) and \(a_n\to b\), and take \(\varepsilon=|a-b|/2\) (if \(a\ne b\)). There exists \(N\) such that for \(n>N\) we have \(|a_n-a|<\varepsilon\) and \(|a_n-b|<\varepsilon\). Then

\[
|a-b|\le|a-a_n|+|a_n-b|<2\varepsilon=|a-b|,
\]

a contradiction. Hence \(a=b\). Q.E.D.

### Theorem 3.2 (Convergent ⇒ Bounded)

A convergent sequence is bounded.

**Proof**: Take \(\varepsilon=1\); there exists \(N\) such that \(|a_n-a|<1\) for \(n>N\). Put

\[
M=\max\{|a_1|,\dots,|a_N|,|a|+1\},
\]

then \(|a_n|\le M\) for every term. Q.E.D.

### Theorem 3.3 (Monotone and Bounded ⇒ Convergent)

If \(\{a_n\}\) is monotonically increasing and bounded above, then \(a_n\to\sup\{a_n\}\).

**Proof**: Let \(L=\sup\{a_n\}\). For any \(\varepsilon>0\), \(L-\varepsilon\) is not an upper bound, so there exists \(N\) with \(a_N>L-\varepsilon\). By monotonicity, for \(n>N\),

\[
L-\varepsilon<a_N\le a_n\le L,
\]

hence \(|a_n-L|<\varepsilon\). Q.E.D.

## 3.2 Subsequences, Cauchy Sequences, and Completeness {#r3-2}
**Subsequence**: \(\{a_{n_k}\}\), where \(n_1<n_2<\cdots\).

### Theorem 3.4 (Convergent ⇒ Subsequences Converge)

If \(a_n\to a\), then every subsequence also converges to \(a\).

**Proof**: Given \(\varepsilon>0\), take the \(N\) of the original sequence; since \(n_k\ge k\), for \(k>N\) we have \(n_k>N\), hence \(|a_{n_k}-a|<\varepsilon\). Q.E.D.

**Cauchy sequence**:

\[
\forall\varepsilon>0,\ \exists N,\ \forall m,n>N:\ |a_m-a_n|<\varepsilon.
\]

### Theorem 3.5 (Cauchy Criterion)

A sequence in \(\mathbb R\) converges \(\iff\) it is a Cauchy sequence.

**Proof outline**:

- Convergent ⇒ Cauchy: use the triangle inequality;
- Cauchy ⇒ bounded: take \(\varepsilon=1\); only finitely many terms lie outside the interval;
- By Bolzano–Weierstrass, extract a convergent subsequence \(a_{n_k}\to a\);
- Use the Cauchy property together with the convergence of the subsequence to prove \(a_n\to a\).

The complete proof depends on BW; this site marks BW as deferred (see below).

### Theorem 3.6 (Bolzano–Weierstrass)

Every bounded sequence in \(\mathbb R^n\) has a convergent subsequence.

**Proof status**: Complete proof deferred. The usual method: repeatedly bisect the interval, choosing the half containing infinitely many terms, to obtain nested intervals; take the intersection point by the nested interval theorem, then extract a subsequence.

## 3.3 Limit Superior and Limit Inferior {#r3-3}
\[
\limsup_{n\to\infty}a_n=\lim_{n\to\infty}\sup_{k\ge n}a_k,
\qquad
\liminf_{n\to\infty}a_n=\lim_{n\to\infty}\inf_{k\ge n}a_k.
\]

The values \(\pm\infty\) are allowed. If \((a_n)\) is bounded, then \(\limsup a_n\) is the largest subsequential limit and \(\liminf a_n\) is the smallest subsequential limit.

### Theorem 3.7 (Convergence ↔ Equality of Limit Superior and Limit Inferior)

A bounded sequence \(\{a_n\}\) converges \(\iff\)

\[
\liminf a_n=\limsup a_n.
\]

In that case the limit equals the common value.

**Proof outline**: If the sequence converges to \(a\), then both the suprema and the infima of the tails tend to \(a\); conversely, if the limit superior and the limit inferior both equal \(a\), the definition yields a squeeze.

## 3.4 Series {#r3-4}
The series \(\sum a_n\) converges if the partial sums

\[
s_n=a_1+\cdots+a_n
\]

converge.

### Theorem 3.8 (Necessary Condition for Convergence)

If \(\sum a_n\) converges, then \(a_n\to0\).

**Proof**: \(a_n=s_n-s_{n-1}\to s-s=0\). Q.E.D.

The converse fails: the harmonic series \(\sum 1/n\) diverges.

### Theorem 3.9 (Absolute Convergence ⇒ Convergence)

If \(\sum|a_n|\) converges, then \(\sum a_n\) converges.

**Proof**: Let \(p_n=\max(a_n,0)\) and \(q_n=\max(-a_n,0)\). Then \(0\le p_n,q_n\le|a_n|\), so by the comparison test \(\sum p_n,\sum q_n\) converge; since \(a_n=p_n-q_n\), it follows that \(\sum a_n\) converges. Q.E.D.

### Theorem 3.10 (Ratio and Root Tests)

Suppose \(a_n\ne0\).

- If \(\limsup |a_{n+1}/a_n|<1\), then \(\sum a_n\) converges absolutely;
- If \(\liminf |a_{n+1}/a_n|>1\), then \(\sum a_n\) diverges;
- If \(\limsup |a_n|^{1/n}<1\), then the series converges absolutely;
- If \(\limsup |a_n|^{1/n}>1\), then the series diverges.

**Proof outline**: Compare with a geometric series; for the root test, \(|a_n|^{1/n}\le q<1\) yields \(|a_n|\le q^n\).

### Theorem 3.11 (Power Series)

For a power series \(\sum c_n x^n\), there exists a radius of convergence \(R\in[0,\infty]\) such that

\[
|x|<R\Rightarrow\text{absolute convergence},\qquad |x|>R\Rightarrow\text{divergence}.
\]

Moreover,

\[
\frac1R=\limsup_{n\to\infty}|c_n|^{1/n}.
\]

The series converges uniformly on compact subsets of \(|x|<R\).

**Proof outline**: Apply the root test to \(\sum c_nx^n\); uniform convergence on compact subsets follows from the Weierstrass test (Chapter 7).

## Exercises {#r3-ex}
### Basic

1. Find the limit: \(\displaystyle \lim_{n\to\infty}\frac{3n^2+2}{n^2-n}\).
2. Prove: if \(a_n\to a\), then \(|a_n|\to|a|\); is the converse true?
3. Determine the convergence of the series \(\sum \frac{1}{n^2}\), \(\sum \frac{1}{n}\), \(\sum \frac{(-1)^n}{n}\).

### Intermediate

4. Prove that \(\lim_{n\to\infty}n^{1/n}=1\).
5. Find the radius of convergence and the interval of convergence of \(\sum_{n=1}^\infty \frac{x^n}{n}\).
6. Give an example of a bounded sequence that does not converge, yet for which \(\limsup\) and \(\liminf\) both exist and are unequal.

### Challenge

7. Prove: if \(\sum a_n\) converges absolutely, then every rearrangement converges to the same value.
8. Prove: if \(a_n>0\) and \(\sum a_n\) converges, then \(\sum \sqrt{a_n}/n\) converges (hint: Cauchy–Schwarz).

> Hint: In Exercise 8, pair \(\sqrt{a_n}\) with \(1/n\), estimate by finite sums, and then pass to the limit.

## Interfaces with the Regular System

- Spaces, Limits, and Continuity: [Spaces, Limits, and Continuity](../05-spaces.md)
- Chapter 2: [Basic Topology](02-basic-topology.md)
- Chapter 7: [Sequences and Series of Functions](07-function-sequences.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r3-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 3.
- [Limit of a sequence](https://en.wikipedia.org/wiki/Limit_of_a_sequence)
- [Cauchy sequence](https://en.wikipedia.org/wiki/Cauchy_sequence)
- [Series (mathematics)](https://en.wikipedia.org/wiki/Series_(mathematics))
