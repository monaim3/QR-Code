import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { endOfToday, startOfToday } from "date-fns";

interface AnalyticsState {
  from: number;
  to: number;
  scanGroupBy: string;
  timezone: string;
  qrCodeIds: string[];
  os: string[];
  countries: string[];
  cities: string[];
}

const initialState: AnalyticsState = {
  from: startOfToday().getTime(),
  to: endOfToday().getTime(),
  scanGroupBy: "day",
  timezone:
    typeof window !== "undefined"
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : "UTC",
  qrCodeIds: [],
  os: [],
  countries: [],
  cities: [],
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setDateRange: (
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) => {
      state.from = action.payload.from;
      state.to = action.payload.to;
    },
    setScanGroupBy: (state, action: PayloadAction<string>) => {
      state.scanGroupBy = action.payload;
    },
    setQrCodeIds: (state, action: PayloadAction<string[]>) => {
      state.qrCodeIds = action.payload;
    },
    setOs: (state, action: PayloadAction<string[]>) => {
      state.os = action.payload;
    },
    setCountries: (state, action: PayloadAction<string[]>) => {
      state.countries = action.payload;
    },
    setCities: (state, action: PayloadAction<string[]>) => {
      state.cities = action.payload;
    },
    clearFilters: (state) => {
      state.qrCodeIds = [];
      state.os = [];
      state.countries = [];
      state.cities = [];
    },
  },
});

export const {
  setDateRange,
  setScanGroupBy,
  setQrCodeIds,
  setOs,
  setCountries,
  setCities,
  clearFilters,
} = analyticsSlice.actions;

export default analyticsSlice.reducer;
