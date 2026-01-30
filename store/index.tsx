import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "./slices/previewSlice";
import qrReducer from "./slices/qrSlice";
import sidebarReducer from "./slices/sidebarSlice";
import vCardSlice from "./slices/vCardSlice";
import appSlice from "./slices/app-slice";
import pdfSlice from "./slices/pdf-slice";

export const store = configureStore({
  reducer: {
    preview: previewReducer,
    qr: qrReducer,
    sidebar: sidebarReducer,
    vCard: vCardSlice,
    app: appSlice,
    pdf: pdfSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
