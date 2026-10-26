# Logic, Language, and Proof

> **Source**: Standard logic textbooks; Wikipedia: Propositional calculus, First-order logic.

> **Prerequisites**: None.  
> **Goal of this chapter**: First learn "how mathematical sentences are written, how they are negated, and how they are proved", then move on to concrete objects.

## 1.1 Propositions and Logical Connectives {#logic-propositions}

A **proposition** is a declarative sentence with a definite truth value. Questions, imperatives, and sentences containing undetermined variables are not propositions in themselves.

| Connective | Symbol | Reading | When it is true |
|---|---|---|---|
| Negation | \(\neg P\) | not \(P\) | when \(P\) is false |
| Conjunction | \(P \land Q\) | \(P\) and \(Q\) | both are true |
| Disjunction | \(P \lor Q\) | \(P\) or \(Q\) | at least one is true (the mathematical "or" usually includes the case where both are true) |
| Implication | \(P \to Q\) | if \(P\) then \(Q\) | false only when \(P\) is true and \(Q\) is false |
| Equivalence | \(P \leftrightarrow Q\) | \(P\) if and only if \(Q\) | both have the same truth value |

**Common Pitfalls**

- \(P \to Q\) does not mean "\(P\) is the cause of \(Q\)"; it expresses only a truth-value relation.
- \(P \to Q\) and \(Q \to P\) are not equivalent; the former is the **converse** of the latter.
- \(\neg(P \land Q)\) is not \(\neg P \land \neg Q\), but \(\neg P \lor \neg Q\) (De Morgan).

## 1.2 Predicates and Quantifiers {#logic-quantifiers}

A **predicate** is a statement containing variables, for example \(P(x)\): "\(x\) is even". Only after a range is assigned to the variable does it become a proposition.

| Quantifier | Symbol | Reading | Negation |
|---|---|---|---|
| Universal | \(\forall x \in S,\ P(x)\) | for all \(x\) in \(S\), \(P(x)\) | \(\exists x \in S,\ \neg P(x)\) |
| Existential | \(\exists x \in S,\ P(x)\) | there exists \(x\) in \(S\) such that \(P(x)\) | \(\forall x \in S,\ \neg P(x)\) |

**The order of quantifiers cannot be exchanged at will**:

\[
\forall \varepsilon>0\ \exists N\ \forall n>N:\ |a_n-a|<\varepsilon
\]

and

\[
\exists N\ \forall \varepsilon>0\ \forall n>N:\ |a_n-a|<\varepsilon
\]

have completely different meanings. The former is "convergence"; the latter requires that "from some term onward all terms equal \(a\)".

**Negation exercise**: negate "for every \(\varepsilon>0\), there exists \(N\) such that for all \(n>N\), \(|a_n-a|<\varepsilon\)".

Answer: there exists \(\varepsilon>0\) such that for every \(N\) there exists \(n>N\) with \(|a_n-a|\ge \varepsilon\).

## 1.3 Definitions, Axioms, Theorems

| Word | Role | Example |
|---|---|---|
| Primitive notion | not defined; only its use is stipulated | set, membership |
| Definition | precisely specifies a new object by means of existing concepts | "if \(f(x_1)=f(x_2)\) implies \(x_1=x_2\), we call \(f\) injective" |
| Axiom | an assumption serving as the starting point | Peano axioms, axiom of choice |
| Theorem | a proposition derived from axioms, definitions, and proved results | Pythagorean theorem, mean value theorem |
| Lemma | a small auxiliary result serving the proof of a main theorem | Zorn's lemma |
| Corollary | a conclusion obtained directly from a theorem | the monotonicity criterion derived from the mean value theorem |

**Definitions must be decidable**: one cannot put "good", "natural", or "sufficiently large" into a definition without quantification.

## 1.4 Basic Proof Methods {#logic-proofs}

