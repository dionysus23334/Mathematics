# Algebraic Structures and Linear Spaces

> **Source**: Standard abstract algebra textbooks; Wikipedia: Group, Ring, Field, Vector space.

> **Prerequisites**: Sets and number systems (sets, mappings, equivalence relations, number systems).  
> **Goal of this chapter**: To abstract the common structures from concrete number systems and to establish the language of linear algebra.

## 4.1 Operations and Algebraic Structures

A **binary operation** on a set \(A\) is a mapping \(A\times A\to A\). It must assign a unique result to every ordered pair, and the result must again lie in \(A\) (closure).

An algebraic structure = a set + several operations + the axioms satisfied by these operations.

## 4.2 Groups {#algebra-groups}

A group \((G,\cdot)\) satisfies:

1. **Associativity**: \((ab)c=a(bc)\);
2. **Identity element**: there exists \(e\in G\) such that \(ea=ae=a\);
3. **Inverse element**: for every \(a\in G\) there exists \(a^{-1}\) such that \(aa^{-1}=a^{-1}a=e\).

If in addition the commutative law \(ab=ba\) holds, the group is called an **abelian group**.

Examples: \((\mathbb Z,+)\), \((\mathbb Q\setminus\{0\},\cdot)\), \(GL_n(\mathbb R)\) (invertible matrices under multiplication), and the permutation group \(S_n\).

**Subgroup**: a non-empty subset \(H\subseteq G\) that is closed under multiplication and inverses. Lagrange's theorem: in a finite group, the order of a subgroup divides the order of the group.

## 4.3 Rings and Fields {#algebra-rings}

A ring \((R,+,\cdot)\) satisfies: \((R,+)\) is an abelian group; multiplication is associative; multiplication distributes over addition.

- **Commutative ring**: multiplication is commutative;
- **Ring with unity**: there exists a multiplicative identity \(1\);
- **Integral domain**: commutative, with unity, and without zero divisors (\(ab=0\to a=0\) or \(b=0\)).

A **field** is a commutative ring with unity in which every non-zero element has a multiplicative inverse. Examples: \(\mathbb Q,\mathbb R,\mathbb C,\mathbb F_p\) (with \(p\) prime).

## 4.4 Homomorphisms and Isomorphisms

A mapping that preserves the operations is called a **homomorphism**:

- Group homomorphism: \(\varphi(ab)=\varphi(a)\varphi(b)\);
- Ring homomorphism: \(\varphi(a+b)=\varphi(a)+\varphi(b)\), \(\varphi(ab)=\varphi(a)\varphi(b)\).

A bijective homomorphism is called an **isomorphism**. Two structures related by an isomorphism are "the same" algebraically; only the names of the elements differ.

**Kernel**: \(\ker\varphi=\{g:\varphi(g)=e\}\). Fundamental theorem of group homomorphisms: \(G/\ker\varphi\cong \operatorname{im}\varphi\).

## 4.5 Vector Spaces {#algebra-vector}

Let \(F\) be a field. A vector space \(V\) is an abelian group equipped with a scalar multiplication \(F\times V\to V\) satisfying:

\[
1v=v,\qquad a(bv)=(ab)v,
\]

\[
a(u+v)=au+av,\qquad (a+b)v=av+bv.
\]

The elements are called vectors, and \(F\) is called the base field. \(\mathbb R^n\) is the most typical example.

## 4.6 Bases, Dimension, and Linear Maps {#algebra-basis}

- **Linear combination**: \(\sum_{i=1}^n a_i v_i\);
- **Span**: every vector in \(V\) can be written as a finite linear combination;
- **Linear independence**: if \(\sum a_i v_i=0\), then all \(a_i=0\);
- **Basis**: linearly independent and spanning \(V\).

If \(V\) has a basis consisting of \(n\) vectors, then every basis consists of \(n\) vectors, and \(n\) is called the **dimension**.

A **linear map** \(T:V\to W\) satisfies \(T(au+bv)=aT(u)+bT(v)\). A linear map is uniquely determined by its values on a basis.

## 4.7 Matrices and Systems of Linear Equations

Once a basis is chosen, a linear map is represented by a matrix; composition corresponds to matrix multiplication. The solution set of the system \(Ax=b\):

- The solution space of the homogeneous system \(Ax=0\) is the kernel;
- If the inhomogeneous system is consistent, its solution set is an affine subspace (a particular solution plus the homogeneous solutions).

