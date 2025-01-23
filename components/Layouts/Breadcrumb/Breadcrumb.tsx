import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  heading?: string;
  breadCrumb?: any[];
  image?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  heading,
  breadCrumb,
  image,
}) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/assets/largeImages/banner01.webp")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="overflow-hidden  border-white/10 relative"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="text-center templateContainer py-28 relative  text-white space-y-2">
        <h1
          data-aos="fade-up"
          className="text-2xl lg:text-3xl tracking-wider gradientHeading font-semibold uppercase"
        >
          {heading}
        </h1>
        {breadCrumb && (
          <ul
            data-aos="fade-up"
            className="flex flex-wrap text-sm items-center gap-1.5 justify-center font-medium text-white"
          >
            {breadCrumb.map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-1.5 font-medium tracking-wide capitalize ${
                  index === breadCrumb.length - 1
                    ? "text-lightGolden font-semibold"
                    : ""
                }`}
              >
                {index === 0 ? (
                  <Link href="/" className="hover:text-lightGolden">
                    {item}
                  </Link>
                ) : (
                  <span>{item}</span>
                )}
                {index < breadCrumb.length - 1 && (
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
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
