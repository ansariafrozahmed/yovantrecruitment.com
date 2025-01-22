import ContactCard from "@/components/AboutPage/ContactCard";
import ContactForm from "@/components/Forms/ContactForm";
import Breadcrumb from "@/components/Layouts/Breadcrumb/Breadcrumb";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  const data = [
    {
      icon: MapPin,
      label: "Address",
      value: "Sharjah, Media City, Sharjah, UAE",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "BB 709, Jafza One, Jebel Ali, Dubai, UAE",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 5 5332 6843",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 5 8528 8858",
    },
    {
      icon: Mail,
      label: "Mail",
      value: "info@yovantrecruitment.com",
    },
  ];

  return (
    <>
      <Breadcrumb breadCrumb={["Home", "Contact Us"]} heading="Contact Us" />
      <div className="templateContainer text-white tex-wh py-8 md:py-8 lg:py-14 flex flex-col lg:flex-row gap-14 lg:gap-14">
        <div className="space-y-2 w-full lg:w-[60%]">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl gradientHeading font-bold tracking-wide">
              GET IN TOUCH
            </h2>
            <p className="tracking-wider leading-relaxed text-[0.9rem] lg:text-[0.95rem] font-light">
              Need to get in touch? We'd love to hear from you! Please fill out
              the form or email{" "}
              <a
                href="mailto:info@yovantrecruitment.com"
                className="text-lightGolden"
              >
                info@yovantrecruitment.com
              </a>
              , and our customer service team will respond within 24-72 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 pt-4 md:grid-cols-2 gap-4 lg:gap-5">
            {data.map((item, index) => (
              <div key={index}>
                <ContactCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-[40%] space-y-5">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
