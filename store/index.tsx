import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "./slices/previewSlice";
import qrReducer from "./slices/qrSlice";
import sidebarReducer from "./slices/sidebarSlice";
import vCardSlice from "./slices/vCardSlice";
import appSlice from "./slices/app-slice";
import simpleTextReducer from "./slices/simpleTextSlice";
import wifiReducer from "./slices/wifiSlice";
import facebookReducer from "./slices/facebookSlice";
import pdfSlice from "./slices/pdf-slice";
import socialSlice from "./slices/social-slice";
import menuSlice from "./slices/menuSlice";

export const store = configureStore({
  reducer: {
    preview: previewReducer,
    qr: qrReducer,
    sidebar: sidebarReducer,
    simpleText: simpleTextReducer,
    wifi: wifiReducer,
    facebook: facebookReducer,
    vCard: vCardSlice,
    app: appSlice,
    pdf: pdfSlice,
    social: socialSlice,
    menu: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
