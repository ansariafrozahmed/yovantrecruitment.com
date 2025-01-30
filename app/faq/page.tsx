import FAQsection from "@/components/FAQ/FAQSection";
import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import { pageFaqs } from "@/lib/faqs";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  openGraph: {
    title: "Frequently Asked Questions",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/faq`,
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
    title: "Frequently Asked Questions",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/faq`,
  },
};

const FAQs = () => {
  return (
    <>
      <NewBreadcrumb
        heading="FAQs"
        text="At Yovant Recruitment Service, we understand the importance of clarity and trust in the recruitment process. Below are answers to some of the most common questions from our clients and candidates:"
      />
      <div className="bg-black mb-12">
        <div className="w-full templateContainer lg:flex-row flex flex-col gap-6 lg:gap-10 pb-10 justify-between ">
          {/* 1 Section */}
          <div className="lg:w-[48%] w-full lg:h-screen max-sm:h-auto lg:sticky static top-0">
            <div className=" w-full h-[200px] md:h-[400px] lg:h-full overflow-hidden">
              <Image
                src={"/assets/largeImages/faq.jpg"}
                width={500}
                height={900}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 2 Section */}
          <div className="lg:w-[52%]  w-full ">
            {/* <h1 className="lg:text-4xl leading-none text-3xl gradientHeading">
            Frequently Asked Questions
          </h1> */}
            <FAQsection data={pageFaqs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
