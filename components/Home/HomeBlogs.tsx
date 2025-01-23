import React from "react";
import BlogCard from "./BlogCard";

const fetchBlogs = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/custom/v1/posts?posts_per_page=3&page=1`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    return null;
  }
};

const HomeBlogs: React.FC = async () => {
  const data = await fetchBlogs();

  if (data?.length < 1) return null;
  return (
    <div className="templateContainer space-y-6 py-8 lg:py-16">
      <h2
        data-aos="fade-up"
        className="text-[1.6rem] gradientHeading text-center lg:text-4xl font-medium tracking-wide uppercase"
      >
        News & Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item: any, i: number) => (
          <BlogCard data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
