import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Faheem | Creative Developer",
  description: "Personal portfolio inspired by Apple design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased bg-appleGray text-appleBlack`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}