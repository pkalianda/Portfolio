# Case Studies System

This directory contains the case study pages system for your portfolio.

## Overview

The case study system uses a **block-based architecture** that separates concerns:

- **Content** (`case-studies/_data/`) - Case study content as structured data
- **Routing** (`case-studies/[slug]/`) - Dynamic routes and metadata generation
- **Components** (`components/case-studies/`) - Reusable UI blocks and layouts

This separation ensures consistency across all case studies while allowing flexible content ordering.

## File Structure

```
app/
├── case-studies/
│   ├── [slug]/
│   │   └── page.tsx          # Dynamic route handler + SEO metadata
│   ├── _data/
│   │   └── crosswordr.tsx    # Case study content definition
│   └── README.md             # This file
│
└── components/
    └── case-studies/
        ├── CaseStudyLayout.tsx   # Shared layout wrapper
        └── blocks/
            ├── types.ts          # TypeScript type definitions
            ├── BlockRenderer.tsx # Maps block types to components
            ├── HeroBlock.tsx     # 16:9 hero image
            ├── MetadataBlock.tsx # 3-column metadata grid
            ├── TextBlock.tsx     # Rich text with optional heading
            ├── ImageBlock.tsx    # Single image with caption
            ├── ImageGridBlock.tsx# 2 or 3 column grid
            └── DividerBlock.tsx  # Section divider
```

### Why This Structure?

- **Content in `_data/`**: Easy to edit without touching components
- **Routing in `[slug]/`**: Centralized route and metadata management
- **Components in `components/`**: Consistent with existing folder structure (`home/`, `shared/`)
- **Separation of concerns**: Change styling globally without touching content

## Quick Reference

| Task | File(s) to Edit |
|------|----------------|
| Add new case study | 1. Create `_data/newname.tsx`<br>2. Register in `[slug]/page.tsx` |
| Change content | Edit existing file in `_data/` |
| Modify block styling | Edit component in `components/case-studies/blocks/` |
| Change layout/spacing | Edit `components/case-studies/CaseStudyLayout.tsx` |
| Add new block type | 1. Add type to `blocks/types.ts`<br>2. Create component<br>3. Add to `BlockRenderer.tsx` |
| Update typography | Edit prose styles in `app/globals.css` |

## How to Add a New Case Study

### 1. Create a data file

Create a new file in `_data/` (e.g., `ledgerup.tsx`):

```tsx
import { CaseStudyData } from "@/app/components/case-studies/blocks/types";

export const ledgerupStudy: CaseStudyData = {
  metadata: {
    slug: "ledgerup",
    title: "Your Case Study Title",
    subtitle: "Company Name",
    coverImage: "/images/ledgerup-cover.png",
  },
  content: [
    {
      type: "hero",
      src: "/images/ledgerup/hero.png",
      alt: "Hero image description",
    },
    {
      type: "metadata",
      role: "Product Designer",
      timeline: "Jan 2024 - Mar 2024",
      outcome: "Key outcome metric",
    },
    {
      type: "text",
      heading: "Section Heading",
      content: (
        <>
          <p>Your paragraph content here.</p>
        </>
      ),
    },
    // ... more blocks
  ],
};
```

### 2. Register the case study

Open `[slug]/page.tsx` and import your new study:

```tsx
import { ledgerupStudy } from "../_data/ledgerup";

const CASE_STUDIES = {
  crosswordr: crosswordrStudy,
  ledgerup: ledgerupStudy, // Add this line
  // ... other studies
};
```

### 3. Done!

Your case study will be available at `/case-studies/ledgerup`

## Available Block Types

### Hero Block
```tsx
{
  type: "hero",
  src: "/images/path.png",
  alt: "Description",
}
```

### Metadata Block (3 columns)
```tsx
{
  type: "metadata",
  role: "Product Designer",
  timeline: "Sep 2024 - Dec 2024",
  outcome: "50% improvement",
}
```

### Text Block
```tsx
{
  type: "text",
  heading: "Optional Heading", // Can be omitted
  content: (
    <>
      <p>Paragraph with <strong>bold</strong> and <em>italic</em>.</p>
      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>
    </>
  ),
}
```

### Image Block
```tsx
{
  type: "image",
  src: "/images/path.png",
  alt: "Description",
  caption: "Optional caption", // Can be omitted
}
```

### Image Grid Block
```tsx
{
  type: "imageGrid",
  images: [
    { src: "/images/1.png", alt: "Image 1", caption: "Optional" },
    { src: "/images/2.png", alt: "Image 2" },
  ],
  columns: 2, // or 3
}
```

### Divider Block
```tsx
{
  type: "divider",
}
```

