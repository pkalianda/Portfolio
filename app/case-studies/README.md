# Case Studies System

This directory contains the case study pages system for your portfolio.

## File Structure

```
case-studies/
├── [slug]/
│   └── page.tsx              # Dynamic route handler
└── _data/
    └── crosswordr.tsx        # Case study content definition

components/case-studies/
├── CaseStudyLayout.tsx       # Shared layout wrapper
└── blocks/
    ├── types.ts              # TypeScript types
    ├── BlockRenderer.tsx     # Renders blocks based on type
    ├── HeroBlock.tsx         # Large hero image
    ├── MetadataBlock.tsx     # 3-column metadata
    ├── TextBlock.tsx         # Text content with optional heading
    ├── ImageBlock.tsx        # Single image with caption
    ├── ImageGridBlock.tsx    # 2 or 3 column image grid
    └── DividerBlock.tsx      # Horizontal divider
```

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

Currently, all images are placeholder containers. To add real images:

1. Replace the placeholder `<div>` in each block component with Next.js `<Image>`
2. Example for `ImageBlock.tsx`:

```tsx
import Image from "next/image";

// Replace the placeholder div with:
<Image
  src={src}
  alt={alt}
  fill
  className="object-cover object-center"
/>
```

## Future Enhancements

- Click to enlarge images (lightbox)
- Animations on scroll
- Progress indicator for long case studies
- Social sharing metadata

