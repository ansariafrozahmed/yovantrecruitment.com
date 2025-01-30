import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Layouts/Footer/Footer";
import localFont from "next/font/local";
import SmoothScroll from "@/components/Wrappers/SmoothScroll";
import Header from "@/components/Layouts/Header/Header";
import NextTopLoader from "nextjs-toploader";
import AOS from "@/components/Wrappers/AOS";
import { Toaster } from "react-hot-toast";

const myFont = localFont({ src: "./fonts/pnm.woff2" });

export const metadata: Metadata = {
  title: "Yovant Recruitment Services",
  description:
    "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
  openGraph: {
    title: "Yovant Recruitment Services",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    url: `https://yovantrecruitment.com/`,
    type: "website",
    images: [
      {
        url: `${process.env.FRONTEND}/assets/logo/webp/golden.webp`,
        width: 1200,
        height: 630,
        alt: "Yovant Recruitment Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yovant Recruitment Services",
    description:
      "Welcome to Yovant Recruitment Services, a dynamic recruitment agency founded by Alex Farrow and Jayson Thankappan.",
    images: [`${process.env.FRONTEND}/assets/logo/golden.png`],
  },
  alternates: {
    canonical: `https://yovantrecruitment.com/`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Toaster position="top-center" reverseOrder={false} />
        <AOS />
        <NextTopLoader showSpinner={false} color="#FBD973" />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