## Styling

- Global prose styles are defined in `app/globals.css`
- All blocks use your existing color tokens (primary, primary-muted, accent, link)
- Typography matches your portfolio (text-sm, Manrope font)
- Max width is 680px (same as rest of site)
- Hero and image blocks use 16:9 aspect ratio

## Adding Real Images

Currently, all image blocks render placeholder containers. To add real images:

### Location of Image Components

All image components are in `app/components/case-studies/blocks/`:
- `HeroBlock.tsx` - Hero image at top of case study
- `ImageBlock.tsx` - Single image with optional caption
- `ImageGridBlock.tsx` - Multi-column image grid

### How to Add Real Images

1. Open the relevant block component (e.g., `app/components/case-studies/blocks/ImageBlock.tsx`)
2. Import Next.js Image component at the top
3. Replace the placeholder `<div>` with `<Image>`

**Example for `ImageBlock.tsx`:**

```tsx
import Image from "next/image";

export default function ImageBlock({ src, alt, caption }: ImageBlockProps) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="w-full aspect-video rounded-[4px] overflow-hidden bg-secondary">
        {/* Replace this entire div with: */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>
      {caption && (
        <figcaption className="text-primary-muted text-xs">{caption}</figcaption>
      )}
    </figure>
  );
}
```

**Repeat for `HeroBlock.tsx` and `ImageGridBlock.tsx` with similar changes.**

## Customizing Block Styling

All block components are in `app/components/case-studies/blocks/`. Each is a simple React component using Tailwind classes.

### Example: Adjusting Text Block Spacing

Open `app/components/case-studies/blocks/TextBlock.tsx`:

```tsx
export default function TextBlock({ heading, content, id }: TextBlockProps) {
  return (
    <div className="flex flex-col gap-4" id={id}>  {/* Change gap-4 to gap-6 */}
      {heading && (
        <h2 className="text-primary text-base font-semibold">{heading}</h2>
      )}
      <div className="prose">{content}</div>
    </div>
  );
}
```

**Changes apply to all case studies automatically** since they all use the same components.

### Example: Changing Metadata Layout

Open `app/components/case-studies/blocks/MetadataBlock.tsx` and adjust the grid:

```tsx
<div className="grid grid-cols-3 gap-6 py-8 border-y border-secondary">
  {/* Change to grid-cols-2, adjust gap, remove borders, etc. */}
</div>
```

### Adding a New Block Type

1. **Define the type** in `blocks/types.ts`:
```tsx
export type ContentBlock =
  | { type: "quote"; text: string; author: string }  // Add new type
  | { type: "hero"; src: string; alt: string }
  // ... existing types
```

2. **Create component** `blocks/QuoteBlock.tsx`:
```tsx
interface QuoteBlockProps {
  text: string;
  author: string;
}

export default function QuoteBlock({ text, author }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-4 border-accent pl-6 italic">
      <p className="text-lg text-primary">{text}</p>
      <cite className="text-sm text-primary-muted">— {author}</cite>
    </blockquote>
  );
}
```

3. **Register in BlockRenderer** (`blocks/BlockRenderer.tsx`):
```tsx
import QuoteBlock from "./QuoteBlock";

export default function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "quote":
      return <QuoteBlock text={block.text} author={block.author} />;
    // ... existing cases
  }
}
```

4. **Use in content** (`_data/yourStudy.tsx`):
```tsx
{
  type: "quote",
  text: "Design is not just what it looks like...",
  author: "Steve Jobs",
}
```

## Troubleshooting

### Case study not appearing
- ✓ Check that you imported the study in `[slug]/page.tsx`
- ✓ Check that you added it to the `CASE_STUDIES` object
- ✓ Check that the slug matches between the data file and CASE_STUDIES key
- ✓ Restart dev server (`npm run dev`)

### TypeScript errors
- ✓ Ensure content blocks match types defined in `blocks/types.ts`
- ✓ Check that all required fields are included (type, src, alt, etc.)
- ✓ Verify imports use correct paths with `@/app/components/case-studies/`

### Styling not applying
- ✓ Check that Tailwind classes are spelled correctly
- ✓ Verify prose styles exist in `app/globals.css`
- ✓ Ensure no typos in className props

### Build errors
- Run `npm run build` to see specific errors
- Check console for missing imports or type mismatches
- Verify all files are saved

## Future Enhancements

- Click to enlarge images (lightbox modal)
- Animations on scroll (using Framer Motion)
- Progress indicator for long case studies
- Social sharing metadata (Open Graph tags)
- Table of Contents for navigation
- Dark mode support
- Print-friendly styles

