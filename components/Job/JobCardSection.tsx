import { Figma } from "lucide-react";
import React from "react";
import JobCards from "./JobCards";

const JobCardSection = () => {
  const tags = [
    "UI/UX Design",
    "Sales",
    "Development",
    "Analytics",
    "Other",
    "Data Operator",
    "Project Management",
  ];
  return (
    <div className="templateContainer py-8 md:py-10 space-y-10 lg:py-16">
      <div className="space-y-4">
        <span className="block uppercase text-center font-semibold tracking-widest text-xs lg:text-sm">
          Realize your career dreams
        </span>
        <h2 className="text-3xl lg:text-5xl tracking-wide text-center max-w-[500px] leading-[1.05] lg:leading-[1.15] mx-auto gradientHeading !block">
          Search and Discover your Jobs here
        </h2>
      </div>
      {/* TAGS */}
      <div className="flex max-w-[600px] mx-auto items-center justify-center flex-wrap gap-3 lg:gap-4">
        {tags.map((item, i) => (
          <div
            key={i}
            className="flex border hover:border-lightGolden hover:text-lightGolden cursor-pointer border-gray-300 text-gray-300 px-4 text-xs lg:text-sm tracking-wider py-2 rounded-full items-center gap-2"
          >
            <Figma size={20} /> <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9">
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
        <JobCards />
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="flex border hover:border-lightGolden hover:text-lightGolden cursor-pointer border-gray-300 text-gray-300 px-4 text-sm tracking-wider py-2 rounded-full items-center gap-2">
          Show more
        </button>
      </div>
    </div>
  );
};

export default JobCardSection;
