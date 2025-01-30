"use server";

import { generateEmailTemplate } from "./JobMailTemplate";
import { sendmail } from "./mail";

interface SendFuncProps {
  name: string;
  email: string;
  phone: string;
  job_title: string;
}

export const send: React.FC<SendFuncProps> = async ({
  name,
  email,
  phone,
  job_title,
}) => {
  const emailBody = generateEmailTemplate({
    name,
    email,
    phone,
    job_title,
  });

  try {
    await sendmail({
      to: "ansariafroz720@gmail.com",
      name: "Yovant Recruitment Services",
      subject: "Job Application ( Yovant Recruitment Services )",
      body: emailBody,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
