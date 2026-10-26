# Chapter 2 · Basic Topology

> **Status**: Expanded. Theorems carrying a "deferred proof" are explicitly labelled; an outline is not treated as a complete proof.  
> **Belongs to**: Rudin System · Chapter 2 · Basic Topology  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 2; Munkres, *Topology* (the topology part).

## Prerequisites

- Regular System: logic, sets, number systems, algebra;
- Spaces, Limits, and Continuity: metric spaces, convergence, and the basic language of continuity.

## 2.1 Metric Spaces {#r2-1}
A **metric space** is a set \(X\) equipped with a function \(d:X\times X\to[0,\infty)\) satisfying

\[
d(x,y)=0\iff x=y,\qquad d(x,y)=d(y,x),\qquad d(x,z)\le d(x,y)+d(y,z).
\]

**Open ball**:

\[
B(x,r)=\{y\in X:d(x,y)<r\}.
\]

**Open set**: \(U\subseteq X\) is open if for every \(x\in U\) there exists \(r>0\) such that \(B(x,r)\subseteq U\).  
**Closed set**: the complement is open.

### Theorem 2.1 (Every Open Ball Is Open)

Every open ball \(B(x,r)\) is an open set.

**Proof**: Let \(y\in B(x,r)\) and set \(s=r-d(x,y)>0\). For any \(z\in B(y,s)\),

\[
d(x,z)\le d(x,y)+d(y,z)<d(x,y)+s=r,
\]

hence \(B(y,s)\subseteq B(x,r)\). This completes the proof.

### Theorem 2.2 (Closed Sets ↔ Open Sets)

\(F\subseteq X\) is closed \(\iff F^c\) is open.

**Proof**: By definition, \(F\) is closed precisely when \(F^c\) is open; the converse holds likewise. This completes the proof.

### Theorem 2.3 (Characterisation of the Closure)

Let \(E\subseteq X\). Then

\[
\overline E=E\cup E',
\]

