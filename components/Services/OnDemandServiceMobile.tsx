"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import ParallaxScrollSection from "@/components/Wrappers/ParallaxWrapper/ParallaxScrollSection";

const textArray = [
  {
    id: 1,
    title: "Deployment time are 4 - 7 day",
    description:
      "Looking for the right job without the long wait? Our job consultancy service ensures quick and efficient placements, helping candidates secure opportunities within 4 to 7 days. With a strong network of employers and a streamlined hiring process, we match the right talent with the right job in no time.",
    imgPath: "/assets/services/global.jpg",
  },
  {
    id: 2,
    title: "Deployment time are 4 - 7 day",
    description:
      "Looking for the right job without the long wait? Our job consultancy service ensures quick and efficient placements, helping candidates secure opportunities within 4 to 7 days. With a strong network of employers and a streamlined hiring process, we match the right talent with the right job in no time.",
    imgPath: "/assets/services/deployment.jpg",
  },
  {
    id: 3,
    title: "Skilled & Unskilled Reliable Workers",
    description:
      "Discover dependable solutions for all your workforce needs with our skilled and unskilled reliable workers. We connect you with candidates who bring dedication, efficiency, and professionalism to every task. Whether you're looking for experienced specialists or hardworking support staff, our service ensures you find the right fit for your business. Empower your team with reliability today!",
    imgPath: "/assets/services/skilled.jpg",
  },
  {
    id: 4,
    title: "State-of-the-Art ERP Software",
    description:
      "Our Consultancy provides expert guidance in selecting, implementing, and optimizing ERP solutions tailored to your business needs. We help streamline operations, improve efficiency, and ensure seamless integration, empowering your organization with cutting-edge technology for sustainable growth.",
    imgPath: "/assets/services/erp.jpg",
  },
];

const OnDemandServieMobile = () => {
  return (
    <div className="lg:hidden ">
      {/* <ParallaxScrollSection /> */}
      <div
        className="  w-full h-[85vh] pt-20
         flex justify-center items-center"
        style={{
          backgroundImage: "url(/assets/services/bannerImage.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        // ref={bannerRef}
      >
        <div className="absolute w-full h-full left-0 top-0 bg-black/75 inset-0"></div>
        <div className="">
          <h1 className="relative lg:text-7xl text-3xl font-bold text-white text-center uppercase mb-3">
            On Demand Labour Supply
          </h1>
          <p className=" relative text-lg text-center px-48 max-sm:px-5">
            we specialize in providing on-demand labour supply to businesses
            across various industries. Whether you need temporary workers for a
            short-term project or skilled professionals for seasonal demands,
            our flexible workforce solutions ensure that you get the right
            talent at the right time. Let us handle your workforce needs while
            you focus on growing your business. Partner with us today for
            reliable, efficient, and hassle-free labour supply solutions.
          </p>
        </div>
      </div>
      <div className="relative bg-black ">
        <div className="templateContainer flex flex-col lg:flex-row gap-8 lg:gap-10 ">
          {/* TEXT SECTION */}
          <div className="w-ful  py-10 flex flex-col items-start justify-center  text-[#242424]  ">
            {textArray.map((text, index) => {
              return (
                <div className="w-full h-full bg-black mb-14" key={text.id}>
                  <div className=" w-full">
                    <Image
                      src={text?.imgPath}
                      width={500}
                      height={1000}
                      alt="images"
                    />
                  </div>
                  <h2 className="gradientHeading text-3xl lg:text-4xl tracking-wider uppercase mb-2 mt-3">
                    Introduction
                  </h2>
                  <p className="text-white mb-3">{text.description}</p>
                  <Link href={"/about"}>
                    <button className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black">
                      About us
                    </button>
                  </Link>
                </div>
              );
            })}
            {/* <p className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]">
          Welcome to Yovant Recruitment Services, a dynamic recruitment agency
          founded by Alex Farrow and Jayson Thankappan. With extensive
          backgrounds in overseas recruitment and specialising within
          hospitality, facilities management and construction across the UK and
          UAE, Alex and Jayson have built a reputation for delivering
          exceptional talent solutions.
          </p>
          <p className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]">
          Yovant owns its own recruitment agency in Nepal, operating under the
          same name and brand as our UAE and KSA licences. This office, led by
          our partner Rythm Chhetri and supported by a passionate team of 20
          professionals ensures streamlined operations and a dedicated local
          presence and boasts its own hospitality training centre.
          </p>
          <p className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]">
          In addition, we have partnered with trusted agencies in the
          Philippines, India, Pakistan, Bangladesh, and Africa, enabling us to
          source top-tier overseas talent tailored to the unique demands of the
          KSA market.
          </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnDemandServieMobile;
