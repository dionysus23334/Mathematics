# Chapter 9 · Multivariable Functions

> **Status**: Expanded. The inverse and implicit function theorems are given with their conditions and the idea of the proof; the complete proofs are marked as deferred.  
> **Belongs to**: Rudin System · Chapter 9 · Multivariable Functions  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 9.

## Prerequisites

- Linear algebra;
- Spaces, Limits, and Continuity: metric spaces, compactness;
- Chapters 4–5: continuity, differentiation.

## 9.1 Linear Transformations and Norms {#r9-1}
Let \(A\in\mathbb R^{m\times n}\). Define the operator norm

\[
\|A\|=\sup_{\|x\|=1}\|Ax\|.
\]

Then \(\|Ax\|\le\|A\|\|x\|\), and

\[
\|A+B\|\le\|A\|+\|B\|,\qquad \|AB\|\le\|A\|\|B\|.
\]

### Theorem 9.1 (Continuity of Finite-Dimensional Linear Transformations)

Every linear map \(A:\mathbb R^n\to\mathbb R^m\) is continuous.

**Proof**: Let the matrix entries of \(A\) be \(a_{ij}\). Then

\[
\|Ax-Ay\|=\|A(x-y)\|\le\|A\|\|x-y\|,
\]

so take \(\delta=\varepsilon/\|A\|\) (the case \(\|A\|=0\) is trivial). This completes the proof.

## 9.2 Derivatives {#r9-2}
We say that \(f:\Omega\subseteq\mathbb R^n\to\mathbb R^m\) is differentiable at \(x\) if there exists a linear map \(Df(x):\mathbb R^n\to\mathbb R^m\) such that

\[
f(x+h)-f(x)=Df(x)h+o(\|h\|).
\]

\(Df(x)\) is the Jacobian matrix.

### Theorem 9.2 (Differentiable ⇒ Continuous)

Differentiability implies continuity.

**Proof**:

\[
\|f(x+h)-f(x)\|\le\|Df(x)\|\|h\|+o(\|h\|)\to0.
\]

This completes the proof.

### Theorem 9.3 (Chain Rule)

If \(f\) is differentiable at \(x\) and \(g\) is differentiable at \(f(x)\), then

\[
D(g\circ f)(x)=Dg(f(x))\,Df(x).
\]

**Proof sketch**: Expand \(g(f(x+h))-g(f(x))\) as \(Dg(f(x))(f(x+h)-f(x))+o(\|f(x+h)-f(x)\|)\), then use the differentiability of \(f\).

## 9.3 Contraction Mappings and the Inverse Function Theorem {#r9-3}
### Theorem 9.4 (Contraction Mapping Principle)

If \((X,d)\) is complete and \(T:X\to X\) satisfies \(d(Tx,Ty)\le qd(x,y)\) with \(0\le q<1\), then \(T\) has a unique fixed point.

**Proof**: See [proof page §15](../proofs.md#proof-banach).

### Theorem 9.5 (Inverse Function Theorem)

Let \(f:\Omega\subseteq\mathbb R^n\to\mathbb R^n\) be \(C^1\), let \(a\in\Omega\), and suppose \(Df(a)\) is invertible. Then there exist a neighborhood \(U\) of \(a\) and a neighborhood \(V\) of \(f(a)\) such that \(f:U\to V\) is a \(C^1\) homeomorphism, and

\[
D(f^{-1})(y)=[Df(f^{-1}(y))]^{-1}.
\]

**Proof sketch**: Set \(F(x)=x+[Df(a)]^{-1}(y-f(x))\), thereby converting the equation \(f(x)=y\) into a fixed-point problem for \(F\); near \(a\), use the continuity of \(Df\) together with the contraction mapping principle, and then show that the inverse map is differentiable.

### Theorem 9.6 (Implicit Function Theorem)

If \(F:\mathbb R^{n+m}\to\mathbb R^m\) is \(C^1\), \(F(a,b)=0\), and \(\partial F/\partial y(a,b)\) is invertible, then there exist a neighborhood \(U\) of \(a\) and a unique \(C^1\) function \(g:U\to\mathbb R^m\) such that \(g(a)=b\) and

\[
F(x,g(x))=0.
\]

**Proof sketch**: Apply the inverse function theorem to \(G(x,y)=(x,F(x,y))\), and then take the second component of the local inverse.

### Theorem 9.7 (Rank Theorem, Statement)

If \(f\) is \(C^1\) near \(a\) and \(Df(a)\) has rank \(r\), then there exists a local change of coordinates that reduces \(f\) to

\[
(x_1,\dots,x_n)\mapsto(x_1,\dots,x_r,0,\dots,0).
\]

**Proof status**: Deferred; it requires the inverse function theorem and a linear change of coordinates.

## Exercises {#r9-ex}
### Basic

1. Compute the Jacobian of \(f(x,y)=(x^2y,\sin y)\).
2. Prove that \(\|AB\|\le\|A\|\|B\|\).
3. Determine whether \(f(x,y)=x^2+y^2\) is differentiable at \((0,0)\).

### Advanced

4. Prove the chain rule (completing the \(o(\|h\|)\) estimate in Theorem 9.3).
5. Use the contraction mapping principle to prove that the equation \(x=\cos x\) has a unique solution in \([0,1]\).
6. Explain why the invertibility of \(Df(a)\) is necessary in the inverse function theorem (give a counterexample).

### Challenge

7. Prove the implicit function theorem (deriving it from the inverse function theorem).
8. Prove the linear-algebra case of the rank theorem, and then explain how to extend it by means of the inverse function theorem.

> Hint: For Exercise 8, first carry out the rank factorization of the linear map \(A=P\begin{pmatrix}I_r&0\\0&0\end{pmatrix}Q\).

## Interface with the Regular System

- [Algebraic Structures and Linear Spaces](../04-algebra.md)
- Spaces, Limits, and Continuity: [Spaces, Limits, and Continuity](../05-spaces.md)
- Chapter 5: [Differentiation](05-differentiation.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r9-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 9.
- [Inverse function theorem](https://en.wikipedia.org/wiki/Inverse_function_theorem)
- [Implicit function theorem](https://en.wikipedia.org/wiki/Implicit_function_theorem)
- [Contraction mapping](https://en.wikipedia.org/wiki/Banach_fixed-point_theorem)
