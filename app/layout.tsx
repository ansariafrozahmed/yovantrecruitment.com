import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yovant Recruitement Services",
  description:
    "We are currently enhancing our platform to serve you better. Please bear with us as we work to bring you new features and improvements. Thank you for your patience!",
  openGraph: {
    title: "Yovant Recruitement Services",
    description:
      "We are currently enhancing our platform to serve you better. Please bear with us as we work to bring you new features and improvements. Thank you for your patience!",
    url: `https://yovantrecruitment.com/`,
    type: "website",
    images: [
      {
        url: `/assets/logo/golden.png`,
        width: 1200,
        height: 630,
        alt: "Yovant Recruitement Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yovant Recruitement Services",
    description:
      "We are currently enhancing our platform to serve you better. Please bear with us as we work to bring you new features and improvements. Thank you for your patience!",
    images: [`/assets/logo/golden.png`],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
