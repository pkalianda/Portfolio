import { notFound } from "next/navigation";
import CaseStudyLayout from "../_components/CaseStudyLayout";
import { crosswordrStudy } from "../_data/crosswordr";
import type { Metadata } from "next";

// Map of all case studies
const CASE_STUDIES = {
  crosswordr: crosswordrStudy,
  // Add more case studies here as you create them:
  // ledgerup: ledgerupStudy,
  // tcs: tcsStudy,
  // textlayer: textlayerStudy,
};

// Generate static params for all case studies
export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = CASE_STUDIES[params.slug as keyof typeof CASE_STUDIES];

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.metadata.title} | Prayag Kalianda`,
    description: study.metadata.subtitle,
  };
}

// Main page component
export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = CASE_STUDIES[params.slug as keyof typeof CASE_STUDIES];

  if (!study) {
    notFound();
  }

  return <CaseStudyLayout data={study} />;
}
