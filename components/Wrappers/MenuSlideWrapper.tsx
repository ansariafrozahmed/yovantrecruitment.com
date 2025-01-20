"use client";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const MenuSlideWrapper: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const renderHam = () => {
    return (
      <div onClick={() => setOpen(!open)} className="text-white relative">
        <div className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-1000">
          {/* <span
            className={`text-lg absolute right-7 tracking-wide font-semibold transition-opacity ease-in-out duration-1000 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          >
            MENU
          </span>
          <span
            className={`text-lg absolute right-7 tracking-wide font-semibold transition-opacity ease-in-out duration-1000 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            CLOSE
          </span> */}
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
      <div className="text-white flex items-center gap-5  text-[0.8rem] font-semibold uppercase tracking-wider">
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
      <header className="z-40 fixed top-0 left-0 py-2 w-full">
        <div className="templateContainer flex items-center justify-between">
          {/* Logo */}
          <div className="h-[75px] w-[75px]">
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
      <div className="min-h-auto h-screen w-full overflow-x-hidden flex relative">
        <div
          className={`min-h-screen overflow-y-auto h-full min-w-[100%] transform transition-transform duration-1000 ${
            open
              ? "-translate-x-[250px] lg:-translate-x-[350px]"
              : "translate-x-0"
          }`}
        >
          {children}
        </div>
        <div
          className={`min-h-full h-screen overflow-y-auto min-w-[250px] lg:min-w-[350px] translate-x-0 transform transition-transform duration-1000 ${
            open
              ? "-translate-x-[250px] lg:-translate-x-[350px]"
              : "translate-x-0"
          }`}
        ></div>
      </div>
    </>
  );
};

export default MenuSlideWrapper;
