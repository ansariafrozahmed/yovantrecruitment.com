import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Our Clients",
  openGraph: {
    title: "Our Clients",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/our-clients`,
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
    title: "Our Clients",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/our-clients`,
  },
};

const Ourclients = () => {
  return (
    <>
      <NewBreadcrumb
        heading="Our Clients"
        text="We are proud to partner with leading businesses and organizations across the globe. Our clients trust us to deliver exceptional talent that drives success and innovation."
      />
      <div className="templateContainer mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 pb-10 lg:pb-16">
        {Array(30)
          .fill(30)
          .map((_, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="aspect-[5/3] rounded-md lg:aspect-[5/2.5] -md p-3 bg-white flex items-center justify-center"
            >
              <Image
                src={`/assets/clients/${i + 1}.png`}
                alt=""
                className="w-full h-full object-contain"
                height={200}
                width={400}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Ourclients;
