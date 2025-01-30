"use client";
import React, { useEffect, useState } from "react";
import JobCards from "./JobCards";
import {
  Ellipsis,
  Gem,
  Hammer,
  HandCoins,
  HandPlatter,
  HardHat,
  HeartPulse,
  Microchip,
} from "lucide-react";
import JobCardSkeleton from "../Skeletons/JobCardSkeleton";
import { usePathname } from "next/navigation";

const JobCardSection = () => {
  const tags = [
    {
      icon: Hammer,
      label: "Construction",
      value: "construction",
    },
    {
      icon: Microchip,
      label: "Integrated FM",
      value: "integrated-fm",
    },
    {
      icon: HandPlatter,
      label: "Hospitality & Tourism",
      value: "hospitality-and-tourism",
    },
    {
      icon: HeartPulse,
      label: "Healthcare Workers",
      value: "healthcare-workers",
    },
    {
      icon: Gem,
      label: "Specialized Workers",
      value: "specialized-workers",
    },
    {
      icon: HandCoins,
      label: "Retail Workers",
      value: "retail-workers",
    },
    // {
    //   icon: Ellipsis,
    //   label: "Others",
    //   value: "other",
    // },
  ];

  const [loading, setLoading] = useState(false);
  const [cat, setCat] = useState<any | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [jobs, setJobs] = useState<any | null>([]);
  const pathname = usePathname();

  const setUrl = (value: string) => {
    const currentUrl = window.location.href.split("?")[0]; // Get the base URL without query params
    const newUrl = `${currentUrl}?type=${value}`;
    window.history.pushState(null, "", newUrl); // Update the URL without reloading the page
    handleUrlChange(); // Update state immediately
  };

  const handleClearFilter = () => {
    window.history.pushState(null, "", window.location.href.split("?")[0]);
    handleUrlChange();
  };

  const handleUrlChange = () => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const isValidType = tags.some((tag) => tag.value === type);
    const typeValue = isValidType ? type : "";
    setType(type);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(
          `${process.env.BACKEND}/wp-json/custom/v1/getJobsByJobType?job_type_slug=${typeValue}&page=1&per_page=100`,
          {
            method: "GET",
          }
        );
        const result = await response.json();
        if (!response.ok) {
          setJobs([]);
        } else {
          setCat(result.term);
          setJobs(result.jobs);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 500);
  };

  useEffect(() => {
    // Initialize with the current URL type value
    handleUrlChange();

    // Listen for popstate events (back/forward navigation)
    const onPopState = () => handleUrlChange();
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname]);
  return (
    <div className="templateContainer py-8 md:py-10  lg:py-16">
      <div className="space-y-4">
        <span
          data-aos="fade-up"
          className="block uppercase text-center font-semibold tracking-widest text-xs lg:text-sm"
        >
          Realize your career dreams
        </span>
        <h2
          data-aos="fade-up"
          className="text-3xl lg:text-5xl tracking-wide text-center max-w-[500px] leading-[1.05] lg:leading-[1] mx-auto gradientHeading !block"
        >
          Search and Discover your Jobs here
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div
          data-aos="fade-up"
          className="flex max-w-[600px] mx-auto items-center justify-center flex-wrap gap-3 lg:gap-4 pt-8"
        >
          {tags.map((item, i) => (
            <div
              onClick={() => {
                !loading && setUrl(item.value);
              }}
              key={i}
              className={`flex border hover:border-lightGolden hover:text-lightGolden  px-3 lg:px-4 text-[0.65rem] lg:text-sm tracking-wider py-2 rounded-full items-center gap-2 ${
                loading
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer opacity-100"
              } ${
                type === item.value
                  ? "border-lightGolden text-lightGolden"
                  : "border-gray-300 text-gray-300"
              }`}
            >
              <item.icon size={16} strokeWidth={1.5} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-6 flex items-center justify-center">
        {loading ? (
          <div className="flex items-center justify-between w-full">
            <div className="w-20 h-8 rounded-md bg-[#242424]"></div>
            <div className="w-20 h-8 rounded-md bg-[#242424]"></div>
          </div>
        ) : (
          <>
            {cat && (
              <div className="w-full flex items-center justify-between">
                <span className="block text-sm text-lightGolden">
                  Selected :{" "}
                  <span className="font-semibold underline">{cat?.name}</span>
                </span>

                <span
                  onClick={handleClearFilter}
                  className="text-sm tracking-wider cursor-pointer block"
                >
                  Clear filter
                </span>
              </div>
            )}
          </>
        )}
      </div>
      <div>
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9 py-8">
            {Array(3)
              .fill(3)
              .map((_, i) => (
                <JobCardSkeleton key={i} />
              ))}
          </div>
        ) : (
          <>
            {jobs.length < 1 ? (
              <div className="py-20 text-center">
                <h2
                  data-aos="fade"
                  className="text-gray-600 text-3xl font-semibold uppercase"
                >
                  NO JOBS FOUND
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-9 py-4">
                {jobs?.map((item: any, index: number) => (
                  <JobCards key={index} data={item} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default JobCardSection;
