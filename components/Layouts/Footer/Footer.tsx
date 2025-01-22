import { Home, Mail, Map, MapIcon, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="w-full h-[1px] bg-white/10"></div>
      <div className="container m-auto px-4 md:px-4 py-6 md:py-8 lg:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
        <div className="space-y-5">
          <Link href={"/"}>
            <Image
              src={"/assets/logo/webp/8.webp"}
              alt="logo"
              height={100}
              width={200}
              className="w-32 object-contain"
            />
          </Link>
          <div>
            <h2 className="gradientHeading text-2xl">YOVANT</h2>
            <h2 className="gradientHeading text-xl tracking-wide">
              RECRUITEMENT SERVICES
            </h2>
          </div>
          <p className="tracking-wider text-gray-300 text-[0.85rem] pr-5 leading-[25px]">
            Welcome to Yovant Recruitment Services, a dynamic recruitment agency
            founded by Alex Farrow and Jayson Thankappan.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="gradientHeading tracking-wider text-xl font-semibold">
            CATEGORIES
          </h2>
          <div className="w-[100px] h-[2px] bg-gradient-to-r rounded from-darkGolden to-lightGolden"></div>
          <div className="space-y-2 md:space-y-4 text-sm font-light">
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>Home</p>
            </Link>
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>About Us</p>
            </Link>
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>Contact Us</p>
            </Link>
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>Blogs</p>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="gradientHeading tracking-wider text-xl font-semibold">
            USEFUL LINKS
          </h2>
          <div className="w-[100px] h-[2px] bg-gradient-to-r rounded from-darkGolden to-lightGolden"></div>
          <div className="space-y-2 md:space-y-4 text-sm font-light">
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>Home</p>
            </Link>
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>About Us</p>
            </Link>
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>Contact Us</p>
            </Link>
            <Link
              className="block hover:pl-2 transition-all ease-in-out duration-200"
              href={"/"}
            >
              <p>Blogs</p>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="gradientHeading tracking-wider text-xl font-semibold">
            CONTACT DETAILS
          </h2>
          <div className="w-[100px] h-[2px] bg-gradient-to-r rounded from-darkGolden to-lightGolden"></div>
          <div className="space-y-2 md:space-y-5 text-sm font-light">
            <div className="flex items-center gap-2 tracking-wide ">
              <MapPin color="#FBD973" size={20} strokeWidth={1.5} />
              <p>BB 709, Jafza One, Jebel Ali, Dubai, UAE</p>
            </div>
            <div className="flex items-center gap-2 tracking-wide ">
              <MapPin color="#FBD973" size={20} strokeWidth={1.5} />
              <p>Sharjah, Media City, Sharjah, UAE</p>
            </div>
            <div className="flex items-center gap-2 tracking-wide ">
              <Phone color="#FBD973" size={20} strokeWidth={1.5} />
              <p>+971 5 5332 6843</p>
            </div>
            <div className="flex items-center gap-2 tracking-wide ">
              <Phone color="#FBD973" size={20} strokeWidth={1.5} />
              <p>+971 5 8528 8858</p>
            </div>
            <div className="flex items-center gap-2 tracking-wide ">
              <Mail color="#FBD973" size={20} strokeWidth={1.5} />
              <p>info@yovantrecruitment.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto px-3 md:px-4 py-6">
        <p className="text-sm tracking-wider text-center">
          © Copyright 2024 | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
