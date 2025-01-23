"use client";
import React, { useEffect, useState } from "react";
import {
  Gem,
  Hammer,
  HandCoins,
  HandPlatter,
  HardHat,
  HeartPulse,
  Microchip,
} from "lucide-react";

const TypeFilter = () => {
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
  ];

  const [loading, setLoading] = useState(false);
  const [type, setType] = useState<string | null>(null);

  const setUrl = (value: string) => {
    const currentUrl = window.location.href.split("?")[0]; // Get the base URL without query params
    const newUrl = `${currentUrl}?type=${value}`;
    window.history.pushState(null, "", newUrl); // Update the URL without reloading the page
    handleUrlChange(); // Update state immediately
  };

  const handleUrlChange = () => {
    const params = new URLSearchParams(window.location.search);
    setType(params.get("type")); // Get the updated 'type' value
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
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        data-aos="fade-up"
        className="flex max-w-[600px] mx-auto items-center justify-center flex-wrap gap-3 lg:gap-4 pt-8"
      >
        {tags.map((item, i) => (
          <div
            onClick={() => setUrl(item.value)}
            key={i}
            className={`flex border hover:border-lightGolden hover:text-lightGolden cursor-pointer  px-4 text-xs lg:text-sm tracking-wider py-2 rounded-full items-center gap-2 ${
              type === item.value
                ? "border-lightGolden text-lightGolden"
                : "border-gray-300 text-gray-300"
            }`}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypeFilter;
