import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: {
    image?: string;
    name?: string;
    slug?: string;
  };
}

const MobileCategoryCard: React.FC<Props> = ({ data }) => {
  return (
    <Link href={`/category/${data.slug}`}>
      <div
        data-aos="fade-up"
        className="aspect-[4/5.7] group rounded overflow-hidden relative"
      >
        <Image
          src={
            data.image ||
            "https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?t=st=1737356114~exp=1737359714~hmac=b91d5cc23e9754bc0a9f0f669e42b4d9f63344dad7810ab5e88e25846341bd00&w=740"
          }
          alt={`Image`}
          height={1000}
          width={1000}
          className="h-full w-full group-hover:scale-105 transition-transform ease-in-out duration-300 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-2 flex items-end justify-start to-transparent">
          <h2 className="text-white text-sm tracking-wide">{data.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MobileCategoryCard;
