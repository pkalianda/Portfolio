import { CaseStudyData } from "./blocks/types";
import Navigation from "../shared/Navigation";
import BlockRenderer from "./blocks/BlockRenderer";

interface CaseStudyLayoutProps {
  data: CaseStudyData;
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const { metadata, content } = data;

  return (
    <main className="relative flex min-h-screen flex-col items-center pb-[80px] bg-white">
      <Navigation />

      <article className="w-full max-w-[680px] pt-[120px] flex flex-col gap-12">
        {/* Page Header */}
        <header className="flex flex-col gap-2">
          <h1 className="text-primary font-semibold text-base leading-tight">
            {metadata.title}
          </h1>
          <p className="text-primary-muted font-medium text-sm">
            {metadata.subtitle}
          </p>
        </header>

        {/* Dynamic Content Blocks */}
        {content.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </article>
    </main>
  );
}
