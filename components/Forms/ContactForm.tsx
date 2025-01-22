"use client";
import { Mail, MessageCircle, Phone, User } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Update formData based on input name and value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update formData based on the input name
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // e.preventDefault();
    // setLoading(true);
    // const { name, phone, email } = formData;
    // if (name && phone && email) {
    //   try {
    //     const response = await contactFormSubmission(name, phone, email);
    //     if (response.status === 200) {
    //       // Show success notification
    //       setLoading(false);
    //       setFormData({
    //         name: "",
    //         email: "",
    //         phone: "",
    //       });
    //       notification.success({
    //         message: "Success!!",
    //         description: response.message,
    //       });
    //     } else {
    //       // Show error notification
    //       notification.error({
    //         message: "Failed!!",
    //         description:
    //           response.message || "Something went wrong, please try again.",
    //       });
    //     }
    //   } catch (error) {
    //     notification.error({
    //       message: "Error!!",
    //       description:
    //         "An error occurred while sending the subscription email.",
    //     });
    //   } finally {
    //     setLoading(false);
    //   }
    // }
    // return;
  };

  return (
    <div className="w-full lg:w-[100%]">
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex gap-3 items-center border-b py-2">
          <User size={20} color="#FBD973" strokeWidth={1} />
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            className="bg-black  w-full focus:outline-none"
            placeholder="Your Email"
          />
        </div>
        <div className="flex gap-3 items-center border-b py-2">
          <Phone size={20} color="#FBD973" strokeWidth={1} />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
            className="bg-black h-20 capitalize w-full focus:outline-none"
            required
            placeholder="Message"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-black text-templateOrange flex items-center gap-2 border border-templateOrange text-xs font-medium tracking-wider py-3 px-6 transition-all duration-300 ease-in-out" // Add transition classes
          >
            {/* Loader with transition */}
            {loading && (
              <span
                className="loader block transition-all duration-300 ease-in-out"
                style={{
                  width: loading ? "16px" : "0px",
                  opacity: loading ? 1 : 0,
                }}
              ></span>
            )}
            {/* Button text with transition */}
            <span
              className={`transition-opacity duration-300 ease-in-out ${
                loading ? "opacity-50" : "opacity-100"
              }`}
            >
              {loading ? "SUBMITTING..." : "SUBMIT"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
