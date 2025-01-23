import React from "react";

const JobCardSkeleton = () => {
  return (
    <div
      data-aos="fade"
      className="h-[300px] bg-[#0f0f0f] space-y-6 p-6 rounded-lg"
    >
      <div className="flex items-center justify-between">
        <div className="bg-[#242424] h-8 rounded-lg w-1/2"></div>
        <div className="h-8 w-7 rounded-full bg-[#242424]"></div>
      </div>
      <div className="h-[1px] w-full bg-[#242424]"></div>
      <div className="bg-[#242424] h-8 rounded-lg w-full"></div>
      <div className="bg-[#242424] h-8 rounded-lg w-full"></div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-[#242424] h-8 rounded-lg w-full"></div>
        <div className="bg-[#242424] h-8 rounded-lg w-full"></div>
      </div>
    </div>
  );
};

export default JobCardSkeleton;
