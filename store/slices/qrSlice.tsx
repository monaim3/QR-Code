import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QRState {
  selectedFrameIndex: number;
  frameText: string;
  frameColor: string;
  frameBackgroundColor: string;
  frameTextColor: string;
  transparentFrameBg: boolean;
  dotColor: string;
  backgroundColor: string;
  transparentBg: boolean;
  patternTransparentBg: boolean;
  prevBackgroundColor: string;
  patternStyle: string;
  cornerFrameColor: string;
  cornerDotColor: string;
  cornerFrameStyle: string;
  cornerDotType: string;
  selectedLogo: string | null;
  customLogo: string | null;
  cornerFrameStyleUI: string;
  cornerDotTypeUI: string;
}

const initialState: QRState = {
  selectedFrameIndex: 0,
  frameText: "SCAN ME",
  frameColor: "#000000",
  frameBackgroundColor: "#ffffff",
  frameTextColor: "",
  transparentFrameBg: false,
  dotColor: "#000000",
  backgroundColor: "#ffffff",
  transparentBg: false,
  patternStyle: "square",
  patternTransparentBg: false,
  prevBackgroundColor: "#ffffff",
  cornerFrameColor: "#000000",
  cornerDotColor: "#000000",
  cornerFrameStyle: "square",
  cornerDotType: "dot",
  selectedLogo: null,
  customLogo: null,
  cornerFrameStyleUI: "none",
  cornerDotTypeUI: "none",
};

const qrSlice = createSlice({
  name: "qr",
  initialState,
  reducers: {
    setSelectedFrameIndex: (state, action: PayloadAction<number>) => {
      state.selectedFrameIndex = action.payload;
    },
    setFrameText: (state, action: PayloadAction<string>) => {
      state.frameText = action.payload;
    },
    setFrameColor: (state, action: PayloadAction<string>) => {
      state.frameColor = action.payload;
    },
    setFrameBackgroundColor: (state, action: PayloadAction<string>) => {
      state.frameBackgroundColor = action.payload;
    },
    setFrameTextColor: (state, action: PayloadAction<string>) => {
      state.frameTextColor = action.payload;
    },
    setTransparentFrameBg: (state, action: PayloadAction<boolean>) => {
      state.transparentFrameBg = action.payload;
    },
    setDotColor: (state, action: PayloadAction<string>) => {
      state.dotColor = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setTransparentBg: (state, action: PayloadAction<boolean>) => {
      state.transparentBg = action.payload;
    },
    setPatternStyle: (state, action: PayloadAction<string>) => {
      state.patternStyle = action.payload;
    },
    setPrevBackgroundColor: (state, action: PayloadAction<string>) => {
      state.prevBackgroundColor = action.payload;
    },
    setTranspatternTransparentBg: (state, action: PayloadAction<boolean>) => {
      state.patternTransparentBg = action.payload;
    },
    setCornerFrameColor: (state, action: PayloadAction<string>) => {
      state.cornerFrameColor = action.payload;
    },
    setCornerDotColor: (state, action: PayloadAction<string>) => {
      state.cornerDotColor = action.payload;
    },
    setCornerFrameStyleUI: (state, action: PayloadAction<string>) => {
      state.cornerFrameStyleUI = action.payload;
      state.cornerFrameStyle =
        action.payload === "none" || action.payload === "square"
          ? "square"
          : action.payload;
    },
    setCornerFrameStyle: (state, action: PayloadAction<string>) => {
      state.cornerFrameStyle = action.payload;
    },
    setCornerDotType: (state, action: PayloadAction<string>) => {
      state.cornerDotType = action.payload;
    },
    setCornerDotTypeUI: (state, action: PayloadAction<string>) => {
      state.cornerDotTypeUI = action.payload;
      state.cornerDotType =
        action.payload === "none" || action.payload === "square"
          ? "square"
          : action.payload;
    },
    setSelectedLogo: (state, action: PayloadAction<string | null>) => {
      state.selectedLogo = action.payload; // Now stores logo ID instead of component
    },
    setCustomLogo: (state, action: PayloadAction<string | null>) => {
      state.customLogo = action.payload;
    },
  },
});

export const {
  setSelectedFrameIndex,
  setFrameText,
  setFrameColor,
  setFrameBackgroundColor,
  setFrameTextColor,
  setTransparentFrameBg,
  setDotColor,
  setBackgroundColor,
  setTransparentBg,
  setPrevBackgroundColor,
  setPatternStyle,
  setTranspatternTransparentBg,
  setCornerFrameColor,
  setCornerDotColor,
  setCornerFrameStyle,
  setCornerDotType,
  setSelectedLogo,
  setCustomLogo,
  setCornerFrameStyleUI,
  setCornerDotTypeUI,
} = qrSlice.actions;

export default qrSlice.reducer;
