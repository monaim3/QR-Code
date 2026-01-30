import {
  ColorPalette,
  AppSlice,
  AppInfo,
  AppLinks,
} from "@/types/app";
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

const storeDefaultLink = [
  {
    id: 1,
    storeName: "appStore",
    title: "App Store",
    storeUrl: '',
  },
  {
    id: 2,
    storeName: "goolgePlay",
    title: "Goolge Play",
    storeUrl: '',
  },
  {
    id: 3,
    storeName: "amazon",
    title: "Amazon",
    storeUrl: '',
  },
  {
    id: 4,
    storeName: "xiaomi",
    title: "Xioami",
    storeUrl: '',
  },
];

const initialState: AppSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  appInfo: {
    image: '',
    appName: '',
    developer: '',
    description: '',
    buttons: [],
  },
  appLinks: storeDefaultLink,
  appStoreLinks: [],
  welcomeScreen: "",
  qrCodeName: "",
  isPreviewWelcomeScreen: false,
};

const appSlice = createSlice({
  name: "appSlice",
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
    setAppInfo: (state, action: PayloadAction<AppInfo>) => {
      state.appInfo = action.payload;
    },
    setAppLinks: (state, action: PayloadAction<AppLinks[]>) => {
     state.appLinks = action.payload;
    },
    setAppStoreLinks: (state, action: PayloadAction<AppLinks[]>) => {
     state.appStoreLinks = action.payload;
    },
    moveLinkToAppStore: (state, action: PayloadAction<number>) => {
      const index = state.appLinks.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const [item] = state.appLinks.splice(index, 1);
        state.appStoreLinks.push(item);
      }
    },
    moveLinkToAppLinks: (state, action: PayloadAction<number>) => {
      const index = state.appStoreLinks.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const [item] = state.appStoreLinks.splice(index, 1);
        state.appLinks.push(item);
      }
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
  setQrCodeName,
  setAppInfo,
  setAppLinks,
  setAppStoreLinks,
  moveLinkToAppStore,
  moveLinkToAppLinks,
  setWelcomeScreen,
  setIsPreviewWelcomeScreen,
} = appSlice.actions;
export default appSlice.reducer;