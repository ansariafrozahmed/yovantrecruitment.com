"use client";
import React, { useState } from "react";

type FAQsProps = {
  data: {
    question: string;
    answer: string;
  }[];
};

const FAQsection: React.FC<FAQsProps> = ({ data }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemValue: string) => {
    setOpenItem((prevValue) => (prevValue === itemValue ? null : itemValue));
  };

  return (
    <div className="">
      <div className="space-y-4">
        {data.map((faq, index) => (
          <div key={index} className="text-white">
            {/* Question */}
            <button
              className={`w-full flex justify-between items-center rounded-md px-4 py-6 text-left bg-[#14140c] tracking-wider text-white hover:bg-[#1f1f12] focus:outline-none ${
                openItem === faq.question ? "bg-[#1f1f12]" : "bg-[#14140c]"
              }`}
              onClick={() => handleToggle(faq.question)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 transform transition-transform duration-500 ${
                  openItem === faq.question ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openItem === faq.question ? "max-h-40" : "max-h-0"
              }`}
              style={{
                maxHeight: openItem === faq.question ? "1000px" : "0px",
              }}
            >
              <div className="p-4 text-gray-400 tracking-wide">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsection;
