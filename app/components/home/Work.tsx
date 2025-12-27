"use client";

import Image from "next/image";
import { useState } from "react";
import { ViewHorizontalIcon, ViewVerticalIcon } from "@radix-ui/react-icons";
import ProjectCard from "./ProjectCard";
import IconButton from "../shared/IconButton";
import FilterPill from "../shared/FilterPill";

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

export default function Work() {
  const [activeView, setActiveView] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Case studies");

  return (
    <section className="flex w-full flex-col gap-6 max-w-[680px]" id="work">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-primary font-semibold text-sm leading-5">
          My work
        </h2>
        <div className="flex gap-2">
          <IconButton 
            isActive={activeView === 0} 
            onClick={() => setActiveView(0)}
            aria-label="Grid View"
          >
            <ViewVerticalIcon width={15} height={15} />
          </IconButton>
          <IconButton 
            isActive={activeView === 1} 
            onClick={() => setActiveView(1)}
            aria-label="List View"
          >
            <ViewHorizontalIcon width={15} height={15} />
          </IconButton>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2">
        {["Case studies", "Stuff I built", "Writing"].map((filter) => (
          <FilterPill
            key={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterPill>
        ))}
      </div>

      {/* Project Grid */}
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
    </section>
  );
}
