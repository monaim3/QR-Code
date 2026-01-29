import {
  ColorPalette,
  AppSlice,
  AppInfo,
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
  qrCodeName: "",
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
     setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
    },
  },
});

export const {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setQrCodeName,
  setAppInfo,
} = appSlice.actions;
export default appSlice.reducer;