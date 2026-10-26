# Core Branches

> **Sources**: standard textbooks and Wikipedia entries on analysis, algebra, number theory, geometry, topology, combinatorics, and probability.

> **Prerequisite**: the corresponding parts of logic, sets, number systems, algebra, and spaces. The branches may be pursued in parallel, but each branch uses only the prerequisites listed for it.
>
> This page is not a queue in which one subject must be finished before the next is begun, but a map on which one chooses an entry point within a shared language.

## Overview of the Branches

| Branch | Suggested internal order | Required background | Not required |
|---|---|---|---|
| Analysis | Series of numbers → single-variable differentiation and integration → sequences of functions and uniform convergence → multivariable calculus | real numbers, metric spaces; linear algebra for the multivariable part | abstract algebra is not required beforehand |
| Algebra | Group theory → quotient groups; ring theory → ideals and quotient rings; field theory → field extensions | basic algebraic structures, equivalence relations, mappings | analysis is not required beforehand |
| Number Theory | Divisibility and congruences → arithmetic functions → deeper problems on integers | natural numbers, integers, induction; groups and rings in part | the elementary part does not require analysis |
| Geometry | Axioms and proofs of Euclidean geometry → analytic geometry → curves and surfaces | basic logic; linear algebra for analytic geometry; calculus for curves and surfaces | topology is not required beforehand |
| Topology | General topology → product and quotient spaces → deeper topological properties | sets, mappings, basic notions of space | algebraic topology is not required beforehand |
| Combinatorics | Counting principles → combinatorial identities → recurrences and graph theory | natural numbers, sets, mappings, induction | analysis is not required |
| Probability Theory | Finite probability spaces → conditional probability and independence → discrete random variables | sets, counting, real numbers; series for the infinite discrete case | axiomatic probability theory is deferred to Advanced Theory |

## Analysis {#branch-analysis}

**Entry point**: completeness of the real numbers + metric spaces + continuity.

1. **Series of numbers**: partial sums, convergence tests, absolute convergence, power series;
2. **Single-variable differentiation**: derivative, mean value theorem, Taylor expansion, extrema;
3. **Single-variable integration**: Riemann integral, fundamental theorem of calculus, substitution and integration by parts;
4. **Sequences of functions and uniform convergence**: pointwise vs uniform, interchange of limits, Weierstrass test;
5. **Multivariable calculus**: partial derivatives, total differential, multiple integrals, line/surface integrals, theorems of Stokes type.

**Boundary**: measure theory and the Lebesgue integral (Advanced Theory) are entered only after the Riemann integral; when only the Riemann integral has been studied, one must not treat "integrable" as a measure-theoretic conclusion.

## Algebra {#branch-algebra}

**Entry point**: the basic definitions of groups, rings, and fields + homomorphisms.

1. **Group theory**: subgroups, cosets, normal subgroups, quotient groups, fundamental theorem on homomorphisms, group actions;
2. **Ring theory**: ideals, quotient rings, integral domains, unique factorization domains, polynomial rings;
3. **Field theory**: field extensions, algebraic extensions, splitting fields, Galois theory (advanced).

**Boundary**: linear algebra is not abstract algebra; matrix computation may be completed within algebra, while the structure theory of groups, rings, and fields is developed here.

## Number Theory {#branch-number}

**Entry point**: divisibility, Euclidean algorithm, fundamental theorem of arithmetic.

1. **Elementary number theory**: congruences, linear congruences, CRT, Fermat/Euler theorems, primitive roots;
2. **Arithmetic functions**: \(\varphi,\mu,\tau,\sigma\) and Dirichlet convolution;
3. **Advanced topics**: quadratic residues, quadratic reciprocity, Diophantine equations, analytic/algebraic number theory (Advanced Theory).

**Boundary**: elementary number theory may begin at the secondary-school competition stage; analytic number theory requires complex analysis.

## Geometry {#branch-geometry}

**Entry point**: the axioms and proofs of Euclidean geometry; analytic geometry uses linear algebra.

1. **Euclidean geometry**: axioms, congruence, similarity, circles, straightedge-and-compass constructions;
2. **Analytic geometry**: coordinates, lines/circles, conic sections, vector methods;
3. **Curves and surfaces**: parametrization, curvature, first/second fundamental forms (calculus).

