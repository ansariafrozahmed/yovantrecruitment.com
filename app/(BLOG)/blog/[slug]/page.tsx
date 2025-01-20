import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../../../css/Blogstyle.css";

interface BlogData {
  title?: string;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  published_date?: any;
}

const getBlogDetail = async (slug: string) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/custom/v1/post/${slug}`,
      {
        next: { revalidate: 10 },
      }
    );

    if (!response.ok) {
      console.error("Error fetching blog:", response.statusText);
      return {};
    }

    const result: BlogData = await response.json();
    return result;
  } catch (error) {
    console.error("Network or server error:", error);
    return {};
  }
};

const Blogdetailpage = async ({ params }: any) => {
  const blog_slug = (await params).slug;
  const data = await getBlogDetail(blog_slug);

  return (
    <div className="templateContainer mt-28 text-white py-4 md:py-8 lg:py-12 space-y-8">
      <ul className="flex flex-wrap items-center gap-1 justify-start text-sm text-gray-300">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>
        <li className="text-lightGolden">{data?.title ?? "Blog Post"}</li>
      </ul>
      {/* ----------- */}
      <div className="space-y-5">
        <h1 className="text-2xl gradientHeading md:text-4xl font-medium tracking-wide uppercase ">
          {data?.title ?? "Title Not Available"}
        </h1>
        <div className="flex text-sm font-semibold items-center gap-1">
          <p>Published on </p>
          <p className="text-lightGolden tracking-wider">
            {new Date(data?.published_date).toLocaleDateString("en-GB")}
          </p>
        </div>
        <p className="tracking-wide">
          {data?.excerpt ?? "Excerpt Not Available"}
        </p>
        {data?.featured_image ? (
          <Image
            src={data.featured_image}
            alt={data.title || "Featured Image"}
            height={400}
            width={600}
            className="h-full w-full"
            sizes="100vw"
          />
        ) : (
          <p>No Image Available</p>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: data?.content ?? "<p>No Content Available</p>",
          }}
          className="blogDescriptionCSS"
        ></div>
      </div>
    </div>
  );
};

export default Blogdetailpage;
