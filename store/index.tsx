import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "./slices/previewSlice";
import qrReducer from "./slices/qrSlice";
import sidebarReducer from "./slices/sidebarSlice";
import simpleTextReducer from "./slices/simpleTextSlice";
import wifiReducer from "./slices/wifiSlice";
export const store = configureStore({
  reducer: {
    preview: previewReducer,
    qr: qrReducer,
    sidebar: sidebarReducer,
    simpleText: simpleTextReducer,
    wifi: wifiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
