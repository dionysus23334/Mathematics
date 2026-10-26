# Sets, Relations, and Mappings

> **Sources**: standard ZF/ZFC formulation; Wikipedia: Zermelo–Fraenkel set theory, Axiom of choice.

> **Prerequisite**: logic (propositions, quantifiers, proofs).  
> **Goal of this chapter**: to establish the object language shared by all subsequent branches of mathematics.

## 2.1 Sets and Membership {#sets-basic}

A set is a totality of objects; \(x \in A\) means that \(x\) is an element of \(A\), while \(x \notin A\) means that it is not.

- **Axiom of extensionality**: two sets are equal if and only if they have the same elements.
- **Subset**: \(A \subseteq B\) means \(\forall x,\ x\in A \to x\in B\).
- **Proper subset**: \(A \subsetneq B\) means \(A\subseteq B\) and \(A\ne B\).

The **empty set** \(\varnothing\) is the unique set with no elements. Note that both \(\varnothing \in \{\varnothing\}\) and \(\varnothing \subseteq \{\varnothing\}\) hold, but they mean different things.

## 2.2 Basic Set Operations

| Operation | Definition | Remark |
|---|---|---|
| Intersection | \(A\cap B=\{x:x\in A\land x\in B\}\) | the intersection may be empty |
| Union | \(A\cup B=\{x:x\in A\lor x\in B\}\) | "or" includes both |
| Difference | \(A\setminus B=\{x:x\in A\land x\notin B\}\) | \(B\subseteq A\) is not required |
| Complement | \(A^c=\{x\in U:x\notin A\}\) | the universal set \(U\) must be specified first |
| Power set | \(\mathcal P(A)=\{B:B\subseteq A\}\) | if \(\lvert A\rvert=n\), then \(\lvert\mathcal P(A)\rvert=2^n\) |

**De Morgan**:

\[
(A\cup B)^c=A^c\cap B^c,\qquad (A\cap B)^c=A^c\cup B^c.
\]

## 2.3 Introduction to Axiomatic Set Theory

