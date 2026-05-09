"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useT = () => {
  const { language, translations } = useSelector(
    (state: RootState) => state.i18n
  );

  return (key: string, params?: Record<string, string>) => {
    const dict = translations?.[language];
    let str = dict?.[key] ?? translations?.en?.[key] ?? key;

    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, "g"), v);
      });
    }

    return str;
  };
};