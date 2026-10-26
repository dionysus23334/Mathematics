# Chapter 1 · The Real and Complex Number Systems

> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 1; the number-systems chapter of the Regular System.
>
> **Rudin route**: this chapter is Chapter 1 of the analysis route; Chapters 2–11 have already been developed.  
> **Prerequisites**: propositional logic, sets and mappings, and the basic language of ordered fields.  
> **Goal of this chapter**: to raise "the real numbers are complete, the complex numbers admit arithmetic, and Euclidean space carries an inner product" from intuition to provable theorems.

<div class="book-nav">
  <a href="../../">← Theory Overview</a>
  <a href="../../05-spaces/">Spaces, Limits, and Continuity</a>
  <a href="../../proofs/">Proof Status</a>
</div>



## 1.1 Ordered Fields {#r1-1}
**Field** \((F,+,\cdot)\): \((F,+)\) is an abelian group, \((F\setminus\{0\},\cdot)\) is an abelian group, and multiplication distributes over addition.

**Ordered field**: there exists a total order \(\le\) such that

\[
x\le y\Rightarrow x+z\le y+z,
\]

\[
0\le x,\ 0\le y\Rightarrow 0\le xy.
\]

We write \(x<y\) to mean \(x\le y\) and \(x\ne y\).

### Theorem 1.1 (Basic Consequences of an Ordered Field)

Let \(x,y,z\in F\).

1. If \(x+y=x+z\), then \(y=z\);
2. If \(x+y=0\), then \(y=-x\);
3. \((-x)y=-(xy)\), \((-x)(-y)=xy\);
4. If \(x\ne0\), then \(x^{-1}\ne0\), and \((x^{-1})^{-1}=x\);
5. \(0<x\iff -x<0\);
6. If \(x>0,y>0\), then \(xy>0\); if \(x>0\), then \(x^{-1}>0\).

**Proof**:

**Step 1**: add \(-x\) to both sides,

\[
\begin{aligned}
y &= 0+y=(-x+x)+y\\
  &= -x+(x+y)=-x+(x+z)\\
  &= (-x+x)+z=z.
\end{aligned}
\]

**Step 2**: by Step 1, \(x+y=x+(-x)=0\), hence \(y=-x\).

**Step 3**: by the distributive law,

\[
0=x\cdot0=x(y+(-y))=xy+x(-y),
\]

so \(x(-y)=-(xy)\). Then \((-x)y=-(xy)\) yields \((-x)(-y)=xy\).

**Step 4**: if \(x^{-1}=0\), then \(1=xx^{-1}=0\), a contradiction; hence \(x^{-1}\ne0\). Also \(x^{-1}x=1\), so \((x^{-1})^{-1}=x\).

**Step 5**: \(0<x\iff -x<0\): it suffices to add \(-x\) to both sides.

**Step 6**: by the ordering, \(0<x,0<y\Rightarrow0<xy\). If \(x^{-1}<0\), then \(xx^{-1}<0\) (multiplying a positive \(x\) by a negative number), that is, \(1<0\), which contradicts \(1>0\); hence \(x^{-1}>0\).

This completes the proof.

## 1.2 Suprema and Completeness {#r1-2}
Let \(S\subseteq F\) be nonempty.

- \(u\) is an **upper bound** of \(S\): \(\forall s\in S,\ s\le u\);
- \(u\) is the **supremum** \(\sup S\): \(u\) is an upper bound, and every upper bound \(v\) satisfies \(u\le v\);
- lower bounds and the infimum \(\inf S\) are defined dually.

**Lemma 1.2 (Uniqueness of the Supremum)**: if \(\sup S\) exists, then it is unique.

