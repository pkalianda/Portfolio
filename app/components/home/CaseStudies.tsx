import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    slug: "crosswordr",
    title: "Designing a Puzzle Management System for Crosswordr",
    subtitle: "Crossplay Digital",
    imageSrc: "/images/rectangle17.png",
  },
  {
    slug: "ledgerup",
    title: "Designing and Developing LedgerUp's Visual Identity and Landing Page",
    subtitle: "LedgerUp",
    imageSrc: "/images/rectangle18.png",
  },
  {
    slug: "tcs",
    title: "Boosting User Retention Through New User Onboarding for TCS",
    subtitle: "The Coaches Site",
    imageSrc: "/images/rectangle17.png",
  },
  {
    slug: "textlayer",
    title: "Streamlining development time through design system creation",
    subtitle: "TextLayer",
    imageSrc: "/images/rectangle18.png",
  },
];

interface CaseStudiesProps {
  activeView: number;
}

export default function CaseStudies({ activeView }: CaseStudiesProps) {
  return (
    <div className={`grid gap-x-5 w-full ${activeView === 0 ? "grid-cols-2 gap-y-5" : "grid-cols-1 gap-y-10"}`}>
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          slug={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
}

