import {
  ColorPalette,
  PdfSlice,
  DocumentInfo,
} from "@/types/pdf";
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

const initialState: PdfSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  pdfFile: "",
  documentInfo: {
    companyName: "",
    title: "",
    fileDescription: "",
    website: "",
  },
  welcomeScreen: "",
  qrCodeName: "",
  isPreviewWelcomeScreen: false,
};

const pdfSlice = createSlice({
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
    setPdfFile: (state, action: PayloadAction<string>) => {
        state.pdfFile = action.payload;
    },
    setDocInfo: (state, action: PayloadAction<DocumentInfo>) => {
      state.documentInfo = action.payload;
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
  setPdfFile,
  setQrCodeName,
  setDocInfo,
  setWelcomeScreen,
  setIsPreviewWelcomeScreen,
} = pdfSlice.actions;
export default pdfSlice.reducer;