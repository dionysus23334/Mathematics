# Natural Numbers and the Construction of Number Systems

> **Sources**: Rudin, Chapter 1; Peano axioms, Dedekind cut.

> **Prerequisite**: logic and sets (proofs, sets, equivalence relations, mappings).  
> **Goal of this chapter**: not merely to "recognize the various kinds of numbers", but to explain how they are obtained and why their operations are valid.

## 3.1 Natural Numbers {#numbers-peano}

The natural numbers can be characterized by the **Peano axioms** (starting from an initial object and a successor operation):

1. \(0\in\mathbb N\);
2. there exists a successor mapping \(S:\mathbb N\to\mathbb N\);
3. \(S(n)\ne 0\) for all \(n\);
4. \(S\) is injective;
5. if \(A\subseteq\mathbb N\) contains \(0\), and \(n\in A\to S(n)\in A\), then \(A=\mathbb N\).

Axiom 5 is precisely the **principle of induction**. It allows a proof that a statement holds "for all natural numbers" to be divided into two steps: the base case and the inductive step.

**Recursive definition**: if the new value at each step depends only on the preceding step (or on finitely many preceding steps), then a function may be defined recursively on \(\mathbb N\). For example, the factorial:

\[
0!=1,\qquad (n+1)!=(n+1)\cdot n!.
\]

## 3.2 Operations on Natural Numbers and Divisibility

- Addition: \(m+0=m\), \(m+S(n)=S(m+n)\);
- Multiplication: \(m\cdot 0=0\), \(m\cdot S(n)=m\cdot n+m\);
- Order: \(a\le b\) if and only if there exists \(k\) such that \(a+k=b\).

**Division algorithm**: for \(a\in\mathbb Z\) and \(b>0\), there exist unique \(q,r\) such that

\[
a=bq+r,\qquad 0\le r<b.
\]

**Prime**: a natural number greater than 1 whose only positive divisors are 1 and itself. **Fundamental theorem of arithmetic**: every natural number greater than 1 admits a unique factorization into a product of primes (order disregarded).

## 3.3 The Integers

The integers may be regarded as equivalence classes of pairs of natural numbers:

\[
(a,b)\sim(c,d)\iff a+d=b+c.
\]

Intuitively, \((a,b)\) represents \(a-b\). Addition and multiplication are defined by

\[
[(a,b)]+[(c,d)]=[(a+c,b+d)],
\]

\[
[(a,b)]\cdot[(c,d)]=[(ac+bd,\ ad+bc)].
\]

One must verify that these definitions are independent of the choice of representatives (well-defined). The integers make subtraction closed.

## 3.4 The Rational Numbers

The rational numbers may be regarded as equivalence classes of pairs of integers:

\[
(a,b)\sim(c,d)\iff ad=bc,\qquad b,d\ne 0.
\]

\((a,b)\) represents \(a/b\). Addition, multiplication, and order are induced by the operations on the integers; one must exclude the zero denominator and verify well-definedness. The rational numbers make division (by non-zero numbers) closed, and they are **dense**: between any two rational numbers there lies another rational number.

## 3.5 The Real Numbers and Dedekind Cuts {#numbers-real}

Although the rational numbers are dense, they are not complete: for example, \(\sqrt2\) is not rational. One way to construct the real numbers is the **Dedekind cut**.

A set \(A\subseteq\mathbb Q\) is called a cut if:

1. \(A\ne\varnothing\) and \(A\ne\mathbb Q\);
2. if \(a\in A\) and \(b<a\), then \(b\in A\) (closed downward);
3. \(A\) has no greatest element.

Each cut represents a real number; the rational number \(q\) corresponds to the cut \(\{x\in\mathbb Q:x<q\}\). The operations and the order on the real numbers are defined by inclusion, union, translation, and the like on cuts.

**Completeness (least-upper-bound property)**: every non-empty subset of the real numbers that is bounded above has a supremum. This is the foundation of the results of analysis concerning limits, continuity, compactness, and the like.

> One may also construct the real numbers by means of Cauchy sequences; this requires the language of limits and metrics first, and is therefore placed later as "another construction". The advantage of the Dedekind cut is that it does not depend on the theory of limits.

## 3.6 The Complex Numbers

The complex numbers may be regarded as pairs of real numbers \((a,b)\), with the definitions

\[
(a,b)+(c,d)=(a+c,b+d),
\]

\[
(a,b)\cdot(c,d)=(ac-bd,\ ad+bc).
\]

