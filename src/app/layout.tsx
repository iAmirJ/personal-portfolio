import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aamir Javed | Full-Stack AI Engineer",
  description: "Portfolio of Aamir Javed, a Professional Full-Stack AI Engineer specializing in RAG, LLMs, and modern web development.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#0a0a0a] text-white min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
