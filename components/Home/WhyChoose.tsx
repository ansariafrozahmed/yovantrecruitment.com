import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChoose = () => {
  return (
    <div className="templateContainer  py-8 lg:py-16 space-y-5 w-full text-white">
      <h2 className="gradientHeading text-4xl tracking-wider text-center uppercase">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {Array(8)
          .fill(8)
          .map((_, index) => (
            <div key={index}>
              <WhyChooseUsCard />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WhyChoose;
