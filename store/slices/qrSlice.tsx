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
  patternStyle: string;
  cornerFrameColor: string;
  cornerDotColor: string;
  cornerFrameStyle: string;
  cornerDotType: string;
  selectedLogo: string | null;
  customLogo: string | null;
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
  cornerFrameColor: "#000000",
  cornerDotColor: "#000000",
  cornerFrameStyle: "square",
  cornerDotType: "dot",
  selectedLogo: null,
  customLogo: null,
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
    setCornerFrameColor: (state, action: PayloadAction<string>) => {
      state.cornerFrameColor = action.payload;
    },
    setCornerDotColor: (state, action: PayloadAction<string>) => {
      state.cornerDotColor = action.payload;
    },
    setCornerFrameStyle: (state, action: PayloadAction<string>) => {
      state.cornerFrameStyle = action.payload;
    },
    setCornerDotType: (state, action: PayloadAction<string>) => {
      state.cornerDotType = action.payload;
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
  setPatternStyle,
  setCornerFrameColor,
  setCornerDotColor,
  setCornerFrameStyle,
  setCornerDotType,
  setSelectedLogo,
  setCustomLogo,
} = qrSlice.actions;

export default qrSlice.reducer;