import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Streamlining development time through design system creation",
    subtitle: "TextLayer",
    imageSrc: "/images/rectangle17.png",
  },
  {
    title: "Streamlining development time through design system creation",
    subtitle: "TextLayer",
    imageSrc: "/images/rectangle18.png",
  },
  {
    title: "Streamlining development time through design system creation",
    subtitle: "TextLayer",
    imageSrc: "/images/rectangle17.png",
  },
  {
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
          title={project.title}
          subtitle={project.subtitle}
          imageSrc={project.imageSrc}
        />
      ))}
    </div>
  );
}

