# Chapter 6 · The Riemann–Stieltjes Integral

> **Status**: Expanded. Key steps are supplied for existence proofs; major theorems are explicitly marked.  
> **Part of**: Rudin System · Chapter 6 · The Riemann–Stieltjes Integral  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 6.

## Prerequisites

- Sequences, continuity, differentiation;
- Chapter 2: compactness and uniform continuity;
- Spaces, Limits, and Continuity: metric spaces.

## 6.1 Partitions and Upper and Lower Sums {#r6-1}
Let \([a,b]\) be an interval and let \(f,\alpha:[a,b]\to\mathbb R\) be bounded. A partition is

\[
P=\{a=x_0<x_1<\cdots<x_n=b\}.
\]

Let

\[
M_i=\sup_{[x_{i-1},x_i]}f,\qquad m_i=\inf_{[x_{i-1},x_i]}f,
\]

and define the upper and lower sums:

\[
U(P,f,\alpha)=\sum_{i=1}^n M_i\Delta\alpha_i,
\qquad
L(P,f,\alpha)=\sum_{i=1}^n m_i\Delta\alpha_i,
\]

where \(\Delta\alpha_i=\alpha(x_i)-\alpha(x_{i-1})\) (we first assume that \(\alpha\) is monotonically increasing, so that these are nonnegative).

Define

\[
\overline{\int_a^b}f\,d\alpha=\inf_P U(P,f,\alpha),
\qquad
\underline{\int_a^b}f\,d\alpha=\sup_P L(P,f,\alpha).
\]

If the upper and lower integrals coincide, we say that the Riemann–Stieltjes integral exists and write it as \(\int_a^b f\,d\alpha\).

### Theorem 6.1 (Refinement of a Partition)

If \(P^*\) is a refinement of \(P\), then

\[
L(P,f,\alpha)\le L(P^*,f,\alpha)\le U(P^*,f,\alpha)\le U(P,f,\alpha).
\]

**Proof idea**: It suffices to consider the insertion of a single division point into one subinterval; the supremum over a smaller interval does not exceed the original supremum, and the infimum behaves in the opposite way. Adding the resulting inequalities term by term yields the claim.

### Theorem 6.2 (Necessary and Sufficient Condition for Integrability)

\(f\) is integrable with respect to \(\alpha\) \(\iff\) for every \(\varepsilon>0\) there exists a partition \(P\) such that

\[
U(P,f,\alpha)-L(P,f,\alpha)<\varepsilon.
\]

**Proof outline**:

- If \(f\) is integrable, choose \(P_1,P_2\) so that the upper and lower sums are close to the upper and lower integrals, and squeeze by means of a common refinement;
- Conversely, the upper and lower integrals are trapped between two numbers whose difference is less than \(\varepsilon\); letting \(\varepsilon\to0\) shows that they are equal.

## 6.2 Existence {#r6-2}
### Theorem 6.3 (Continuous × Monotone)

If \(f\) is continuous on \([a,b]\) and \(\alpha\) is monotonically increasing on \([a,b]\), then \(\int_a^b f\,d\alpha\) exists.

**Proof**: \(f\) is uniformly continuous on the compact interval. Given \(\varepsilon>0\), choose \(\delta>0\) such that \(|x-y|<\delta\Rightarrow|f(x)-f(y)|<\varepsilon\). Take a partition \(P\) all of whose subintervals have length \(<\delta\). Then

\[
M_i-m_i<\varepsilon,
\]

so that

\[
U(P,f,\alpha)-L(P,f,\alpha)
\le \varepsilon\sum_{i=1}^n\Delta\alpha_i
=\varepsilon(\alpha(b)-\alpha(a)).
\]

Integrability follows from Theorem 6.2. This completes the proof.

### Theorem 6.4 (Bounded Variation × Continuous)

If \(\alpha\) is of bounded variation on \([a,b]\) and \(f\) is continuous, then \(\int f\,d\alpha\) exists.

**Proof status**: The full proof is deferred. Idea: write \(\alpha\) as the difference of two monotonically increasing functions, \(\alpha=\alpha_1-\alpha_2\) (Jordan decomposition), apply Theorem 6.3 to \(\alpha_1\) and \(\alpha_2\) separately, and then subtract.

## 6.3 Properties of the Integral {#r6-3}
If \(f,g\) are integrable with respect to \(\alpha\), then:

