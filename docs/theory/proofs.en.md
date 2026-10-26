# Proof Status and Core Proofs

> This page answers two questions: **which theorems have complete proofs? Which are only stated/outlined?**
>
> Principle: an "idea of the proof" must not be written as a "proof". A complete proof must be checkable step by step; a deferred proof must be explicitly labeled and must list its prerequisites.

## Status Conventions

| Status | Meaning |
|---|---|
| **Complete proof** | Starting from definitions/axioms, every step is given and checkable |
| **Proof outline** | The key constructions and steps are given, technical details are omitted; completeness is not claimed |
| **Deferred proof** | The page uses the conclusion only, leaving the proof to a later branch/textbook; prerequisites must be listed |
| **Definition/axiom** | Not used as a theorem proof, but as a starting point |

## Status Summary

| Theorem/Conclusion | Status | Location |
|---|---|---|
| De Morgan equivalences, contrapositive, quantifier negation | Complete proof | This page, §1 |
| Soundness and completeness of propositional/first-order logic | Deferred proof | This page, §4; requires a proof system and model theory |
| Equivalence relation ↔ partition | Complete proof | This page, §2 |
| Cantor's theorem (power set strictly larger than the set) | Complete proof | This page, §3 |
| Cantor–Schröder–Bernstein | Complete proof | This page, §4 |
| ZF/ZFC, AC, Zorn's lemma, well-ordering theorem | Deferred proof | This page, §5; requires axiomatic set theory |
| Peano induction principle | Axiom/definition | Number systems |
| Supremum property of Dedekind cuts | Complete proof | This page, §6 |
| Equivalence of five forms of completeness of the reals | Partial: supremum proved; the rest deferred | This page, §6, §7 |
| Fundamental theorem of algebra | Deferred proof | Number systems; requires complex analysis |
| Fundamental theorem of group homomorphisms | Complete proof | This page, §8 |
| Rank–nullity theorem | Complete proof | This page, §9 |
| Spectral theorem for real symmetric matrices | Deferred proof | Algebra; requires inner product spaces and induction |
| Open balls are open sets | Complete proof | This page, §10 |
| Equivalence of the \(\varepsilon\)-\(\delta\) and open-preimage characterizations of continuity | Complete proof | This page, §11 |
| Continuous image of a compact set is compact | Complete proof | This page, §12 |
| Continuous functions on compact sets attain extrema (EVT) | Complete proof | This page, §13 |
| Banach contraction mapping principle | Complete proof | This page, §15 |
| Heine–Borel, Bolzano–Weierstrass | Deferred proof | Spaces; requires real analysis |
| MCT, Fatou, DCT | Deferred proof | Advanced; requires measure theory |
| Cauchy integral theorem/formula, residue theorem | Deferred proof | Advanced; requires complex analysis |
| Hahn–Banach, open mapping, closed graph, uniform boundedness | Deferred proof | Advanced; requires functional analysis |
| Gauss–Bonnet, Brouwer, Mayer–Vietoris | Deferred proof | Advanced; requires geometry/algebraic topology |

> The status table is an "honesty checklist": when you see "deferred proof", you should not treat that conclusion as already proved on this site.

---

## 1. Propositional Equivalences and Quantifier Negation {#proof-logic}

### 1.1 De Morgan

We prove \(\neg(P\land Q)\equiv\neg P\lor\neg Q\). Write out the truth table:

| \(P\) | \(Q\) | \(P\land Q\) | \(\neg(P\land Q)\) | \(\neg P\lor\neg Q\) |
|---|---|---|---|---|
| T | T | T | F | F |
| T | F | F | T | T |
| F | T | F | T | T |
| F | F | F | T | T |

The two columns coincide, hence the equivalence. The equivalence \(\neg(P\lor Q)\equiv\neg P\land\neg Q\) follows in the same way.

### 1.2 Contrapositive

\[
P\to Q\equiv\neg P\lor Q\equiv Q\lor\neg P\equiv\neg(\neg Q)\lor\neg P\equiv\neg Q\to\neg P.
\]

### 1.3 Quantifier Negation

By definition, \(\forall x\in S,\ P(x)\) is false if and only if there exists \(x\in S\) for which \(P(x)\) is false:

\[
\neg\forall x\in S,\ P(x)\equiv\exists x\in S,\ \neg P(x).
\]

Likewise \(\neg\exists x\in S,\ P(x)\equiv\forall x\in S,\ \neg P(x)\).

