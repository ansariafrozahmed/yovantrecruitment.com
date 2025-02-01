import Image from "next/image";
import React from "react";
import ParallaxScrollSection from "../Wrappers/ParallaxWrapper/ParallaxScrollSection";
import TextWithImage from "./TextWithImage";

const OnDemand = () => {
  return (
    <div>
      <ParallaxScrollSection />
      <div className="w-full relative parallax-section h-[60vh] lg:h-[100svh]">
        <Image
          src={"/assets/services/bannerImage.jpg"}
          alt=""
          height={1000}
          className="w-full h-full object-cover object-center"
          width={1000}
        />
        <div className="absolute flex items-center justify-center w-full h-full left-0 top-0 bg-black/60 inset-0 ">
          <div>
            <h1 className="relative text-[35px] lg:text-[50px] leading-none tracking-wide font-bold text-white text-center uppercase mb-3">
              <span className="gradientHeading">On Demand</span> <br />
              <span className="gradientHeading">Labour Supply</span>
            </h1>
          </div>
        </div>
      </div>
      {/* --------- */}
      <div className="relative bg-black">
        <div className="flex flex-col templateContainer py-10 lg:flex-row items-center w-full gap-10">
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[420px] w-full object-cover  rounded-3xl overflow-hidden"
              src={"/assets/services/global.jpg"}
              alt=""
              height={800}
              width={1500}
            />
          </div>
          <div className="w-full lg:w-[60%] space-y-4 lg:space-y-5">
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              Global Recruitment networks
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              consultancy dedicated to connecting top talent with the right
              opportunities worldwide. We specialize in seamless recruitment
              solutions, helping businesses find skilled professionals while
              empowering job seekers with career-defining roles. With a global
              reach and industry expertise, we bridge the gap between employers
              and candidates, ensuring the perfect fit for success.
            </p>
          </div>
        </div>
        <div className="flex flex-col templateContainer py-10 lg:flex-row-reverse items-center w-full gap-10">
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[420px] w-full object-cover object-top rounded-3xl overflow-hidden"
              src={"/assets/services/skilled.jpg"}
              alt=""
              height={800}
              width={1500}
            />
          </div>
          <div className="w-full lg:w-[60%] space-y-4 lg:space-y-5">
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              Skilled & Unskilled Reliable Workers
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              Discover dependable solutions for all your workforce needs with
              our skilled and unskilled reliable workers. We connect you with
              candidates who bring dedication, efficiency, and professionalism
              to every task. Whether you're looking for experienced specialists
              or hardworking support staff, our service ensures you find the
              right fit for your business. Empower your team with reliability
              today!
            </p>
          </div>
        </div>
        <div className="flex flex-col templateContainer py-10 lg:flex-row items-center w-full gap-10">
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[420px] w-full object-cover rounded-3xl overflow-hidden"
              src={"/assets/services/erp.jpg"}
              alt=""
              height={800}
              width={1500}
            />
          </div>
          <div className="w-full lg:w-[60%] space-y-4 lg:space-y-5">
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              State of the Art ERP Software
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              Our Consultancy provides expert guidance in selecting,
              implementing, and optimizing ERP solutions tailored to your
              business needs. We help streamline operations, improve efficiency,
              and ensure seamless integration, empowering your organization with
              cutting-edge technology for sustainable growth.
            </p>
          </div>
        </div>
        <div className="flex flex-col templateContainer py-10 lg:flex-row-reverse items-center w-full gap-10">
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[420px] w-full object-cover object-top rounded-3xl overflow-hidden"
              src={"/assets/services/deployment.jpg"}
              alt=""
              height={800}
              width={1500}
            />
          </div>
          <div className="w-full lg:w-[60%] space-y-4 lg:space-y-5">
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              Deployment time are 4 - 7 day
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              Looking for the right job without the long wait? Our job
              consultancy service ensures quick and efficient placements,
              helping candidates secure opportunities within 4 to 7 days. With a
              strong network of employers and a streamlined hiring process, we
              match the right talent with the right job in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnDemand;
