# Chapter 10 · Integration of Differential Forms

> **Status**: Expanded. Stokes' theorem is given with a statement and a proof sketch; the complete proof requires the inverse/implicit function tools of Chapter 9.  
> **Part of**: Rudin System · Chapter 10 · Integration of Differential Forms  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 10.

## Prerequisites

- Linear algebra, determinants;
- Chapter 9: multivariable differentiation, inverse function theorem;
- Chapter 6: integration.

## 10.1 Differential Forms {#r10-1}
Let \(U\subseteq\mathbb R^n\) be open. A \(k\)-form can be written as

\[
\omega=\sum_{1\le i_1<\cdots<i_k\le n} f_{i_1\cdots i_k}(x)\,dx_{i_1}\wedge\cdots\wedge dx_{i_k},
\]

where \(f_I\) are smooth functions and \(\wedge\) is the antisymmetric bilinear product:

\[
dx_i\wedge dx_j=-dx_j\wedge dx_i,\qquad dx_i\wedge dx_i=0.
\]

**Exterior differentiation**:

\[
d\omega=\sum_I df_I\wedge dx_I
=\sum_I\sum_{j=1}^n\frac{\partial f_I}{\partial x_j}dx_j\wedge dx_I.
\]

### Theorem 10.1 (d² = 0)

For a smooth form \(\omega\), we have

\[
d(d\omega)=0.
\]

**Proof**: By

\[
\frac{\partial^2 f}{\partial x_i\partial x_j}
=\frac{\partial^2 f}{\partial x_j\partial x_i}
\]

and \(dx_i\wedge dx_j=-dx_j\wedge dx_i\), the mixed partial derivative terms cancel in pairs. This completes the proof.

**Closed form**: \(d\omega=0\). **Exact form**: \(\omega=d\eta\). Theorem 10.1 shows that exact ⇒ closed; the converse is in general false and depends on the topology of the domain.

## 10.2 Simplices and Chains {#r10-2}
The standard \(k\)-simplex:

\[
\Delta^k=\left\{(t_1,\dots,t_k):t_i\ge0,\ \sum t_i\le1\right\}.
\]

A singular \(k\)-simplex is a smooth mapping \(\sigma:\Delta^k\to U\). A \(k\)-chain is a finite formal sum \(\sum a_i\sigma_i\).

**Boundary**:

\[
\partial\sigma=\sum_{i=0}^k(-1)^i\sigma\circ F_i,
\]

where \(F_i\) is the affine mapping that embeds the \(i\)-th face of the standard simplex.

### Theorem 10.2 (∂² = 0)

\[
\partial(\partial\sigma)=0.
\]

**Proof**: One computes term by term according to the composition of face mappings; the signs \((-1)^{i+j}\) cancel when the two face mappings are interchanged. This completes the proof.

## 10.3 Integration of Forms and Stokes' Theorem {#r10-3}
For a \(k\)-form \(\omega\) and a singular \(k\)-simplex \(\sigma\), define

\[
\int_\sigma\omega=\int_{\Delta^k}\sigma^*\omega.
\]

This extends linearly to chains.

### Theorem 10.3 (Stokes)

If \(\omega\) is a smooth \((k-1)\)-form on \(U\) and \(c\) is a \(k\)-chain, then

\[
\int_{\partial c}\omega=\int_c d\omega.
\]

**Proof sketch**: First prove the statement for the standard simplex and monomial forms; use Fubini's theorem to reduce the boundary integral to an iterated integral, then apply the fundamental theorem of calculus; finally extend by pullbacks and the linearity of chains.

**Special cases**:

- \(k=1\): \(\int_a^b f'(x)dx=f(b)-f(a)\);
- \(k=2\): Green's formula;
- \(k=3\): the classical Stokes and Gauss formulas.

## 10.4 Closed and Exact Forms {#r10-4}
### Theorem 10.4 (Poincaré Lemma)

If \(U\subseteq\mathbb R^n\) is a star-shaped region and \(\omega\) is a closed \(k\)-form (\(k\ge1\)), then there exists a \((k-1)\)-form \(\eta\) such that

\[
\omega=d\eta.
\]

**Proof status**: The complete proof is deferred. The construction uses a radial homotopy: integrate \(\omega\) along the line segment from \(x\) to the origin to obtain \(\eta\); closedness guarantees that \(d\eta=\omega\).

**Corollary**: In \(\mathbb R^n\), every closed form is locally exact; whether it is globally exact is measured by de Rham cohomology.

## Exercises {#r10-ex}
### Basic

1. Compute \(d(x\,dy+y\,dz)\).
2. Verify that \(d(dx\wedge dy)=0\).
3. Write out the correspondence between Green's formula and Stokes' theorem in \(\mathbb R^2\).

### Advanced

4. Prove that \(d^2=0\) (supply the sign cancellation).
5. Prove that \(\partial^2=0\) holds in the case \(k=2\).
6. Determine whether \(\omega=x\,dy-y\,dx\) is exact on \(\mathbb R^2\setminus\{0\}\).

### Challenge

7. Prove the Poincaré lemma on a star-shaped region (write out the radial homotopy formula).
8. Use Stokes' theorem to prove that if \(f\) is holomorphic on the unit disk, then the integral over a closed path is 0 (compare with complex analysis).

> Hint: For Exercise 6, compute \(d\omega\) and use the angular form to show that it is not globally exact.

## Interfaces with the Regular System

- Chapter 9: [Functions of Several Variables](09-multivariable.md)
- Chapter 6: [The Riemann–Stieltjes Integral](06-riemann-stieltjes.md)
- [Advanced Theory](../07-advanced.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r10-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 10.
- [Differential form](https://en.wikipedia.org/wiki/Differential_form)
- [Stokes' theorem](https://en.wikipedia.org/wiki/Stokes%27_theorem)
- [De Rham cohomology](https://en.wikipedia.org/wiki/De_Rham_cohomology)
