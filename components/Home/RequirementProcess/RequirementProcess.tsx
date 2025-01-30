import { bulkRecruitmentsteps } from "@/lib/RecruitementProcess";
import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const RequirementProcess = () => {
  return (
    <div className="templateContainer py-8 lg:py-14 space-y-10 md:space-y-14 text-white">
      <div className="space-y-3">
        <h2
          data-aos="fade-up"
          className="text-center gradientHeading text-xl lg:text-3xl tracking-wide"
        >
          OUR REQUIREMENT PROCESS
        </h2>
        <div className="flex items-center justify-center">
          <p
            data-aos="fade-up"
            className="lg:max-w-[40rem] text-center font-normal text-white text-sm tracking-wider"
          >
            Our clients trust us to deliver exceptional talent that drives
            success across industries, and we take pride in every partnership we
            build.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:gap-y-14 md:grid-cols-3  mx-auto lg:grid-cols-4">
        {bulkRecruitmentsteps.map((step, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="flex md:flex-col gap-2 md:space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="inline-block p-2 rounded-lg bg-[#14140c]">
                {/* <Zap size={24} strokeWidth={1.5} className="text-lightGolden" /> */}
                <span className="font-sans text-xl lg:text-3xl font-semibold gradientHeading block">
                  {step.stepNumber}
                </span>
              </div>
              <div className="hidden md:block h-[1px] w-full bg-lightGolden/50"></div>
            </div>
            <h3 className="text-white  lg:text-lg tracking-wider leading-tight font-normal">
              {step.title}
            </h3>
            {/* <p className="line-clamp-3">{step.details[0].description}</p> */}
          </div>
        ))}
      </div>
      <div data-aos="fade-up" className="flex items-center justify-center">
        <button
          data-aos="fade-up"
          className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black"
        >
          <Link href={"/services/bulk-overseas-recruitment"}>
            View detailed process
          </Link>
        </button>
      </div>
    </div>
  );
};

export default RequirementProcess;
