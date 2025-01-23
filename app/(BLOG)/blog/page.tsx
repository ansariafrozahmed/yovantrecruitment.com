import BlogPageComp from "@/components/Blog/BlogPageComp";
import BlogCard from "@/components/Home/BlogCard";
import Breadcrumb from "@/components/Layouts/Breadcrumb/Breadcrumb";
import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import React from "react";

const Page = () => {
  return (
    <>
      <Breadcrumb breadCrumb={["Home", "Blogs"]} heading="Our Blogs" />
      <BlogPageComp />
    </>
  );
};

export default Page;
