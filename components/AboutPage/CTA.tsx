import React from "react";

const CTA = () => {
  return (
    <div className="templateContainer pb-10 ">
      <div className=" py-12  lg:py-12 rounded-xl space-y-2 text-white">
        <h2
          data-aos="fade-up"
          className="text-center gradientHeading text-xl lg:text-3xl tracking-wide"
        >
          REACH OUT TO US TODAY
        </h2>
        <div className="flex flex-col gap-4 items-center justify-center">
          <p
            data-aos="fade-up"
            className="lg:max-w-[40rem] text-center font-normal text-white text-sm tracking-wider"
          >
            Whether you need support or want to learn more, we're here to assist
            you
          </p>
          <button
            data-aos="fade-up"
            className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black"
          >
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
