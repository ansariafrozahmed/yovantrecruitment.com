import { categories } from "@/lib/Categories";
import React from "react";
import MobileCategoryCard from "./MobileCategoryCard";

const MobileCat = () => {
  return (
    <div className="templateContainer pt-6 pb-12 space-y-5">
      <h2
        data-aos="fade-up"
        className="text-[1.4rem] gradientHeading text-center lg:text-4xl font-medium tracking-wide uppercase"
      >
        Categories We Offer
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((item, index) => (
          <MobileCategoryCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MobileCat;