Using "the set of all sets" without restriction leads to a paradox (Russell's paradox). Axiomatic set theory restricts the construction of sets by means of the **axiom schema of separation**:

\[
\{x\in A:\ P(x)\}
\]

One must first have a set \(A\) and then select from it; one cannot write \(\{x:\ P(x)\}\) without specifying where \(x\) comes from.

The axioms commonly used include: empty set, pairing, union, power set, infinity, replacement, and choice. Here it suffices to know that "sets cannot collect objects arbitrarily"; the full axiomatization is deferred to a later treatment of set theory.

## 2.4 Ordered Pairs and Cartesian Products

The essential feature of an **ordered pair** \((a,b)\) is order: \((a,b)=(c,d)\) if and only if \(a=c\) and \(b=d\).

**Cartesian product**:

\[
A\times B=\{(a,b):a\in A,\ b\in B\}.
\]

In general, \(A_1\times\cdots\times A_n\) denotes the set of \(n\)-tuples.

## 2.5 Binary Relations {#sets-relations}

A binary relation from \(A\) to \(B\) is a subset of \(A\times B\). If \(R\subseteq A\times A\), we call \(R\) a relation on \(A\).

| Property | Definition |
|---|---|
| Reflexive | \(\forall x\in A,\ (x,x)\in R\) |
| Symmetric | \((x,y)\in R \to (y,x)\in R\) |
| Transitive | \((x,y),(y,z)\in R \to (x,z)\in R\) |
| Antisymmetric | \((x,y),(y,x)\in R \to x=y\) |

An **equivalence relation** = reflexive + symmetric + transitive. It partitions the set into pairwise disjoint **equivalence classes**:

\[
[x]=\{y\in A:(x,y)\in R\}.
\]

A **partition** is a family of pairwise disjoint subsets of \(A\) whose union is \(A\). Equivalence relations and partitions are in one-to-one correspondence.

An **order relation** usually means a partial order (reflexive, antisymmetric, transitive); a total order additionally requires that any two elements be comparable.

## 2.6 Mappings {#sets-maps}

A mapping \(f:A\to B\) assigns to each \(x\in A\) a unique \(f(x)\in B\).

- **Domain** \(A\), **codomain** \(B\);
- **Image** \(f(A)=\{f(x):x\in A\}\);
- **Preimage** \(f^{-1}(S)=\{x\in A:f(x)\in S\}\).

| Property | Definition | Negation |
|---|---|---|
| Injective | \(f(x_1)=f(x_2)\to x_1=x_2\) | there exist \(x_1\ne x_2\) with \(f(x_1)=f(x_2)\) |
| Surjective | \(\forall y\in B,\ \exists x\in A,\ f(x)=y\) | there exists \(y\in B\) not in the image |
| Bijective | both injective and surjective | there is a collision or a missed value |

**Note**: surjectivity is relative to the **codomain**; changing the codomain changes surjectivity.

## 2.7 Operations on Mappings

- **Composition**: \((g\circ f)(x)=g(f(x))\), which requires the codomain of \(f\) to be compatible with the domain of \(g\).
- **Inverse mapping**: if \(f:A\to B\) is bijective, then there exists \(f^{-1}:B\to A\) satisfying \(f^{-1}(f(x))=x\) and \(f(f^{-1}(y))=y\).
- **Restriction**: restricting the domain of \(f\) to a subset \(S\subseteq A\), written \(f|_S\).

Composition is in general not commutative: \(f\circ g\ne g\circ f\), and indeed both sides need not even be defined.

## 2.8 Families of Sets and Quotient Sets {#sets-quotient}

A **family of sets** \(\{A_i\}_{i\in I}\) is a family of sets indexed by an index set \(I\); one may form the union \(\bigcup_{i\in I}A_i\) and the intersection \(\bigcap_{i\in I}A_i\).

The **quotient set** \(A/{\sim}\) is the set whose elements are the equivalence classes:

\[
A/{\sim}=\{[x]:x\in A\}.
\]

The quotient set is the formal language for "identifying objects according to an equivalence relation". The integers, the rational numbers, quotient groups, and quotient rings are all constructed by means of it.

## Dependency Rules

- Equivalence relations must precede quotient sets;
- Mappings must precede isomorphisms;
- Order relations must precede supremum/infimum;
- Power sets and Cartesian products must precede relations and function spaces.


## 2.9 The Axiom of Choice and Zorn's Lemma

**Axiom of Choice (AC)**: for any family of sets \(\{A_i\}_{i\in I}\) consisting of non-empty sets, there exists a choice function \(f\) such that \(f(i)\in A_i\) holds for every \(i\).

Equivalent forms:

- **Zorn's lemma**: if every chain in a non-empty partially ordered set \(P\) has an upper bound, then \(P\) has a maximal element;
- **Well-ordering theorem**: every set can be well-ordered;
- **Tychonoff's theorem** (topology): the product of arbitrary compact spaces is compact.

Zorn's lemma is commonly used in existence proofs for "maximal ideals", "Hamel bases", "algebraic closures", and the like. It does not construct the object; it only guarantees that a maximal object exists. The chain of equivalences among AC, Zorn's lemma, and the well-ordering theorem is **deferred for proof** (it requires axiomatic set theory).

**Boundary**: AC differs from "finite choice"; the selection of finitely many non-empty sets does not require AC. The difference between ZF and ZFC lies precisely in whether AC is adjoined.

## 2.10 The Cantor–Schröder–Bernstein Theorem

If there exist an injection \(f:A\to B\) and an injection \(g:B\to A\), then there exists a bijection \(h:A\to B\).

Consequently, "\(|A|\le|B|\) and \(|B|\le|A|\)" implies "\(|A|=|B|\)". This theorem does not depend on AC; it shows that the comparison of cardinalities can be defined by means of injections.

**Complete proof**: define the bijection piecewise using \(C_0=A\setminus g(B)\), \(C_{n+1}=g(f(C_n))\), and \(C=\bigcup C_n\); see [proofs page §4](proofs.md#proof-sb).

**Cantor's theorem**: there is no surjection from \(A\) onto \(\mathcal P(A)\), hence \(|A|<|\mathcal P(A)|\); for the complete proof see [proofs page §3](proofs.md#proof-cantor).

## 2.11 References

- [Zermelo–Fraenkel set theory](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory)
- [Axiom of choice](https://en.wikipedia.org/wiki/Axiom_of_choice)
- [Zorn's lemma](https://en.wikipedia.org/wiki/Zorn%27s_lemma)
- [Schröder–Bernstein theorem](https://en.wikipedia.org/wiki/Schr%C3%B6der%E2%80%93Bernstein_theorem)
- [Equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation)

## Checkpoints

- Be able to prove "equivalence relation ↔ partition".
- Be able to determine whether a mapping is injective/surjective, and to write down the negation.
- Be able to explain why \(\{x:P(x)\}\) cannot be used unconditionally.
- Be able to explain the difference between a quotient set and "choosing a representative".
