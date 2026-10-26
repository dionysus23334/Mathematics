# Mathematics · 经典传统体系

Personal mathematics knowledge base under **经典传统体系**, with two parallel routes:

- **常规体系** — topic-by-topic: logic, sets, numbers, algebra, spaces, branches, advanced.
- **Rudin 体系** — chapter-by-chapter analysis route, Rudin chapters 1–11.

Live: https://dionysus23334.github.io/Mathematics/

## Structure

```text
docs/
  index.md                     two-route homepage
  theory/                      classical route (one page per topic)
    01-logic.md
    02-sets.md
    03-numbers.md
    04-algebra.md
    05-spaces.md
    rudin/
      01-real-complex.md       chapter 1, with complete proofs
      02..11                   expanded chapters with content + exercises
    06-branches.md
    07-advanced.md
    proofs.md                  proof status + complete core proofs
  stages/                      learning-stage route
    elementary.md
    secondary.md
    competition.md             one page: geometry / algebra / number theory / combinatorics
    university.md
  principles.md                dependency rules and page template
  glossary.md                  searchable terminology index
  abbreviations.md             English abbreviations
  sources.md                   textbooks / Wikipedia / attribution
```

## Principles

- Every page lists its prerequisites.
- A concept is defined at first use, or linked to a completed prerequisite.
- Proofs may be complete, outlined, or explicitly deferred — never silently assumed.
- The classical route answers “what must come before this proof”; the stage route answers “what should a learner experience first”.

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
