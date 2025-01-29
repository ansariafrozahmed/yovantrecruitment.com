"use client";
import { menu } from "@/lib/Constants";
import {
  ArrowLeft,
  ChevronRight,
  Facebook,
  Ham,
  Home,
  Instagram,
  Menu,
  X,
} from "lucide-react";
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
  const [subMenu, setSubMenu] = useState<any | null>(null);

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
        {!open && (
          <div className="flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-1000">
            <Menu />
          </div>
        )}
      </div>
    );
  };

  const renderMenu = () => {
    return (
      <>
        {!open && (
          <div className=" flex items-center gap-5 text-[0.7rem] lg:text-[0.8rem]  uppercase tracking-wider lg:tracking-widest">
            <Link href={"/about"}>
              <span
                className={`transition-all ease-in-out font-semibold duration-1000  ${
                  pathname === "/about"
                    ? "active-class"
                    : "hover-class text-white"
                } `}
              >
                About Us
              </span>
            </Link>
            <Link href={"/job"}>
              <span
                className={`transition-all ease-in-out font-semibold duration-1000 hover-class ${
                  pathname === "/job"
                    ? "active-class"
                    : "hover-class text-white"
                }`}
              >
                Job Listings
              </span>
            </Link>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <header
        className={` fixed z-10 top-0 left-0 py-2 w-full transition-all ease-in-out duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${hasScrolled ? "bg-black" : ""}`}
      >
        <div className="templateContainer flex items-center justify-between">
          <Link href={"/"}>
            <div
              className={`transition-all ease-in-out duration-300 ${
                hasScrolled
                  ? "h-[50px] lg:h-[60px] w-[50px] lg:w-[60px]"
                  : "h-[70px] lg:h-[80px] w-[70px] lg:w-[80px]"
              }`}
            >
              <Image
                src="/assets/logo/webp/goldentrans.webp"
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

      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="bg-white/5 fixed inset-0 z-10"
        ></div>
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-0   right-0  h-screen w-[300px] flex flex-col justify-between transition-all ease-in-out duration-500 bg-black z-40 ${
          open ? "translate-x-0" : "translate-x-[300px]"
        }`}
      >
        <div className=" space-y-5">
          <div className="flex px-8 pt-8  items-center justify-end">
            <X onClick={() => setOpen(!open)} className="cursor-pointer" />
          </div>
          <div className="relative flex p-8  overflow-hidden flex-col gap-4">
            {menu.map((item, index) => (
              <div
                key={index}
                className="flex group items-center justify-between"
              >
                <Link
                  onClick={() => setOpen(!open)}
                  className=""
                  href={item.url}
                >
                  <span
                    className={`text-white hover-class text-[0.7rem] lg:text-[0.85rem]  uppercase tracking-wider lg:tracking-widest ${
                      pathname === item.url
                        ? "active-class"
                        : "group-hover-class text-white"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
                {item.subMenu && (
                  <ChevronRight
                    onClick={() => setSubMenu(item.subMenu)}
                    className="cursor-pointer hover:text-lightGolden"
                    size={20}
                  />
                )}
              </div>
            ))}
            <div
              className={`absolute inset-0 space-y-6 transition-all ease-in-out duration-300 bg-black px-8 py-4 ${
                subMenu ? "-translate-x-0" : "translate-x-full"
              }`}
            >
              <div
                className="flex text-sm cursor-pointer hover:text-lightGolden items-center gap-2"
                onClick={() => setSubMenu(null)}
              >
                <ArrowLeft className="mb-0.5" size={16} />
                Back
              </div>
              <div className="space-y-4">
                {subMenu?.map((item: any, index: any) => (
                  <Link
                    onClick={() => setOpen(!open)}
                    className="block"
                    href={item.url}
                    key={index}
                  >
                    <span
                      className={`text-white hover-class text-[0.7rem] lg:text-[0.85rem]  uppercase tracking-wider lg:tracking-widest ${
                        pathname === item.url
                          ? "active-class"
                          : "group-hover-class text-white"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-8 pb-8 flex gap-3 border-t border-lightGolden/10 pt-4">
          <Facebook size={25} strokeWidth={1.5} />
          <Instagram size={25} strokeWidth={1.5} />
        </div>
      </div>
    </>
  );
};

export default Header;
