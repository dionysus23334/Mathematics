# Mathematical Competitions · Topic Extensions

> Scope: an independent extension module within Secondary Mathematics, standing alongside the foundation stage and the deepening stage.  
> Objective: to deepen the capacity for problem analysis and proof; entry is possible once the corresponding prerequisites are in place, and it is not necessary to complete all of Secondary Mathematics first.

## The Four Topics

| Topic | Introductory Content | Core Content | Advanced Content |
|---|---|---|---|
| **Geometry** | Angle chasing, congruence and similarity, area relations, basic properties of circles | Collinearity and concurrence, power of a point and radical axis, Menelaus' theorem and Ceva's theorem, homothety and rotation | Spiral similarity, inversion, special points of a triangle and combined configurations |
| **Algebra** | Factorization, manipulation of identities, completing the square, Vieta's formulas, the basic inequality | Polynomials, symmetric expressions, proof of inequalities, sequences and recurrences, functional equations | Polynomial interpolation, analysis of roots, complex functional equations, combined problems on parameters and extrema |
| **Number Theory** | Divisibility, primes, greatest common divisor, Euclidean algorithm, fundamental theorem of arithmetic | Congruences, linear Diophantine equations, modular arithmetic, Fermat's little theorem, Euler's theorem, Chinese remainder theorem | Orders and primitive roots, p-adic valuation, quadratic residues, Diophantine equations and infinite descent |
| **Combinatorics** | Addition and multiplication principles, permutations and combinations, enumeration by cases, pigeonhole principle | Double counting, inclusion–exclusion principle, recurrences, invariants and monotone quantities, extremal principle, basics of graph theory | Construction and existence, coloring and covering, combinatorial identities, generating functions, combined graph-theory problems |

These are suggested levels of study; they do not correspond directly to the official syllabus of any particular competition. Each topic should state its prerequisites explicitly: before studying generating functions, for instance, one should first possess a foundation in polynomials and the corresponding formal manipulations.

## Shared Methodological Foundations

Before the four topics, a shared unit on the "foundations of competition methods" is established:

- direct proof, proof by contradiction, mathematical induction;
- case analysis;
- construction of counterexamples;
- formulation of conjectures from small-scale examples;
- translation of verbal conditions into algebraic, geometric, or counting language.

Methods such as infinite descent and the extremal principle are developed within the relevant topics in connection with specific problems, so as to avoid an accumulation of abstract techniques at the outset.

## Page Structure

Each topic page is organized uniformly in the following order:

1. **Prerequisites**: what one should be able to do before entering the topic;
2. **Core Results and Proofs**: theorems, lemmas, standard models;
3. **Worked Examples by Method**: classified by method, not merely by problem type;
4. **Tiered Exercises**: foundational consolidation / topic enhancement / comprehensive challenge;
5. **Hints and Solutions**: hints first, then the complete proof;
6. **Method Summary**: when to use a method, why to use it, and the conditions under which it fails.

## Geometry

> **Prerequisites**: congruence, similarity, basic properties of circles, area formulas.  
> **Objective**: to move from "looking at a figure to find relations" to "organizing a proof by means of theorems".

### Introductory

| Method | Key Point |
|---|---|
| Angle chasing | Introduce unknown angles and transfer them by means of parallel lines, isosceles triangles, and cyclic quadrilaterals |
| Congruence and similarity | Identify corresponding sides and angles; attend to the order of correspondence |
| Area relations | For triangles of equal height, the ratio of areas equals the ratio of bases; for similar figures, the ratio of areas equals the square of the similarity ratio |
| Basic properties of circles | Inscribed angles, central angles, tangents, tangent–chord angles |

### Core

### Menelaus' Theorem

In \(\triangle ABC\), let a line meet \(BC,CA,AB\) (or their extensions) at \(D,E,F\) respectively; then

\[
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB}=1
\]

(the directed-segment version carries signs). It is used to prove that three points are collinear.

### Ceva's Theorem

In \(\triangle ABC\), if \(AD,BE,CF\) are concurrent, then

\[
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB}=1.
\]

The converse theorem is used to prove that three lines are concurrent.

### Power of a Point and Radical Axis

The power of a point \(P\) with respect to a circle \(O\):

\[
\operatorname{Pow}(P)=PO^2-r^2.
\]

If a secant through \(P\) meets the circle at \(A,B\), then \(PA\cdot PB=\operatorname{Pow}(P)\) (directed version). The radical axis of two circles is the locus of points having equal powers with respect to the two circles; the radical axis is perpendicular to the line of centers.

### Homothety and Rotation

- Homothety: preserves angles and scales lengths proportionally;
- Rotation: preserves lengths and angles; frequently used to construct equilateral triangles and squares;
- Rotational similarity (spiral similarity): a rotation followed by a homothety; a standard tool for problems involving "a common point together with a ratio".

### Advanced