| Method | Applicable situation | Structure |
|---|---|---|
| Direct proof | to prove \(P \to Q\) | assume \(P\), derive \(Q\) |
| Proof by contrapositive | deriving \(Q\) directly is difficult | prove \(\neg Q \to \neg P\) |
| Proof by contradiction | assuming the conclusion false leads to a contradiction | assume \(\neg Q\), derive a contradiction |
| Proof by cases | the object splits according to cases | prove that each case holds, and that the cases are exhaustive |
| Existence proof | to prove \(\exists x,\ P(x)\) | construct an \(x\), or prove non-constructively that it cannot fail to exist |
| Uniqueness proof | to prove "there exists and is unique" | first prove existence, then prove that any two objects satisfying the conditions are equal |

**Counterexample**: to negate \(\forall x,\ P(x)\), it suffices to give a single \(x\) with \(\neg P(x)\). A counterexample must be **concrete**; it is not enough to say "it may fail".

## 1.5 Checking an Argument {#logic-check}

After a proof has been written, check four things:

1. **Have the hypotheses been used?** Does each hypothesis play a role in the proof;
2. **Is the scope correct?** Are the variables in the correct sets;
3. **Is the direction of the equality/inequality correct?** Does multiplying both sides of an inequality by a negative number reverse the sign;
4. **Is there any circularity?** Is the conclusion used to prove the conclusion, or is a proposition equivalent to the conclusion used as a premise.

> Mathematical induction is not developed systematically here, because it requires the structure of the natural numbers to be established first; see Number Systems.


## 1.6 Common Equivalences

| Equivalence | Name |
|---|---|
| \(\neg(P\land Q)\equiv\neg P\lor\neg Q\) | De Morgan |
| \(\neg(P\lor Q)\equiv\neg P\land\neg Q\) | De Morgan |
| \(P\to Q\equiv\neg P\lor Q\) | disjunctive form of implication |
| \(\neg(P\to Q)\equiv P\land\neg Q\) | negation of implication |
| \(P\to Q\equiv\neg Q\to\neg P\) | contrapositive |
| \(\neg\forall x\,P(x)\equiv\exists x\,\neg P(x)\) | quantifier negation |
| \(\neg\exists x\,P(x)\equiv\forall x\,\neg P(x)\) | quantifier negation |

**Method for proving equivalences**: construct a truth table; or perform algebraic manipulation using known equivalences. The truth table is a decision method for propositional logic, but its size grows exponentially with the number of variables.

## 1.7 Soundness and Completeness

Let "provable" be denoted \(\vdash\varphi\), and "true under all interpretations" be denoted \(\models\varphi\).

- **Soundness**: if \(\vdash\varphi\), then \(\models\varphi\). The proof system does not derive false propositions.
- **Completeness**: if \(\models\varphi\), then \(\vdash\varphi\). Every logically valid proposition can be proved.

Both propositional logic and first-order logic have soundness and completeness theorems; the completeness of first-order logic was proved by Gödel in 1929. Here we use only the distinction between "provable" and "valid", and do not develop the details of proof systems and model theory.

**Proof status on this site**: propositional equivalences and quantifier negation have [complete proofs](proofs.md#proof-logic); soundness and completeness are [deferred](proofs.md#proof-logic), since they require proof systems and model theory.

> **Note**: completeness is not the same concept as "a theory is complete with respect to some model" (every sentence or its negation is provable); the latter belongs to the context of model theory/incompleteness theorems.

## 1.8 References

- [Propositional calculus](https://en.wikipedia.org/wiki/Propositional_calculus)
- [First-order logic](https://en.wikipedia.org/wiki/First-order_logic)
- [Mathematical proof](https://en.wikipedia.org/wiki/Mathematical_proof)
- [Soundness](https://en.wikipedia.org/wiki/Soundness)
- [Completeness (logic)](https://en.wikipedia.org/wiki/Completeness_(logic))

## Checkpoints

- Be able to write the truth table for \(P \to Q\), and explain why "a false proposition implies any proposition" does not affect mathematical proofs.
- Be able to correctly negate a proposition with two quantifiers.
- Be able to distinguish "converse", "inverse", and "contrapositive".
- Be able to give an example of something that "exists but is not unique", and explain what the uniqueness proof lacks.
