# Creative IP

## Git Workflow

- Default branch: `main`
- **Always fetch and pull before branching:**
  ```bash
  git fetch origin
  git checkout main
  git pull origin main
  ```
- **Create feature branches from up-to-date `main`:**
  ```bash
  git checkout -b feature/<description> main
  ```
- **Branch naming:** `feature/*`, `fix/*`, `chore/*`
- **Rebase before pushing:**
  ```bash
  git fetch origin
  git rebase origin/main
  ```
- **Never commit directly to `main`** — always use feature branches + PRs
