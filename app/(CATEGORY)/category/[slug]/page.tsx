import CategoryForm from "@/components/Forms/CategoryForm";
import { categories } from "@/lib/Categories";
import Image from "next/image";
import React from "react";

const Categorydetail = async ({ params }: any) => {
  const slug = (await params).slug;

  const catData = categories.find((item: any) => {
    return item.slug === slug;
  });

  return (
    <div className="radialGradient pb-6 pt-24">
      <div className="templateContainer">
        <div className=" space-y-4 lg:space-y-5 py-12 lg:py-16 flex flex-col items-center justify-center">
          <h2 className="gradientHeading uppercase text-[2rem] lg:text-[3rem] leading-tight tracking-wider font-semibold text-center">
            {catData?.name}
          </h2>
          <p className="max-w-[650px] text-center tracking-wider text-[0.85rem] lg:text-[0.9rem]">
            {catData?.text || ""}
          </p>
          <a href="#enquire-form">
            <button className="bg-gradient-to-r hover:opacity-90 tracking-wide from-darkGolden to-lightGolden px-6 py-2 rounded text-black">
              Enquire now
            </button>
          </a>
        </div>
        {/* -------- */}
        <div className="grid grid-cols-2 gap-x-3 lg:gap-x-5 gap-y-6 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {catData?.subCat.map((item, index) => (
            // <div key={index} className="relative group w-auto h-auto space-y-3">
            //   <div className="aspect-[2/2.7] relative h-auto w-full">
            //     <Image
            //       src={
            //         "https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?t=st=1737356114~exp=1737359714~hmac=b91d5cc23e9754bc0a9f0f669e42b4d9f63344dad7810ab5e88e25846341bd00&w=740"
            //       }
            //       alt={`Image`}
            //       height={800}
            //       width={800}
            //       className="h-full w-full  transition-transform ease-in-out duration-300 object-cover"
            //     />
            //     <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent top-0 left-0"></div>
            //   </div>
            //   <h3 className="text-white lg:group-hover:text-lightGolden leading-tight text-[0.95rem]  !tracking-widest transition-transform ease-in-out duration-300 ">
            //     {item.name}
            //   </h3>
            // </div>
            <div
              key={index}
              className="aspect-[4/5.5] group rounded overflow-hidden relative"
            >
              <Image
                src={
                  item.image ||
                  "https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?t=st=1737356114~exp=1737359714~hmac=b91d5cc23e9754bc0a9f0f669e42b4d9f63344dad7810ab5e88e25846341bd00&w=740"
                }
                alt={`Image`}
                height={1000}
                width={1000}
                className="h-full w-full group-hover:scale-105 transition-transform ease-in-out duration-300 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent p-2 flex items-end justify-start to-transparent">
                <h2 className="text-white text-sm lg:text-[0.95rem] tracking-wider">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
        {/* ---------- */}
        <div
          id="enquire-form"
          className="py-12 lg:py-14 flex items-center justify-center"
        >
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default Categorydetail;
