"use client";

import Image from "next/image";
import { useState } from "react";
import { ViewHorizontalIcon, ViewVerticalIcon } from "@radix-ui/react-icons";
import IconButton from "../shared/IconButton";
import FilterPill from "../shared/FilterPill";
import CaseStudies from "./CaseStudies";
import StuffIBuilt from "./StuffIBuilt";
import Writing from "./Writing";

export default function Work() {
  const [activeView, setActiveView] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Case studies");

  const isLayoutDisabled = activeFilter !== "Case studies";

  const renderContent = () => {
    switch (activeFilter) {
      case "Case studies":
        return <CaseStudies activeView={activeView} />;
      case "Stuff I built":
        return <StuffIBuilt />;
      case "Writing":
        return <Writing />;
      default:
        return <CaseStudies activeView={activeView} />;
    }
  };

  return (
    <section className="flex w-full flex-col gap-6 max-w-[680px]" id="work">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-primary font-semibold text-sm leading-5">
          My work
        </h2>
        <div className="flex gap-2">
          <IconButton 
            isActive={activeView === 0 && !isLayoutDisabled} 
            onClick={() => setActiveView(0)}
            disabled={isLayoutDisabled}
            aria-label="Grid View"
          >
            <ViewVerticalIcon width={15} height={15} />
          </IconButton>
          <IconButton 
            isActive={activeView === 1 && !isLayoutDisabled} 
            onClick={() => setActiveView(1)}
            disabled={isLayoutDisabled}
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

      {/* Content Area */}
      {renderContent()}
    </section>
  );
}
