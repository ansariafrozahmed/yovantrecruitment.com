import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const FounderCard = () => {
  return (
    <div className="bg-[#090B0C] rounded-2xl">
      <Image
        src={
          "https://img.freepik.com/free-photo/portrait-young-confident-businessman-wearing-glasses_158595-5359.jpg?t=st=1737449136~exp=1737452736~hmac=e68cd9916838fe83bd3b8d6095ad49c5f87b2c648fd7cd129335f34b5410510e&w=360"
        }
        alt=""
        height={500}
        width={500}
        className="h-[300px] lg:h-[350px] rounded-t-2xl w-full object-cover"
      />
      <div className="px-5 flex w-full py-6 gap-2 text-white">
        <div className="w-1/2 ">
          <h2 className="text-[1.2rem] capitalize tracking-wider">
            Khan Shadab
          </h2>
          <h3 className="text-[0.85rem] tracking-wider">CEO, Founder</h3>
        </div>
        <div className="w-1/2 flex gap-2 items-center justify-end">
          <Facebook size={25} strokeWidth={1.5} />
          <Instagram size={25} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
