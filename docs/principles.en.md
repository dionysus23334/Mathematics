# Study Rules

> This page specifies how the site organizes its content, so that "nothing later on suddenly introduces something not explained earlier".
>
> The table of contents is only a map; the actual prerequisite constraints must be imposed on every page.

## 1. Two Orders, Not to Be Mixed

| Order | Question Answered | Where Used |
|---|---|---|
| Proof order | What must already be in place in order to prove this result? | Theory pages |
| Learning order | What should one ideally have gone through in order to understand this concept? | Educational stage pages |

A theory page may not substitute "studied in secondary school" for a definition; a stage page may begin with intuition, but must state "for the rigorous definition, see the theory page".

## 2. Every Page Must State Its Prerequisites

Theory pages begin with the following fixed text:

```text
Prerequisites: logic and sets; sets, mappings, equivalence relations.
Not used on this page: groups, topology, measure.
```

Stage pages begin with the following fixed text:

```text
Prerequisites: similar triangles, basic properties of circles.
Not yet required: axiomatic set theory, construction of the real numbers.
```

## 3. Define on First Occurrence

- When a new concept appears for the first time, give a definition or link to a page where it is defined;
- do not replace a definition with "obviously" or "as is well known";
- the meaning of a symbol must be explained at its first occurrence (e.g. \(\mathbb N,\mathbb R,\mathcal P(A)\)).

## 4. Handling Incomplete Prerequisites

If a proof requires a result not yet established, one may only:

1. **Reorder**: first supply the prerequisites;
2. **Supply the proof**: give a complete proof on this page;
3. **Defer the proof**: explicitly write "this page does not prove it, and only uses the conclusion", and list the required prerequisites.

Not permitted:

- treating a conclusion as a definition;
- proving a conclusion by means of a proposition equivalent to it;
- using advanced theorems without indicating their source.

## 5. Dependency Constraints

The following orders may not be exchanged:

| First | Then | Reason |
|---|---|---|
| Equivalence relations | Quotient sets | The elements of a quotient set are equivalence classes |
| Mappings | Isomorphisms | An isomorphism is a bijective homomorphism |
| Order relations | Supremum | The supremum is defined in terms of order |
| Natural numbers/induction | Recursive definitions | Recursion depends on the structure of the natural numbers |
| Completeness of the reals | Limit theorems | The existence of limits depends on completeness |
| Metric spaces | General topology | Topology abstracts the structure of open sets |
| Groups/rings/fields | Quotient groups/quotient rings/field extensions | Quotient structures depend on equivalence relations and homomorphisms |

## 6. Page Templates

### Theory Page

1. Prerequisites;
2. Core objects;
3. Definitions;
4. Theorems and proofs (or proof outlines/deferred proofs);
5. Typical examples and counterexamples;
6. Dependency remarks;
7. Downward connections;
8. Checkpoints.

### Stage Page

1. Stage objectives;
2. Module order;
3. What each module "explains clearly";
4. Connection to the next stage;
5. Checkpoints (explanation/computation/proof).

### Competition Page

1. Prerequisites;
2. Core results and proofs;
3. Method-based worked examples;
4. Graded exercises;
5. Hints and solutions;
6. Summary of methods.

## 7. Naming and Notation

- Sets: \(A,B,X,Y\); elements: \(x,y\);
- Natural numbers: \(\mathbb N\); integers: \(\mathbb Z\); rational numbers: \(\mathbb Q\); real numbers: \(\mathbb R\); complex numbers: \(\mathbb C\);
- Mappings: \(f:X\to Y\); composition: \(g\circ f\);
- Groups: \(G\); fields: \(F\); vector spaces: \(V\);
- Metrics: \(d(x,y)\); norms: \(\|x\|\); inner products: \(\langle x,y\rangle\).

The same symbol may have different meanings on different pages, and its meaning must be explained at its first occurrence within a page.

## 8. Correspondence Between the Two Tracks

| Educational Stage | Theoretical Layer | Remarks |
|---|---|---|
| Elementary Mathematics | Intuitive part of number systems | Use numbers first, do not construct them first |
| Secondary Mathematics (Foundations) | Number systems | Real numbers understood via the number line |
| Secondary Mathematics (Advanced) | Layers 1–2 and 4 | Proofs, mappings, vectors |
| Mathematical Competitions | Logical methods + special topics | Not required to complete all of secondary mathematics |
| University General Foundations | Layer 4–5 computations | May proceed in parallel with theory |
| Professional Core | Layers 5–6 | Rigorous analysis, algebra, topology |
| Advanced Topics | Advanced | Prerequisites listed per topic |

## 9. Quality Check

Check each page before publication:

- [ ] Are the prerequisites clearly stated?
- [ ] Are new concepts defined?
- [ ] Does any proof cite an unestablished result?
- [ ] Is the notation explained?
- [ ] Do the worked examples actually use the methods of this section?
- [ ] Does a stage page mark the boundary between "intuitive" and "rigorous"?
