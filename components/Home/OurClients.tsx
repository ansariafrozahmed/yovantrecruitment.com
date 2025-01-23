import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurClients = () => {
  return (
    <div className="templateContainer text-center py-8 lg:py-14 space-y-10 text-white">
      <div className="space-y-3">
        <h2
          data-aos="fade-up"
          className="text-center gradientHeading text-xl lg:text-3xl tracking-wide"
        >
          CLIENTS WE ARE PROUD OF
        </h2>
        <div className="flex items-center justify-center">
          <p
            data-aos="fade-up"
            className="lg:max-w-[40rem] text-center font-normal text-white text-sm tracking-wider"
          >
            Whether you need support or want to learn more, we're here to assist
            you Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Debitis, quos!
          </p>
        </div>
      </div>
      <div className="max-w-[55rem] mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
        {Array(8)
          .fill(8)
          .map((_, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="aspect-[5/3] lg:aspect-[5/2.5] -md p-3 bg-white flex items-center justify-center"
            >
              <Image
                src={
                  "https://www.alfarisgroup.com/wp-content/uploads/2018/05/logo-bigger.png"
                }
                alt=""
                className="w-full h-full object-contain"
                height={100}
                width={200}
              />
            </div>
          ))}
      </div>
      <button
        data-aos="fade-up"
        className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black"
      >
        View all
      </button>
    </div>
  );
};

export default OurClients;
