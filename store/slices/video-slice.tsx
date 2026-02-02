import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ColorPalette,
  VideoSlice,
  VideoInfo,
  video,
} from "@/types/video";

const palette: ColorPalette[] = [
  { primary: "#6594FF", secondary: "#FFFFFF" },
  { primary: "#ECEDF1", secondary: "#232321" },
  { primary: "#ECECF0", secondary: "#6594FF" },
  { primary: "#DAEBF6", secondary: "#6594FF" },
  { primary: "#B69EDE", secondary: "#FFFFFF" },
  { primary: "#6ECD9D", secondary: "#242420" },
  { primary: "#FACB67", secondary: "#FFFFFF" },
];

const initialState: VideoSlice = {
  colorPalette: palette,
  primaryColor: "#6594FF",
  secondaryColor: "#FFFFFF",
  videoInfo: {
    title: "",
    description: "",
    buttons: [],
  },
  videos: [],
  isShare: true,
  isDefault: true,
  welcomeScreen: "",
  qrCodeName: "",
  isPreviewWelcomeScreen: false,
};

const videoSlice = createSlice({
  name: "socialSlice",
  initialState,
  reducers: {
    /** 🎨 Colors */
    setColorPalette: (
      state,
      action: PayloadAction<{ index: number; color: ColorPalette }>
    ) => {
      state.colorPalette[action.payload.index] = action.payload.color;
    },

    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },

    setSecondaryColor: (state, action: PayloadAction<string>) => {
      state.secondaryColor = action.payload;
    },

    /** 🎥 Video Info */
    setVideoInfo: (state, action: PayloadAction<VideoInfo>) => {
      state.videoInfo = action.payload;
    },

    setVideoTitle: (state, action: PayloadAction<string>) => {
      state.videoInfo.title = action.payload;
    },

    setVideoDescription: (state, action: PayloadAction<string>) => {
      state.videoInfo.description = action.payload;
    },

    setVideoButtons: (
      state,
      action: PayloadAction<VideoInfo["buttons"]>
    ) => {
      state.videoInfo.buttons = action.payload;
    },

    setVideoInfoButtonTitle: (state, action: PayloadAction<{index: number, title: string}>) => {
      const { index, title } = action.payload;
      if (state.videoInfo.buttons[index]) {
        state.videoInfo.buttons[index].text = title;
      }
    },
    setVideoInfoButtonUrl: (state, action: PayloadAction<{index: number, url: string}>) => {
      const { index, url } = action.payload;
      if (state.videoInfo.buttons[index]) {
        state.videoInfo.buttons[index].url = url;
      }
    },
    /** 📹 Videos list */
    setVideos: (state, action: PayloadAction<video[]>) => {
      state.videos = action.payload;
    },

    addVideo: (state, action: PayloadAction<video>) => {
      state.videos.push(action.payload);
    },

  setVideoTitleByIndex: (
    state,
    action: PayloadAction<{ index: number; title: string }>
  ) => {
    const { index, title } = action.payload;
    if (state.videos[index]) {
      state.videos[index].title = title;
    }
  },
   setVideoDescriptionByIndex: (
    state,
    action: PayloadAction<{ index: number; description: string }>
  ) => {
    const { index, description } = action.payload;
    if (state.videos[index]) {
      state.videos[index].description = description;
    }
   },
   swapVideos: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const { fromIndex, toIndex } = action.payload;
      const videos = state.videos;

      // Ensure both indexes are valid
      if (
        fromIndex < 0 ||
        fromIndex >= videos.length ||
        toIndex < 0 ||
        toIndex >= videos.length
      )
        return;

      // Swap the two videos
      [videos[fromIndex], videos[toIndex]] = [videos[toIndex], videos[fromIndex]];
    },

    removeVideo: (state, action: PayloadAction<number>) => {
      state.videos.splice(action.payload, 1);
    },

    /** 🧭 UI / Flags */
    setIsShare: (state, action: PayloadAction<boolean>) => {
      state.isShare = action.payload;
    },

    setWelcomeScreen: (state, action: PayloadAction<string>) => {
      state.welcomeScreen = action.payload;
    },

    setQrCodeName: (state, action: PayloadAction<string>) => {
      state.qrCodeName = action.payload;
    },

    setIsPreviewWelcomeScreen: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isPreviewWelcomeScreen = action.payload;
    },

    /** 🔄 Reset */
    resetSocialState: () => initialState,
  },
});

export const {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setVideoInfo,
  setVideoTitle,
  setVideoDescription,
  setVideoButtons,
  setVideos,
  addVideo,
  setVideoTitleByIndex,
  setVideoDescriptionByIndex,
  swapVideos,
  removeVideo,
  setIsShare,
  setWelcomeScreen,
  setQrCodeName,
  setIsPreviewWelcomeScreen,
  setVideoInfoButtonTitle,
  setVideoInfoButtonUrl,
  resetSocialState,
} = videoSlice.actions;

export default videoSlice.reducer;