---

## 2. Equivalence Relation ↔ Partition {#proof-equivalence}

Let \(\sim\) be an equivalence relation on \(A\). For each \(x\in A\), set \([x]=\{y\in A:x\sim y\}\).

**Each step**:

1. **Non-empty**: by reflexivity, \(x\in[x]\).
2. **Pairwise disjoint or equal**: if \([x]\cap[y]\ne\varnothing\), take \(z\in[x]\cap[y]\). Then \(x\sim z\) and \(y\sim z\). By symmetry \(z\sim y\), and by transitivity \(x\sim y\). For any \(w\in[x]\), \(w\sim x\sim y\), hence \(w\in[y]\); thus \([x]\subseteq[y]\). Similarly \([y]\subseteq[x]\), so \([x]=[y]\).
3. **Union is \(A\)**: every \(x\) belongs to \([x]\), so \(\bigcup_{x\in A}[x]=A\).

Therefore the equivalence classes form a partition.

Conversely, if \(\mathcal P\) is a partition of \(A\), define \(x\sim y\) if and only if \(x,y\) lie in the same block.

- Reflexive: \(x\) lies in the same block as itself;
- Symmetric: the relation of lying in the same block is symmetric;
- Transitive: if \(x,y\) lie in the same block and \(y,z\) lie in the same block, then \(x,z\) lie in the same block.

Hence \(\sim\) is an equivalence relation, and its equivalence classes are exactly the blocks of the partition. This completes the proof.

---

## 3. Cantor's Theorem {#proof-cantor}

**Theorem**: there is no surjection \(f:A\to\mathcal P(A)\).

**Proof**: suppose for contradiction that \(f\) is a surjection. Define

\[
D=\{x\in A:x\notin f(x)\}.
\]

Then \(D\subseteq A\), that is, \(D\in\mathcal P(A)\). Since \(f\) is surjective, there exists \(d\in A\) with \(f(d)=D\).

Consider whether \(d\in D\):

- If \(d\in D\), then by the definition of \(D\) we have \(d\notin f(d)=D\), a contradiction;
- If \(d\notin D\), then \(d\notin f(d)\), so by definition \(d\in D\), a contradiction.

Both cases lead to a contradiction, so no such surjection exists. This completes the proof.

---

## 4. Cantor–Schröder–Bernstein {#proof-sb}

**Theorem**: if there exist an injection \(f:A\to B\) and an injection \(g:B\to A\), then there exists a bijection \(h:A\to B\).

**Construction**:

\[
C_0=A\setminus g(B),\qquad C_{n+1}=g(f(C_n)),\qquad C=\bigcup_{n=0}^\infty C_n.
\]

Define

\[
h(x)=
\begin{cases}
f(x), & x\in C,\\
g^{-1}(x), & x\notin C.
\end{cases}
\]

If \(x\notin C\), then \(x\notin C_0=A\setminus g(B)\), so \(x\in g(B)\), and \(g^{-1}(x)\) exists and is unique.

**Well-defined**: the two cases are mutually exclusive; \(g^{-1}(x)\) is unique.

**Injective**: suppose \(h(x)=h(y)\).

- If \(x,y\in C\), then \(f(x)=f(y)\), and injectivity of \(f\) gives \(x=y\).
- If \(x,y\notin C\), then \(g^{-1}(x)=g^{-1}(y)\), which gives \(x=y\).
- If \(x\in C,\ y\notin C\), then \(f(x)=g^{-1}(y)\); applying \(g\) to both sides gives \(g(f(x))=y\). But \(x\in C_n\) for some \(n\), so \(g(f(x))\in C_{n+1}\subseteq C\), contradicting \(y\notin C\).

Hence \(h\) is injective.

**Surjective**: take any \(y\in B\).

- If \(g(y)\in C\), then \(g(y)\in C_{n+1}=g(f(C_n))\) for some \(n\) (note that \(g(y)\notin C_0\)), so \(g(y)=g(f(c))\) for some \(c\in C_n\). By injectivity of \(g\), \(y=f(c)=h(c)\).
- If \(g(y)\notin C\), then \(h(g(y))=g^{-1}(g(y))=y\).

Hence \(h\) is surjective. This completes the proof.

---

## 5. Axiom of Choice, Zorn's Lemma, and the Well-Ordering Theorem

These three are equivalent (in ZF). This site **does not prove** this chain of equivalences; it requires ordinals, transfinite recursion, and an axiomatic system of set theory.

