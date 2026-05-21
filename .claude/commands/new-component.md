Create a new Astro component. The argument contains the component name (PascalCase preferred) and optionally a type hint (e.g. "Testimonial card" or "Hero section").

Steps:
1. Parse the component name from $ARGUMENTS. If a type/purpose is mentioned, use it to inform the template.
2. Ensure the name is PascalCase (e.g. "project card" → "ProjectCard").
3. Create `src/components/{Name}.astro` using this structure:

```astro
---
interface Props {
  // Add props here
}

const { } = Astro.props;
---

<div class="">
  <slot />
</div>
```

Tailor the Props interface and markup to the component's apparent purpose:
- **Card**: include title, description, optional image/href props; use `<a>` wrapper if it links somewhere
- **Section**: include a title prop and a slot for content; use `<section>` with padding classes
- **Button**: include label, href, variant ('primary' | 'secondary') props
- **Banner/Alert**: include message and type props
- Generic components: use a simple `<div>` wrapper with a slot

Follow the existing Tailwind patterns in the codebase (zinc color palette, text-sm, font-medium, transition-colors).

4. Report back:
   - The path to the created file (as a clickable link)
   - A short example of how to import and use the component in an Astro page
