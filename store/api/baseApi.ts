import { storage } from "@/utils/storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

const BASE_URL = "/api/proxy";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = storage.getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    storage.clear();
    if (typeof window !== "undefined") {
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.location.href = "/login";
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["QrCodes"],
  endpoints: () => ({}),
});