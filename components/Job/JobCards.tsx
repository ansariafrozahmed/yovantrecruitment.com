import { Bookmark, MapIcon, MapPinIcon } from "lucide-react";
import React from "react";

const JobCards = () => {
  return (
    <div className="p-2 rounded-xl group bg-[#14140c] hover:bg-gradient-to-r transition-all ease-in-out duration-300 from-mid to-lightGolden">
      <div className="bg-black rounded-md p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lightGolden  text-lg tracking-wider">
            Sagar Tech
          </h2>
          <div className="border p-2 border-gray-500 rounded-full">
            <Bookmark size={18} strokeWidth={1} />
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#14140c]" />
        <h2 className="text-lg tracking-wider">Product Designer</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <MapPinIcon className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <MapPinIcon className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <MapPinIcon className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-1 py-1">
            <div className="h-4 w-4">
              <MapPinIcon className="text-lightGolden h-full w-full" />
            </div>
            <span className="text-sm tracking-wide">Jakarta, Indonesia</span>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <button className="w-full rounded-lg bg-[#14140c] p-2 text-sm tracking-wider">
            view details
          </button>
          <button className="w-full rounded-lg bg-gradient-to-r text-sm tracking-wider text-black from-darkGolden  to-lightGolden p-2">
            Apply
          </button>
        </div>
      </div>
      <div className="py-3 text-center text-sm text-gray-400 group-hover:text-black tracking-wider">
        POSTED 2 DAY AGO
      </div>
    </div>
  );
};

export default JobCards;
