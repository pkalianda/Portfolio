"use client";

import { useState } from "react";
import FilterPill from "../shared/FilterPill";
import CaseStudies from "./CaseStudies";
import StuffIBuilt from "./StuffIBuilt";
import Writing from "./Writing";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("Case studies");

  const renderContent = () => {
    switch (activeFilter) {
      case "Case studies":
        return <CaseStudies />;
      case "Stuff I built":
        return <StuffIBuilt />;
      case "Writing":
        return <Writing />;
      default:
        return <CaseStudies />;
    }
  };

  return (
    <section className="flex w-full flex-col gap-6 max-w-[680px]" id="work">
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
