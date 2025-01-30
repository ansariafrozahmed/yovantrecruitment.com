import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "On Demand Labour Supply",
  openGraph: {
    title: "On Demand Labour Supply",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/services/on-demand-labour-supply`,
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
    title: "On Demand Labour Supply",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/services/on-demand-labour-supply`,
  },
};

const ondemandlabousupply = () => {
  return <div>ondemandlaboursupply</div>;
};

export default ondemandlabousupply;