- **Inversion**: with a circle as the unit, transforms lines and circles into one another; treats tangency and concyclicity problems;
- **Special points of a triangle**: centroid, circumcenter, incenter, orthocenter, nine-point circle;
- **Combined configurations**: combining angles, ratios, and powers of a point.

### Worked Example (Method Illustration)

**Problem**: In \(\triangle ABC\), let \(D\in BC\), \(E\in CA\), \(F\in AB\), and suppose \(AD,BE,CF\) are concurrent. Given \(BD/DC=2/3\) and \(CE/EA=3/4\), find \(AF/FB\).

By Ceva's theorem:

\[
\frac{BD}{DC}\cdot\frac{CE}{EA}\cdot\frac{AF}{FB}=1
\]

Substituting:

\[
\frac23\cdot\frac34\cdot\frac{AF}{FB}=1
\Rightarrow \frac{AF}{FB}=2.
\]

### Exercises

1. Foundational: use inscribed angles to prove that the opposite angles of a cyclic quadrilateral are supplementary.
2. Enhancement: use Menelaus' theorem to prove that three points are collinear.
3. Challenge: use the radical axis to prove that the line joining the intersection points of two circles is perpendicular to the line of centers.

### Method Summary

- First identify the structure — "collinear / concurrent / concyclic" — then choose the theorem;
- For ratio problems, consider Menelaus' theorem, Ceva's theorem, and similarity first;
- For circle problems, consider the power of a point, the radical axis, and inscribed angles first;
- Do not rely solely on adding auxiliary lines; first determine the target structure.

## Algebra

> **Prerequisites**: factorization, multiplication formulas, quadratic equations in one variable, Vieta's formulas, the basic inequality.  
> **Objective**: to translate conditions into algebraic relations and to organize proofs by means of identities and inequalities.

### Introductory

- Factorization: common factor extraction, formula method, grouping, cross multiplication;
- Completing the square: \(a^2\pm2ab+b^2=(a\pm b)^2\);
- Vieta's formulas: if \(x_1,x_2\) are the roots of \(ax^2+bx+c=0\), then
\[
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
\]
- The basic inequality: \(a^2+b^2\ge2ab\), and for \(a,b>0\), \(\frac{a+b}{2}\ge\sqrt{ab}\).

### Core

### Polynomials

- Remainder theorem: the remainder on dividing \(f(x)\) by \(x-a\) is \(f(a)\);
- Factor theorem: \(f(a)=0\iff x-a\mid f(x)\);
- Rational root theorem: a rational root \(p/q\) of a polynomial with integer coefficients satisfies \(p\mid a_0,\ q\mid a_n\).

### Symmetric Expressions

A symmetric polynomial can be expressed in terms of the elementary symmetric expressions:

\[
s_1=x_1+x_2,\qquad s_2=x_1x_2.
\]

In the three-variable case, use \(s_1=x+y+z,\ s_2=xy+yz+zx,\ s_3=xyz\).

### Proof of Inequalities

Standard methods:

1. taking differences or ratios;
2. completing the square;
3. the AM–GM inequality;
4. Cauchy–Schwarz;
5. the rearrangement inequality;
6. smoothing / local modification.

### Sequences and Recurrences

- summation of arithmetic and geometric sequences;
- telescoping;
- the characteristic equation for linear recurrences;
- generating functions (advanced).

### Functional Equations

First substitute special values (\(0,1,-1\)), then guess the form, and finally verify it. Attend to additional conditions such as the domain, continuity, and monotonicity.

### Worked Example (Method Illustration)

**Problem**: Positive numbers \(a,b,c\) satisfy \(abc=1\). Prove that

\[
a+b+c\ge3.
\]

By AM–GM:

\[
\frac{a+b+c}{3}\ge\sqrt[3]{abc}=1,
\]

hence \(a+b+c\ge3\), with equality if and only if \(a=b=c=1\).

### Exercises

1. Foundational: use Vieta's formulas to find the sum of the squares of the two roots.
2. Enhancement: prove that \(a^2+b^2+c^2\ge ab+bc+ca\).
3. Challenge: use smoothing to prove the maximum of the product for a given sum.

### Method Summary

- First examine the structure: symmetry, cyclicity, degree, domain;
- Complete the square when possible; factorize when possible;
- For inequalities, attend to the equality conditions;
- For functional equations, substitute special values first, then verify.

## Number Theory

> **Prerequisites**: divisibility, primes, greatest common divisor, Euclidean algorithm, fundamental theorem of arithmetic.  
> **Objective**: to treat integer problems by means of congruences, factorization, and structure theorems.

### Introductory

- Divisibility: \(a\mid b\iff b=ak\);
- Euclidean algorithm: \(\gcd(a,b)=\gcd(b,a\bmod b)\);
- Fundamental theorem of arithmetic: uniqueness of prime factorization;
- Greatest common divisor and least common multiple: \(\gcd(a,b)\operatorname{lcm}(a,b)=ab\).

