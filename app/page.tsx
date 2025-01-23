import Categories from "@/components/Home/Categories/Categories";
import MobileCat from "@/components/Home/Categories/MobileCat";
import HomeBlogs from "@/components/Home/HomeBlogs";
import Introduction from "@/components/Home/Introduction";
import OurClients from "@/components/Home/OurClients";
import RequirementProcess from "@/components/Home/RequirementProcess/RequirementProcess";
import ParallaxScrollSection from "@/components/Wrappers/ParallaxWrapper/ParallaxScrollSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <ParallaxScrollSection />
      <div className="h-[100svh]  md:h-[70vh] lg:h-[100vh] w-[100%] overflow-hidden parallax-section relative flex items-start">
        <div className={`relative h-full min-w-full`}>
          <video
            className=" h-full w-full object-cover object-center"
            playsInline
            preload="none"
            loop
            autoPlay
            muted
          >
            <source src={"assets/video/largee.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <Image
            src="/assets/largeImages/banner01.webp"
            alt="Banner"
            className="h-full w-screen object-cover"
            sizes="100vw"
            height={2000}
            width={3000}
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 templateContainer flex items-end pb-10 lg:pb-16">
            <div className="space-y-4 text-white">
              <span
                // data-aos="fade-down"
                className="block tracking-wider text-xs lg:text-sm uppercase font-medium"
              >
                Lorem ipsum dolor sit.
              </span>
              <h1
                // data-aos="fade-down"
                className="text-[2.2rem] font-medium md:text-[2.2rem]  lg:text-[2.8rem] tracking-wide leading-tight uppercase"
              >
                Your Premier Partner <br /> for Exceptional Talent
              </h1>
              <Link href={"/job"} className="block">
                <button
                  // data-aos="fade-up"
                  className="hover:opacity-90 bg-gradient-to-r tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black"
                >
                  Explore jobs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-black transition-opacity duration-100 parallax-overlay"></div> */}
      <div className="relative py-10 lg:py-16 bg-black">
        <Introduction />
      </div>
      {/* FOR DESKTOP */}
      <div className="hidden lg:block" key={1}>
        <Categories />
      </div>
      {/* OUR CLASSES FOR MOBILE */}
      <div className="lg:hidden relative">
        <MobileCat />
      </div>
      <OurClients />
      {/* <RequirementProcess /> */}
      <HomeBlogs />
      {/* <WhyChoose /> */}
    </>
  );
};

export default Home;
