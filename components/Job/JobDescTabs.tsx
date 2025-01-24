import React from "react";

const JobDescTabs = () => {
  const tabs = [
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Responsibilities",
      key: "responsibilities",
    },
    {
      label: "Reviews",
      key: "reviews",
    },
  ];
  return (
    <div className="space-y-12">
      {tabs.map((item, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl tracking-wide font-medium gradientHeading">
            {item.label}
          </h2>
          <div className="bg-gradient-to-r from-darkGolden to-lightGolden h-[1px] w-full"></div>
          <div className="space-y-4">
            <p className="font-light tracking-wider text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              pariatur architecto ad vero provident praesentium reiciendis
              inventore, quaerat dolorem excepturi error mollitia possimus
              assumenda magni! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatum corrupti non aliquam iusto nulla,
              consequatur maiores ad, voluptas laboriosam, assumenda voluptates
              eaque illo dicta nam itaque libero facilis aperiam! Laboriosam
              voluptate hic expedita in dicta!
            </p>
            <p className="font-light tracking-wider text-gray-200 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              laboriosam neque iste mollitia ex, molestiae inventore quasi
              veritatis voluptatem sunt libero. Iste, sit laudantium error,
              harum ab enim recusandae corrupti dignissimos accusantium vitae
              nobis ullam odit! Sunt ipsum blanditiis perspiciatis tempore
              iusto, repellendus omnis sit nemo cupiditate pariatur, nam sed
              voluptatibus recusandae, velit incidunt eligendi. Quasi nisi fugit
              tempore non? Modi odio fugiat, dolor veritatis officia ad numquam
              deleniti quasi reprehenderit qui a in fuga illum mollitia, itaque
              laborum at!
            </p>
            <p className="font-light tracking-wider text-gray-200 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              laboriosam neque iste mollitia ex, molestiae inventore quasi
              veritatis voluptatem sunt libero. Iste, sit laudantium error,
              harum ab enim recusandae corrupti dignissimos accusantium vitae
              nobis ullam odit! Sunt ipsum blanditiis perspiciatis tempore
              iusto, repellendus omnis sit nemo cupiditate pariatur, nam sed
              voluptatibus recusandae, velit incidunt eligendi. Quasi nisi fugit
              tempore non? Modi odio fugiat, dolor veritatis officia ad numquam
              deleniti quasi reprehenderit qui a in fuga illum mollitia, itaque
              laborum at!
            </p>
          </div>
        </div>
      ))}
      {/* {tabs.map((item, index) => (
        <div key={index} className="py-4 border-b">
          {item.label}
        </div>
      ))} */}
    </div>
  );
};

export default JobDescTabs;
