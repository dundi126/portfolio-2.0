# Dundi Gutti - Portfolio 2.0

A responsive portfolio website presenting my full-stack, AI/ML, backend, and academic engineering work through selected projects and detailed case studies.

The portfolio is designed for recruiters, hiring managers, and engineering teams. It emphasizes clear project outcomes, technical depth, responsive presentation, and accessible interactions.

## Highlights

- Responsive desktop and mobile layouts
- Floating navigation with section-aware styling
- Animated sections that replay in both scroll directions
- Project gallery with custom product visuals
- Scrollable glassmorphism case-study modal
- Experience, technical toolkit, credentials, and supporting explorations
- Downloadable resume and certificate assets
- Reduced-motion support

## Tech Stack

- [Next.js](https://nextjs.org/) 15 with the App Router
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Getting Started

### Requirements

- Node.js 18.18 or newer
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production checks

```bash
npm run lint
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
    globals.css           Global styles, textures, and responsive utilities
    layout.tsx            Site metadata, fonts, and root layout
    page.tsx              Main route
  components/
    AnimateIn.tsx         Repeatable bidirectional scroll animations
    CaseStudyModal.tsx    Project case-study popup
    Portfolio.tsx         Main portfolio sections and navigation
    ProjectVisual.tsx     Project image and device presentation system
  data/
    portfolio.ts          Experience, skills, credentials, and project content

public/
  credentials/            Certificate PDFs
  project-images/         Project visuals, mockups, and evidence
  Dundi-Vignesh-Gutti-Resume.pdf
```

## Updating Content

Most portfolio content is maintained in [`src/data/portfolio.ts`](src/data/portfolio.ts).

That file contains:

- Professional experience
- Technical toolkit categories
- Credentials
- Featured projects and case studies
- Other explorations

See [`src/data/README.md`](src/data/README.md) for detailed editing instructions.

## Updating Assets

Static files live under [`public/`](public/). Replace the resume PDF without changing its filename to keep the existing Resume links working.

See [`public/README.md`](public/README.md) for image, certificate, and file naming guidance.

## Project Presentation Modes

Each featured project can use one of four presentation styles:

| Mode | Best used for |
| --- | --- |
| `photo` | Realistic product photography and device mockups |
| `browser` | Website or dashboard screenshots |
| `canvas` | Simulations, visualizations, and diagrams |
| `laptop` | Interfaces displayed inside a generated laptop frame |

Presentation settings are configured per project in `src/data/portfolio.ts`.

## Deployment

The simplest deployment option is [Vercel](https://vercel.com/):

1. Import the GitHub repository into Vercel.
2. Keep the detected Next.js framework settings.
3. Use `npm run build` as the build command.
4. Deploy.
5. Connect a custom domain when ready.

No environment variables are currently required.

## Pre-Deployment Checklist

- Run `npm run build`.
- Confirm the resume and certificate links open correctly.
- Test navigation anchors on desktop and mobile.
- Open every case study.
- Verify all repository links.
- Review project dates, metrics, and descriptions.
- Test at approximately 320px, 390px, tablet, and desktop widths.
- Update the site metadata and social preview before launch.

## Repository

GitHub: [dundi126/portfolio-2.0](https://github.com/dundi126/portfolio-2.0)

