"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormSelect from "./FormSelect";
import SaveButton from "./SaveButton";
import { useGetTimezonesQuery, useGetLanguagesQuery, useChangeTimezoneMutation, useChangeLanguageMutation } from "@/store/api/accountApi";
import { setLanguage, fetchTranslations } from "@/store/slices/i18nSlice";
import { storage } from "@/utils/storage";
import { LanguageCode } from "@/constants/languages";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function LanguageTimeZone() {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.i18n.language);
  const translations = useAppSelector((state) => state.i18n.translations);

  const { data: languages, isLoading: langLoading } = useGetLanguagesQuery();
  const { data: timezones } = useGetTimezonesQuery({ language: "en" });
  const [changeTimezone] = useChangeTimezoneMutation();
  const [changeLanguage] = useChangeLanguageMutation();

  const [selectedLang, setSelectedLang] = useState<string | null>(null);
  const [selectedTz, setSelectedTz] = useState<string | null>(null);

  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Sync selectedLang with current redux language once API data is available
  useEffect(() => {
    if (languages) {
      const match = languages.find((l) => l.code === currentLanguage);
      setSelectedLang(match?.name ?? null);
    }
  }, [languages, currentLanguage]);

  useEffect(() => {
  if (timezones) {
    const userTimezone = storage.getUser()?.timezone;
    if (userTimezone) {
      const match = timezones.find((tz) => tz.name === userTimezone);
      if (match) setSelectedTz(match.displayName);
    }
  }
}, [timezones]);

  const handleSave = async () => {

  setSaveError(null);
  setIsSaving(true);

  try{
  if (selectedLang) {
    const matchedLang = languages?.find((l) => l.name === selectedLang);
    if (matchedLang) {
      const lang = matchedLang.code as LanguageCode;

      // 1. Call API
      await changeLanguage({ languageCode: lang });

      // 2. Update Redux
      dispatch(setLanguage(lang));

      // 3. Update localStorage
      storage.setI18nCache({ language: lang });
      const currentUser = storage.getUser();
      if (currentUser) {
        storage.setUser({ ...currentUser, language: lang });
      }

      // 4. Fetch translations if not cached
      if (!translations?.[lang]) {
        dispatch(fetchTranslations(lang));
      }
    }
  }

  // Save timezone
  if (selectedTz) {
    const matchedTz = timezones?.find((tz) => tz.displayName === selectedTz);
    if (matchedTz) {
      // 1. Call API
      await changeTimezone({ timezone: matchedTz.name });

      // 2. Update localStorage
      const currentUser = storage.getUser();
      if (currentUser) {
        storage.setUser({ ...currentUser, timezone: matchedTz.name });
      }
    }
  }
  }catch (err: any) {
    setSaveError(err.message || "An error occurred while saving.");
  } finally {
    setIsSaving(false);
  }
};

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
          Language and time zone
        </h4>
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          Enter a new password into both fields below.
        </p>
      </div>

      <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormSelect
          label="Language"
          options={languages?.map((l) => l.name) ?? []}
          value={selectedLang}
          onChange={setSelectedLang}
          isLoading={langLoading}
        />
        <FormSelect
          label="Time zone"
          options={timezones?.map((tz) => tz.displayName) ?? []}
          value={selectedTz}
          onChange={setSelectedTz}
        />

        <SaveButton onClick={handleSave} isLoading={isSaving} error={saveError} />
      </div>
    </div>
  );
}