**Proof**: if \(u,u'\) are both suprema, then \(u\) is an upper bound and \(u'\) is the least upper bound, so \(u'\le u\); likewise \(u\le u'\). By antisymmetry, \(u=u'\). This completes the proof.

**Least-upper-bound property (LUB)**: every nonempty subset that is bounded above has a supremum. Starting from an ordered field, Rudin takes LUB as the completeness axiom for, or construction result of, the real number system; the number systems on this site prove it by Dedekind cuts.

**Archimedean property**: for any \(x,y>0\) there exists \(n\in\mathbb N\) such that \(nx>y\).

## 1.3 The Archimedean Property and Density of the Rationals {#r1-3}
### Theorem 1.3 (Archimedean)

If \(x,y\in\mathbb R\) and \(x>0\), then there exists a positive integer \(n\) such that \(nx>y\).

**Proof**: suppose, to the contrary, that \(nx\le y\) for all \(n\in\mathbb N\). Then \(\mathbb N\) has the upper bound \(y/x\). By LUB, \(\alpha=\sup\mathbb N\) exists.

Since \(\alpha-1\) is not an upper bound, there exists \(n\in\mathbb N\) such that \(n>\alpha-1\). Then \(n+1>\alpha\), but \(n+1\in\mathbb N\), contradicting the fact that \(\alpha\) is an upper bound. This completes the proof.

**Corollary 1.4**: \(\mathbb N\) is unbounded in \(\mathbb R\); for any \(\varepsilon>0\) there exists \(n\) such that \(1/n<\varepsilon\).

### Theorem 1.5 (Density of the Rationals)

If \(x<y\) are real numbers, then there exists \(q\in\mathbb Q\) such that \(x<q<y\).

**Proof**: by the Archimedean property, choose a positive integer \(n\) such that

\[
n(y-x)>1.
\]

Let \(m\) be the least integer satisfying \(m>nx\) (well-ordering of the integers). Then

\[
m-1\le nx<m.
\]

From \(m>nx\) we get \(x<m/n\). Also \(m\le nx+1<ny\), so \(m/n<y\). Hence \(m/n\in(x,y)\cap\mathbb Q\). This completes the proof.

## 1.4 n-th Roots {#r1-4}
### Theorem 1.6 (n-th Roots of Positive Real Numbers)

If \(x>0\), \(n\in\mathbb N\) and \(n\ge1\), then there exists a unique \(y>0\) such that \(y^n=x\). We write \(y=x^{1/n}\).

**Existence**: let

\[
S=\{t\ge0:t^n<x\}.
\]

Then \(0\in S\), and \(1+x\) is an upper bound (if \(t>1+x\), then \(t^n>(1+x)^n\ge1+x>x\)). Let \(y=\sup S\).

We prove that \(y^n=x\), distinguishing two cases.

**Case 1: \(y^n<x\)**. Choose \(0<h<1\) small enough that

\[
n(y+1)^{n-1}h<x-y^n.
\]

By the binomial expansion,

\[
(y+h)^n\le y^n+n(y+1)^{n-1}h<x,
\]

so \(y+h\in S\), contradicting the fact that \(y\) is an upper bound.

**Case 2: \(y^n>x\)**. Choose \(0<h<y\) small enough that

\[
ny^{n-1}h<y^n-x.
\]

By Bernoulli's inequality,

\[
(y-h)^n\ge y^n-ny^{n-1}h>x,
\]

so \(y-h\) is also an upper bound, contradicting the fact that \(y\) is the least upper bound.

Therefore necessarily \(y^n=x\).

**Uniqueness**: if \(y_1^n=y_2^n=x\) with \(y_1,y_2>0\), then \(y_1=y_2\) (the function \(t\mapsto t^n\) is strictly increasing for \(t>0\)). This completes the proof.

## 1.5 Absolute Value and the Triangle Inequality {#r1-5}
Define

\[
|x|=
\begin{cases}
x,&x\ge0,\\
-x,&x<0.
\end{cases}
\]

Properties:

\[
|xy|=|x||y|,\qquad |x|^2=x^2,\qquad |x|\le a\iff -a\le x\le a\ (a\ge0).
\]

### Theorem 1.7 (Triangle Inequality)

\[
|x+y|\le|x|+|y|.
\]

**Proof**: from \(-|x|\le x\le|x|\) and \(-|y|\le y\le|y|\), adding gives

\[
-(|x|+|y|)\le x+y\le|x|+|y|,
\]

that is, \(|x+y|\le|x|+|y|\). This completes the proof.

**Corollary**: \(||x|-|y||\le|x-y|\).

## 1.6 The Complex Field {#r1-6}
Define the complex numbers as ordered pairs \((a,b)\in\mathbb R^2\), with the operations

\[
(a,b)+(c,d)=(a+c,b+d),
\]

\[
(a,b)(c,d)=(ac-bd,\ ad+bc).
\]

Writing \(i=(0,1)\), we have \(i^2=(-1,0)=-1\), and \((a,b)=a+bi\).

### Theorem 1.8 (The Complex Field)

\(\mathbb C\) is a field under the above operations; \(\mathbb R\) embeds in \(\mathbb C\) via \(a\mapsto(a,0)\).

**Proof**:

**Addition**: adding componentwise gives an abelian group, with zero element \((0,0)\) and inverse \((-a,-b)\).

**Multiplication**: commutativity, associativity and distributivity follow directly from the corresponding properties of real arithmetic; the identity element is \((1,0)\).

**Inverses**: for a nonzero element \((a,b)\ne(0,0)\), let

\[
(a,b)^{-1}=\left(\frac{a}{a^2+b^2},\frac{-b}{a^2+b^2}\right).
\]

We verify that the product is \((1,0)\):

\[
(a,b)\left(\frac{a}{a^2+b^2},\frac{-b}{a^2+b^2}\right)
=\left(\frac{a^2+b^2}{a^2+b^2},\frac{-ab+ba}{a^2+b^2}\right)=(1,0).
\]

Hence \(\mathbb C\) is a field; the embedding \(a\mapsto(a,0)\) preserves addition and multiplication, so \(\mathbb R\subseteq\mathbb C\). This completes the proof.

**Conjugation and modulus**:

\[
\overline{a+bi}=a-bi,\qquad |z|^2=z\overline z=a^2+b^2.
\]

\[
\overline{z+w}=\overline z+\overline w,\qquad \overline{zw}=\overline z\,\overline w,\qquad |zw|=|z||w|.
\]

## 1.7 Euclidean Spaces and the Schwarz Inequality {#r1-7}
For \(x=(x_1,\dots,x_n),y=(y_1,\dots,y_n)\in\mathbb R^n\), define

\[
x\cdot y=\sum_{i=1}^n x_iy_i,\qquad \|x\|=\sqrt{x\cdot x}.
\]

### Theorem 1.9 (Cauchy–Schwarz)

\[
|x\cdot y|\le\|x\|\|y\|.
\]

**Proof**: if \(y=0\), both sides are 0. Otherwise, for any \(\lambda\in\mathbb R\),

\[
0\le\|x-\lambda y\|^2
=\|x\|^2-2\lambda(x\cdot y)+\lambda^2\|y\|^2.
\]

Taking \(\lambda=\dfrac{x\cdot y}{\|y\|^2}\) gives

\[
0\le\|x\|^2-\frac{(x\cdot y)^2}{\|y\|^2},
\]

that is, \((x\cdot y)^2\le\|x\|^2\|y\|^2\). Taking square roots yields \(|x\cdot y|\le\|x\|\|y\|\). This completes the proof.

**Corollary (triangle inequality)**:

\[
\|x+y\|\le\|x\|+\|y\|.
\]

Proof: expand \(\|x+y\|^2\) and estimate the cross term by Schwarz.

## 1.8 Proof Status for This Chapter {#r1-8}
| Result | Status |
|---|---|
| Basic consequences of ordered fields | Complete proof |
| Uniqueness of the supremum | Complete proof |
| Archimedean property | Complete proof (using LUB) |
| Density of the rationals | Complete proof (using Archimedean property + well-ordering of the integers) |
| n-th roots of positive real numbers | Complete proof (using LUB + binomial/Bernoulli estimates) |
| Triangle inequality | Complete proof |
| The complex field | Complete proof (verification of operations + inverse formula) |
| Cauchy–Schwarz | Complete proof |

> LUB itself is proved by Dedekind cuts in the number systems; this chapter uses it as a completeness property of the real number system.

## Checkpoints {#r1-check}

- Be able to prove "\(x>0\Rightarrow x^{-1}>0\)" in an ordered field.
- Be able to write out the proof of the Archimedean property by contradiction and explain why LUB is needed.
- Be able to restate the role of "the least integer \(m>nx\)" in the proof that the rationals are dense.
- Be able to explain what each of the two contradiction cases in the proof of the n-th root theorem violates.
- Be able to prove independently the inverse formula for complex numbers and the Cauchy–Schwarz inequality.


<div class="book-nav">
  <a href="../../">← Theory Overview</a>
  <a href="../../05-spaces/">Spaces, Limits, and Continuity</a>
  <a href="../../proofs/">Proof Status</a>
</div>

> Next chapter: [Chapter 2 · Basic Topology](02-basic-topology.md).

## References {#r1-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 1.
- [Ordered field](https://en.wikipedia.org/wiki/Ordered_field)
- [Least-upper-bound property](https://en.wikipedia.org/wiki/Least-upper-bound_property)
- [Archimedean property](https://en.wikipedia.org/wiki/Archimedean_property)
- [Cauchy–Schwarz inequality](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality)
