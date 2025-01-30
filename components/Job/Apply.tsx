"use client";
import { send } from "@/utils/jobAppy";
import { Modal, notification } from "antd";
import { Loader2Icon, Mail, MapPin, Phone, User } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Apply = ({ jobTitle }: { jobTitle: string }) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestedData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      job_title: jobTitle,
    };
    setLoading(true);
    try {
      const mailSent = await send(requestedData);
      if (mailSent) {
        toast.success("Application Submitted!");
        setLoading(false);
        setOpen(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <p className="text-2xl gradientHeading font-semibold font-sans tracking-wide uppercase">
                  Applying for
                </p>
                <p className="text-gray-200 text-lg">{jobTitle}</p>
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
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm lg:text-base 
               rounded-md bg-gradient-to-r from-darkGolden to-lightGolden text-black 
               transition-opacity duration-300 ease-in-out 
               hover:brightness-110 
               disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading && (
                    <Loader2Icon size={20} className="animate-spin" />
                  )}
                  <span className={loading ? "animate-pulse" : ""}>
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