**Rank–nullity theorem**:

\[
\dim V=\dim\ker T+\dim\operatorname{im}T.
\]

## 4.8 Determinants, Eigenvalues, and Inner Products {#algebra-spectral}

- **Determinant**: an alternating multilinear function satisfying \(\det(AB)=\det A\det B\); \(\det A\ne0\) if and only if \(A\) is invertible.
- **Eigenvalue/eigenvector**: \(Av=\lambda v\), \(v\ne0\). Characteristic polynomial \(\det(A-\lambda I)=0\).
- **Inner product**: positive definite, symmetric/conjugate symmetric, linear in the first argument; it induces the norm \(\|v\|=\sqrt{\langle v,v\rangle}\).
- **Orthogonality**: \(\langle u,v\rangle=0\); an orthogonal basis simplifies coordinate computations.

## Dependencies and Boundaries

This chapter treats only the **basic definitions and typical examples**. Complete group theory (Sylow theorems, solvable groups), commutative algebra (ideals, localization), and field extensions (Galois theory) belong to the algebra branch of the Core Branches.

Before entering analysis, what is required is: the real and complex fields, vector spaces, inner products, norms, linear maps, and matrices; it is not necessary to have studied a complete course in advanced algebra first.


## 4.9 Fundamental Theorem of Group Homomorphisms

Let \(\varphi:G\to H\) be a group homomorphism. Then \(\ker\varphi\) is a normal subgroup of \(G\), and

\[
G/\ker\varphi\cong\operatorname{im}\varphi.
\]

The isomorphism is given by \(g\ker\varphi\mapsto\varphi(g)\). This theorem converts "the image of a homomorphism" into "a quotient group" and is one of the earliest structure theorems in group theory; the complete proof is given in [proofs page §8](proofs.md#proof-group-iso).

**Corollary**: \(\varphi\) is injective \(\iff \ker\varphi=\{e\}\).

## 4.10 Rank–Nullity Theorem

Let \(V,W\) be finite-dimensional vector spaces over a field \(F\), and let \(T:V\to W\) be linear. Then

\[
\dim V=\dim\ker T+\dim\operatorname{im}T.
\]

Equivalently, \(\operatorname{rank}T+\operatorname{nullity}T=\dim V\). It states that the sum of the "dimensions lost" and the "dimensions retained" by a linear map equals the dimension of the domain; the complete proof is given in [proofs page §9](proofs.md#proof-rank-nullity).

**Corollary**: if \(\dim V=\dim W\), then \(T\) is injective \(\iff\) surjective \(\iff\) invertible.

## 4.11 Spectral Theorem for Real Symmetric Matrices

If \(A\) is a real symmetric matrix (\(A=A^{\mathsf T}\)), then:

1. All eigenvalues of \(A\) are real;
2. Eigenvectors belonging to distinct eigenvalues are orthogonal;
3. There exists an orthogonal matrix \(Q\) such that \(A=Q\Lambda Q^{\mathsf T}\), where \(\Lambda\) is a diagonal matrix whose diagonal entries are the eigenvalues.

That is to say, a real symmetric matrix has a set of orthonormal eigenvectors forming a basis of \(\mathbb R^n\). Complex Hermitian matrices admit an analogous unitary diagonalization. This site **defers the proof for now** (it requires inner product spaces and induction).

## 4.12 References

- [Group (mathematics)](https://en.wikipedia.org/wiki/Group_(mathematics))
- [Ring (mathematics)](https://en.wikipedia.org/wiki/Ring_(mathematics))
- [Field (mathematics)](https://en.wikipedia.org/wiki/Field_(mathematics))
- [Vector space](https://en.wikipedia.org/wiki/Vector_space)
- [Rank–nullity theorem](https://en.wikipedia.org/wiki/Rank%E2%80%93nullity_theorem)
- [Spectral theorem](https://en.wikipedia.org/wiki/Spectral_theorem)
- [Isomorphism theorem](https://en.wikipedia.org/wiki/Isomorphism_theorem)

## Checkpoints

- Be able to verify whether a set together with a given operation forms a group/ring/field.
- Be able to distinguish homomorphisms, isomorphisms, and automorphisms.
- Be able to prove that the number of vectors in a basis does not depend on the choice of basis (finite-dimensional case).
- Be able to state the rank–nullity theorem and use it to determine the structure of the solution set of a linear system.
