export function getSocialIconPath(selectedLogo?: string | null): string | null {
  if (!selectedLogo) return null;

  let normalized: string;
  switch (selectedLogo) {
    case "twitter":
      normalized = "Twitter";
      break;
    case "x":
      normalized = "X";
      break;
    case "youtube":
      normalized = "Youtube";
      break;
    case "instagram":
      normalized = "Instagram";
      break;
    case "tiktok":
      normalized = "TikTok";
      break;
    case "linkedin":
      normalized = "Linkedin";
      break;
    case "pinterest":
      normalized = "Pinterest";
      break;
    case "microsoft":
      normalized = "Outlook";
      break;
    case "apple":
      normalized = "Apple";
      break;
    case "gmail":
      normalized = "Gmail";
      break;
    case "whatsapp":
      normalized = "Whatsapp";
      break;
    case "facebook":
      normalized = "Facebook";
      break;
    case "netflix":
      normalized = "Netflix";
      break;
    default:
      normalized = selectedLogo;
  }

  return `/icons/socials/${normalized}.svg`;
}
