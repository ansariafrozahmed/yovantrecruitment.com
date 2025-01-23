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

const CatCard: React.FC<Props> = ({ data }) => {
  return (
    <Link
      data-aos="fade-up"
      href={`/category/${data.slug}`}
      className="block relative group w-[300px] h-auto space-y-3"
    >
      <div className="relative h-auto w-full">
        <Image
          src={
            data.image ||
            "https://img.freepik.com/free-photo/pointing-sketch_1098-14323.jpg?t=st=1737356114~exp=1737359714~hmac=b91d5cc23e9754bc0a9f0f669e42b4d9f63344dad7810ab5e88e25846341bd00&w=740"
          }
          alt={`Image`}
          height={800}
          width={800}
          className="h-[400px] w-[300px] group-hover:-translate-y-2 transition-transform ease-in-out duration-300 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent top-0 left-0"></div>
      </div>
      <h3 className="text-white group-hover:text-lightGolden text-[0.95rem] group-hover:-translate-y-2 font-medium !tracking-widest transition-transform ease-in-out duration-300 uppercase">
        {data.name}
      </h3>
    </Link>
  );
};

export default CatCard;
