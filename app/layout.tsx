import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import Navbar from "@/components/ui/Navbar";
import GridBackground from "@/components/ui/GridBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marnin Audu | Frontend Developer",
  description: "Portfolio of Marnin Audu - Frontend Developer & Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex text-white`}
      >
        <GridBackground />
        <Sidebar />
        <MobileNav />
        <Navbar />
        <main className="flex-1 w-full relative z-10 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
