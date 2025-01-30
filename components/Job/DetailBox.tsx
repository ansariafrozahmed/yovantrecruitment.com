import { Clock, MapPinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import Apply from "./Apply";

const DetailBox = () => {
  return (
    <>
      <div className="border lg:sticky lg:top-12 h-auto  grid place-items-center gap-4 px-4 pt-10 pb-5 rounded-lg border-[#3f361c]">
        <div className="h-14 w-14 p-1.5 rounded-lg bg-[#14140c]">
          <Image
            src={"/assets/logo/webp/8.webp"}
            alt=""
            height={100}
            width={100}
          />
        </div>
        <div className="text-center leading-tight">
          <h2 className="gradientHeading font-medium text-lg">
            Product Designer
          </h2>
          <p className="text-gray-500">sagar tech</p>
        </div>
        <div className="flex  items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="h-5 w-4 mb-1">
              <MapPinIcon strokeWidth={1.5} className="h-full w-full" />
            </div>
            <span className="text-sm">New York</span>
          </div>
          <div className="text-xs tracking-wide font- bg-darkGolden/40 text-white px-3 py-1.5 rounded-full leading-none">
            Senior
          </div>
        </div>
        <div className=" grid grid-cols-3 gap-2 pt-1 border-lightGolden/50 w-[100%]  rounded-lg">
          {Array(3)
            .fill(3)
            .map((_, i) => (
              <div
                key={i}
                className="grid gap-1 rounded py-1 place-items-center"
              >
                <Clock
                  size={16}
                  strokeWidth={1.5}
                  className="text-lightGolden"
                />
                <div className="text-center">
                  <h2 className="text-xs text-lightGolden">Job Type</h2>
                  <h3 className="font-medium tracking-wide">Full Time</h3>
                </div>
              </div>
            ))}
        </div>
        <div className="fixed lg:relative bottom-0 left-0 bg-black p-4 w-full">
          <Apply jobTitle="Product Designer" />
        </div>
      </div>
      {/* ------- */}
    </>
  );
};

export default DetailBox;
