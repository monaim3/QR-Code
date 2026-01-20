import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  collapsed: boolean;
}

const initialState: SidebarState = {
  collapsed: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});

export const { toggleCollapsed } = sidebarSlice.actions;
export default sidebarSlice.reducer;
