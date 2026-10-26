# Chapter 8 · Special Functions

> **Status**: Expanded. The focus is to bring the exponential function, the logarithm, the trigonometric functions, Fourier series, and the Gamma function into a unified framework.  
> **Part of**: Rudin System · Chapter 8 · Special Functions  
> **Source**: Walter Rudin, *Principles of Mathematical Analysis*, Chapter 8.

## Prerequisites

- Chapter 3: Power series;
- Chapter 5: Differentiation;
- Chapters 6–7: Integration, uniform convergence.

## 8.1 The Exponential Function {#r8-1}
Definition

\[
e^z=\sum_{n=0}^\infty\frac{z^n}{n!},\qquad z\in\mathbb C.
\]

The series converges absolutely on the whole plane (ratio test), and converges uniformly on every compact set.

### Theorem 8.1 (Law of Exponents)

\[
e^{z+w}=e^z e^w.
\]

**Proof**: By the Cauchy product of absolutely convergent series,

\[
e^z e^w=\sum_{n=0}^\infty\sum_{k=0}^n\frac{z^k}{k!}\frac{w^{n-k}}{(n-k)!}
=\sum_{n=0}^\infty\frac{(z+w)^n}{n!}=e^{z+w}.
\]

This completes the proof.

**Corollary**: \(e^0=1\), \(e^{-z}=1/e^z\), \(e^z\ne0\).

### Theorem 8.2 (Derivative)

\[
(e^z)'=e^z.
\]

**Proof**: Differentiate term by term (a power series converges uniformly on compact sets),

\[
\frac{d}{dz}\sum\frac{z^n}{n!}=\sum_{n\ge1}\frac{z^{n-1}}{(n-1)!}=e^z.
\]

This completes the proof.

## 8.2 The Logarithmic Function {#r8-2}
For \(x>0\), define

\[
\log x=\int_1^x\frac{dt}{t}.
\]

### Theorem 8.3 (Properties of the Logarithm)

\[
\log(xy)=\log x+\log y,\qquad \log(e^x)=x,\qquad e^{\log x}=x.
\]

**Proof**: The substitution \(t=xu\) gives

\[
\log(xy)=\int_1^{xy}\frac{dt}{t}
=\int_1^x\frac{dt}{t}+\int_x^{xy}\frac{dt}{t}
=\log x+\int_1^y\frac{du}{u}=\log x+\log y.
\]

The remaining two identities follow from the definition and the inverse function theorem. This completes the proof.

## 8.3 The Trigonometric Functions {#r8-3}
Definition

\[
\cos z=\frac{e^{iz}+e^{-iz}}2,\qquad
\sin z=\frac{e^{iz}-e^{-iz}}{2i}.
\]

Then

\[
\cos^2 z+\sin^2 z=1,\qquad \sin(z+w)=\sin z\cos w+\cos z\sin w,
\]
\[
(\sin z)'=\cos z,\qquad (\cos z)'=-\sin z.
\]

\(\pi\) is defined as \(2\) times the smallest positive zero; the periodicity of the trigonometric functions follows from this.

## 8.4 Fourier Series {#r8-4}
Let \(f\) be \(2\pi\)-periodic and Riemann integrable on \([-\pi,\pi]\). The Fourier coefficients are:

\[
\hat f(n)=\frac1{2\pi}\int_{-\pi}^{\pi}f(t)e^{-int}\,dt,
\]

The Fourier series is:

\[
f(x)\sim\sum_{n=-\infty}^\infty\hat f(n)e^{inx}.
\]

### Theorem 8.4 (Fourier Convergence, Overview)

If \(f\) is piecewise \(C^1\) on \([-\pi,\pi]\), then the Fourier series converges at every point to

\[
\frac{f(x+)+f(x-)}2.
\]

In particular, at points of continuity it converges to \(f(x)\).

**Proof status**: The full proof is deferred; it requires the Dirichlet kernel and the Riemann–Lebesgue lemma.

### Theorem 8.5 (Parseval)

If \(f\in L^2[-\pi,\pi]\), then

\[
\frac1{2\pi}\int_{-\pi}^{\pi}|f(x)|^2\,dx
=\sum_{n=-\infty}^\infty|\hat f(n)|^2.
\]

**Proof status**: Deferred; it requires the completeness of \(L^2\) and a Fourier basis.

## 8.5 The Gamma Function {#r8-5}
For \(x>0\), define

\[
\Gamma(x)=\int_0^\infty t^{x-1}e^{-t}\,dt.
\]

### Theorem 8.6 (Recurrence and Analytic Continuation)

\[
\Gamma(x+1)=x\Gamma(x),\qquad \Gamma(n+1)=n!.
\]

\(\Gamma\) admits an analytic continuation to a meromorphic function on \(\mathbb C\setminus\{0,-1,-2,\dots\}\), with a simple pole at \(x=-n\) and residue \((-1)^n/n!\).

**Proof**: Integration by parts yields the recurrence; the continuation is obtained from \(\Gamma(x)\Gamma(1-x)=\pi/\sin(\pi x)\) or the Weierstrass product. This completes the proof.

## Exercises {#r8-ex}
### Basic

1. Prove that \(e^z\ne0\) for all \(z\in\mathbb C\).
2. Find an integral representation of \(\log 2\) and show that its value lies between \(1/2\) and \(1\).
3. Prove that \(\sin^2 x+\cos^2 x=1\).

### Advanced

4. Prove that \(e^x>1+x\) for \(x>0\).
5. Compute the Fourier coefficients of \(f(x)=x\) on \([-\pi,\pi]\).
6. Prove that \(\Gamma(1)=1\) and \(\Gamma(1/2)=\sqrt\pi\).

### Challenge

7. Prove that Parseval's identity holds for trigonometric polynomials, and explain how to approximate a general \(L^2\) function.
8. Use Fourier series to prove that \(\sum_{n=1}^\infty 1/n^2=\pi^2/6\) (hint: expand \(f(x)=x^2\)).

## Interface with the Regular System

- Chapter 3: [Sequences and Series](03-sequences-series.md)
- Chapter 7: [Function Sequences and Series of Functions](07-function-sequences.md)
- Chapter 11: [Lebesgue Theory](11-lebesgue.md)
- Proof status: [Proof Status and Core Proofs](../proofs.md)

## References {#r8-ref}
- Walter Rudin, *Principles of Mathematical Analysis* (Chinese edition), Chapter 8.
- [Exponential function](https://en.wikipedia.org/wiki/Exponential_function)
- [Fourier series](https://en.wikipedia.org/wiki/Fourier_series)
- [Gamma function](https://en.wikipedia.org/wiki/Gamma_function)
