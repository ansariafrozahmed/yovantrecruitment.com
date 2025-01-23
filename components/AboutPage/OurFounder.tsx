import React from "react";
import FounderCard from "./FounderCard";

const OurFounder = () => {
  const founderData = [
    {
      image: "",
      Name: "",
      position: "",
      socialMedia: ["", ""],
    },
    {
      image: "",
      Name: "",
      position: "",
      socialMedia: ["", ""],
    },
    {
      image: "",
      Name: "",
      position: "",
      socialMedia: ["", ""],
    },
  ];
  return (
    <div className=" templateContainer space-y-10 py-8 lg:py-16">
      <div className="space-y-2">
        <h2
          data-aos="fade-up"
          className="text-center gradientHeading text-3xl uppercase tracking-wide"
        >
          Our Founders
        </h2>
        <div data-aos="fade-up" className="flex items-center justify-center">
          <p className="lg:max-w-[40rem] text-center font-normal text-white text-sm tracking-wider">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            fugiat expedita non quasi, hic consequuntur? lorem
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {founderData.map((item, index) => (
          <div data-aos="fade-up" key={index}>
            <FounderCard />
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurFounder;
