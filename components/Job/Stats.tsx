import React from "react";

const Stats = () => {
  return (
    <div className="templateContainer py-8 md:py-10 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      {Array(3)
        .fill(3)
        .map((_, i) => (
          <div key={i} className="text-center p-5 space-y-3">
            <span
              data-aos="fade-up"
              className="text-5xl tracking-wider gradientHeading font-semibold"
            >
              91%
            </span>
            <h2
              data-aos="fade-up"
              className="gradientHeading text-xl uppercase tracking-wider font-semibold"
            >
              Skills Aligned
            </h2>
            <p data-aos="fade-up" className="text-sm tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem
              ipsum
            </p>
          </div>
        ))}
    </div>
  );
};

export default Stats;
