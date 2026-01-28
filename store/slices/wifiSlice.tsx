import { createSlice } from "@reduxjs/toolkit";

interface wifiState {
  NetworkName: string;
  Password: string;
  EncryptionType: string;
  HiddenNetwork: boolean;
}

const initialState: wifiState = {
  NetworkName: "",
  Password: "",
  EncryptionType: "WPA / WPA2",
  HiddenNetwork: false,
};

const wifiSlice = createSlice({
  name: "wifi",
  initialState,
  reducers: {
    setNetworkName: (state, action) => {
      state.NetworkName = action.payload;
    },
    setPassword: (state, action) => {
      state.Password = action.payload;
    },
    setEncryptionType: (state, action) => {
      state.EncryptionType = action.payload;
    },
    setHiddenNetwork: (state, action) => {
      state.HiddenNetwork = action.payload;
    },
  },
});

export const {
  setNetworkName,
  setPassword,
  setEncryptionType,
  setHiddenNetwork,
} = wifiSlice.actions;
export default wifiSlice.reducer;
