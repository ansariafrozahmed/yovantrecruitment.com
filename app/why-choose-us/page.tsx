// import CTA from "@/components/AboutPage/CTA";
import CTA from "@/components/AboutPage/CTA";
import React from "react";

const Whychooseus = () => {
  const cards = [
    {
      title: "Global Reach with Local Expertise",
      description:
        "Offices in Nepal, India, Philippines offer diverse talent for roles from blue collar to specialized.",
      imageSrc: "/assets/icons/global-network.png",
    },
    {
      title: "Unmatched Quality Selection",
      description:
        "Pre-screened candidates ensure your hiring teams meet only the most suitable applicants efficiently.",
      imageSrc: "/assets/icons/talent.png",
    },
    {
      title: "Streamlined International Sourcing",
      description:
        "Expertise in large-scale recruitment delivers skilled workers for various sectors efficiently.",
      imageSrc: "/assets/icons/choosing.png",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Delivering top-quality talent that aligns with your company's values and long-term goals.",
      imageSrc: "/assets/icons/commitment.png",
    },
    {
      title: "End-to-End Ownership",
      description:
        "Full control over recruitment through owned offices and partner networks across multiple countries.",
      imageSrc: "/assets/icons/iteration.png",
    },
    {
      title: "Industry Expertise",
      description:
        "Decades of recruitment experience in hospitality and construction ensures tailored talent solutions.",
      imageSrc: "/assets/icons/businessman.png",
    },
    {
      title: "Dedicated Teams",
      description:
        "A 20-member Nepal team ensures top talent sourcing, logistics, and timely recruitment.",
      imageSrc: "/assets/icons/teamwork.png",
    },
    {
      title: "Client-Focused Approach",
      description:
        "Collaborative processes consistently exceed client expectations with tailored, high-quality recruitment solutions.",
      imageSrc: "/assets/icons/customer-centricity.png",
    },
  ];

  return (
    <>
      <div className="">
        <div className="templateContainer space-y-16 pt-32 pb-12 tracking-wide">
          <div className="max-w-[900px] w-full h-full">
            <h1
              data-aos="fade-down"
              className="lg:text-7xl text-3xl gradientHeading"
            >
              Everything you need to get the attention of your audience
            </h1>
            {/* <div className="flex max-sm:flex-col gap-5 lg:mt-28 mt-10">
          <p className="text-gray-200 lg:text-4xl text-xl font-normal">
          Our digital agency helps clients develop, <br /> and maintain
          successful digital marketing <br />
          strategies across all channels. Also <br />
          work with you to build your website and create <br /> online
          mJsinesses that grow.
          </p>
          </div> */}
          </div>
          {/* ------- */}

          <div className="grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-4 gap-5  mx-auto place-items-center ">
            {cards.map((card, index) => (
              <>
                <div
                  data-aos="fade-up"
                  key={index}
                  className="px-4 py-8 w-full bg-[#14140c] h-full rounded-xl space-y-4"
                >
                  <div className="h-16 w-16">
                    <img
                      src={card.imageSrc}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h2 className="text-lg font-medium leading-tight text-lightGolden">
                    {card.title}
                  </h2>
                  <p className="text-sm text-white tracking-wide">
                    {card.description}
                  </p>
                </div>
              </>
            ))}
          </div>
          {/* ----- */}
        </div>
        <CTA />
      </div>
    </>
  );
};

export default Whychooseus;
