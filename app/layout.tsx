import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
       <nav className="bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-[#2596BE] text-2xl font-bold">Yuvamytr</h1>
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
