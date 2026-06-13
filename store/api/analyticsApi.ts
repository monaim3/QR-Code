import { baseApi } from "./baseApi";

export interface AnalyticsBatchResponse {
  scorecard: {
    totalQrCodes: number;
    totalScans: number;
    uniqueScans: number;
  };
  chart: { date_raw: string; date: string; scans: number }[];
  cities: { city: string; scans: number; scansPercentage: number }[] | null;
  os: { os: string; scans: number; scansPercentage: number }[] | null;
  countries: { country: string; scans: number; scansPercentage: number }[] | null;
  qrCodes: {
    qrCodeId: string;
    qrCodeName: string;
    scans: number;
    scansPercentage: number;
  }[] | null;
  heatMapData: {
    dayIndex: number;
    dayName: string;
    hour: number;
    scanCount: number;
  }[];
}

export interface AnalyticsFiltersBatchResponse {
  qrCodes: { id: string; name: string }[];
  os: string[];
  countries: string[];
  cities: string[];
}

export interface BatchQueryParams {
  from: number;
  to: number;
  scanGroupBy: string;
  language: string;
  timezone: string;
  qrCodeIds?: string[];
  os?: string[];
  countries?: string[];
  cities?: string[];
}

const serializeParams = (params: BatchQueryParams): string => {
  const query = new URLSearchParams();
  query.set("from", String(params.from));
  query.set("to", String(params.to));
  query.set("scanGroupBy", params.scanGroupBy);
  query.set("timezone", params.timezone);
  query.set("language", params.language);
  params.qrCodeIds?.forEach((id) => query.append("qrCodeIds", id));
  params.os?.forEach((o) => query.append("os", o));
  params.countries?.forEach((c) => query.append("countries", c));
  params.cities?.forEach((city) => query.append("cities", city));
  return query.toString();
};

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAnalyticsBatch: builder.query<AnalyticsBatchResponse, BatchQueryParams>({
      query: (params) =>
        `/clients/analytics/v2/batch?${serializeParams(params)}`,
    }),
    getAnalyticsFiltersBatch: builder.query<
      AnalyticsFiltersBatchResponse,
      { language: string }
    >({
      query: ({ language }) =>
        `/clients/analytics/filters/batch?language=${language}`,
    }),
  }),
});

export const {
  useGetAnalyticsBatchQuery,
  useGetAnalyticsFiltersBatchQuery,
} = analyticsApi;
