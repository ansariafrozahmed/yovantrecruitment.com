import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicePage = () => {
  const services = [
    {
      name: "On Demand Labour Supply",
      url: "/services/on-demand-labour-supply",
      image: "/assets/services/labour.jpg",
    },
    {
      name: "Bulk Overseas Recruitment",
      url: "/services/bulk-overseas-recruitment",
      image: "/assets/services/bulk.webp",
    },
  ];
  return (
    <div className="bg-black pt-32 lg:pt-36 space-y-14">
      <div className="templateContainer">
        <div className="flex items-center space-y-3 lg:space-y-0 justify-between max-sm:flex-col max-sm:items-center ">
          <h1
            data-aos="fade-down"
            className=" text-center lg:text-left  text-[40px] lg:text-[55px] gradientHeading uppercase leading-[1.1] font-medium tracking-wide"
          >
            Our Company <br />
            Service{" "}
          </h1>
          {/* HEADING FOR MOBILE */}
          {/* <h2
            data-aos="fade-down"
            className=" text-3xl max-sm:mb-3 hidden font-medium uppercase bg-gradient-to-br w-full bg-clip-text text-transparent max-sm:inline-block from-darkGolden via-mid to-lightGolden"
          >
            Our Company Service{" "}
          </h2> */}
          <p
            data-aos="fade-down"
            className="text-center lg:text-left font-light  text-white text-base max-w-[350px] leading-relaxed tracking-wider w-full"
          >
            we specialize in connecting top talent with the best job
            opportunities. Our team of experts is dedicated to providing
            personalized recruitment services, ensuring that we meet the unique
            needs of both job seekers and employers.
          </p>
        </div>
      </div>
      <div className="">
        {services.map((item, index) => (
          <Link href={item.url} key={index} className="block">
            <div
              data-aos="fade-up"
              className="w-full group group h-[280px] lg:h-[450px] overflow-hidden relative"
            >
              <Image
                src={item.image}
                alt=""
                className="w-full group-hover:scale-105 transition-transform duration-500 ease-in-out h-full object-cover object-center"
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={1500}
              />
              <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent inset-0">
                <div className="templateContainer h-full w-full flex items-end justify-start py-4 lg:py-6">
                  <h2 className="group-hover:text-lightGolden text-white text-xl lg:text-3xl font-medium uppercase tracking-wider left-10 z-10 bottom-10">
                    {item.name}
                  </h2>
                  <div className="flex justify-center items-center w-12 lg:w-14 h-12 lg:h-14 absolute right-5 lg:right-10 top-1/2 -translate-y-1/2 rounded-full bg-white group-hover:bg-lightGolden cursor-pointer">
                    <ArrowRight className="text-black group-hover:-rotate-45 transition-all ease-in-out duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
