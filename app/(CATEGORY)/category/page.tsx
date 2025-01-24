import MobileCategoryCard from "@/components/Home/Categories/MobileCategoryCard";
import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import { categories } from "@/lib/Categories";
import React from "react";

const Category = () => {
  return (
    <div className="radialGradient">
      <NewBreadcrumb
        heading="Our Categories"
        text="At Yovant Recruitment Service, we specialize in recruiting top talent across various industries. From healthcare to engineering, we offer tailored solutions to meet the diverse needs of our clients, ensuring the right fit for every role."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 templateContainer gap-3 pb-8 md:pb-10 lg:pb-12">
        {categories.map((item, index) => (
          <MobileCategoryCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Category;
