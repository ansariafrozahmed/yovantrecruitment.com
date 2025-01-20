import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../../../css/Blogstyle.css";
import { Metadata } from "next";
import { defaultDescription, defaultTitle } from "@/lib/Constants";

interface BlogData {
  title?: string | null;
  slug?: string | null;
  excerpt?: string | null;
  content?: string | null;
  featured_image?: string | null;
  published_date?: any | null;
}

const getBlogDetail = async (slug: string): Promise<BlogData> => {
  try {
    const response = await fetch(
      `${process.env.BACKEND}/wp-json/custom/v1/post/${slug}`,
      {
        next: { revalidate: 0 },
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const data = await getBlogDetail(params.slug);

    return {
      title: data.title || defaultTitle,
      description: data.excerpt || defaultDescription,
      openGraph: {
        title: data.title || defaultTitle,
        description: data.excerpt || defaultDescription,
        url: `${process.env.FRONTEND}/blog/${data.slug}`,
        type: "website",
        images: [
          {
            url:
              data.featured_image || `${process.env.FRONTEND}/opengraph.webp`,
            width: 1200,
            height: 630,
            alt: data.title || defaultTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: data.title || defaultTitle,
        description: data.excerpt || defaultDescription,
        images: [
          data.featured_image || `${process.env.FRONTEND}/opengraph.webp`,
        ],
      },
      alternates: {
        canonical: `${process.env.FRONTEND}/blog/${data.slug}`,
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: defaultTitle,
      description: defaultDescription,
      openGraph: {
        title: defaultTitle,
        description: defaultDescription,
        url: `${process.env.FRONTEND}/blog/${params.slug}`,
        type: "website",
        images: [
          {
            url: `${process.env.FRONTEND}/opengraph.webp`,
            width: 1200,
            height: 630,
            alt: defaultTitle,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: defaultTitle,
        description: defaultDescription,
        images: [`${process.env.FRONTEND}/opengraph.webp`],
      },
      alternates: {
        canonical: `${process.env.FRONTEND}/blog/${params.slug}`,
      },
    };
  }
}

const Blogsinglepage = async ({ params }: { params: { slug: string } }) => {
  const data = await getBlogDetail(params?.slug);

  if (!data) {
    return <span>dd</span>;
  }

  return (
    <div className="mt-32 templateContainer text-white py-4 md:py-8 lg:py-12 space-y-8">
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
        <h1 className="text-3xl md:text-4xl gradientHeading font-medium tracking-wide uppercase ">
          {data?.title ?? "Title Not Available"}
        </h1>
        <div className="flex text-sm  items-center gap-1">
          <p>Published on </p>
          <p className="text-lightGolden tracking-wider">
            {new Date(data.published_date).toLocaleDateString("en-GB")}
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

export default Blogsinglepage;