Writing \(i=(0,1)\), we have \((a,b)=a+bi\) and \(i^2=-1\). The field of complex numbers is algebraically closed: every non-constant polynomial with complex coefficients has a root (the fundamental theorem of algebra).

## 3.7 Finite, Countable, and Uncountable Sets {#numbers-cardinality}

- Sets \(A\) and \(B\) are **equinumerous** if there exists a bijection \(A\to B\);
- **Finite**: equinumerous with some \(\{1,\dots,n\}\);
- **Countably infinite**: equinumerous with \(\mathbb N\);
- **Uncountable**: neither finite nor countably infinite.

Cantor's theorem: \(|A|<|\mathcal P(A)|\), hence \(\mathbb R\) is uncountable. Finite unions and countable unions of countable sets remain countable; \(\mathbb Q\) is countable and \(\mathbb R\) is uncountable.

## Dependency Rules

- The natural numbers must precede induction;
- The integers/rational numbers must follow equivalence classes and quotient sets;
- Completeness of the reals must precede the theory of limits;
- The complex numbers must follow the arithmetic of the reals;
- Comparison of cardinalities must follow bijections.


## 3.8 Equivalent Forms of Completeness of the Real Numbers

In the ordered field \(\mathbb R\), the following properties are equivalent (under the assumption that the Archimedean property holds):

1. **Supremum property**: every non-empty subset that is bounded above has a supremum;
2. **Monotone convergence**: every bounded monotone sequence converges;
3. **Nested intervals**: the intersection of a nested sequence of closed intervals is non-empty (when the lengths tend to 0, the intersection is a single point);
4. **Bolzano–Weierstrass**: every bounded sequence has a convergent subsequence;
5. **Cauchy completeness**: every Cauchy sequence converges.

Different textbooks start from different properties and then derive the others as theorems. This site constructs \(\mathbb R\) from Dedekind cuts, and therefore takes the supremum property as the first completeness theorem following the definition; for the complete proof of the supremum property see [proofs page §6](proofs.md#proof-dedekind). The remaining equivalent forms are **deferred for proof**.

**Archimedean property**: for every \(x\in\mathbb R\) there exists \(n\in\mathbb N\) such that \(n>x\). It guarantees that \(\mathbb N\) is unbounded in \(\mathbb R\), and it is also the foundation of "\(\frac1n\to0\)".

## 3.9 The Fundamental Theorem of Algebra

Every polynomial of degree \(n\ge1\) with complex coefficients

\[
p(z)=a_nz^n+\cdots+a_1z+a_0,\qquad a_n\ne0
\]

has at least one root in \(\mathbb C\); hence it factors as

\[
p(z)=a_n\prod_{k=1}^n(z-z_k)
\]

(multiplicities counted). This shows that \(\mathbb C\) is algebraically closed; but \(\mathbb R\) is not (\(x^2+1\) has no real root).

The proof may be given by complex analysis (Liouville's theorem) or by algebraic topology (winding number); this site treats it as a conclusion concerning "properties of the field of complex numbers" and **defers the proof**, which is placed in the complex analysis branch.

## 3.10 Cardinality and the Continuum

- \(\mathbb Q\) is countable: one may enumerate by the height of the numerator and denominator;
- \(\mathbb R\) is uncountable: Cantor's diagonal argument;
- \(|\mathbb R|=|\mathcal P(\mathbb N)|=2^{\aleph_0}\);
- **Continuum hypothesis (CH)**: \(2^{\aleph_0}=\aleph_1\). CH is independent of ZFC: it can be neither proved nor refuted (Gödel 1938, Cohen 1963).

> Note: uncountable does not mean "one more than \(\mathbb N\)"; the comparison of cardinalities is defined by means of bijections/injections.

## 3.11 References

- [Peano axioms](https://en.wikipedia.org/wiki/Peano_axioms)
- [Dedekind cut](https://en.wikipedia.org/wiki/Dedekind_cut)
- [Construction of the real numbers](https://en.wikipedia.org/wiki/Construction_of_the_real_numbers)
- [Completeness of the real numbers](https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers)
- [Fundamental theorem of algebra](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra)
- [Continuum hypothesis](https://en.wikipedia.org/wiki/Continuum_hypothesis)

## Checkpoints

- Be able to write down the Peano axioms and explain why induction is valid.
- Be able to construct the integers or the rational numbers by means of equivalence classes, and verify that the operations are well-defined.
- Be able to explain how a Dedekind cut expresses \(\sqrt2\).
- Be able to prove that \(\mathbb Q\) is countable and \(\mathbb R\) is uncountable (at least state the idea of the diagonal argument).
