import React from "react";
import "./Style.css";
import Image from "next/image";
import { bulkRecruitementsteps } from "@/lib/RecruitementProcess";

const TimelineSection = () => {
  return (
    <div className="page-wrapper ">
      <div className="section-timeline-heading">
        <div className="container">
          <div className="padding-vertical-xlarge">
            <div className="timeline-main_heading-wrapper">
              <div className="margin-bottom-medium pt-10">
                <h2 className="gradientHeading font-semibold tracking-wider uppercase text-3xl lg:text-6xl">
                  bulk overseas recruitment
                </h2>
              </div>
              <p className="paragraph-large">
                Step-by-Step Overseas Recruitment Process with Yovant
                Recruitment Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-timeline">
        <div className="container">
          <div className="timeline_component">
            <div className="timeline_progress">
              <div className="timeline_progress-bar"></div>
            </div>
            {bulkRecruitementsteps.map((step, index) => (
              <div key={index} className="timeline_item">
                <div className="timeline_left">
                  <h3 className="text-white text-3xl font-semibold tracking-wider timeline_date-text">
                    {step.stepNumber}
                  </h3>
                </div>
                <div className="timeline_centre">
                  <div className="timeline_circle"></div>
                </div>
                <div className="timeline_right">
                  <div className="margin-bottom-xlarge space-y-4">
                    <h2 className="gradientHeading font-semibold tracking-wider capitalize text-2xl lg:text-4xl">
                      {step.title}
                    </h2>
                    {step.details.map((detail, i) => (
                      <p
                        key={i}
                        className="tracking-wider text-gray-300 text-[0.9rem] leading-[25px]"
                      >
                        <span className="text-lightGolden font-medium underline">
                          {detail.heading}
                        </span>{" "}
                        {detail.description}
                      </p>
                    ))}
                  </div>
                  {/* <div className="timeline_image-wrapper">
                    <Image src={step.image} height={300} width={600} alt="" />
                  </div> */}
                </div>
              </div>
            ))}
            <div className="overlay-fade-top"></div>
            <div className="overlay-fade-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
