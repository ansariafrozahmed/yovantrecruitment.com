import BlogPageComp from "@/components/Blog/BlogPageComp";
import BlogCard from "@/components/Home/BlogCard";
import Breadcrumb from "@/components/Layouts/Breadcrumb/Breadcrumb";
import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Blogs",
  openGraph: {
    title: "Our Blogs",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/blog`,
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
    title: "Our Blogs",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `${process.env.FRONTEND}/blog`,
  },
};

const Page = () => {
  return (
    <>
      <Breadcrumb breadCrumb={["Home", "Blogs"]} heading="Our Blogs" />
      <BlogPageComp />
    </>
  );
};

export default Page;
