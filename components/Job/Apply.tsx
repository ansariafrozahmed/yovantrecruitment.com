"use client";
import { Modal } from "antd";
import { Mail, MapPin, Phone, User } from "lucide-react";
import React, { useState } from "react";

const Apply = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMail = async (e: React.FormEvent) => {};

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className=" w-full bg-gradient-to-r from-darkGolden to-lightGolden text-black py-2 text-sm lg:text-base rounded-md"
      >
        Apply now
      </button>
      <Modal
        open={open}
        width={450}
        footer={null}
        onCancel={() => setOpen(false)}
        className=""
      >
        <div className="space-y-5 py-5 px-2">
          <div className="w-full lg:w-[100%]">
            <form className="space-y-6" onSubmit={handleMail}>
              <div className="space-y-1.5">
                <p className="text-2xl gradientHeading font-semibold font-sans tracking-wide uppercase">
                  Applying for
                </p>
                <p className="text-gray-400 text-base">Product Designer</p>
                <p className="text-gray-400 font-semibold text-sm flex items-center gap-1 ">
                  <MapPin size={16} strokeWidth={1.5} color="#FBD973" /> New
                  York
                </p>
              </div>
              <div className="flex gap-3 items-center border-b py-2">
                <User size={20} color="#FBD973" strokeWidth={2} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className="bg-transparent capitalize w-full focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex gap-3 items-center border-b py-2">
                <Mail size={20} color="#FBD973" strokeWidth={2} />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent  w-full focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex gap-3 items-center border-b py-2">
                <Phone size={20} color="#FBD973" strokeWidth={2} />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent capitalize w-full focus:outline-none"
                  required
                  placeholder="Your Contact"
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-darkGolden to-lightGolden text-black py-2 text-sm lg:text-base rounded-md" // Add transition classes
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
        </div>
      </Modal>
    </>
  );
};

export default Apply;
