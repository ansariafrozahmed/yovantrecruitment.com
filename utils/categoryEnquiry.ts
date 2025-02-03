"use server";

import { generateCatEmailTemplate } from "./CatMailTemplate";
import { sendmail } from "./mail";

interface SendFuncProps {
  catName?: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendCategoryEnquiry: React.FC<SendFuncProps> = async ({
  catName,
  name,
  email,
  phone,
  message,
}) => {
  const emailBody = generateCatEmailTemplate({
    catName,
    name,
    email,
    phone,
    message,
  });

  try {
    await sendmail({
      to: "ansariafroz720@gmail.com",
      name: "Yovant Recruitment Services",
      subject: "Category Enquiry ( Yovant Recruitment Services )",
      body: emailBody,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
