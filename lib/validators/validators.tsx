import { z } from "zod";

export const urlValidationSchema = z
  .string()
  .min(1, { message: "This field is required." })
  .refine(
    (url) => {
      if (!url.trim()) return false;

      let cleanUrl = url.trim();
      cleanUrl = cleanUrl.replace(/^(https?:\/\/)?(www\.)?/i, "");

      cleanUrl = cleanUrl.replace(/\/$/, "");

      const urlPattern = /^[^/]+\.[a-zA-Z]{2,}(\/.*)?$/;

      return urlPattern.test(cleanUrl);
    },
    {
      message: "You have entered an invalid link. Please try again.",
    },
  );

export const optionalUrlValidationSchema = z
  .string()
  .optional()
  .refine(
    (url) => {
      if (!url || !url.trim()) return true;
      let cleanUrl = url.trim();
      cleanUrl = cleanUrl.replace(/^(https?:\/\/)?(www\.)?/i, "");

      const urlPattern = /^[^.]+\.[a-zA-Z]{2,}$/;
      return urlPattern.test(cleanUrl);
    },
    {
      message:
        "Invalid URL format. Example: my.bd, www.example.com, or https://example.com",
    },
  );