- **AC**: every family of non-empty sets has a choice function;
- **Zorn**: in a non-empty partially ordered set, if every chain has an upper bound, then there is a maximal element;
- **Well-ordering theorem**: every set can be well ordered.

When using Zorn, one must verify that "every chain has an upper bound"; verifying only finite chains does not suffice.

---

## 6. Supremum Property of Dedekind Cuts {#proof-dedekind}

Let \(S\) be a family of non-empty Dedekind cuts bounded above by a cut \(B\) (that is, every \(A\in S\) satisfies \(A\subseteq B\)). Let

\[
U=\bigcup_{A\in S} A.
\]

**Proof that \(U\) is a cut**:

1. \(U\ne\varnothing\): \(S\) is non-empty; take \(A\in S\), then \(A\ne\varnothing\), so \(U\) is non-empty.
2. \(U\ne\mathbb Q\): every \(A\subseteq B\), so \(U\subseteq B\ne\mathbb Q\).
3. Downward closed: if \(q\in U\), then \(q\in A\) for some \(A\in S\); if \(p<q\), downward closure of \(A\) gives \(p\in A\subseteq U\).
4. No greatest element: if \(q\in U\), then \(q\in A\) for some \(A\); \(A\) has no greatest element, so there exists \(r\in A\) with \(q<r\), whence \(r\in U\).

Therefore \(U\) is a cut.

**Upper bound**: every \(A\in S\) satisfies \(A\subseteq U\), so \(U\) is an upper bound.

**Least upper bound**: if \(C\) is any upper bound, then every \(A\subseteq C\), so \(U=\bigcup A\subseteq C\). Hence \(U\) is the least upper bound. This completes the proof.

---

## 7. Remaining Equivalent Forms of Completeness of the Reals

The number systems page lists five equivalent forms. This site gives a complete proof only of "Dedekind cuts ⇒ supremum property" (§6).

The remaining implications require the monotone bounded theorem, the nested interval theorem, and the Bolzano–Weierstrass theorem from real analysis; they are proved in the spaces and branch-analysis sections. Here we do not repeatedly cite "equivalence" as a proved conclusion, but use it only as a roadmap.

---

## 8. Fundamental Theorem of Group Homomorphisms {#proof-group-iso}

Let \(\varphi:G\to H\) be a group homomorphism and \(K=\ker\varphi\).

**The kernel is normal**: for \(k\in K\) and \(g\in G\),

\[
\varphi(gkg^{-1})=\varphi(g)\varphi(k)\varphi(g)^{-1}=e,
\]

so \(gkg^{-1}\in K\).

**Definition**: let \(\Phi:G/K\to\operatorname{im}\varphi\), \(\Phi(gK)=\varphi(g)\).

**Well-defined**: if \(gK=hK\), then \(h^{-1}g\in K\), so

\[
\varphi(h)^{-1}\varphi(g)=\varphi(h^{-1}g)=e,
\]

hence \(\varphi(g)=\varphi(h)\).

**Homomorphism**:

\[
\Phi(gK\cdot hK)=\Phi(ghK)=\varphi(gh)=\varphi(g)\varphi(h)=\Phi(gK)\Phi(hK).
\]

**Injective**: if \(\Phi(gK)=e\), then \(\varphi(g)=e\), so \(g\in K\), that is, \(gK=K\).

**Surjective**: take any \(y\in\operatorname{im}\varphi\); there exists \(g\) with \(y=\varphi(g)=\Phi(gK)\).

Therefore \(\Phi\) is an isomorphism, and \(G/K\cong\operatorname{im}\varphi\). This completes the proof.

---

## 9. Rank–Nullity Theorem {#proof-rank-nullity}

Let \(V\) be finite-dimensional and \(T:V\to W\) linear. Take a basis of \(\ker T\),

\[
v_1,\dots,v_k.
\]

Extend it to a basis of \(V\),

\[
v_1,\dots,v_k,v_{k+1},\dots,v_n.
\]

**Proof that \(T(v_{k+1}),\dots,T(v_n)\) is a basis of \(\operatorname{im}T\)**:

**Spanning**: take any \(v=\sum_{i=1}^n a_i v_i\); then

\[
T(v)=\sum_{i=1}^n a_iT(v_i)=\sum_{i=k+1}^n a_iT(v_i),
\]

because the first \(k\) terms lie in the kernel.

