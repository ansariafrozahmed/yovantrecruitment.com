import Branches from "@/components/Layouts/Branches";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Branches",
  openGraph: {
    title: "Our Branches",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/branches`,
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
    title: "Our Branches",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/branches`,
  },
};

const Page = () => {
  return (
    <div>
      <Branches />
    </div>
  );
};

export default Page;
