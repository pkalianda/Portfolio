import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    slug: "crosswordr",
    title: "Designing a Puzzle Management System for Crosswordr",
    subtitle: "Crossplay Digital",
    description: "Led the end-to-end design of a puzzle management system, streamlining content creation workflows for editors and publishers.",
    imageSrc: "/images/rectangle17.png",
  },
  {
    slug: "ledgerup",
    title: "Designing and Developing LedgerUp's Visual Identity and Landing Page",
    subtitle: "LedgerUp",
    description: "Crafted a cohesive brand identity and responsive landing page to establish market presence and drive early user acquisition.",
    imageSrc: "/images/rectangle18.png",
  },
  {
    slug: "tcs",
    title: "Boosting User Retention Through New User Onboarding for TCS",
    subtitle: "The Coaches Site",
    description: "Redesigned the onboarding experience to reduce drop-off and improve first-week engagement for new coaching subscribers.",
    imageSrc: "/images/tcs-cover.png",
  },
  {
    slug: "textlayer",
    title: "Streamlining development time through design system creation",
    subtitle: "TextLayer",
    description: "Built a scalable design system to unify product UI and accelerate feature development across engineering teams.",
    imageSrc: "/images/rectangle18.png",
  },
];

export default function CaseStudies() {
  return (
    <div className="grid grid-cols-1 gap-y-10 w-full">
      {PROJECTS.map((project, index) => (
        <ProjectCard
          key={index}
          slug={project.slug}
          title={project.title}
          subtitle={project.subtitle}
          description={project.description}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
}

