"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      if (currentScrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderHam = () => {
    return (
      <div onClick={() => setOpen(!open)} className="text-white relative">
        <div className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-1000">
          <div className="flex flex-col items-center mb-[1px] gap-[5px] transition-all ease-in-out duration-1000">
            <span
              className={`block h-[2px] w-5 transition-transform duration-1000 ease-in-out ${
                open ? "rotate-45 translate-y-[6px] bg-lightGolden" : "bg-white"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-5 transition-opacity duration-1000 ease-in-out ${
                open ? "opacity-0" : "bg-white"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-5 transition-transform duration-1000 ease-in-out ${
                open
                  ? "-rotate-45 -translate-y-[6px] bg-lightGolden"
                  : "bg-white"
              }`}
            ></span>
          </div>
        </div>
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="text-white flex items-center gap-5 text-[0.7rem] lg:text-[0.75rem] font-semibold uppercase tracking-wide lg:tracking-widest">
        <span
          className={`transition-opacity ease-in-out duration-1000 hover-class ${
            open ? "opacity-0" : "text-white"
          }`}
        >
          About Us
        </span>
        <span
          className={`transition-opacity ease-in-out duration-1000 hover-class ${
            open ? "opacity-0" : "text-white"
          }`}
        >
          Contact Us
        </span>
      </div>
    );
  };

  return (
    <>
      <header
        className={`z-50 fixed top-0 left-0 py-2 w-full transition-all ease-in-out duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "bg-black" : ""}`}
      >
        <div className="templateContainer flex items-center justify-between">
          <div
            className={`transition-all ease-in-out duration-300 ${
              hasScrolled
                ? "h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]"
                : "h-[60px] lg:h-[75px] w-[60px] lg:w-[75px]"
            }`}
          >
            <Image
              src="/assets/logo/webp/8.webp"
              alt="Logo"
              className="w-full h-full object-contain"
              height={150}
              width={150}
            />
          </div>

          <div className="flex items-center gap-5 lg:gap-16">
            {renderMenu()}
            {renderHam()}
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] transition-all ease-in-out duration-500 bg-black z-40 ${
          open ? "translate-x-0" : "translate-x-[300px]"
        }`}
      ></div>
    </>
  );
};

export default Header;
