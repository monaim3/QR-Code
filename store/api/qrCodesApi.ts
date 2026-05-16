import { baseApi } from "./baseApi";
import { QrCode } from "@/types/generatedQr";

export const qrCodesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQrCodes: builder.query<QrCode[], void>({
      query: () => ({
        url: "/qr-codes",
        method: "GET",
        headers: {
          accept: "application/json",
        },
      }),
    }),
  }),
  overrideExisting: false,
});
 
export const { useGetQrCodesQuery } = qrCodesApi;