where \(E'\) is the set of limit points of \(E\). Moreover, \(x\in\overline E\) if and only if every \(B(x,r)\) meets \(E\).

**Proof outline**: If \(x\in\overline E\) and some \(B(x,r)\cap E=\varnothing\), then \(E\subseteq B(x,r)^c\), and \(B(x,r)^c\) is closed, so \(\overline E\subseteq B(x,r)^c\), a contradiction. Conversely, if every ball meets \(E\), then \(x\) belongs to every closed set containing \(E\), hence \(x\in\overline E\). The details are supplied from the definition of a closed set.

## 2.2 Compactness {#r2-2}
**Open cover**: \(\{U_i\}\) is an open cover of \(K\) if \(K\subseteq\bigcup_i U_i\).  
**Compact**: every open cover has a finite subcover.

### Theorem 2.4 (Compact Sets Are Closed)

A compact set \(K\) in a metric space is closed.

**Proof**: Take \(p\notin K\). For each \(q\in K\), set \(r_q=d(p,q)/2>0\). The balls \(B(q,r_q)\) cover \(K\); by compactness there exist finitely many \(q_1,\dots,q_m\) such that

\[
K\subseteq\bigcup_{j=1}^m B(q_j,r_{q_j}).
\]

Let

\[
\rho=\min_{1\le j\le m} d(p,q_j)>0.
\]

Then \(B(p,\rho/2)\) is disjoint from every \(B(q_j,r_{q_j})\), hence disjoint from \(K\). Therefore \(p\) is not in the closure, and \(K\) is closed. This completes the proof.

### Theorem 2.5 (Compact Sets Are Bounded)

A compact set \(K\) is bounded: there exist \(p\in X\) and \(R>0\) such that \(K\subseteq B(p,R)\).

**Proof**: Choose any \(p\in X\). The family of balls \(\{B(p,n):n\in\mathbb N\}\) covers \(K\); compactness yields a finite subcover, and we take \(R\) to be the largest radius. This completes the proof.

### Theorem 2.6 (Closed Subsets of Compact Sets Are Compact)

If \(K\) is compact and \(F\subseteq K\) is closed (in \(X\)), then \(F\) is compact.

**Proof**: Take an open cover \(\{U_i\}\) of \(F\). Adjoining \(F^c\) yields an open cover of \(K\); since \(K\) is compact, we extract a finite subcover. Removing \(F^c\), the remaining sets \(U_i\) cover \(F\). This completes the proof.

### Theorem 2.7 (Heine–Borel, R^n)

\(K\subseteq\mathbb R^n\) is compact \(\iff K\) is bounded and closed.

**Proof status**: the full proof is deferred; it requires the completeness of \(\mathbb R^n\), the Bolzano–Weierstrass theorem, and a finite-subcover argument. The idea of the proof is "bounded closed set \(\Rightarrow\) sequentially compact \(\Rightarrow\) compact", where sequential compactness is obtained by coordinate bisection.

## 2.3 Connectedness {#r2-3}
**Separation**: \(X=A\cup B\), with \(A,B\) non-empty, disjoint, and both open (equivalently, both closed).  
**Connected**: no such separation exists.

### Theorem 2.8 (Connected Subsets of R Are Intervals)

\(E\subseteq\mathbb R\) is connected \(\iff E\) is an interval.

**Proof**: If \(E\) is not an interval, there exist \(a<b<c\) with \(a,c\in E\) and \(b\notin E\). Then

\[
E=(E\cap(-\infty,b))\cup(E\cap(b,\infty))
\]

is a union of non-empty disjoint open sets (in the relative topology), hence disconnected.

Conversely, suppose \(E\) is an interval and \(E=A\cup B\) is a separation. Take \(a\in A,b\in B\), and assume without loss of generality that \(a<b\). Let

\[
c=\sup(A\cap[a,b]).
\]

Since \(A\) is relatively closed, \(c\in A\); since \(B\) is relatively open, for \(c<b\) we have \(c+\varepsilon\in B\) for all sufficiently small \(\varepsilon\), which makes \(A\cap[a,b]\) admit a larger upper bound, a contradiction; if \(c=b\), then \(b\in A\cap B\), again a contradiction. Therefore \(E\) is connected. This completes the proof.

### Theorem 2.9 (Continuous Images of Connected Sets)

A continuous mapping sends connected sets to connected sets.

**Proof**: If \(f(E)=A\cup B\) is a separation, then \(E=f^{-1}(A)\cup f^{-1}(B)\) is a separation (the preimage of an open set under a continuous mapping is open), a contradiction. This completes the proof.

## 2.4 The Cantor Set {#r2-4}
Begin with \([0,1]\) and delete the middle third at each step:

\[
C_0=[0,1],\quad C_1=[0,\tfrac13]\cup[\tfrac23,1],\quad C_{n+1}\subset C_n,
\]

and let

\[
C=\bigcap_{n=0}^\infty C_n.
\]

**Properties**:

1. \(C\) is compact and non-empty;
2. \(C\) is perfect (it has no isolated points);
3. \(C\) is nowhere dense;
4. \(C\) is uncountable.

**Idea of the uncountability proof**: the points whose ternary expansion uses only the digits \(0,1,2\) but never \(1\) belong to \(C\); encoding a \(0/2\) sequence as a binary sequence yields \(2^{\aleph_0}\) points. Distinct binary sequences give distinct points (apart from countably many points of ternary ambiguity), so \(C\) is uncountable.

## Exercises {#r2-ex}
### Basic

1. Prove that the union of finitely many compact sets is compact, and that the intersection of arbitrarily many closed sets is closed.
2. In a discrete metric space, which sets are compact? Which sets are connected?
3. Prove that \(\mathbb Q\cap[0,1]\) is not compact (construct an open cover with no finite subcover).

### Advanced

4. Prove that every infinite subset of a compact metric space has a limit point.
5. Prove that the continuous image of a connected set is connected; give an example of a connected set whose image under a continuous mapping is not closed.
6. Prove that the Cantor set has no isolated points and is nowhere dense.

### Challenge

7. Prove that the Cantor set is uncountable, and explain its cardinality relation to \(2^{\mathbb N}\).
8. Prove that in a metric space, "compact \(\iff\) sequentially compact \(\iff\) complete and totally bounded". (This may be completed after the BW theorem in Chapter 3.)

> Hint: for Exercise 8, first prove "compact \(\Rightarrow\) sequentially compact" by contradiction using open covers; then prove "sequentially compact \(\Rightarrow\) complete and totally bounded"; finally, use total boundedness together with completeness to construct a finite subcover.

## Interface with the Regular System

- Spaces, Limits, and Continuity: [Spaces, Limits, and Continuity](../05-spaces.md)
- Chapter 3: [Sequences and Series](03-sequences-series.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r2-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 2.
- [Metric space](https://en.wikipedia.org/wiki/Metric_space)
- [Compact space](https://en.wikipedia.org/wiki/Compact_space)
- [Cantor set](https://en.wikipedia.org/wiki/Cantor_set)
