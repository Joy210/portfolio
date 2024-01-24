import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const font = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joy | Product Designer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="Product Experience Design Portfolio of Sohanur Rahman (Joy)"
        />
        <meta
          property="og:description"
          content="I am Sohanur Rahman (Joy), Product Designer. I enjoy creating user-centric, delightful, and human experiences. I strive to push the world forward by creating a bridge between people and technology."
        />
        <meta property="og:url" content="https://uxjoy.info" />
        <meta
          property="og:site_name"
          content="Product Experience Design Portfolio of Sohanur Rahman (Joy)"
        />
        <meta
          name="keywords"
          content="Sohanur Rahman (Joy), joy210, _joy, sohanoor, Product Designer, UX Designer, User Centered Product Designer, User Experience Designer, Human Experience Designer, Problem Solver, Researcher, AR & VR Enthusiast, Dhaka, Bangladesh"
        />
      </head>
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
