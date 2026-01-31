import { createSlice } from "@reduxjs/toolkit";

interface facebookState {
  FacebookUrl: string;
  Name: string;
}

const initialState: facebookState = {
  FacebookUrl: "",
  Name: "",
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
  },
});

export const { setFacebookUrl, setName } = facebookSlice.actions;
export default facebookSlice.reducer;
