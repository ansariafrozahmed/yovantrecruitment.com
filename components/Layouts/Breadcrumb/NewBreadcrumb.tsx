import React from "react";

interface BreadcrumbProps {
  heading?: string;
  text?: string;
}

const NewBreadcrumb: React.FC<BreadcrumbProps> = ({ heading, text }) => {
  return (
    <div className="overflow-hidden  pt-16 relative">
      <div className="text-center templateContainer py-14 relative md:py-16 lg:py-16 text-white space-y-2">
        <h1
          data-aos="fade-down"
          className="text-2xl lg:text-3xl tracking-wider gradientHeading font-semibold uppercase"
        >
          {heading}
        </h1>
        <div data-aos="fade-down" className="flex items-center justify-center">
          <p className="max-w-[40rem] font-normal  text-sm tracking-wider">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewBreadcrumb;
