// iconsRegistry.ts
import Apple from "@/components/icons/social/apple";
import DoorDash from "@/components/icons/social/door-dash";
import Dribble from "@/components/icons/social/dribble";
import Facebook from "@/components/icons/social/facebook";
import Github from "@/components/icons/social/github";
import Gmail from "@/components/icons/social/gmail";
import GoogleReview from "@/components/icons/social/google-review";
import Instagram from "@/components/icons/social/instagram";
import Line from "@/components/icons/social/line";
import Linkedin from "@/components/icons/social/linkedin";
import Messenger from "@/components/icons/social/messenger";
import Netflix from "@/components/icons/social/netflix";
import Outlook from "@/components/icons/social/outlook";
import Pinterest from "@/components/icons/social/pinterest";
import Reddit from "@/components/icons/social/reddit";
import Signal from "@/components/icons/social/signal";
import SnapChat from "@/components/icons/social/snapchat";
import Telegram from "@/components/icons/social/telegram";
import TikTok from "@/components/icons/social/tiktok";
import TripAdvisor from "@/components/icons/social/trip-advisor";
import Tumblr from "@/components/icons/social/tumblr";
import Twitter from "@/components/icons/social/twitter";
import TwitterX from "@/components/icons/social/twitter-x";
import Viber from "@/components/icons/social/viber";
import Vk from "@/components/icons/social/vk";
import Web from "@/components/icons/social/web";
import Whatsapp from "@/components/icons/social/whatsapp";
import X from "@/components/icons/social/x";
import Xing from "@/components/icons/social/xing";
import Yelp from "@/components/icons/social/yelp";
import YouTube from "@/components/icons/social/youtube";

export const SOCIAL_ICON_COMPONENTS = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  "twitter-x": TwitterX,
  x: X,
  whatsapp: Whatsapp,
  tiktok: TikTok,
  snapchat: SnapChat,
  youtube: YouTube,
  telegram: Telegram,
  messenger: Messenger,
  yelp: Yelp,
  "google-reviews": GoogleReview,
  pinterest: Pinterest,
  linkedin: Linkedin,
  xing: Xing,
  dribbble: Dribble,
  "trip-advisor": TripAdvisor,
  line: Line,
  reddit: Reddit,
  viber: Viber,
  tumblr: Tumblr,
  github: Github,
  "door-dash": DoorDash,
  vk: Vk,
  signal: Signal,
  outlook: Outlook,
  apple: Apple,
  gmail: Gmail,
  netflix: Netflix,
  web: Web,
} as const;

export type SocialIconKey = keyof typeof SOCIAL_ICON_COMPONENTS;