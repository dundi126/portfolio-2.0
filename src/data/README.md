# Portfolio Content Guide

The website's primary content source is [`portfolio.ts`](portfolio.ts). Update this file when changing experience, skills, credentials, featured projects, or other explorations.

## Experience

Add or edit entries in the `experience` array:

```ts
{
  company: "Company name",
  role: "Role title",
  dates: "Month Year - Month Year",
}
```

Keep the newest or most relevant experience first.

## Technical Toolkit

The `technicalGroups` array controls the toolkit cards. Keep categories concise and prioritize skills you can confidently discuss in an interview.

## Credentials

Credential URLs point to files inside `public/`:

```ts
{
  title: "Certification name",
  issuer: "Issuing organization",
  date: "Issued date and expiration",
  url: "/credentials/certificate-file.pdf",
}
```

## Featured Projects

Featured projects use the `Project` type and appear in the main project gallery.

Important fields:

| Field | Purpose |
| --- | --- |
| `slug` | Stable unique project identifier |
| `title` | Project name |
| `description` | Short recruiter-facing summary |
| `tags` | Main technologies |
| `context` | Project type or academic context |
| `metric` | Strongest measurable result |
| `presentation` | Visual style: `photo`, `browser`, `canvas`, or `laptop` |
| `image` | File path beginning from `public/` |
| `repository` | Optional public GitHub URL |
| `repositoryNote` | Message used when the repository is private |
| `evidence` | Optional screenshots and captions shown in the case study |
| `caseStudy` | Detailed role, problem, process, and result content |

### Writing project content

- Lead with the user or engineering problem.
- Explain your individual contribution.
- Prefer measurable outcomes over feature lists.
- Keep the gallery description short enough to scan quickly.
- Use the case study for architecture, decisions, challenges, and evaluation.
- Do not claim metrics you cannot explain or verify.

### Adding a featured project

1. Add its primary image under `public/project-images/`.
2. Add optional evidence screenshots.
3. Create a new object in the `projects` array.
4. Confirm its `slug` is unique.
5. Open the project modal and verify every field.
6. Test the card and modal on mobile.

## Other Explorations

Use `smallProjects` for useful supporting work that does not need a full case study. These entries should demonstrate additional technical range without distracting from the featured projects.

Add `repository` only when the linked repository is clean, understandable, and safe to share publicly.

