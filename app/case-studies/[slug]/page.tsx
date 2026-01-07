import { notFound } from "next/navigation";
import CaseStudyLayout from "@/app/components/case-studies/CaseStudyLayout";
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
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

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
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug as keyof typeof CASE_STUDIES];

  if (!study) {
    notFound();
  }

  return <CaseStudyLayout data={study} />;
}
