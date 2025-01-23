import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCard {
  data: {
    slug: string;
    title: string;
    featured_image: string;
    published_date: string;
    excerpt: string;
  };
}

const BlogCard: React.FC<BlogCard> = ({ data }) => {
  return (
    <Link
      data-aos="fade-up"
      href={`/blog/${data?.slug}` || ""}
      className="block cursor-pointer space-y-3 group "
    >
      <div className="aspect-[4/2.5] mb-1  overflow-hidden">
        <Image
          src={
            data?.featured_image ||
            "https://images.pexels.com/photos/4344106/pexels-photo-4344106.jpeg?auto=compress&cs=tinysrgb"
          }
          alt=""
          height={4}
          width={3}
          className="h-full w-full object-cover group-hover:scale-105 transition-all ease-linear duration-200"
          sizes="(min-width: 1280px) 400px, (min-width: 1040px) 304px, (min-width: 780px) 348px, (min-width: 460px) 400px, 88.57vw"
        />
      </div>
      <h2 className="text-[1.3rem] text-lightGolden leading-tight transition-all ease capitalize font-medium tracking-wider">
        {data?.title || ""}
      </h2>
      {/* <h3 className="tracking-wider text-gray-300 text-[0.8rem] leading-snug line-clamp-3">
        {data?.excerpt || ""}
      </h3> */}
      <span className="text-white text-[0.8rem] block tracking-wider">
        Updated on{" "}
        {new Date(data?.published_date || "").toLocaleDateString("en-GB")}
      </span>
    </Link>
  );
};

export default BlogCard;
