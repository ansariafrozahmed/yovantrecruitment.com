import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import Image from "next/image";
import React from "react";

const Ourclients = () => {
  return (
    <>
      <NewBreadcrumb
        heading="Our Clients"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
            dolore incidunt illum at sint cupiditate dignissimos reiciendis
            ullam laudantium et."
      />
      <div className="templateContainer mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 pb-10 lg:pb-16">
        {Array(30)
          .fill(30)
          .map((_, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="aspect-[5/3] lg:aspect-[5/2.5] -md p-3 bg-white flex items-center justify-center"
            >
              <Image
                src={`/assets/clients/${i + 1}.png`}
                alt=""
                className="w-full h-full object-contain"
                height={200}
                width={400}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Ourclients;
