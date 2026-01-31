import {
  ColorPalette,
  SocialSlice,
  socialInfo,
  SocialChannel,
} from "@/types/social";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

const palette = [
  {
    primary: "#6594FF",
    secondary: "#FFFFFF",
  },
  {
    primary: "#ECEDF1",
    secondary: "#232321",
  },
  {
    primary: "#ECECF0",
    secondary: "#6594FF",
  },
  {
    primary: "#DAEBF6",
    secondary: "#6594FF",
  },
  {
    primary: "#B69EDE",
    secondary: "#FFFFFF",
  },
  {
    primary: "#6ECD9D",
    secondary: "#242420",
  },
  {
    primary: "#FACB67",
    secondary: "#FFFFFF",
  },
];

const socialChannels : SocialChannel[] = [
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: Twitter,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "twitter-x",
    name: "Twitter",
    icon: TwitterX,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "x",
    name: "X",
    icon: X,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: Whatsapp,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: TikTok,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: SnapChat,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: YouTube,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: Telegram,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "messenger",
    name: "Messenger",
    icon: Messenger,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "yelp",
    name: "Yelp",
    icon: Yelp,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "google-reviews",
    name: "Google Reviews",
    icon: GoogleReview,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    icon: Pinterest,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "linkedin",
    name: "Linkedin",
    icon: Linkedin,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "xing",
    name: "Xing",
    icon: Xing,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "dribbble",
    name: "Dribbble",
    icon: Dribble,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "trip-advisor",
    name: "TripAdvisor",
    icon: TripAdvisor,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "line",
    name: "Line",
    icon: Line,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: Reddit,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "viber",
    name: "Viber",
    icon: Viber,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "tumblr",
    name: "Tumblr",
    icon: Tumblr,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "github",
    name: "GitHub",
    icon: Github,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "door-dash",
    name: "DoorDash",
    icon: DoorDash,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "vk",
    name: "VK",
    icon: Vk,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "signal",
    name: "Signal",
    icon: Signal,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "outlook",
    name: "Outlook",
    icon: Outlook,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "apple",
    name: "Apple",
    icon: Apple,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "gmail",
    name: "Gmail",
    icon: Gmail,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "netflix",
    name: "Netflix",
    icon: Netflix,
    isIcon: true,
    url: "",
    description: "",
  },
  {
    id: "web",
    name: "Web",
    icon: Web,
    isIcon: true,
    url: "",
    description: "",
  },
];

const initialState: SocialSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  carousel: [],
  socialInfo: {
   headLine: "",
   description: "",
  },
  availableChannels: socialChannels,
  socialChannels: [],
  welcomeScreen: "",
  qrCodeName: "",
  isPreviewWelcomeScreen: false,
};

const pdfSlice = createSlice({
  name: "socialSlice",
  initialState: initialState,
  reducers: {
    setColorPalette: (
      state,
      action: PayloadAction<{ index: number; color: ColorPalette }>,
    ) => {
      state.colorPalette[action.payload.index] = action.payload.color;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },
    setSocialInfo: (state, action: PayloadAction<socialInfo>) => {
      state.socialInfo = action.payload;
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
    },
    addToSocialChannels: (state, action: PayloadAction<string>) => {
    const channelId = action.payload;
    const indexInSocial = state.socialChannels.findIndex(c => c.id === channelId);

    if (indexInSocial !== -1) {
        // If it exists, remove it (toggle off)
        state.socialChannels.splice(indexInSocial, 1);
    } else {
        // If it doesn't exist, find in availableChannels and add
        const channel = state.availableChannels.find(c => c.id === channelId);
        if (channel) {
        state.socialChannels.push({ ...channel });
        }
    }
    },
    removeFromSocialChannels: (state, action: PayloadAction<string>) => {
      const index = state.socialChannels.findIndex(c => c.id === action.payload);
      if (index !== -1) {
        state.socialChannels.splice(index, 1);
      }
    },
    updateSocialChannel: (state,action: PayloadAction<{ id: string; changes: Partial<SocialChannel> }>) => {
    const { id, changes } = action.payload;

    const index = state.socialChannels.findIndex(c => c.id === id);
    if (index !== -1) {
            state.socialChannels[index] = {
            ...state.socialChannels[index],
            ...changes,
        };
      }
    },
    addCustomSocialChannel: (state, action: PayloadAction<SocialChannel> ) => {
    const exists = state.socialChannels.some(c => c.id === action.payload.id);
    if (!exists) {
      state.socialChannels.push(action.payload);
     }
    },
    setIsPreviewWelcomeScreen: (state, action: PayloadAction<boolean>) => {
      state.isPreviewWelcomeScreen = action.payload;
    },
    addCarouselImage: (state, action: PayloadAction<string>) => {
      state.carousel.push(action.payload);
    },
    removeCarouselImage: (state, action: PayloadAction<string>) => {
      state.carousel = state.carousel.filter(img => img !== action.payload);
    },
  },
});

export const {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setQrCodeName,
  setSocialInfo,
  setWelcomeScreen,
  addToSocialChannels,
  removeFromSocialChannels,
  updateSocialChannel,
  addCustomSocialChannel,
  setIsPreviewWelcomeScreen,
  addCarouselImage,
  removeCarouselImage,
} = pdfSlice.actions;
export default pdfSlice.reducer;