import Image from "next/image";
import React from "react";

const Maintenance = () => {
  return (
    <div className="h-[100svh] font-sans flex items-center flex-col gap-2 justify-center w-full bg-black text-center px-4 text-white">
      {/* Logo */}
      <Image
        src={"/assets/logo/golden.png"}
        alt="Recruitment Service Logo"
        className="h-32 lg:h-40 w-32 lg:w-40 object-contain"
        height={500}
        width={500}
      />

      {/* Title */}
      <h1 className="bg-gradient-to-br bg-clip-text text-transparent inline-block from-darkGolden to-lightGolden uppercase font-black tracking-wider text-3xl">
        Under Maintenance
      </h1>

      {/* Tagline */}
      {/* <p className="text-lg text-gray-300">
        Building a better experience to help you find the best talent.
      </p> */}

      {/* Information */}
      <p className="text-sm text-gray-300 tracking-wide  max-w-md">
        We are currently enhancing our platform to serve you better. Please bear
        with us as we work to bring you new features and improvements. Thank you
        for your patience!
      </p>

      {/* Call-to-Action */}
      <div className="mt-4">
        <p className="text-lightGolden">
          Need immediate assistance? Reach out to us at:
        </p>
        <a
          href="mailto:Info@yovantrecruitment.com"
          className="text-lightGolden text-[0.8rem] tracking-wider underline hover:text-darkGolden transition duration-300"
        >
          Info@yovantrecruitment.com
        </a>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-5 text-xs text-gray-500">
        © {new Date().getFullYear()} Yovant Recruitment Service. All Rights
        Reserved.
      </footer>
    </div>
  );
};

export default Maintenance;
