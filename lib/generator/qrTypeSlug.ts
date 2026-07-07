/** Maps a QR `content.type` (as returned by the API) to the generator route slug. */
export const CONTENT_TYPE_TO_SLUG: Record<string, string> = {
  url: "website-url",
  plainText: "simple-text",
  vCard: "vcard",
  pdf: "pdf",
  images: "images",
  wifi: "wifi",
  socialMedia: "social-media",
  facebook: "facebook",
  video: "video",
  app: "app",
  businessPage: "business-page",
  menu: "menu",
};

/** Returns the generator route slug for a given content type, or null if unknown. */
export function slugFromContentType(
  type: string | undefined | null,
): string | null {
  if (!type) return null;
  return CONTENT_TYPE_TO_SLUG[type] ?? null;
}
