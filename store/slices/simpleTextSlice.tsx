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
    setSimpleText: (state, action) => {
      state.Text = action.payload;
    },
  },
});

export const { setSimpleText } = simpleTextSlice.actions;
export default simpleTextSlice.reducer;