**Linear independence**: if \(\sum_{i=k+1}^n a_iT(v_i)=0\), then

\[
T\left(\sum_{i=k+1}^n a_iv_i\right)=0,
\]

so \(\sum_{i=k+1}^n a_iv_i\in\ker T\). But this is also a combination of \(v_{k+1},\dots,v_n\); the kernel has basis \(v_1,\dots,v_k\). By linear independence of a basis, all \(a_i=0\).

Therefore \(\dim\operatorname{im}T=n-k\), that is,

\[
\dim V=\dim\ker T+\dim\operatorname{im}T.
\]

This completes the proof.

---

## 10. Open Balls Are Open Sets {#proof-open-ball}

Let \(y\in B(x,r)\) and set \(s=r-d(x,y)>0\). For any \(z\in B(y,s)\), the triangle inequality gives

\[
d(x,z)\le d(x,y)+d(y,z)<d(x,y)+s=r,
\]

so \(z\in B(x,r)\). Hence \(B(y,s)\subseteq B(x,r)\), that is, \(B(x,r)\) is an open set. This completes the proof.

---

## 11. Two Characterizations of Continuity {#proof-continuity}

Let \(f:X\to Y\), where \(X,Y\) are metric spaces.

### ε-δ ⇒ Preimage of an Open Set Is Open

Let \(V\subseteq Y\) be open and \(x\in f^{-1}(V)\). Then \(f(x)\in V\), so there exists \(\varepsilon>0\) with \(B_Y(f(x),\varepsilon)\subseteq V\). By continuity, there exists \(\delta>0\) such that

\[
f(B_X(x,\delta))\subseteq B_Y(f(x),\varepsilon)\subseteq V.
\]

Hence \(B_X(x,\delta)\subseteq f^{-1}(V)\), that is, \(f^{-1}(V)\) is open.

### Preimage of an Open Set Is Open ⇒ ε-δ

Given \(x\) and \(\varepsilon>0\), take \(V=B_Y(f(x),\varepsilon)\). \(V\) is open, so \(f^{-1}(V)\) is open and contains \(x\). There exists \(\delta>0\) with \(B_X(x,\delta)\subseteq f^{-1}(V)\), that is, \(f(B_X(x,\delta))\subseteq V\). This is precisely the \(\varepsilon\)-\(\delta\) definition. This completes the proof.

---

## 12. Continuous Image of a Compact Set Is Compact {#proof-compact-image}

Let \(f:X\to Y\) be continuous and \(X\) compact. Take any open cover \(\{V_i\}_{i\in I}\) of \(f(X)\). Then

\[
\{f^{-1}(V_i)\}_{i\in I}
\]

is an open cover of \(X\). Since \(X\) is compact, there is a finite subcover

\[
X=f^{-1}(V_{i_1})\cup\cdots\cup f^{-1}(V_{i_m}).
\]

Thus

\[
f(X)\subseteq V_{i_1}\cup\cdots\cup V_{i_m}.
\]

Therefore \(f(X)\) is compact. This completes the proof.

---

## 13. Extreme Value Theorem on Compact Sets {#proof-evt}

Let \(X\) be non-empty and compact, and let \(f:X\to\mathbb R\) be continuous. By §12, \(f(X)\) is a compact subset of \(\mathbb R\), hence bounded and closed.

Let \(M=\sup f(X)\). By the definition of supremum, there exist \(x_n\in X\) with \(f(x_n)\to M\). Since \(f(X)\) is closed, \(M\in f(X)\), so there exists \(x\in X\) with \(f(x)=M\). The argument for the minimum is the same. This completes the proof.

---

## 14. Theorems with Deferred Proofs: What Must Be Supplied

| Theorem | Reason for deferral | Required to complete the proof |
|---|---|---|
| Completeness of first-order logic | Requires a proof system and model theory | Logic sequel/mathematical logic |
| AC ⇔ Zorn ⇔ well-ordering | Requires ordinals and transfinite recursion | Axiomatic set theory |
| Remaining equivalences of completeness of the reals | Requires monotone bounded/nested intervals/BW | Spaces and branch analysis |
| Fundamental theorem of algebra | Requires complex analysis or topology | Advanced complex analysis |
| Spectral theorem | Requires inner product spaces and induction | Algebra sequel/linear algebra |
| Heine–Borel/BW | Requires real analysis | Spaces and branches |
| MCT/Fatou/DCT | Requires measure theory | Advanced |
| Cauchy integral/residue | Requires complex analysis | Advanced |
| Hahn–Banach, etc. | Requires functional analysis | Advanced |
| Gauss–Bonnet/Brouwer | Requires geometry/algebraic topology | Advanced |


