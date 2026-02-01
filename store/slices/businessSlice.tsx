import {
  BusinessInfo,
  BusinessSlice,
  BusinessButton,
  ContactInfo,
  Time,
  TimeSlot,
  OpeningTime,
  TimeFormat,
} from "@/types/business";
import { ColorPalette } from "@/types/menu";
import { SocialChannel } from "@/types/vCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

function createButtonId() {
  return `button-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

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

const initialState: BusinessSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  businessImage: null,
  businessInfo: {
    companyName: "",
    title: "",
    subTitle: "",
    buttons: [],
  },
  timeFormat: "AM/PM",
  weeklyOpeningHours: [
    {
      open: { hour: "08", minute: "00", amPm: "AM" },
      close: { hour: "12", minute: "00", amPm: "PM" },
    },
  ],
  useWeekdaysTemplate: true,
  openingHours: [],
  contactInfo: {
    fullName: "",
    phoneNumber: "",
    altPhoneNumber: "",
    altPhoneNumbers: [],
    website: "",
    email: "",
    altEmails: [],
  },
  summary: "",
  street: "",
  postalCode: "",
  city: "",
  state: "",
  country: "",
  addressUrl: "",
  socialChannels: [],
  facilities: [],
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
    setBusinessImage: (state, action: PayloadAction<string | null>) => {
      state.businessImage = action.payload;
    },
    setBusinessInfo: (state, action: PayloadAction<BusinessInfo>) => {
      state.businessInfo = action.payload;
    },
    setTimeFormat: (state, action: PayloadAction<TimeFormat>) => {
      state.timeFormat = action.payload;
    },
    setContactInfo: (state, action: PayloadAction<ContactInfo>) => {
      state.contactInfo = action.payload;
    },
    addBusinessButton: (state, action: PayloadAction<string | undefined>) => {
      const id = action.payload ?? createButtonId();
      state.businessInfo.buttons.push({
        id,
        text: "",
        url: "",
      });
    },
    removeBusinessButton: (state, action: PayloadAction<string>) => {
      state.businessInfo.buttons = state.businessInfo.buttons.filter(
        (b) => b.id !== action.payload,
      );
    },
    updateBusinessButton: (
      state,
      action: PayloadAction<{
        id: string;
        updates: Partial<Pick<BusinessButton, "text" | "url">>;
      }>,
    ) => {
      const button = state.businessInfo.buttons.find(
        (b) => b.id === action.payload.id,
      );
      if (button) {
        Object.assign(button, action.payload.updates);
      }
    },
    addAltPhoneNumber: (state) => {
      state.contactInfo.altPhoneNumbers.push("");
    },
    removeAltPhoneNumber: (state, action: PayloadAction<number>) => {
      state.contactInfo.altPhoneNumbers.splice(action.payload, 1);
    },
    updateAltPhoneNumber: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      state.contactInfo.altPhoneNumbers[action.payload.index] =
        action.payload.value;
    },
    addAltEmail: (state) => {
      state.contactInfo.altEmails.push("");
    },
    removeAltEmail: (state, action: PayloadAction<number>) => {
      state.contactInfo.altEmails.splice(action.payload, 1);
    },
    updateAltEmail: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      state.contactInfo.altEmails[action.payload.index] = action.payload.value;
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
    setWeeklyOpeningHours: (
      state,
      action: PayloadAction<[TimeSlot, TimeSlot]>,
    ) => {
      state.weeklyOpeningHours = action.payload;
    },
    setWeeklyOpenTime: (
      state,
      action: PayloadAction<{ slotIndex: 0 | 1; time: Time }>,
    ) => {
      const slot = state.weeklyOpeningHours[action.payload.slotIndex];
      if (slot) {
        slot.open = action.payload.time;
      } else if (action.payload.slotIndex === 1) {
        state.weeklyOpeningHours[1] = {
          open: action.payload.time,
          close: { hour: "06", minute: "00", amPm: "PM" },
        };
      }
    },
    setWeeklyCloseTime: (
      state,
      action: PayloadAction<{ slotIndex: 0 | 1; time: Time }>,
    ) => {
      const slot = state.weeklyOpeningHours[action.payload.slotIndex];
      if (slot) {
        slot.close = action.payload.time;
      } else if (action.payload.slotIndex === 1) {
        state.weeklyOpeningHours[1] = {
          open: { hour: "09", minute: "00", amPm: "AM" },
          close: action.payload.time,
        };
      }
    },
    addWeeklySecondSlot: (state) => {
      if (!state.weeklyOpeningHours[1]) {
        state.weeklyOpeningHours[1] = {
          open: { hour: "13", minute: "00", amPm: "PM" },
          close: { hour: "18", minute: "00", amPm: "PM" },
        };
      }
    },
    removeWeeklySecondSlot: (state) => {
      if (state.weeklyOpeningHours[1]) {
        state.weeklyOpeningHours = [
          state.weeklyOpeningHours[0],
        ] as typeof state.weeklyOpeningHours;
      }
    },
    setUseWeekdaysTemplate: (state, action: PayloadAction<boolean>) => {
      state.useWeekdaysTemplate = action.payload;
    },
    clearOpeningHours: (state) => {
      state.openingHours = [];
    },
    setOpeningHours: (state, action: PayloadAction<OpeningTime[]>) => {
      state.openingHours = action.payload;
    },
    addOpeningHours: (state, action: PayloadAction<OpeningTime>) => {
      const index = state.openingHours.findIndex(
        (h) => h.day === action.payload.day,
      );
      if (index >= 0) {
        state.openingHours[index] = action.payload;
      } else {
        state.openingHours.push(action.payload);
      }
    },
    removeOpeningHours: (state, action: PayloadAction<string>) => {
      state.openingHours = state.openingHours.filter(
        (h) => h.day !== action.payload,
      );
    },
    updateOpeningHours: (
      state,
      action: PayloadAction<{
        day: string;
        times: OpeningTime["times"];
      }>,
    ) => {
      const entry = state.openingHours.find((h) => h.day === action.payload.day);
      if (entry) {
        entry.times = action.payload.times;
      }
    },
    setFacilities: (state, action: PayloadAction<string[]>) => {
      state.facilities = action.payload;
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
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
  setBusinessImage,
  setBusinessInfo,
  setTimeFormat,
  setContactInfo,
  addBusinessButton,
  removeBusinessButton,
  updateBusinessButton,
  addAltPhoneNumber,
  removeAltPhoneNumber,
  updateAltPhoneNumber,
  addAltEmail,
  removeAltEmail,
  updateAltEmail,
  setSummary,
  setAddress,
  setAddressUrl,
  setSocialChannels,
  addSocialChannel,
  removeSocialChannel,
  updateSocialChannelUrl,
  setWeeklyOpeningHours,
  setWeeklyOpenTime,
  setWeeklyCloseTime,
  addWeeklySecondSlot,
  removeWeeklySecondSlot,
  setUseWeekdaysTemplate,
  clearOpeningHours,
  setOpeningHours,
  addOpeningHours,
  removeOpeningHours,
  updateOpeningHours,
  setFacilities,
  setWelcomeScreen,
  setQrCodeName,
  setIsPreviewWelcomeScreen,
} = menuSlice.actions;
export default menuSlice.reducer;
