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
      <div
        data-aos="fade-up"
        className="templateContainer hidden lg:block h-auto w-full"
      >
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
        <div className="flex flex-col-reverse lg:flex-row items-center w-full gap-10">
          <div className="w-full lg:w-[60%] space-y-4 lg:space-y-5">
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              About Us
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              <span className="text-lightGolden">
                Yovant Recruitment Services
              </span>{" "}
              is one of the leading staff outsourcing & Bulk Overseas
              Recruitment providers in the UAE. Licensed by the Department of
              Economic Development under the licence category of On Demand
              Labour Supply, we strive to maintain our vision and always aim for
              business growth for our partners. In order to achieve this, we
              make sure to identify and understand the needs of each client and
              their industry.
            </p>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem] leading-[23px]"
            >
              Yovant Recruitment Services makes sure to maintain transparency in
              operations and a professional code of conduct. Yovant Recruitment
              Services helps businesses raise the quality, productivity, and
              efficiency of their total workforce through recruitment support,
              visa sponsorship, HR management, payroll management, training, and
              workforce consultancy.
            </p>
          </div>
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[400px] w-full object-cover rounded-3xl overflow-hidden"
              src={
                "https://img.freepik.com/free-photo/business-person-looking-finance-graphs_23-2150461316.jpg?t=st=1738395139~exp=1738398739~hmac=f3d882af13d1c8c62cca203f5741c0bfdda72ec828453885f19d81d862ae4049&w=740"
              }
              alt=""
              height={800}
              width={1500}
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center w-full gap-10">
          <div data-aos="fade-up" className="w-full lg:w-[40%]">
            <Image
              className="h-[220px] md:h-[350px] lg:h-[420px] w-full object-cover rounded-3xl overflow-hidden"
              src={
                "https://img.freepik.com/free-photo/serious-hr-managers-listen-african-applicant-job-interview_1163-4638.jpg?t=st=1738394638~exp=1738398238~hmac=f8172f467bbc7f708dfe249312af7125a3a3e4e5b28d6afedfe5e5020e7af51a&w=740"
              }
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
              Our Mission
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              At Yovant Recruitment Services, our mission is to deeply
              understand the unique needs of each client across diverse
              categories, sectors, and industries. We are committed to providing
              tailored recruitment solutions that enable our clients to achieve
              their business goals and objectives with the highest quality
              workforce. Through our personalised approach, we ensure that every
              candidate we source aligns perfectly with our clients'
              requirements, helping them succeed in a competitive market
            </p>
            <h2
              data-aos="fade-up"
              className="gradientHeading text-2xl lg:text-4xl tracking-wider uppercase "
            >
              Our Vission
            </h2>
            <p
              data-aos="fade-up"
              className="tracking-wider text-gray-300 text-[0.87rem]  leading-[23px]"
            >
              Our vision is to become the most trusted and respected overseas
              workforce provider in the industry. We aim to achieve this by
              consistently delivering exceptional customer service, maintaining
              the highest standards of integrity, and building long-lasting
              partnerships that support the success of our clients and
              candidates alike. At Yovant, we strive to set new benchmarks for
              excellence in recruitment.
            </p>
          </div>
        </div>
      </div>
      <OurFounder />
      <CTA />
    </>
  );
};

export default About;
