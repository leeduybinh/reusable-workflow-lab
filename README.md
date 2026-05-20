# Reusable Workflow Lab

Small JavaScript/npm project for practicing GitHub Actions reusable workflows.

## Commands

```bash
npm start
npm test
npm run lint
npm run ci
```

## Workflow Idea

`.github/workflows/reusable-node-ci.yml` contains the reusable checks.

`.github/workflows/ci.yml` calls the reusable workflow on pushes and pull requests.
# reusable-workflow-lab
