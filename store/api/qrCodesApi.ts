import { baseApi } from "./baseApi";
import { QrCode } from "@/types/generatedQr";

export const qrCodesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // GET QR CODES
    getQrCodes: builder.query<QrCode[], void>({
      query: () => ({
        url: "/qr-codes",
        method: "GET",
      }),

      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "QrCodes" as const,
                id,
              })),
              { type: "QrCodes" as const, id: "LIST" },
            ]
          : [{ type: "QrCodes" as const, id: "LIST" }],
    }),

    // DELETE QR CODES
    deleteQrCodes: builder.mutation<
      { message: string },
      { ids: string[] }
    >({
      query: (body) => ({
        url: "/qr-codes",
        method: "DELETE",
        body,
      }),

      // 🔥 THIS IS KEY FOR AUTO SYNC
      invalidatesTags: (result, error, arg) =>
        arg.ids.map((id) => ({
          type: "QrCodes" as const,
          id,
        })),
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetQrCodesQuery,
  useDeleteQrCodesMutation,
} = qrCodesApi;