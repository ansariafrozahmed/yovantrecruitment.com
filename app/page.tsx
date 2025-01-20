import Categories from "@/components/Home/Categories/Categories";
import MobileCat from "@/components/Home/Categories/MobileCat";
import HomeBlogs from "@/components/Home/HomeBlogs";
import Introduction from "@/components/Home/Introduction";
import OurClients from "@/components/Home/OurClients";
import RequirementProcess from "@/components/Home/RequirementProcess/RequirementProcess";
import ParallaxScrollSection from "@/components/Wrappers/ParallaxWrapper/ParallaxScrollSection";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <ParallaxScrollSection />
      <div className="h-[80vh] md:h-[70vh] lg:h-[100vh] w-[100%] overflow-hidden parallax-section relative flex items-start">
        <div className={`relative h-full min-w-full`}>
          <Image
            src="/assets/largeImages/banner01.webp"
            alt="Banner"
            className="h-full w-screen object-cover"
            sizes="100vw"
            height={2000}
            width={3000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black lg:via-transparent to-transparent"></div>
          <div className="absolute inset-0 templateContainer flex items-end pb-16">
            <div className="space-y-3 text-white">
              <span className="tracking-wider">Lorem ipsum dolor sit.</span>
              <h1 className="text-[1.5rem] md:text-[2.2rem] lg:text-[2.7rem] tracking-wider leading-tight uppercase">
                Your Premier Partner <br /> for Exceptional Talent
              </h1>
              <button className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black">
                Explore jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute   inset-0 bg-black transition-opacity duration-100 parallax-overlay"></div>
      <div className="relative py-10 lg:py-16 bg-black">
        <Introduction />
      </div>
      <OurClients />
      {/* FOR DESKTOP */}
      <div className="hidden lg:block" key={1}>
        <Categories />
      </div>
      {/* OUR CLASSES FOR MOBILE */}
      <div className="lg:hidden relative">
        <MobileCat />
      </div>
      <RequirementProcess />
      <HomeBlogs />
      {/* <WhyChoose /> */}
    </>
  );
};

export default Home;
