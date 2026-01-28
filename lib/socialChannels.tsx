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

export interface SocialChannel {
  id: string;
  name: string;
  icon: React.ComponentType;
}

export const socialChannels: SocialChannel[] = [
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: Twitter,
  },
  {
    id: "twitter-x",
    name: "Twitter",
    icon: TwitterX,
  },
  {
    id: "x",
    name: "X",
    icon: X,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: Whatsapp,
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: TikTok,
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: SnapChat,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: YouTube,
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: Telegram,
  },
  {
    id: "messenger",
    name: "Messenger",
    icon: Messenger,
  },
  {
    id: "yelp",
    name: "Yelp",
    icon: Yelp,
  },
  {
    id: "google-reviews",
    name: "Google Reviews",
    icon: GoogleReview,
  },
  {
    id: "pinterest",
    name: "Pinterest",
    icon: Pinterest,
  },
  {
    id: "linkedin",
    name: "Linkedin",
    icon: Linkedin,
  },
  {
    id: "xing",
    name: "Xing",
    icon: Xing,
  },
  {
    id: "dribbble",
    name: "Dribbble",
    icon: Dribble,
  },
  {
    id: "trip-advisor",
    name: "TripAdvisor",
    icon: TripAdvisor,
  },
  {
    id: "line",
    name: "Line",
    icon: Line,
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: Reddit,
  },
  {
    id: "viber",
    name: "Viber",
    icon: Viber,
  },
  {
    id: "tumblr",
    name: "Tumblr",
    icon: Tumblr,
  },
  {
    id: "github",
    name: "GitHub",
    icon: Github,
  },
  {
    id: "door-dash",
    name: "DoorDash",
    icon: DoorDash,
  },
  {
    id: "vk",
    name: "VK",
    icon: Vk,
  },
  {
    id: "signal",
    name: "Signal",
    icon: Signal,
  },
  {
    id: "outlook",
    name: "Outlook",
    icon: Outlook,
  },
  {
    id: "apple",
    name: "Apple",
    icon: Apple,
  },
  {
    id: "gmail",
    name: "Gmail",
    icon: Gmail,
  },
  {
    id: "netflix",
    name: "Netflix",
    icon: Netflix,
  },
  {
    id: "web",
    name: "Web",
    icon: Web,
  },
];
