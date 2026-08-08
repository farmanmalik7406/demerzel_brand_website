# GitHub Pages Deployment

This project is ready for GitHub Pages through `.github/workflows/deploy.yml`.

## Required repository setting

In GitHub, open:

`Settings -> Pages -> Build and deployment`

Set the source to:

`GitHub Actions`

## How deployment works

On every push to `main`, the workflow runs:

```bash
npm ci
npm run build
```

The workflow sets:

```bash
VITE_BASE_PATH=/${{ github.event.repository.name }}/
```

That makes Vite generate correct asset paths for a project site such as:

`https://USERNAME.github.io/REPOSITORY_NAME/`

The build also creates `dist/404.html` so React Router routes can refresh directly on GitHub Pages.

## Custom domain note

For a custom domain or user/organization site deployed at `/`, change `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to:

```bash
/
```
