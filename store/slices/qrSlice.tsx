import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface QRState {
  url: string;
  frame: {
    style: string;
    text: string;
    color: string;
    bgColor: string;
    textColor: string;
    transparent: boolean;
  };
  pattern: {
    style: string;
    dotColor: string;
    bgColor: string;
    transparent: boolean;
  };
  corners: {
    frameStyle: string;
    dotType: string;
    frameColor: string;
    dotColor: string;
  };
  logo: {
    type: "none" | "preset" | "custom";
    preset?: string;
    custom?: string;
  };
}

const initialState: QRState = {
  url: "https://example.com",
  frame: {
    style: "none",
    text: "Scan me!",
    color: "#0A0909",
    bgColor: "#FFFFFF",
    textColor: "#000000",
    transparent: false,
  },
  pattern: {
    style: "square",
    dotColor: "#000000",
    bgColor: "#FFFFFF",
    transparent: false,
  },
  corners: {
    frameStyle: "square",
    dotType: "square",
    frameColor: "#000000",
    dotColor: "#000000",
  },
  logo: {
    type: "none",
  },
};

const qrSlice = createSlice({
  name: "qr",
  initialState,
  reducers: {
    // URL
    setUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },

    // Frame
    setFrameStyle: (state, action: PayloadAction<string>) => {
      state.frame.style = action.payload;
    },
    setFrameText: (state, action: PayloadAction<string>) => {
      state.frame.text = action.payload;
    },
    setFrameColor: (state, action: PayloadAction<string>) => {
      state.frame.color = action.payload;
    },
    setFrameBgColor: (state, action: PayloadAction<string>) => {
      state.frame.bgColor = action.payload;
    },
    setFrameTextColor: (state, action: PayloadAction<string>) => {
      state.frame.textColor = action.payload;
    },
    setFrameTransparent: (state, action: PayloadAction<boolean>) => {
      state.frame.transparent = action.payload;
    },

    // Pattern
    setPatternStyle: (state, action: PayloadAction<string>) => {
      state.pattern.style = action.payload;
    },
    setPatternDotColor: (state, action: PayloadAction<string>) => {
      state.pattern.dotColor = action.payload;
    },
    setPatternBgColor: (state, action: PayloadAction<string>) => {
      state.pattern.bgColor = action.payload;
    },
    setPatternTransparent: (state, action: PayloadAction<boolean>) => {
      state.pattern.transparent = action.payload;
    },

    // Corners
    setCornerFrameStyle: (state, action: PayloadAction<string>) => {
      state.corners.frameStyle = action.payload;
    },
    setCornerDotType: (state, action: PayloadAction<string>) => {
      state.corners.dotType = action.payload;
    },
    setCornerFrameColor: (state, action: PayloadAction<string>) => {
      state.corners.frameColor = action.payload;
    },
    setCornerDotColor: (state, action: PayloadAction<string>) => {
      state.corners.dotColor = action.payload;
    },

    // Logo
    setLogoPreset: (state, action: PayloadAction<string>) => {
      state.logo.type = "preset";
      state.logo.preset = action.payload;
      state.logo.custom = undefined;
    },
    setLogoCustom: (state, action: PayloadAction<string>) => {
      state.logo.type = "custom";
      state.logo.custom = action.payload;
      state.logo.preset = undefined;
    },
    clearLogo: (state) => {
      state.logo.type = "none";
      state.logo.preset = undefined;
      state.logo.custom = undefined;
    },

    resetQRState: () => initialState,
  },
});

export const {
  setUrl,
  setFrameStyle,
  setFrameText,
  setFrameColor,
  setFrameBgColor,
  setFrameTextColor,
  setFrameTransparent,
  setPatternStyle,
  setPatternDotColor,
  setPatternBgColor,
  setPatternTransparent,
  setCornerFrameStyle,
  setCornerDotType,
  setCornerFrameColor,
  setCornerDotColor,
  setLogoPreset,
  setLogoCustom,
  clearLogo,
  resetQRState,
} = qrSlice.actions;

export default qrSlice.reducer;

// Selectors
export const selectQRState = (state: { qr: QRState }) => state.qr;
export const selectQRUrl = (state: { qr: QRState }) => state.qr.url;
export const selectQRFrame = (state: { qr: QRState }) => state.qr.frame;
export const selectQRPattern = (state: { qr: QRState }) => state.qr.pattern;
export const selectQRCorners = (state: { qr: QRState }) => state.qr.corners;
export const selectQRLogo = (state: { qr: QRState }) => state.qr.logo;
