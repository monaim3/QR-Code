import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MAX_FONT_SIZE = 9;
const MIN_FONT_SIZE = 2.44275;
const MAX_TEXT_LENGTH = 30;

export function getFontSize(label: string) {
  const length = label.length;

  if (length >= MAX_TEXT_LENGTH) return MIN_FONT_SIZE;

  const scale = length / MAX_TEXT_LENGTH;

  return MAX_FONT_SIZE - scale * (MAX_FONT_SIZE - MIN_FONT_SIZE);
}