### Core

### Congruences

\(a\equiv b\pmod m\iff m\mid(a-b)\). Congruences may be added, subtracted, and multiplied; division requires care, and one may cancel \(c\) only when \(\gcd(c,m)=1\).

### Linear Diophantine Equations

\[
ax+by=c
\]

has an integer solution if and only if \(\gcd(a,b)\mid c\). The general solution is given by a particular solution plus the homogeneous solution \( (b/g,\,-a/g)t \).

### Fermat's Little Theorem and Euler's Theorem

If \(p\) is prime and \(p\nmid a\), then

\[
a^{p-1}\equiv1\pmod p.
\]

If \(\gcd(a,m)=1\), then

\[
a^{\varphi(m)}\equiv1\pmod m.
\]

### Chinese Remainder Theorem

If \(m_1,\dots,m_k\) are pairwise coprime, then the system of congruences

\[
x\equiv a_i\pmod{m_i}
\]

has a unique solution modulo \(M=\prod m_i\).

### Advanced

- orders and primitive roots;
- quadratic residues and the Legendre symbol;
- the p-adic valuation \(v_p(n)\);
- infinite descent for Diophantine equations;
- the Pell equation.

### Worked Example (Method Illustration)

**Problem**: Find \(3^{100}\bmod 7\).

By Fermat's little theorem, \(3^6\equiv1\pmod7\). Since \(100=6\cdot16+4\),

\[
3^{100}\equiv3^4=81\equiv4\pmod7.
\]

### Exercises

1. Foundational: use the Euclidean algorithm to find \(\gcd(252,198)\).
2. Enhancement: solve \(7x\equiv3\pmod{11}\).
3. Challenge: use the Chinese remainder theorem to solve three congruences.

### Method Summary

- First examine the modulus: prime, coprime, or a power;
- Large exponents → reduction by Fermat's little theorem or Euler's theorem;
- Linear equations → test by gcd;
- Multiple moduli → CRT;
- Diophantine equations → factorization, congruence restrictions, infinite descent.

## Combinatorics

> **Prerequisites**: addition and multiplication principles, permutations and combinations, enumeration by cases, pigeonhole principle.  
> **Objective**: to turn "counting" and "existence" into provable arguments.

### Introductory

- Addition principle: the classes are disjoint and exhaustive;
- Multiplication principle: stepwise counting;
- Permutations \(P(n,k)=\frac{n!}{(n-k)!}\) and combinations \(\binom nk=\frac{n!}{k!(n-k)!}\);
- Pigeonhole principle: if \(n+1\) objects are placed into \(n\) boxes, then at least one box contains 2 objects.

### Core

### Double Counting

Count the same set in two ways to obtain an identity. For example:

\[
\sum_{k=0}^n\binom nk=2^n
\]

(by classifying according to subset size, or by choosing or not choosing each element).

### Inclusion–Exclusion Principle

\[
|A\cup B|=|A|+|B|-|A\cap B|,
\]
\[
\left|\bigcup_{i=1}^n A_i\right|
=\sum|A_i|-\sum|A_i\cap A_j|+\cdots+(-1)^{n+1}|A_1\cap\cdots\cap A_n|.
\]

### Recurrences

Reduce the case \(n\) to the case \(n-1\) (or smaller), attending to the initial conditions. For example, the Fibonacci sequence:

\[
F_n=F_{n-1}+F_{n-2},\quad F_0=0,\ F_1=1.
\]

### Invariants and Monotone Quantities

Assign a quantity to a process and prove that it is invariant or monotone under the operations, thereby excluding certain terminal states.

### Extremal Principle

Consider the largest or smallest, the most or the fewest, and boundary cases, and derive a contradiction or a structure from the extremal object.

### Advanced

- construction and existence: guess first, then construct, and finally prove that the conditions are satisfied;
- coloring and covering: use a color invariant to disprove a covering;
- combinatorial identities: double counting, generating functions;
- graph theory: trees, matchings, Eulerian circuits, an introduction to Ramsey theory.

### Worked Example (Method Illustration)

**Problem**: Prove that among \(n\) people at least two share a birth month (\(n=13\)).

A year has only 12 months; place the 13 people into 12 "boxes" according to their birth month. By the pigeonhole principle, at least one box contains 2 people.

### Exercises

1. Foundational: use inclusion–exclusion to find the number of integers from 1 to 100 that are divisible by neither 2 nor 3.
2. Enhancement: use double counting to prove that \(\sum k\binom nk=n2^{n-1}\).
3. Challenge: use an invariant to prove a coloring problem.

### Method Summary

- First decide whether the problem concerns "counting" or "existence";
- Counting: classification, stepwise counting, inclusion–exclusion, double counting;
- Existence: pigeonhole, extremal principle, invariants, construction;
- Check for "no overlap and no omission" and for boundary cases.