**Boundary**: differential geometry requires multivariable calculus and linear algebra; algebraic topology requires topology and group theory.

## Topology {#branch-topology}

**Entry point**: sets, mappings, open sets and continuity in metric spaces.

1. **General topology**: topological spaces, bases, subspaces, continuity, compactness, connectedness, separation axioms;
2. **Product and quotient spaces**: product topology, quotient topology, adjunction spaces;
3. **Further topics**: compactification, metrization, fundamental group (algebraic topology, Advanced Theory).

## Combinatorics {#branch-combinatorics}

**Entry point**: natural numbers, sets, mappings, induction.

1. **Counting principles**: addition/multiplication principles, permutations and combinations, binomial theorem;
2. **Combinatorial identities**: double counting, generating functions, inclusion–exclusion;
3. **Recurrences and graph theory**: recurrence relations, generating functions, basic notions of graphs, trees, matchings.

## Probability Theory {#branch-probability}

**Entry point**: sets, counting, real numbers; series for the infinite discrete case.

1. **Finite probability spaces**: sample space, events, axioms of probability (finite version);
2. **Conditional probability and independence**: Bayes, total probability, independent repeated trials;
3. **Discrete random variables**: distributions, expectation, variance, common distributions;
4. **Limit theorems**: laws of large numbers, central limit theorem (requires a background in analysis/measure theory).

**Boundary**: axiomatic probability theory (probability on measure spaces) belongs to Advanced Theory; undefined notions such as "almost surely" must not be used within a branch.


## Quick Reference of Core Theorems {#branches-theorems}

| Branch | Representative theorem | Required prerequisite |
|---|---|---|
| Analysis | intermediate value theorem, extreme value theorem, mean value theorem, fundamental theorem of calculus | completeness of the real numbers, continuity, compactness |
| Analysis | interchange of limits under uniform convergence, Weierstrass test | sequences of functions, supremum |
| Algebra | Lagrange's theorem, fundamental theorem on group homomorphisms | groups, cosets, normal subgroups |
| Algebra | Cayley–Hamilton theorem | matrices, characteristic polynomial |
| Number Theory | Fermat's little theorem, Euler's theorem, Chinese remainder theorem | congruences, the \(\varphi\) function |
| Number Theory | law of quadratic reciprocity | quadratic residues, Legendre symbol |
| Geometry | Pythagorean theorem, properties of similar triangles | Euclidean axioms, congruence/similarity |
| Topology | Tychonoff's theorem (compactness of products) | compactness, product topology, AC |
| Topology | Urysohn's lemma, Brouwer fixed-point theorem | normal spaces, algebraic topology |
| Combinatorics | pigeonhole principle, inclusion–exclusion principle, Ramsey's theorem | counting, graph theory |
| Probability | laws of large numbers, central limit theorem | random variables, expectation, characteristic functions |

The proofs of these theorems are dispersed across the corresponding branches; this page provides only the "name—prerequisite—location". Apart from the entries already proved in full on the [proofs page](proofs.md), all the others are **deferred for proof**, and must not be cited directly on pages that lack the prerequisites.

## References

- [Mathematical analysis](https://en.wikipedia.org/wiki/Mathematical_analysis)
- [Abstract algebra](https://en.wikipedia.org/wiki/Abstract_algebra)
- [Number theory](https://en.wikipedia.org/wiki/Number_theory)
- [Geometry](https://en.wikipedia.org/wiki/Geometry)
- [Topology](https://en.wikipedia.org/wiki/Topology)
- [Combinatorics](https://en.wikipedia.org/wiki/Combinatorics)
- [Probability theory](https://en.wikipedia.org/wiki/Probability_theory)

## Suggestions on the Order of Choice

- To fill in **rigorous analysis**: number systems, real numbers → spaces, metric spaces → the analysis branch;
- To fill in **algebra**: sets, equivalence relations → algebra, groups/rings/fields → the algebra branch;
- To fill in **geometry/topology**: algebra, linear algebra → spaces, spaces → geometry/topology;
- To fill in **number theory/combinatorics**: number systems, natural numbers/induction → number theory or combinatorics;
- To fill in **probability**: sets/counting + real numbers → probability; for the continuous case, add integration later.
