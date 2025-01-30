import ContactCard from "@/components/AboutPage/ContactCard";
import CTA from "@/components/AboutPage/CTA";
import OurFounder from "@/components/AboutPage/OurFounder";
import Breadcrumb from "@/components/Layouts/Breadcrumb/Breadcrumb";
import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import { Mail, MapIcon, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  openGraph: {
    title: "About Us",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/about`,
    type: "website",
    images: [
      {
        url: `${process.env.FRONTEND}/assets/logo/webp/golden.webp`,
        width: 1200,
        height: 630,
        alt: "Yovant Recruitment Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/about`,
  },
};

const About = () => {
  const data = [
    {
      icon: Mail,
      label: "Email",
      value: "info@yovantrecruitment.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 5 5332 6843",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Sharjah, Media City, Sharjah, UAE",
    },
  ];
  return (
    <>
      <NewBreadcrumb
        heading="About Us"
        text="We bring together the best talent and employers worldwide, fostering growth and innovation. Our dedicated team ensures a smooth recruitment process, from sourcing to onboarding, tailored to meet the unique needs of every client."
      />
      <div data-aos="fade-up" className="templateContainer  h-auto w-full">
        <Image
          className="h-[220px] md:h-[400px] lg:h-[500px] w-full object-cover rounded-3xl overflow-hidden"
          src={"/assets/largeImages/banner01.webp"}
          alt=""
          height={800}
          width={1500}
        />
      </div>
      {/* <div className="templateContainer space-y-2 py-8 lg:py-16">
        <h2
          data-aos="fade-up"
          className="text-center gradientHeading text-xl lg:text-3xl tracking-wide"
        >
          REACH OUT TO US TODAY
        </h2>
        <div data-aos="fade-up" className="flex items-center justify-center">
          <p className="lg:max-w-[40rem] text-center font-normal text-white text-sm tracking-wider">
            Whether you need support or want to learn more, we're here to assist
            you
          </p>
        </div>
        <div className="grid grid-cols-1 pt-8 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {data.map((item, index) => (
            <div key={index}>
              <ContactCard item={item} />
            </div>
          ))}
        </div>
      </div> */}
      <div className="templateContainer py-8 lg:py-16 space-y-16 lg:space-y-28">
        <div className="flex flex-col lg:flex-row items-center w-full gap-10">
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[400px] w-full object-cover rounded-3xl overflow-hidden"
              src={"/assets/largeImages/banner01.webp"}
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
              Our Story
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              Welcome to Yovant Recruitment Services, a dynamic recruitment
              agency founded by Alex Farrow and Jayson Thankappan. With years of
              experience in overseas recruitment, Alex and Jayson have become
              known for their expertise in the hospitality, facilities
              management, and construction sectors across the UK and UAE. Their
              commitment to delivering exceptional talent solutions has earned
              them a strong reputation in the industry.
            </p>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem] leading-[23px]"
            >
              Yovant is also proud to operate a recruitment agency in Nepal,
              under the same name and brand as our UAE and KSA licenses. This
              office is led by our partner, Rythm Chhetri, and is supported by a
              dedicated team of 20 professionals. We ensure smooth operations
              and a localized presence in Nepal, which also houses our own
              hospitality training center.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-10">
          <div className="w-full lg:w-[60%] space-y-4 lg:space-y-5">
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              Our Target
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              Welcome to Yovant Recruitment Services, a dynamic recruitment
              agency founded by Alex Farrow and Jayson Thankappan. With
              extensive backgrounds in overseas recruitment and specialising
              within hospitality, facilities management and construction across
              the UK and UAE, Alex and Jayson have built a reputation for
              delivering exceptional talent solutions.
            </p>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem] leading-[23px]"
            >
              Yovant owns its own recruitment agency in Nepal, operating under
              the same name and brand as our UAE and KSA licences. This office,
              led by our partner Rythm Chhetri and supported by a passionate
              team of 20 professionals ensures streamlined operations and a
              dedicated local presence and boasts its own hospitality training
              centre.
            </p>
          </div>
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[400px] w-full object-cover rounded-3xl overflow-hidden"
              src={"/assets/largeImages/banner01.webp"}
              alt=""
              height={800}
              width={1500}
            />
          </div>
        </div>
      </div>
      <OurFounder />
      <CTA />
    </>
  );
};

export default About;
