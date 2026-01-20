import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import previewReducer from "./slices/previewSlice";
import qrReducer from "./slices/qrSlice";
export const store = configureStore({
  reducer: {
    preview: previewReducer,
    qr: qrReducer,
=======
import sidebarReducer from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
>>>>>>> origin/qr-dashboard
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
