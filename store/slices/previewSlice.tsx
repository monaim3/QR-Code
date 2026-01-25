import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TabType = "preview" | "qrcode";

interface PreviewState {
  activeTab: TabType;
  websiteUrl: string;
  qrCodeName: string;
  qrColor: string;
  qrStyle: string;
}

const initialState: PreviewState = {
  activeTab: "preview",
  websiteUrl: "",
  qrCodeName: "",
  qrColor: "#000000",
  qrStyle: "square",
};

const previewSlice = createSlice({
  name: "preview",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<TabType>) => {
      state.activeTab = action.payload;
    },
    setWebsiteUrl: (state, action: PayloadAction<string>) => {
      state.websiteUrl = action.payload;
    },
    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
    },
    setQrColor: (state, action: PayloadAction<string>) => {
      state.qrColor = action.payload;
    },
    setQrStyle: (state, action: PayloadAction<string>) => {
      state.qrStyle = action.payload;
    },
    resetPreview: () => initialState,
  },
});

export const {
  setActiveTab,
  setWebsiteUrl,
  setQrCodeName,
  setQrColor,
  setQrStyle,
  resetPreview,
} = previewSlice.actions;

export default previewSlice.reducer;
