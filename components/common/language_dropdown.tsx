"use client";
import dynamic from "next/dynamic";

const LanguageSelector = dynamic(
  () => import("./language_dropdown.client"),
  {
    ssr: false, // ✅ disables SSR to fix hydration issues
  }
);

export default LanguageSelector;