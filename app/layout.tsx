import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Layouts/Footer/Footer";
import localFont from "next/font/local";
import SmoothScroll from "@/components/Wrappers/SmoothScroll";
import Header from "@/components/Layouts/Header/Header";
import NextTopLoader from "nextjs-toploader";
import AOS from "@/components/Wrappers/AOS";

const myFont = localFont({ src: "./fonts/pnm.woff2" });

export const metadata: Metadata = {
  title: "Yovant Recruitement Services",
  description: "",
  openGraph: {
    title: "Yovant Recruitement Services",
    description: "",
    url: `https://yovantrecruitment.com/`,
    type: "website",
    images: [
      {
        url: `/assets/logo/webp/golden.webp`,
        width: 1200,
        height: 630,
        alt: "Yovant Recruitement Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yovant Recruitement Services",
    description: "",
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
      <body className={` antialiased`}>
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