## 15. Banach Contraction Mapping Principle {#proof-banach}

**Theorem**: let \((X,d)\) be complete and let \(T:X\to X\) satisfy

\[
d(Tx,Ty)\le q\,d(x,y),\qquad 0\le q<1.
\]

Then \(T\) has a unique fixed point.

**Existence**: take any \(x_0\in X\) and set \(x_{n+1}=T(x_n)\). Induction gives

\[
d(x_{n+1},x_{n+2})\le q\,d(x_n,x_{n+1})\le q^{n+1}d(x_0,x_1).
\]

For \(m>n\), the triangle inequality and the geometric series give

\[
d(x_n,x_m)\le\sum_{k=n}^{m-1}d(x_k,x_{k+1})
\le d(x_0,x_1)\sum_{k=n}^{m-1}q^k
\le \frac{q^n}{1-q}d(x_0,x_1)\to0.
\]

So \(\{x_n\}\) is a Cauchy sequence. Since \(X\) is complete, \(x_n\to x\). By continuity of \(T\) (Lipschitz implies continuous),

\[
T(x)=\lim T(x_n)=\lim x_{n+1}=x.
\]

**Uniqueness**: if \(x,y\) are both fixed points, then

\[
d(x,y)=d(Tx,Ty)\le q\,d(x,y),
\]

and since \(0\le q<1\), necessarily \(d(x,y)=0\), that is, \(x=y\). This completes the proof.


## Rudin Chapter Proof Status

| Chapter | Proof/outline provided | Deferred |
|---|---|---|
| 1 The real number system | Ordered field, supremum, Archimedean, density, n-th roots, Schwarz | Remaining equivalent forms of completeness |
| 2 Basic topology | Open balls, closed sets, compact sets closed/bounded, closed subsets compact, connected intervals, continuous image connected | Complete proof of Heine–Borel |
| 3 Sequences and series | Uniqueness of limits, boundedness, monotone convergence, absolute convergence, M-test | Cauchy criterion, BW, details of root/ratio tests |
| 4 Continuity | Sequential characterization, composition, compact image, intermediate value, uniform continuity outline | Counting discontinuities of monotone functions |
| 5 Differentiation | Differentiable ⇒ continuous, differentiation rules, Rolle/MVT/Cauchy MVT, Darboux outline | Taylor remainder, L'Hôpital |
| 6 RS integral | Refinement, integrability criterion, continuous × monotone, properties, integration by parts outline | Bounded variation, change of variables |
| 7 Sequences of functions | Uniform convergence preserves continuity/integral, M-test, derivative interchange outline | Arzelà–Ascoli, Stone–Weierstrass |
| 8 Special functions | Exponential law, logarithm properties, trigonometric identities, Gamma recursion | Fourier convergence, Parseval |
| 9 Multivariable | Linear maps continuous, differentiable ⇒ continuous, contraction mapping (link) | Inverse/implicit function, rank theorem |
| 10 Differential forms | d²=0, ∂²=0, Stokes' idea | Poincaré lemma |
| 11 Lebesgue | MCT/Fatou/DCT statements and relations | Complete measure-theoretic proofs, Riesz–Fischer |

> This table is a "chapter-level" index; the status markers within individual theorem pages are finer-grained. Deferred does not mean incorrect; it only means that this site has not yet developed a complete proof.

## References

- [Propositional calculus](https://en.wikipedia.org/wiki/Propositional_calculus)
- [Equivalence relation](https://en.wikipedia.org/wiki/Equivalence_relation)
- [Cantor's theorem](https://en.wikipedia.org/wiki/Cantor%27s_theorem)
- [Schröder–Bernstein theorem](https://en.wikipedia.org/wiki/Schr%C3%B6der%E2%80%93Bernstein_theorem)
- [Dedekind cut](https://en.wikipedia.org/wiki/Dedekind_cut)
- [Isomorphism theorem](https://en.wikipedia.org/wiki/Isomorphism_theorem)
- [Rank–nullity theorem](https://en.wikipedia.org/wiki/Rank%E2%80%93nullity_theorem)
- [Compact space](https://en.wikipedia.org/wiki/Compact_space)
- [Extreme value theorem](https://en.wikipedia.org/wiki/Extreme_value_theorem)
