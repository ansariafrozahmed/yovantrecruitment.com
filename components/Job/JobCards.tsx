import {
  Bookmark,
  Clock,
  Cpu,
  DollarSign,
  Hotel,
  MapIcon,
  MapPinIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import Apply from "./Apply";

interface Props {
  data: {
    title: string;
  };
}

const JobCards: React.FC<Props> = ({ data }) => {
  return (
    <div
      data-aos="fade"
      className="p-2 rounded-xl group bg-[#14140c] hover:bg-gradient-to-r transition-all ease-in-out duration-300 from-darkGolden via-mid to-lightGolden"
    >
      <div className="bg-black rounded-md p-5 space-y-4">
        <div className="">
          <div className="space-y-1">
            <Link href={"/job/slug"}>
              <h2 className="text-white  text-2xl tracking-wider">
                {data?.title}
              </h2>
            </Link>
            <Link href={"/job/slug"}>
              <h2 className="text-sm text-lightGolden tracking-wider">
                Product Designer
              </h2>
            </Link>
          </div>
          {/* <div className="border p-2 border-gray-500 rounded-full">
            <Bookmark size={18} strokeWidth={1} />
          </div> */}
        </div>
        <div className="h-[1px] w-full bg-[#14140c]" />
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <MapPinIcon className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <Clock className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Full Time</span>
          </div>
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <Cpu className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Technology</span>
          </div>
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <DollarSign className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">$400/monthly</span>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <button className="w-full rounded-lg bg-[#14140c] p-2 text-sm tracking-wider">
            <Link href={"/job/slug"}>View details</Link>
          </button>
          <Apply jobTitle={data?.title} />
        </div>
      </div>
      <div className="pt-4 pb-1 font-sans text-center text-sm text-gray-400 group-hover:text-black tracking-wider">
        POSTED 2 DAY AGO
      </div>
    </div>
  );
};

export default JobCards;
