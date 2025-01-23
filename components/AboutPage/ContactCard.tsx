import React from "react";

interface Props {
  item: {
    icon: any;
    label: string;
    value: string;
  };
}

const ContactCard: React.FC<Props> = ({ item }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#14140c] flex items-center gap-5 p-6 rounded-xl text-white"
    >
      <div>
        <div className="bg-gradient-to-r from-darkGolden to-lightGolden p-3 rounded-lg">
          <item.icon size={30} strokeWidth={1.5} className="text-black" />
        </div>
      </div>
      <div>
        <h3 className="text-lightGolden text-lg uppercase font-semibold tracking-wider">
          {item.label}
        </h3>
        <p className="text-sm tracking-wide">{item.value}</p>
      </div>
    </div>
  );
};

export default ContactCard;
