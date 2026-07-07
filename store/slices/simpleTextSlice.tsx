import { createSlice } from "@reduxjs/toolkit";

interface ParagraphState {
  Text: string;
}

const initialState: ParagraphState = {
  Text: "",
};

const simpleTextSlice = createSlice({
  name: "simpleText",
  initialState,
  reducers: {
    hydrateSimpleText: (state, action) => {
      Object.assign(state, action.payload);
    },
    setSimpleText: (state, action) => {
      state.Text = action.payload;
    },
  },
});

export const { hydrateSimpleText, setSimpleText } = simpleTextSlice.actions;
export default simpleTextSlice.reducer;