\[
\int(\lambda f+\mu g)\,d\alpha=\lambda\int f\,d\alpha+\mu\int g\,d\alpha,
\]
\[
\int f\,d(\lambda\alpha+\mu\beta)=\lambda\int f\,d\alpha+\mu\int f\,d\beta,
\]
\[
\left|\int f\,d\alpha\right|\le\int|f|\,d\alpha\quad(\alpha\text{ monotonically increasing}).
\]

**Proof**: By the linearity of upper and lower sums together with a squeezing argument; the absolute-value estimate uses \(-|f|\le f\le|f|\). This completes the proof.

### Theorem 6.5 (Integration by Parts)

If \(f\) is integrable with respect to \(\alpha\), then \(\alpha\) is integrable with respect to \(f\), and

\[
\int_a^b f\,d\alpha+\int_a^b \alpha\,df
=f(b)\alpha(b)-f(a)\alpha(a).
\]

**Proof outline**: For a partition \(P\), consider

\[
\sum f(x_i)(\alpha(x_i)-\alpha(x_{i-1}))
+\sum \alpha(x_{i-1})(f(x_i)-f(x_{i-1}))
=f(b)\alpha(b)-f(a)\alpha(a),
\]

and pass to the limit.

### Theorem 6.6 (Change of Variable)

If \(\varphi:[\alpha,\beta]\to[a,b]\) is continuously differentiable and strictly monotone, and \(f\) is continuous, then

\[
\int_{\varphi(\alpha)}^{\varphi(\beta)}f(x)\,dx
=\int_\alpha^\beta f(\varphi(t))\varphi'(t)\,dt.
\]

**Proof status**: The full proof is deferred; it uses the Lagrange mean value theorem applied to Riemann sums together with uniform continuity.

## 6.4 Rectifiable Curves {#r6-4}
The arc length of a curve \(\gamma:[a,b]\to\mathbb R^n\) is

\[
L(\gamma)=\sup_{P}\sum_{i=1}^n\|\gamma(x_i)-\gamma(x_{i-1})\|.
\]

If \(L(\gamma)<\infty\), we say that \(\gamma\) is rectifiable.

### Theorem 6.7 (Rectifiable ↔ Bounded Variation)

\(\gamma\) is rectifiable \(\iff\) each coordinate function \(\gamma_j\) is of bounded variation on \([a,b]\).

**Proof outline**: Use the equivalence of norms and the definition of bounded variation, estimating coordinate by coordinate; all norms on a finite-dimensional space are equivalent.

## Exercises {#r6-ex}
### Basic

1. For \(f(x)=x\) and \([a,b]=[0,1]\), compute \(\int_0^1 x\,dx\) directly from the definition.
2. Prove: if \(f\) is bounded on \([a,b]\) and \(\alpha\) is monotonically increasing, then \(L(P,f,\alpha)\le U(P,f,\alpha)\).
3. Compute \(\int_0^1 x\,d(x^2)\) (hint: integration by parts).

### Advanced

4. Prove that a continuous function is integrable with respect to a monotonically increasing function (completing Theorem 6.3).
5. Prove the additivity of the integral over intervals: if \(a<c<b\), then \(\int_a^b f\,d\alpha=\int_a^c f\,d\alpha+\int_c^b f\,d\alpha\).
6. Prove: if \(f\) is continuous and \(\alpha\) is of bounded variation, then \(|\int f\,d\alpha|\le\|f\|_\infty V(\alpha)\).

### Challenge

7. Prove the integration by parts formula (completing the limiting step of Theorem 6.5).
8. Prove that the arc length of a \(C^1\) curve equals \(\int_a^b\|\gamma'(t)\|\,dt\).

> Hint: For Exercise 8, first apply the MVT to a partition to obtain a lower bound, and then use uniform continuity to obtain an upper bound.

## Interface with the Regular System

- Chapter 5: [Differentiation](05-differentiation.md)
- Chapter 7: [Sequences and Series of Functions](07-function-sequences.md)
- Spaces, Limits, and Continuity: [Spaces, Limits, and Continuity](../05-spaces.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r6-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 6.
- [Riemann–Stieltjes integral](https://en.wikipedia.org/wiki/Riemann%E2%80%93Stieltjes_integral)
- [Bounded variation](https://en.wikipedia.org/wiki/Bounded_variation)
