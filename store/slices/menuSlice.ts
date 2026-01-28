import {
  ColorPalette,
  ContactDetails,
  RestaurantInfo,
  SocialChannel,
  MenuSlice,
} from "@/types/menu";
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

const initialState: MenuSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  restaurantInfo: {
    name: "",
    description: "",
    image: null,
  },
  contactDetails: {
    phoneNumber: "",
    altPhoneNumber: "",
    altPhoneNumbers: [],
    website: "",
    email: "",
    altEmails: [],
  },
  companyName: "",
  companyTitle: "",
  summary: "",
  street: "",
  postalCode: "",
  city: "",
  state: "",
  country: "",
  addressUrl: "",
  socialChannels: [],
  welcomeScreen: "",
  qrCodeName: "",
  isPreviewWelcomeScreen: false,
};

const menuSlice = createSlice({
  name: "menu",
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
    setRestaurantInfo: (state, action: PayloadAction<RestaurantInfo>) => {
      state.restaurantInfo = action.payload;
    },
    setContactDetails: (state, action: PayloadAction<ContactDetails>) => {
      state.contactDetails = action.payload;
    },
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setCompanyTitle: (state, action: PayloadAction<string>) => {
      state.companyTitle = action.payload;
    },
    setSummary: (state, action: PayloadAction<string>) => {
      state.summary = action.payload;
    },
    setAddress: (
      state,
      action: PayloadAction<{
        street?: string;
        postalCode?: string;
        city?: string;
        state?: string;
        country?: string;
      }>,
    ) => {
      if (action.payload.street !== undefined) {
        state.street = action.payload.street;
      }
      if (action.payload.postalCode !== undefined) {
        state.postalCode = action.payload.postalCode;
      }
      if (action.payload.city !== undefined) {
        state.city = action.payload.city;
      }
      if (action.payload.state !== undefined) {
        state.state = action.payload.state;
      }
      if (action.payload.country !== undefined) {
        state.country = action.payload.country;
      }
    },
    setAddressUrl: (state, action: PayloadAction<string>) => {
      state.addressUrl = action.payload;
    },
    setSocialChannels: (state, action: PayloadAction<SocialChannel[]>) => {
      state.socialChannels = action.payload;
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
    },
    addAltPhoneNumber: (state) => {
      state.contactDetails.altPhoneNumbers.push("");
    },
    removeAltPhoneNumber: (state, action: PayloadAction<number>) => {
      state.contactDetails.altPhoneNumbers.splice(action.payload, 1);
    },
    updateAltPhoneNumber: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      state.contactDetails.altPhoneNumbers[action.payload.index] =
        action.payload.value;
    },
    addAltEmail: (state) => {
      state.contactDetails.altEmails.push("");
    },
    removeAltEmail: (state, action: PayloadAction<number>) => {
      state.contactDetails.altEmails.splice(action.payload, 1);
    },
    updateAltEmail: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      state.contactDetails.altEmails[action.payload.index] =
        action.payload.value;
    },
    addSocialChannel: (
      state,
      action: PayloadAction<{ id: string; name: string; url: string }>,
    ) => {
      const existingIndex = state.socialChannels.findIndex(
        (channel) => channel.id === action.payload.id,
      );
      if (existingIndex === -1) {
        state.socialChannels.push(action.payload);
      }
    },
    removeSocialChannel: (state, action: PayloadAction<string>) => {
      state.socialChannels = state.socialChannels.filter(
        (channel) => channel.id !== action.payload,
      );
    },
    updateSocialChannelUrl: (
      state,
      action: PayloadAction<{ id: string; url: string }>,
    ) => {
      const channel = state.socialChannels.find(
        (channel) => channel.id === action.payload.id,
      );
      if (channel) {
        channel.url = action.payload.url;
      }
    },
    setIsPreviewWelcomeScreen: (state, action: PayloadAction<boolean>) => {
      state.isPreviewWelcomeScreen = action.payload;
    },
  },
});

export const {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setRestaurantInfo,
  setContactDetails,
  setCompanyName,
  setCompanyTitle,
  setSummary,
  setAddress,
  setAddressUrl,
  setSocialChannels,
  setWelcomeScreen,
  setQrCodeName,
  addAltPhoneNumber,
  removeAltPhoneNumber,
  updateAltPhoneNumber,
  addAltEmail,
  removeAltEmail,
  updateAltEmail,
  addSocialChannel,
  removeSocialChannel,
  updateSocialChannelUrl,
  setIsPreviewWelcomeScreen,
} = menuSlice.actions;
export default menuSlice.reducer;
