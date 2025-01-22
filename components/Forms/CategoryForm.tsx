import { Mail, MessageCircle, Phone, User } from "lucide-react";
import React from "react";

const CategoryForm = () => {
  return (
    <div className="w-full bg-black px-10 py-8 space-y-6 rounded-lg max-w-[480px] lg:w-[100%]">
      <div className="space-y-1">
        <h2 className="text-3xl lg:text-4xl gradientHeading font-bold tracking-wide">
          FILL THE FORM
        </h2>
        <p className="tracking-wider leading-relaxed text-[0.9rem] lg:text-[0.85rem] font-light">
          Our customer service team will respond within 24-72 hours.
        </p>
      </div>
      <form className="space-y-9">
        <div className="flex gap-3 items-center border-b py-2">
          <User size={20} color="#FBD973" strokeWidth={1} />
          <input
            type="text"
            name="name"
            // value={formData.name}
            required
            // onChange={handleChange}
            className="bg-black capitalize w-full focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        <div className="flex gap-3 items-center border-b py-2">
          <Mail size={20} color="#FBD973" strokeWidth={1} />
          <input
            type="email"
            name="email"
            required
            // value={formData.email}
            // onChange={handleChange}
            className="bg-black  w-full focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <div className="flex gap-3 items-center border-b py-2">
          <Phone size={20} color="#FBD973" strokeWidth={1} />
          <input
            type="text"
            name="phone"
            // value={formData.phone}
            // onChange={handleChange}
            className="bg-black capitalize w-full focus:outline-none"
            required
            placeholder="Your Contact"
          />
        </div>
        <div className="flex gap-3 items-start border-b py-2">
          <MessageCircle size={20} color="#FBD973" strokeWidth={1} />
          <textarea
            // name="phone"
            // value={formData.phone}
            // onChange={handleChange}
            className="bg-black h-14 capitalize w-full focus:outline-none"
            required
            placeholder="Message"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-darkGolden to-lightGolden w-full text-center text-black rounded flex items-center justify-center gap-2 text-sm font-medium tracking-wider py-3.5 px-6 hover:opacity-70 transition-all duration-300 ease-in-out" // Add transition classes
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryForm;
