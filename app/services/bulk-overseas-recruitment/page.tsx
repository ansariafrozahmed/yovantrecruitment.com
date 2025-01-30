import TimelineSection from "@/components/Layouts/Timeline/TimelineSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bulk Overseas Recruitment",
  openGraph: {
    title: "Bulk Overseas Recruitment",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/services/bulk-overseas-recruitment`,
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
    title: "Bulk Overseas Recruitment",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/services/bulk-overseas-recruitment`,
  },
};

const bulkoverseasrecruitment = () => {
  return (
    <div>
      <TimelineSection />
    </div>
  );
};

export default bulkoverseasrecruitment;
