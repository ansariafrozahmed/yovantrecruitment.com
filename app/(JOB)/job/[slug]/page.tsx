import DetailBox from "@/components/Job/DetailBox";
import JobDescTabs from "@/components/Job/JobDescTabs";
import NewBreadcrumb from "@/components/Layouts/Breadcrumb/NewBreadcrumb";
import { BaggageClaim, Clock, MapIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Jobpage = () => {
  return (
    <>
      <NewBreadcrumb heading="Job Detail" text="" />
      <div className="templateContainer pb-10 flex flex-col lg:flex-row items-start gap-10 lg:gap-8 w-full">
        <div className="w-full lg:w-[30%] lg:sticky lg:top-12">
          <DetailBox />
        </div>
        <div className="w-full lg:w-[70%]">
          <JobDescTabs />
        </div>
      </div>
    </>
  );
};

export default Jobpage;
