"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { fetchTranslations, setLanguage } from "@/store/slices/i18nSlice";
import { storage } from "@/utils/storage";

export default function I18nInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cache = storage.getI18nCache();

    const lang = cache?.language || "en";

    // 1. set language first
    dispatch(setLanguage(lang));

    // 2. always fetch translations for safety
    dispatch(fetchTranslations(lang));
  }, [dispatch]);

  return null;
}