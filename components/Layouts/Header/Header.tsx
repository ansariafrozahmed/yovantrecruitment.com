"use client";
import { menu } from "@/lib/Constants";
import { Facebook, Home, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sidebarRef = useRef<any | null>(null);

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
      <div onClick={() => setOpen(!open)} className="text-white group relative">
        <div className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-1000">
          <div className="flex flex-col items-center mb-[1px] gap-[5px] transition-all ease-in-out duration-1000">
            <span
              className={`block h-[2px] w-5 transition-transform duration-1000 ease-in-out ${
                open
                  ? "rotate-45 translate-y-[6px] bg-lightGolden"
                  : "bg-white group-hover:bg-lightGolden"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-5 transition-opacity duration-1000 ease-in-out ${
                open ? "opacity-0" : "bg-white group-hover:bg-lightGolden"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-5 transition-transform duration-1000 ease-in-out ${
                open
                  ? "-rotate-45 -translate-y-[6px] bg-lightGolden"
                  : "bg-white group-hover:bg-lightGolden"
              }`}
            ></span>
          </div>
        </div>
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <div className="text-white flex items-center gap-5 text-[0.7rem] lg:text-[0.8rem]  uppercase tracking-wider lg:tracking-widest">
        <Link href={"/about"}>
          <span
            className={`transition-opacity ease-in-out font-semibold duration-1000 hover-class ${
              open ? "opacity-0" : "text-white"
            }`}
          >
            About Us
          </span>
        </Link>
        <Link href={"/job"}>
          <span
            className={`transition-opacity ease-in-out font-semibold duration-1000 hover-class ${
              open ? "opacity-0" : "text-white"
            }`}
          >
            Job Listings
          </span>
        </Link>
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
          <Link href={"/"}>
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
          </Link>

          <div className="flex items-center gap-5 lg:gap-16">
            {renderMenu()}
            {renderHam()}
          </div>
        </div>
      </header>

      <div
        ref={sidebarRef}
        className={`fixed top-0 p-8 pt-20 lg:pt-24 right-0  h-screen w-[300px] flex flex-col justify-between transition-all ease-in-out duration-500 bg-black z-40 ${
          open ? "translate-x-0" : "translate-x-[300px]"
        }`}
      >
        <div className="flex flex-col gap-4">
          {menu.map((item, index) => (
            <Link
              onClick={() => setOpen(!open)}
              className="inline-block"
              href={item.url}
              key={index}
            >
              <span className="text-white hover-class text-[0.7rem] lg:text-[0.8rem]  uppercase tracking-wider lg:tracking-widest">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="w-full flex gap-3 border-t border-lightGolden/10 pt-4">
          <Facebook size={25} strokeWidth={1.5} />
          <Instagram size={25} strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};

export default Header;
