import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusStyles = (status: string) => {
  switch (status) {
    case "Active":
      return "text-[var(--Green)]";
    case "Paused":
      return "text-[var(--Grey)]";
    case "Paid":
      return "text-[var(--Green)]";
    case "Failed":
      return "text-[var(--error)]";
    case "Cancelled":
      return "text-[var(--Orange)]";
    case "Expired":
      return "text-[var(--error)]";
    default:
      return "";
  }
};

export const normalizeUrl = (url: string) => {
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url;
};
