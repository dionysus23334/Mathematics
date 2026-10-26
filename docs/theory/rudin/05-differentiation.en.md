# Chapter 5 · Differentiation

> **Status**: Expanded. Core theorems are supplied with proofs or explicitly "deferred".  
> **Part of**: Rudin System · Chapter 5 · Differentiation  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 5.

## Prerequisites

- Sequences, continuity;
- Spaces, Limits, and Continuity: limits.

## 5.1 The Derivative {#r5-1}
\(f:(a,b)\to\mathbb R\) is differentiable at \(x\) if

\[
f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}
\]

exists.

### Theorem 5.1 (Differentiable ⇒ Continuous)

If \(f\) is differentiable at \(x\), then \(f\) is continuous at \(x\).

**Proof**:

\[
f(x+h)-f(x)=\frac{f(x+h)-f(x)}{h}\cdot h\to f'(x)\cdot0=0.
\]

This completes the proof.

### Theorem 5.2 (Rules of Differentiation)

If \(f,g\) are differentiable, then

\[
(f+g)'=f'+g',\qquad (fg)'=f'g+fg',\qquad \left(\frac fg\right)'=\frac{f'g-fg'}{g^2}\ (g\ne0).
\]

**Proof**: The first two identities follow directly from the definition of the limit; for the quotient rule, regard \(1/g\) as a composition, or combine the difference quotients over a common denominator. This completes the proof.

### Theorem 5.3 (Chain Rule)

If \(f\) is differentiable at \(x\) and \(g\) is differentiable at \(f(x)\), then

\[
(g\circ f)'(x)=g'(f(x))f'(x).
\]

**Proof sketch**: Write

\[
\frac{g(f(x+h))-g(f(x))}{h}
=\frac{g(f(x+h))-g(f(x))}{f(x+h)-f(x)}\cdot\frac{f(x+h)-f(x)}{h},
\]

and pass to the limit when \(f(x+h)\ne f(x)\); if \(f(x+h)=f(x)\), this case must be treated separately, or the definition may be completed by continuity.

## 5.2 The Mean Value Theorem {#r5-2}
### Theorem 5.4 (Rolle)

If \(f\) is continuous on \([a,b]\), differentiable on \((a,b)\), and \(f(a)=f(b)\), then there exists \(\xi\in(a,b)\) such that \(f'(\xi)=0\).

**Proof**: \(f\) attains a maximum and a minimum on the compact interval. If an extremum is attained in the interior, Fermat's lemma yields a vanishing derivative; if both endpoints are extrema, then \(f\) is constant and any \(\xi\) will do. This completes the proof.

### Theorem 5.5 (Lagrange Mean Value Theorem)

If \(f\) is continuous on \([a,b]\) and differentiable on \((a,b)\), then there exists \(\xi\in(a,b)\) such that

\[
f(b)-f(a)=f'(\xi)(b-a).
\]

**Proof**: Let

\[
g(x)=f(x)-\frac{f(b)-f(a)}{b-a}(x-a).
\]

Then \(g(a)=g(b)\), and Rolle's theorem applies to \(g\). This completes the proof.

### Theorem 5.6 (Cauchy Mean Value Theorem)

If \(f,g\) are continuous on \([a,b]\) and differentiable on \((a,b)\), with \(g'(x)\ne0\), then there exists \(\xi\) such that

\[
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}.
\]

**Proof**: Apply Rolle's theorem to

\[
h(x)=f(x)(g(b)-g(a))-g(x)(f(b)-f(a)).
\]

This completes the proof.

### Theorem 5.7 (Darboux Property of the Derivative)

The derivative possesses the intermediate value property: if \(f\) is differentiable on an interval, then \(f'\) assumes every value between any two of its values.

**Proof sketch**: Let \(a<b\) and \(f'(a)<\lambda<f'(b)\). Consider \(g(x)=f(x)-\lambda x\); near the endpoints the monotonicity of \(g\) is of opposite character, hence \(g\) attains an extremum in the interior, and Fermat's lemma gives \(g'=0\), that is, \(f'=\lambda\).

## 5.3 Taylor and L'Hôpital {#r5-3}
### Theorem 5.8 (Taylor's Theorem, Lagrange Remainder)

If \(f\) has \(n\) derivatives on an interval containing \(a\), then

\[
f(x)=\sum_{k=0}^{n-1}\frac{f^{(k)}(a)}{k!}(x-a)^k
+\frac{f^{(n)}(\xi)}{n!}(x-a)^n
\]

holds for some \(\xi\) between \(a\) and \(x\).

**Proof sketch**: Denote the remainder by \(R_n(x)\), construct an auxiliary function and apply Rolle's theorem repeatedly; or apply the MVT for \(n=1\) and then proceed by induction.

### Theorem 5.9 (L'Hôpital's Rule)

In the \(0/0\) or \(\infty/\infty\) case, if \(\lim f'/g'=L\), then \(\lim f/g=L\) (under suitable neighbourhood and differentiability conditions).

**Proof status**: The full proof is deferred; the essential ingredients are the Cauchy Mean Value Theorem and the treatment of endpoint limits. Before use, the type of the indeterminate form and the neighbourhood conditions must be verified.

## Exercises {#r5-ex}
### Basic

1. Determine the intervals of monotonicity and the extrema of \(f(x)=x^3-3x\).
2. Use the MVT to prove: if \(f'\equiv0\), then \(f\) is constant.
3. Evaluate \(\lim_{x\to0}\frac{\sin x-x}{x^3}\).

### Advanced

4. Prove that \(e^x\ge1+x\) for all \(x\).
5. Prove: if \(f'\) is bounded, then \(f\) is uniformly continuous.
6. Use Taylor's formula to estimate the error of the third-order approximation of \(\sin x\) near \(0\).

### Challenge

7. Prove the Darboux property of the derivative.
8. Construct a differentiable function whose derivative is discontinuous, and explain why the Darboux property nevertheless holds.

> Hint: for Exercise 8, consider \(x^2\sin(1/x)\) (\(x\ne0\)) together with \(f(0)=0\).

## Interface with the Regular System

- Chapter 4: [Continuity](04-continuity.md)
- Chapter 6: [Riemann–Stieltjes Integral](06-riemann-stieltjes.md)
- Spaces, Limits, and Continuity: [Spaces, Limits, and Continuity](../05-spaces.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r5-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 5.
- [Derivative](https://en.wikipedia.org/wiki/Derivative)
- [Mean value theorem](https://en.wikipedia.org/wiki/Mean_value_theorem)
- [Taylor's theorem](https://en.wikipedia.org/wiki/Taylor%27s_theorem)
