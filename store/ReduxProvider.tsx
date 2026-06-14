"use client";

import { Provider } from "react-redux";
import { store } from "@/store/index";
import { setLanguage } from "@/store/slices/i18nSlice";
import { storage } from "@/utils/storage";
import { LanguageCode } from "@/constants/languages";

const cachedLang = storage.getI18nCache()?.language;
console.log("🔴 ReduxProvider module load - cachedLang:", cachedLang);
console.log("🔴 store language before dispatch:", store.getState().i18n.language);

if (cachedLang) {
  store.dispatch(setLanguage(cachedLang as LanguageCode));
  console.log("🔴 store language after dispatch:", store.getState().i18n.language);
}

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}