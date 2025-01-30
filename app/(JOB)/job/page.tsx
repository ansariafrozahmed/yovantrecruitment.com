import Hero from "@/components/Job/Hero";
import JobCardSection from "@/components/Job/JobCardSection";
import Stats from "@/components/Job/Stats";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Job Listings",
  openGraph: {
    title: "Job Listings",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/job`,
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
    title: "Job Listings",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/job`,
  },
};

const Job = () => {
  return (
    <>
      <Hero />
      <Stats />
      <JobCardSection />
    </>
  );
};

export default Job;
