"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useT = () => {
  const { language, translations } = useSelector(
    (state: RootState) => state.i18n
  );

  return (key: string, params?: Record<string, string | number>) => {
    const dict = translations?.[language];
    let str = dict?.[key] ?? translations?.en?.[key] ?? key;

    if (params) {
      // Handle ICU plural: {varName, plural, one {text} other {text}}
      // (?:[^{}]|\{[^{}]*\})* allows one level of nested {var} inside arms
      str = str.replace(
        /\{(\w+),\s*plural,\s*one\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*other\s*\{((?:[^{}]|\{[^{}]*\})*)\}\}/g,
        (_match: string, varName: string, oneText: string, otherText: string) => {
          const val = params[varName];
          const num = typeof val === "number" ? val : parseInt(String(val), 10);
          return num === 1 ? oneText : otherText;
        }
      );

      // Replace remaining {key} placeholders
      Object.entries(params).forEach(([k, v]) => {
        str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
      });
    }

    return str;
  };
};
