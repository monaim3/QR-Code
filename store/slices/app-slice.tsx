import {
  ColorPalette,
  AppSlice,
  AppInfo,
  AppLinks,
} from "@/types/app";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

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
    id: 0,
    storeName: "appStore",
    title: "App Store",
    storeUrl: '',
  },
  {
    id: 1,
    storeName: "goolgePlay",
    title: "Goolge Play",
    storeUrl: '',
  },
  {
    id: 2,
    storeName: "amazon",
    title: "Amazon",
    storeUrl: '',
  },
  {
    id: 3,
    storeName: "xiaomi",
    title: "Xioami",
    storeUrl: '',
  },
];

const initialState: AppSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  activeColorIndex: 0,
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
  appDefaultState: true,
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
      state.appDefaultState = false;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
      state.appDefaultState = false;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
      state.appDefaultState = false;
    },
    setAppInfo: (state, action: PayloadAction<AppInfo>) => {
      state.appInfo = action.payload;
      state.appDefaultState = false;
    },
    setAppLinks: (state, action: PayloadAction<AppLinks[]>) => {
     state.appLinks = action.payload;
     state.appDefaultState = false;
    },
    setStoreLinks: (state, action: PayloadAction<{link: string,index:number}>) => {
     state.appStoreLinks[action.payload.index].storeUrl = action.payload.link;
     state.appDefaultState = false;
    },
    moveLinkToAppStore: (state, action: PayloadAction<number>) => {
      const index = state.appLinks.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const [item] = state.appLinks.splice(index, 1);
        state.appStoreLinks.push(item);
        state.appDefaultState = false;
      }
    },      
    moveLinkToAppLinks: (state, action: PayloadAction<number>) => {
     const index = state.appStoreLinks.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const [item] = state.appStoreLinks.splice(index, 1);

        // insert at original position using the id
        const insertIndex = item.id; 
        state.appLinks.splice(insertIndex, 0, item);
        state.appDefaultState = false;
      }
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
      state.appDefaultState = false;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
      state.appDefaultState = false;
    },
    setIsPreviewWelcomeScreen: (state, action: PayloadAction<boolean>) => {
      state.isPreviewWelcomeScreen = action.payload;
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
  setAppInfo,
  setAppLinks,
  setStoreLinks,
  moveLinkToAppStore,
  moveLinkToAppLinks,
  setWelcomeScreen,
  setIsPreviewWelcomeScreen,
  setActiveColorIndex,
} = appSlice.actions;
export default appSlice.reducer;