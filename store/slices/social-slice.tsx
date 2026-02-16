import {
  ColorPalette,
  SocialSlice,
  socialInfo,
  SocialChannel,
} from "@/types/social";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

const socialChannels: SocialChannel[] = [
  { id: "facebook", name: "Facebook", icon: "facebook", isIcon: true, url: "", description: "" },
  { id: "instagram", name: "Instagram", icon: "instagram", isIcon: true, url: "", description: "" },
  { id: "twitter", name: "Twitter", icon: "twitter", isIcon: true, url: "", description: "" },
  { id: "twitter-x", name: "Twitter", icon: "twitter-x", isIcon: true, url: "", description: "" },
  { id: "x", name: "X", icon: "x", isIcon: true, url: "", description: "" },
  { id: "whatsapp", name: "WhatsApp", icon: "whatsapp", isIcon: true, url: "", description: "" },
  { id: "tiktok", name: "TikTok", icon: "tiktok", isIcon: true, url: "", description: "" },
  { id: "snapchat", name: "Snapchat", icon: "snapchat", isIcon: true, url: "", description: "" },
  { id: "youtube", name: "YouTube", icon: "youtube", isIcon: true, url: "", description: "" },
  { id: "telegram", name: "Telegram", icon: "telegram", isIcon: true, url: "", description: "" },
  { id: "messenger", name: "Messenger", icon: "messenger", isIcon: true, url: "", description: "" },
  { id: "yelp", name: "Yelp", icon: "yelp", isIcon: true, url: "", description: "" },
  { id: "google-reviews", name: "Google Reviews", icon: "google-reviews", isIcon: true, url: "", description: "" },
  { id: "pinterest", name: "Pinterest", icon: "pinterest", isIcon: true, url: "", description: "" },
  { id: "linkedin", name: "Linkedin", icon: "linkedin", isIcon: true, url: "", description: "" },
  { id: "xing", name: "Xing", icon: "xing", isIcon: true, url: "", description: "" },
  { id: "dribbble", name: "Dribbble", icon: "dribbble", isIcon: true, url: "", description: "" },
  { id: "trip-advisor", name: "TripAdvisor", icon: "trip-advisor", isIcon: true, url: "", description: "" },
  { id: "line", name: "Line", icon: "line", isIcon: true, url: "", description: "" },
  { id: "reddit", name: "Reddit", icon: "reddit", isIcon: true, url: "", description: "" },
  { id: "viber", name: "Viber", icon: "viber", isIcon: true, url: "", description: "" },
  { id: "tumblr", name: "Tumblr", icon: "tumblr", isIcon: true, url: "", description: "" },
  { id: "github", name: "GitHub", icon: "github", isIcon: true, url: "", description: "" },
  { id: "door-dash", name: "DoorDash", icon: "door-dash", isIcon: true, url: "", description: "" },
  { id: "vk", name: "VK", icon: "vk", isIcon: true, url: "", description: "" },
  { id: "signal", name: "Signal", icon: "signal", isIcon: true, url: "", description: "" },
  { id: "outlook", name: "Outlook", icon: "outlook", isIcon: true, url: "", description: "" },
  { id: "apple", name: "Apple", icon: "apple", isIcon: true, url: "", description: "" },
  { id: "gmail", name: "Gmail", icon: "gmail", isIcon: true, url: "", description: "" },
  { id: "netflix", name: "Netflix", icon: "netflix", isIcon: true, url: "", description: "" },
  { id: "web", name: "Web", icon: "web", isIcon: true, url: "", description: "" },
];

const initialState: SocialSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  activeColorIndex: 0,
  carousels: [],
  socialInfo: {
   headLine: "",
   description: "",
  },
  availableChannels: socialChannels,
  socialChannels: [],
  welcomeScreen: "",
  isDefault: true,
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
      state.isDefault = false;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
      state.isDefault = false;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
      state.isDefault = false;
    },
    setSocialInfo: (state, action: PayloadAction<socialInfo>) => {
      state.socialInfo = action.payload;
      state.isDefault = false;
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
      state.isDefault = false;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
      state.isDefault = false;
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
         state.isDefault = false;
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
      state.isDefault = false;
    },
    addCustomSocialChannel: (state, action: PayloadAction<SocialChannel> ) => {
    const exists = state.socialChannels.some(c => c.id === action.payload.id);
    if (!exists) {
      state.socialChannels.push(action.payload);
     }
     state.isDefault = false;
    },
    setIsPreviewWelcomeScreen: (state, action: PayloadAction<boolean>) => {
      state.isPreviewWelcomeScreen = action.payload;
    },
    addCarouselImage: (state, action: PayloadAction<string>) => {
      state.carousels.push(action.payload);
      state.isDefault = false;
    },
    removeCarouselImage: (state, action: PayloadAction<string>) => {
      state.carousels = state.carousels.filter(img => img !== action.payload);
    },
    editCarouselImage: (
      state,
      action: PayloadAction<{ index: number; newImage: string }>
    ) => {
      const { index, newImage } = action.payload;

      if (index >= 0 && index < state.carousels.length) {
        state.carousels[index] = newImage;
      }
    },
    setActiveColorIndex: (state, action: PayloadAction<number>) => {
      state.activeColorIndex = action.payload;
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
  editCarouselImage,
  setActiveColorIndex,
} = pdfSlice.actions;
export default pdfSlice.reducer;