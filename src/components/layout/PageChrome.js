"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header/components";
import Footer from "@/components/footer/components";
import FloatingActions from "@/components/fab";

const PageChrome = ({ children }) => {
  const pathname = usePathname();
  const isReels = typeof pathname === "string" && pathname.startsWith("/reels");

  React.useEffect(() => {
    if (typeof document === "undefined") return;
    if (isReels) {
      document.body.setAttribute("data-page", "reels");
    } else {
      document.body.removeAttribute("data-page");
    }
  }, [isReels]);

  if (isReels) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
};

export default PageChrome;


