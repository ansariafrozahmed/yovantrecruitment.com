import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="templateContainer pt-28 relative ">
      <div className="h-[250px] lg:h-[450px] flex items-center justify-center overflow-hidden relative w-full rounded-xl  bg-gradient-to-t from-[#14140c] to-transparent">
        <div className=" space-y-4 leading-[1.05] text-white font-[400] text-center">
          <h1
            data-aos="fade-down"
            className="gradientHeading text-3xl lg:text-6xl tracking-wide"
          >
            Modernizing the Job <br /> Search Experience
          </h1>
          <p
            data-aos="fade-down"
            className="text-[14px] lg:text-[16px] leading-normal tracking-wide"
          >
            Search & find your dream job now easier than ever, you can simply
            browse & find a job if you need it
          </p>
        </div>
        <div data-aos="fade-up" className="absolute bottom-0 z-0">
          <Image
            height={500}
            width={1200}
            src="/assets/largeImages/wave.png"
            alt=""
            className="opacity-15"
          />
        </div>
      </div>
    </div>
    // <div className="templateContainer pt-28 h-auto w-full">
    //   <Image
    //     className="h-[220px] md:h-[400px] lg:h-[500px] w-full object-cover rounded-3xl overflow-hidden"
    //     src={"/assets/largeImages/banner01.webp"}
    //     alt=""
    //     height={800}
    //     width={1500}
    //   />
    // </div>
  );
};

export default Hero;
