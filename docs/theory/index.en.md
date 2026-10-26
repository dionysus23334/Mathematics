# Classical Academic System · Overview

> The Classical Academic System comprises two parallel routes: the **Regular System** and the **Rudin System**.  
> The two routes share the same body of concepts but organize them differently: the Regular System proceeds by topic, whereas the Rudin System advances chapter by chapter along the lines of an analysis textbook.

## Two Systems

| System | Positioning | Entry |
|---|---|---|
| **Regular System** | logic, sets, number systems, algebra, spaces, branches, advanced theory | [Start from logic](01-logic.md) |
| **Rudin System** | an analysis route built around Rudin's *Principles of Mathematical Analysis* | [Chapter 1](rudin/01-real-complex.md) |

The two systems do not replace each other: the Regular System supplies the common language and structures, whereas the Rudin System unfolds the analysis portion chapter by chapter.

## Regular System

| Chapter | Content | Main prerequisites |
|---|---|---|
| [Logic, Language, and Proof](01-logic.md) | propositions, predicates, quantifiers, proof methods | none |
| [Sets, Relations, and Mappings](02-sets.md) | set operations, relations, equivalence classes, mappings | logic |
| [Natural Numbers and Number Systems](03-numbers.md) | Peano axioms, integers/rationals/reals, complex numbers | logic, sets |
| [Algebraic Structures and Linear Spaces](04-algebra.md) | groups, rings, fields, vector spaces, linear maps | sets, number systems |
| [Spaces, Limits, and Continuity](05-spaces.md) | metric spaces, open and closed sets, convergence, compactness, continuity | number systems, algebra |
| [Core Branches](06-branches.md) | analysis, algebra, number theory, geometry, topology, combinatorics, probability | depends on the branch |
| [Advanced Theory](07-advanced.md) | measure theory, complex analysis, functional analysis, differential geometry, algebraic topology | depends on the topic |

There is no rule that the chapters must be taken in sequence; the table above is merely a recommended order. Branches may be pursued in parallel, provided that the prerequisites are complete.

## Rudin System

| Chapter | Content | Status |
|---|---|---|
| [Chapter 1 · The Real and Complex Number Systems](rudin/01-real-complex.md) | ordered fields, supremum, Archimedean property, n-th roots, complex numbers, Schwarz | Expanded |
| [Chapter 2 · Basic Topology](rudin/02-basic-topology.md) | metric spaces, compactness, connectedness, Cantor set | Expanded |
| [Chapter 3 · Sequences and Series](rudin/03-sequences-series.md) | convergence, Cauchy, limit superior and limit inferior, convergence tests for series | Expanded |
| [Chapter 4 · Continuity](rudin/04-continuity.md) | limits of functions, continuity, uniform continuity, discontinuities | Expanded |
| [Chapter 5 · Differentiation](rudin/05-differentiation.md) | derivatives, mean value theorem, Taylor, L'Hôpital | Expanded |
| [Chapter 6 · The Riemann–Stieltjes Integral](rudin/06-riemann-stieltjes.md) | partitions, integrability, integration by parts, rectifiable curves | Expanded |
| [Chapter 7 · Sequences and Series of Functions](rudin/07-function-sequences.md) | uniform convergence, M-test, Arzelà–Ascoli | Expanded |
| [Chapter 8 · Some Special Functions](rudin/08-special-functions.md) | exponential, logarithm, trigonometric, Fourier, Gamma | Expanded |
| [Chapter 9 · Functions of Several Variables](rudin/09-multivariable.md) | derivatives, contraction mapping, inverse/implicit function | Expanded |
| [Chapter 10 · Integration of Differential Forms](rudin/10-differential-forms.md) | differential forms, Stokes, Poincaré lemma | Expanded |
| [Chapter 11 · The Lebesgue Theory](rudin/11-lebesgue.md) | measure, measurable functions, integration, L² | Expanded |

"Expanded" does not mean that every theorem has been proved in full; for the status of individual proofs see [Proof Status and Core Proofs](proofs.md).

## Recommended Reading Order

1. **Establish the language first**: logic → sets → number systems.
2. **Then choose a structure**: algebra → spaces; or proceed directly to Rudin Chapter 1.
3. **Analysis route**: Rudin Chapters 1 → 2 → 3 → … → 11.
4. **Branch route**: enter the analysis, algebra, number theory, geometry, topology, combinatorics, or probability material of Chapter 6 according to interest.
5. **Advanced study**: enter the measure theory, complex analysis, functional analysis, geometry, and algebraic topology material of Chapter 7 according to topic.

## Page Conventions

As far as possible, every page should contain:

- prerequisites;
- definitions and core results;
- proofs or an explicit proof status;
- interfaces to adjacent chapters;
- checkpoints or exercises.

> This is an extensible knowledge map, not a verbatim copy of any textbook. The Rudin route is rewritten chapter by chapter; the Regular System is rewritten by topic.
