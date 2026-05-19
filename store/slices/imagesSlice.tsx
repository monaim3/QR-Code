import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UploadLogoResponse } from "./qrSlice";

interface Button {
  id: string;
  buttonText: string;
  url: string;
  buttonTextError: string;
  urlError: string;
}

interface ImageItem {
  id: string;
  url: string;
  name: string;
}

interface UploadedImage extends UploadLogoResponse {
  imageId: string;
}

export interface imageState {
  FacebookUrl: string;
  Name: string;
  Error: string;
  Title: string;
  Website: string;
  ErrorWebsite: string;
  buttons: Button[];
  images: ImageItem[];
  primaryColor: string;
  secondaryColor: string;
  Share: boolean;
  hasColorChanged: boolean;
  uploadedImages: UploadedImage[];
}

const initialState: imageState = {
  FacebookUrl: "",
  Name: "",
  Error: "",
  Title: "",
  Website: "",
  ErrorWebsite: "",
  buttons: [],
  images: [],
  primaryColor: "#68C2D9",
  secondaryColor: "#FFFFFF",
  Share: false,
  hasColorChanged: false,
  uploadedImages: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setFacebookUrl: (state, action) => {
      state.FacebookUrl = action.payload;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setSecondaryColor: (state, action) => {
      state.secondaryColor = action.payload;
    },
    setHasColorChanged: (state, action: PayloadAction<boolean>) => {
      state.hasColorChanged = action.payload;
    },
    setShare: (state, action) => {
      state.Share = action.payload;
    },
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setError: (state, action) => {
      state.Error = action.payload;
    },
    setTitle: (state, action) => {
      state.Title = action.payload;
    },
    setWebsite: (state, action) => {
      state.Website = action.payload;
    },
    setErrorWebsite: (state, action) => {
      state.ErrorWebsite = action.payload;
    },

    // Button actions
    addButton: (state) => {
      const newButton: Button = {
        id: Date.now().toString(),
        buttonText: "",
        url: "",
        buttonTextError: "",
        urlError: "",
      };
      state.buttons.push(newButton);
    },
    removeButton: (state, action: PayloadAction<string>) => {
      state.buttons = state.buttons.filter(
        (button) => button.id !== action.payload,
      );
    },
    updateButtonText: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      const button = state.buttons.find((btn) => btn.id === action.payload.id);
      if (button) {
        button.buttonText = action.payload.value;
      }
    },
    updateButtonUrl: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      const button = state.buttons.find((btn) => btn.id === action.payload.id);
      if (button) {
        button.url = action.payload.value;
      }
    },
    setButtonTextError: (
      state,
      action: PayloadAction<{ id: string; error: string }>,
    ) => {
      const button = state.buttons.find((btn) => btn.id === action.payload.id);
      if (button) {
        button.buttonTextError = action.payload.error;
      }
    },
    setButtonUrlError: (
      state,
      action: PayloadAction<{ id: string; error: string }>,
    ) => {
      const button = state.buttons.find((btn) => btn.id === action.payload.id);
      if (button) {
        button.urlError = action.payload.error;
      }
    },

    // Image actions
    addImage: (state, action: PayloadAction<ImageItem>) => {
      if (state.images.length < 10) {
        state.images.push(action.payload);
      }
    },
    removeImage: (state, action: PayloadAction<string>) => {
      state.images = state.images.filter((img) => img.id !== action.payload);
    },
    updateImage: (
      state,
      action: PayloadAction<{ id: string; image: ImageItem }>,
    ) => {
      const index = state.images.findIndex(
        (img) => img.id === action.payload.id,
      );
      if (index !== -1) {
        state.images[index] = action.payload.image;
      }
    },

    setUploadedImages: (state, action: PayloadAction<UploadedImage>) => {
      state.uploadedImages = [...state.uploadedImages, action.payload];
    },
    removeUploadedImage: (state, action: PayloadAction<string>) => {
      state.uploadedImages = state.uploadedImages.filter(
        (item) => item.imageId !== action.payload,
      );
    },
    updateUploadedImage: (
      state,
      action: PayloadAction<{ id: string; uploadedImage: UploadLogoResponse }>,
    ) => {
      state.uploadedImages = state.uploadedImages.map((item) =>
        item.imageId === action.payload.id
          ? {
              ...item,
              ...action.payload.uploadedImage,
              imageId: action.payload.id,
            }
          : item,
      );
    },
  },
});

export const {
  setFacebookUrl,
  setName,
  setError,
  setTitle,
  setWebsite,
  setErrorWebsite,
  addButton,
  removeButton,
  updateButtonText,
  updateButtonUrl,
  setButtonTextError,
  setButtonUrlError,
  addImage,
  removeImage,
  updateImage,
  setPrimaryColor,
  setSecondaryColor,
  setShare,
  setHasColorChanged,
  setUploadedImages,
  removeUploadedImage,
  updateUploadedImage,
} = imagesSlice.actions;

export default imagesSlice.reducer;
