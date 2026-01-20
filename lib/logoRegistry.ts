import Twitter from "@/components/icons/twitter";
import X from "@/components/icons/x";
import Youtube from "@/components/icons/youtube";
import Instra from "@/components/icons/Instra";
import TikTok from "@/components/icons/tiktok";
import LinkedIn from "@/components/icons/linkedin";
import Pinterest from "@/components/icons/pinter";
import Microsoft from "@/components/icons/outlook";
import Apple from "@/components/icons/apple";
import Gmail from "@/components/icons/gmail";
import WhatsApp from "@/components/icons/whatsapp";
import Facebook from "@/components/icons/facebook-icon";
import Netlifix from "@/components/icons/netlifix";

const logoRegistry = new Map<string, React.ComponentType>();

export function registerLogo(id: string, Icon: React.ComponentType) {
  logoRegistry.set(id, Icon);
}

export function getLogoComponent(
  id: string | null,
): React.ComponentType | null {
  if (!id) return null;
  return logoRegistry.get(id) || null;
}

// Initialize all logos
export function initializeLogos() {
  registerLogo("twitter", Twitter);
  registerLogo("x", X);
  registerLogo("youtube", Youtube);
  registerLogo("instagram", Instra);
  registerLogo("tiktok", TikTok);
  registerLogo("linkedin", LinkedIn);
  registerLogo("pinterest", Pinterest);
  registerLogo("microsoft", Microsoft);
  registerLogo("apple", Apple);
  registerLogo("gmail", Gmail);
  registerLogo("whatsapp", WhatsApp);
  registerLogo("facebook", Facebook);
  registerLogo("netflix", Netlifix);
}

if (typeof window !== "undefined") {
  initializeLogos();
}
