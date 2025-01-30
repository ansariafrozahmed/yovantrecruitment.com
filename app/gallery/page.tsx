import MasonaryGrid from "@/components/Gallery/MasonaryGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Gallery",
  openGraph: {
    title: "Our Gallery",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/gallery`,
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
    title: "Our Gallery",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/gallery`,
  },
};

const Gallery = () => {
  return (
    <>
      <div className="overflow-hidden pt-16 relative">
        <div className="text-center templateContainer py-12 relative md:py-16 lg:py-16 text-white space-y-2">
          <h1
            data-aos="fade-down"
            className="text-2xl lg:text-3xl uppercase tracking-wider gradientHeading font-semibold "
          >
            Our Gallery
          </h1>
          <div
            data-aos="fade-down"
            className="flex items-center justify-center"
          >
            <p className="max-w-[40rem] font-normal text-sm tracking-wider">
              Explore a curated collection of stunning visuals and creative
              works. Dive into our gallery and let the stories behind each image
              inspire you.
            </p>
          </div>
        </div>
      </div>
      {/* ------- */}
      <MasonaryGrid />
    </>
  );
};

export default Gallery;
