import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Creative Developer",
  description: "Personal portfolio inspired by Apple design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased bg-appleGray text-appleBlack`}>
        <ScrollIndicator />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
