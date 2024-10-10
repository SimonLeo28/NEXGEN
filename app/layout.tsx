"use-client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yuvamytr",
  description: "Created by Yuvamytr interns",
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
       <nav className="bg-white p-4">
      <div className="p-0 max-w-7xl mx-auto flex items-center justify-between">
      <Image 
          src="https://bootcamp-lms-omega.vercel.app/logo.svg"
          alt="card thumbnail"
          width={100}
          height={100}
           />
        <div className="space-x-4">
            <a className="text-[#2596BE] hover:bg-[#2596BE] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/">Home</a>
            <a className="text-[#2596BE] hover:bg-[#2596BE] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/courses">Courses</a>
            <a className="text-[#2596BE] hover:bg-[#2596BE] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/login">Login</a>
            <a className="text-[#2596BE] hover:bg-[#2596BE] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/user">Contact</a>
        </div>
      </div>
    </nav>
        {children}
      </body>
    </html>
  );
}
