import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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

interface facebookState {
  FacebookUrl: string;
  Name: string;
  Error: string;
  Title: string;
  Website: string;
  ErrorWebsite: string;
  buttons: Button[];
  images: ImageItem[];
}

const initialState: facebookState = {
  FacebookUrl: "",
  Name: "",
  Error: "",
  Title: "",
  Website: "",
  ErrorWebsite: "",
  buttons: [],
  images: [],
};

const facebookSlice = createSlice({
  name: "facebook",
  initialState,
  reducers: {
    setFacebookUrl: (state, action) => {
      state.FacebookUrl = action.payload;
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
} = facebookSlice.actions;

export default facebookSlice.reducer;
