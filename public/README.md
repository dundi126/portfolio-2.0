# Public Assets Guide

Files inside this directory are served directly from the website root.

For example:

```text
public/project-images/example.png
```

is referenced in code as:

```text
/project-images/example.png
```

## Resume

The navigation links to:

```text
public/Dundi-Vignesh-Gutti-Resume.pdf
```

Replace this file while keeping the same filename whenever the resume changes.

## Credentials

Certificate PDFs belong in:

```text
public/credentials/
```

After adding a certificate, add or update its entry in `src/data/portfolio.ts`.

## Project Images

```text
public/project-images/
  mockups/               Primary project-card product visuals
  project-name/          Project-specific screenshots
  evidence-images.png    Charts, evaluation results, or diagrams
```

### Recommended image guidelines

- Use PNG or WebP for interfaces, diagrams, and transparent assets.
- Use JPEG or WebP for photographic mockups.
- Prefer images at least 1600px wide for featured project visuals.
- Keep screenshots readable and remove private or sensitive information.
- Use consistent lighting and device styles across generated mockups.
- Compress large assets before deployment.
- Write descriptive `alt` text in `src/data/portfolio.ts` for evidence images.

### Naming

Use lowercase kebab-case names:

```text
therapy-ai-meetings-dashboard.png
nutrilens-confusion-matrix.png
oishii-product-mockup.webp
```

Avoid spaces, temporary names, and version names such as `final-final-2.png`.

