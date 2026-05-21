Create a new case study for the portfolio site. The argument may contain a project title — if provided, use it; otherwise ask the user for one.

Steps:
1. Determine the project title from $ARGUMENTS or ask the user.
2. Generate a URL-safe slug from the title (lowercase, hyphens, no special characters).
3. Create the MDX file at `src/content/work/{slug}.mdx` using this exact template:

```mdx
---
title: "{title}"
description: "One-sentence description of the project."
year: "{current year}"
tags: ["UX Design"]
cover: "/work/{slug}/cover.jpg"
featured: true
order: 10
client: ""
role: ""
---

## Overview

Introduce the project and its context.

## Challenge

Describe the problem you were solving.

## Process

Walk through your design process, decisions made, and why.

## Outcome

Share the impact — metrics, qualitative feedback, or what shipped.
```

4. Create the directory `public/work/{slug}/` with a `.gitkeep` placeholder:
   - Run: `mkdir -p public/work/{slug} && touch public/work/{slug}/.gitkeep`

5. Report back:
   - The path to the new MDX file (as a clickable link)
   - A reminder to add a `cover.jpg` to `public/work/{slug}/`
   - The URL where the case study will be available: `/work/{slug}`
