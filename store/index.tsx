import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "./slices/previewSlice";
import qrReducer from "./slices/qrSlice";
import sidebarReducer from "./slices/sidebarSlice";
import vCardSlice from "./slices/vCardSlice";

export const store = configureStore({
  reducer: {
    preview: previewReducer,
    qr: qrReducer,
    sidebar: sidebarReducer,
    vCard: vCardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
