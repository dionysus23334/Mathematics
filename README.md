# Mathematics · 经典数学理论体系

Personal mathematics knowledge base with **two parallel directories**:

- **经典数学理论体系** — organized by proof dependency: logic → sets → numbers → algebra → spaces → branches → advanced.
- **教育阶段体系** — organized by learning stage: elementary → secondary (basic / advanced / competition / university bridge) → university.

Live: https://dionysus23334.github.io/Mathematics/

## Structure

```text
docs/
  index.md                     two-route homepage
  theory/                      7-layer dependency route
    01-logic.md
    02-sets.md
    03-numbers.md
    04-algebra.md
    05-spaces.md
    06-branches.md
    07-advanced.md
  stages/                      learning-stage route
    elementary.md
    secondary.md
    university.md
    competition/
      geometry.md
      algebra.md
      number-theory.md
      combinatorics.md
  principles.md                dependency rules and page template
  glossary.md                  searchable terminology index
```

## Principles

- Every page lists its prerequisites.
- A concept is defined at first use, or linked to a completed prerequisite.
- Proofs may be complete, outlined, or explicitly deferred — never silently assumed.
- The theory route answers “what must come before this proof”; the stage route answers “what should a learner experience first”.

This is a **knowledge map**, not a finished textbook. Each page can be expanded with full definitions, proofs, examples and exercises.

## Local preview

```bash
python3 -m http.server -d site 8000
```

Build with MkDocs Material:

```bash
pip install -r requirements.txt
mkdocs serve
```

## Deployment

GitHub Actions builds `main` and publishes to `gh-pages` on every push that touches `docs/**`, `mkdocs.yml`, or `requirements.txt`.
