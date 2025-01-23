"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CatCard from "./CategoryCard";
import { categories } from "@/lib/Categories";

const Categories: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardSection = cardSectionRef.current;
    const section = sectionRef.current;

    if (cardSection && section) {
      // Scroll animation for card section
      gsap.to(cardSection, {
        x: () => -(cardSection.scrollWidth - cardSection.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${cardSection.scrollWidth - cardSection.offsetWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="bg-black w-full templateContainer">
      <div className=" h-screen w-full flex flex-col gap-8 items-center justify-center overflow-hidden">
        {/* Section Title */}
        <h2
          data-aos="fade-up"
          className="text-[1.6rem] gradientHeading text-center lg:text-4xl font-medium tracking-wide uppercase"
        >
          Categories We Offer
        </h2>

        {/* Card Section */}
        <div
          ref={cardSectionRef}
          className="lg:w-[100%] flex gap-5 w-full relative"
        >
          {categories.map((item, i) => (
            <div key={i}>
              <CatCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
