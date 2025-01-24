import React from "react";

const Stats = () => {
  const data = [
    {
      number: "87%",
      title: "Faster Hiring",
      description:
        "Streamline your recruitment process and secure top overseas talent quickly and efficiently.",
    },
    {
      number: "95%",
      title: "Employer Satisfaction",
      description:
        "Trusted by companies worldwide for delivering skilled professionals tailored to your needs.",
    },
    {
      number: "89%",
      title: "Successful Placements",
      description:
        "Proven track record in matching exceptional talent with the right opportunities across industries.",
    },
  ];

  return (
    <div className="templateContainer py-8 md:py-10 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
      {data.map((item, i) => (
        <div key={i} className="text-center p-5 space-y-3">
          <span
            data-aos="fade-up"
            className="text-5xl tracking-wider gradientHeading font-semibold"
          >
            {item.number}
          </span>
          <h2
            data-aos="fade-up"
            className="gradientHeading text-xl uppercase tracking-wider font-semibold"
          >
            {item.title}
          </h2>
          <p data-aos="fade-up" className="text-sm tracking-wider">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
