import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { LanguageCode } from "@/constants/languages";
import { I18nState, Translations } from "@/types/i18nTypes";
import { api } from "../../lib/api";

// 🔹 Response type
interface FetchResponse {
  lang: LanguageCode;
  data: Translations;
}

// 🔹 Initial state
const initialState: I18nState & {
  loading: boolean;
  error: string | null;
} = {
  language: "en",
  translations: {},
  loading: false,
  error: null,
};

// ✅ Async thunk (same pattern as auth)
export const fetchTranslations = createAsyncThunk<
  FetchResponse,
  LanguageCode,
  { state: any; rejectValue: string }
>(
  "i18n/fetchTranslations",
  async (lang, { getState, rejectWithValue }) => {
    try {
      const state = getState().i18n;

      // ✅ prevent duplicate API call
      if (state.translations?.[lang]) {
        return {
          lang,
          data: state.translations[lang],
        };
      }

      const res = await api.get(
        `/common/translations/${lang}?mode=underscore`
      );

      console.log("API RESPONSE:", res); 

     // const data: Translations = await res.json();

     const data: Translations = res;

      return { lang, data };
    } catch (err: any) {
      return rejectWithValue(err?.message || "Translation fetch failed");
    }
  }
);

const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LanguageCode>) {
      state.language = action.payload;
    },

    hydrate(state, action: PayloadAction<Partial<I18nState>>) {
      state.language = action.payload.language || "en";
      state.translations = action.payload.translations || {};
    },
  },

  extraReducers: (builder) => {
    builder
      // 🔹 Pending
      .addCase(fetchTranslations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // 🔹 Fulfilled
      .addCase(
        fetchTranslations.fulfilled,
        (state, action: PayloadAction<FetchResponse>) => {
          state.loading = false;

          const { lang, data } = action.payload;
          state.translations[lang] = data;
        }
      )

      // 🔹 Rejected
      .addCase(fetchTranslations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Translation fetch failed";
      });
  },
});

export const { setLanguage, hydrate } = i18nSlice.actions;
export default i18nSlice.reducer;