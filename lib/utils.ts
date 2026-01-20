import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
<<<<<<< HEAD
}

const MAX_FONT_SIZE = 9;
const MIN_FONT_SIZE = 2.44275;
const MAX_TEXT_LENGTH = 30;

export function getFontSize(label: string) {
  const length = label.length;

  if (length >= MAX_TEXT_LENGTH) return MIN_FONT_SIZE;

  const scale = length / MAX_TEXT_LENGTH;

  return MAX_FONT_SIZE - scale * (MAX_FONT_SIZE - MIN_FONT_SIZE);
=======
>>>>>>> origin/qr-dashboard
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
