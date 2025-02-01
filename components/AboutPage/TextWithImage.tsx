import Image from "next/image";
import React from "react";

const TextWithImage = () => {
  return (
    <div className="templateContainer flex flex-col lg:flex-row gap-8 lg:gap-10">
      <div className="w-full flex flex-row items-center lg:flex-col gap-2 lg:w-[40%] relative overflow-hidden">
        <div className="lg:h-screen w-full ">
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
      </div>
      <div className="w-full lg:w-[60%] lg:sticky top-0 lg:h-screen flex flex-col items-start justify-center space-y-4 lg:space-y-5 text-[#242424]">
        <h2
          data-aos="fade-up"
          className="gradientHeading text-3xl lg:text-4xl tracking-wider uppercase "
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
      </div>
    </div>
  );
};

export default TextWithImage;
