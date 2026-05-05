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
  activeColorIndex: 0,
  pdfFile: "",
  documentInfo: {
    companyName: "",
    title: "",
    fileDescription: "",
    website: "",
  },
  welcomeScreen: "",
  qrCodeName: "",
  defaultState: true,
  isPreviewWelcomeScreen: false,
  showPdfOnly: false,
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
      state.defaultState = false;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
       state.defaultState = false;
    },
    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
       state.defaultState = false;
    },
    setPdfFile: (state, action: PayloadAction<string>) => {
        state.pdfFile = action.payload;
         state.defaultState = false;
    },
    setDocInfo: (state, action: PayloadAction<DocumentInfo>) => {
      state.documentInfo = action.payload;
       state.defaultState = false;
    },
    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
       state.defaultState = false;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
       state.defaultState = false;
    },
    setIsPreviewWelcomeScreen: (state, action: PayloadAction<boolean>) => {
      state.isPreviewWelcomeScreen = action.payload;
    },
    setShowPdfOnly: (state, action: PayloadAction<boolean>) => {
      state.showPdfOnly = action.payload;
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
  setPdfFile,
  setQrCodeName,
  setDocInfo,
  setWelcomeScreen,
  setIsPreviewWelcomeScreen,
  setShowPdfOnly,
  setActiveColorIndex,
} = pdfSlice.actions;
export default pdfSlice.reducer;