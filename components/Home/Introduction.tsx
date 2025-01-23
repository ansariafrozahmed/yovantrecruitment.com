// import Image from "next/image";
// import React from "react";

// const Introduction = () => {
//   return (
//     <div className="templateContainer py-6 lg:py-14 flex flex-row-reverse items-center gap-20 w-full text-white">
//       <div className="w-full lg:w-[55%] space-y-8 ">
//         <h2 className="gradientHeading text-4xl tracking-wider uppercase ">
//           Introduction
//         </h2>
//         <p className="tracking-wider text-gray-300 text-[0.9rem]  leading-[25px]">
//           Welcome to Yovant Recruitment Services, a dynamic recruitment agency
//           founded by Alex Farrow and Jayson Thankappan. With extensive
//           backgrounds in overseas recruitment and specialising within
//           hospitality, facilities management and construction across the UK and
//           UAE, Alex and Jayson have built a reputation for delivering
//           exceptional talent solutions.
//         </p>
//         <p className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]">
//           Yovant owns its own recruitment agency in Nepal, operating under the
//           same name and brand as our UAE and KSA licences. This office, led by
//           our partner Rythm Chhetri and supported by a passionate team of 20
//           professionals ensures streamlined operations and a dedicated local
//           presence and boasts its own hospitality training centre.
//         </p>
//         <p className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]">
//           In addition, we have partnered with trusted agencies the Philippines,
//           India, Pakistan, Bangladesh and Africa, enabling us to source top-tier
//           overseas talent tailored to the unique demands of the KSA market.
//         </p>
//         <button className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black">
//           About us
//         </button>
//       </div>
//       {/* --- */}
//       <div className="w-full lg:w-[45%] h-[600px]">
//         <Image
//           src={
//             "https://images.pexels.com/photos/4344106/pexels-photo-4344106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           }
//           alt=""
//           className="w-full rounded h-full object-cover"
//           height={1000}
//           width={1000}
//         />
//       </div>
//     </div>
//   );
// };

// export default Introduction;

"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  useEffect(() => {
    gsap.fromTo(
      ".parallax-sectionn",
      { scale: 1, y: 0 },
      {
        scale: 1.3,
        y: "50%",
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-sectionn",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="templateContainer  flex flex-col lg:flex-row gap-8 lg:gap-10">
      <div className="w-full flex flex-row items-center lg:flex-col gap-2 lg:w-[40%] relative overflow-hidden">
        <div className="lg:h-screen w-[55%] lg:w-full lg:hidden">
          <Image
            src={
              "https://images.pexels.com/photos/4344106/pexels-photo-4344106.jpeg?auto=compress&cs=tinysrgb"
            }
            alt=""
            className="lg:h-full w-full  object-cover"
            height={1000}
            width={600}
          />
        </div>
        <div className="lg:h-screen w-[55%] lg:w-full hidden lg:block parallax-sectionn">
          <Image
            src={
              "https://images.pexels.com/photos/4344106/pexels-photo-4344106.jpeg?auto=compress&cs=tinysrgb"
            }
            alt=""
            className="lg:h-full w-full  object-cover"
            height={1000}
            width={600}
          />
        </div>
        <div className="lg:h-screen -ml-6 lg:-ml-0 border-8 lg:border-none shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] lg:shadow-none border-white w-[50%] lg:w-full relative">
          <Image
            src={
              "https://images.pexels.com/photos/5989940/pexels-photo-5989940.jpeg?auto=compress&cs=tinysrgb"
            }
            alt=""
            className="lg:h-full w-full object-cover"
            height={1000}
            width={600}
          />
        </div>
      </div>
      <div className="w-full lg:w-[60%] lg:sticky top-0 lg:h-screen flex flex-col items-start justify-center space-y-4 lg:space-y-5 text-[#242424]">
        <h2
          data-aos="fade-up"
          className="gradientHeading text-4xl tracking-wider uppercase "
        >
          Introduction
        </h2>
        <p
          data-aos="fade-up"
          className="tracking-wider text-gray-300 text-[0.9rem]  leading-[25px]"
        >
          Welcome to Yovant Recruitment Services, a dynamic recruitment agency
          founded by Alex Farrow and Jayson Thankappan. With extensive
          backgrounds in overseas recruitment and specialising within
          hospitality, facilities management and construction across the UK and
          UAE, Alex and Jayson have built a reputation for delivering
          exceptional talent solutions.
        </p>
        <p
          data-aos="fade-up"
          className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]"
        >
          Yovant owns its own recruitment agency in Nepal, operating under the
          same name and brand as our UAE and KSA licences. This office, led by
          our partner Rythm Chhetri and supported by a passionate team of 20
          professionals ensures streamlined operations and a dedicated local
          presence and boasts its own hospitality training centre.
        </p>
        <p
          data-aos="fade-up"
          className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]"
        >
          In addition, we have partnered with trusted agencies the Philippines,
          India, Pakistan, Bangladesh and Africa, enabling us to source top-tier
          overseas talent tailored to the unique demands of the KSA market.
        </p>
        <button
          data-aos="fade-up"
          className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black"
        >
          About us
        </button>
      </div>
    </div>
  );
};

export default Introduction;
