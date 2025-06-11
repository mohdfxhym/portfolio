"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import client-side components
const AppleCursor = dynamic(() => import("./AppleCursor"), {
  ssr: false
});

const ScrollIndicator = dynamic(() => import("./ScrollIndicator"), {
  ssr: false
});

const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false
});

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <AppleCursor />
      <ScrollIndicator />
      <Navbar />
      {children}
    </>
  );
}