import React from "react";
import { LanguageSelector } from "@/components/LanguageSelector";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LanguageSelector />
      {children}
    </>
  );
}
