import { CaseStudyData } from "./blocks/types";
import BlockRenderer from "./blocks/BlockRenderer";

interface CaseStudyLayoutProps {
  data: CaseStudyData;
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const { metadata, content } = data;

  return (
    <main className="relative flex min-h-screen flex-col items-center pb-[80px] bg-white">
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10" />
      <article className="w-full max-w-[550px] pt-[80px] flex flex-col gap-12">
        {/* Page Header */}
        <header className="flex flex-col gap-0.5">
          <h1 className="text-primary font-medium text-base leading-tight">
            {metadata.title}
          </h1>
          <p className="text-primary-muted font-regular text-sm">
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
