export type ContentBlock =
  | { type: "hero"; src: string; alt: string }
  | {
      type: "metadata";
      role: string;
      timeline: string;
      outcome: string;
    }
  | {
      type: "text";
      heading?: string;
      content: React.ReactNode;
      id?: string; // For anchor links if needed later
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "imageGrid";
      images: Array<{ src: string; alt: string; caption?: string }>;
      columns?: 2 | 3;
    }
  | { type: "divider" };

export interface CaseStudyData {
  metadata: {
    slug: string;
    title: string;
    subtitle: string;
    coverImage: string;
  };
  content: ContentBlock[];
}
