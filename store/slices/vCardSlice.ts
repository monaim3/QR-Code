import {
  ColorPalette,
  ContactDetails,
  PersonalInfo,
  SocialChannel,
  VCardSlice,
} from "@/types/vCard";
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

const initialState: VCardSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  personalInfo: {
    fullName: "",
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
};

const vCardSlice = createSlice({
  name: "vCard",
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
    setPersonalInfo: (state, action: PayloadAction<PersonalInfo>) => {
      state.personalInfo = action.payload;
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
  },
});

export const {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setPersonalInfo,
  setContactDetails,
  setCompanyName,
  setCompanyTitle,
  setSummary,
  setAddress,
  setAddressUrl,
  setSocialChannels,
  setWelcomeScreen,
  setQrCodeName,
} = vCardSlice.actions;
export default vCardSlice.reducer;
