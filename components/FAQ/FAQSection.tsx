"use client";
import React, { useState } from "react";

type FAQsProps = {
  question: string;
  answer: string;
};

const FAQsection = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemValue: string) => {
    setOpenItem((prevValue) => (prevValue === itemValue ? null : itemValue));
  };

  const faqsData: FAQsProps[] = [
    {
      question: "What services does Yovant Recruitment Service provide?",
      answer:
        "We specialize in overseas recruitment, connecting employers with skilled professionals worldwide through sourcing, screening, and placement services.",
    },
    {
      question: "Which industries do you recruit for?",
      answer:
        "We cater to industries such as healthcare, IT, engineering, hospitality, construction, and manufacturing.",
    },
    {
      question: "Do you assist with visa and relocation processes?",
      answer:
        "Yes, we provide guidance for visa applications, work permits, and relocation arrangements to ensure a smooth transition.",
    },
    {
      question: "How do you ensure candidates are qualified?",
      answer:
        "We conduct a rigorous screening process, including skill assessments, interviews, and background checks, to ensure candidates meet the required qualifications.",
    },
    {
      question: "Can you recruit for senior and executive-level roles?",
      answer:
        "Absolutely. We have experience in sourcing top-tier candidates for senior management and executive positions.",
    },
    {
      question: "What regions or countries do you focus on for recruitment?",
      answer:
        "We source talent globally, with a focus on regions such as Asia, Europe, the Middle East, and North America.",
    },
    {
      question: "How long does the recruitment process typically take?",
      answer:
        "The timeline depends on the role and specific requirements but usually ranges from a few weeks to a couple of months.",
    },
    {
      question: "Do you provide post-placement support?",
      answer:
        "Yes, we offer onboarding assistance and follow-ups to ensure successful integration for both the employer and the candidate.",
    },
    {
      question: "What types of roles do you recruit for?",
      answer:
        "We recruit for a wide range of positions, including permanent, temporary, skilled, and unskilled roles, depending on client needs.",
    },
    {
      question: "What is your fee structure?",
      answer:
        "Our fee structure is flexible and customized based on the scope and volume of the recruitment project. Contact us for a detailed quote.",
    },
    {
      question: "How can employers get started with your services?",
      answer:
        "Employers can get started by contacting us through our website, email, or phone to discuss their recruitment needs.",
    },
    {
      question: "Do you work with candidates seeking overseas opportunities?",
      answer:
        "Yes, we help candidates find overseas job opportunities that align with their skills and career goals.",
    },
    {
      question: "Do you assist with compliance and legal requirements?",
      answer:
        "Yes, we ensure all placements comply with local labor laws and provide guidance on legal documentation and requirements.",
    },
    {
      question: "Can you handle high-volume recruitment projects?",
      answer:
        "Yes, we specialize in high-volume recruitment and have the infrastructure to manage large-scale projects effectively.",
    },
    {
      question:
        "What makes Yovant Recruitment Service different from other agencies?",
      answer:
        "Our focus on overseas recruitment, tailored solutions, and post-placement support ensures a seamless and efficient process for both employers and candidates.",
    },
  ];
  return (
    <div className="">
      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div key={index} className="text-white">
            {/* Question */}
            <button
              className={`w-full flex justify-between items-center px-4 py-6 text-left bg-[#14140c] tracking-wider text-white hover:bg-[#1f1f12] focus:outline-none ${
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
