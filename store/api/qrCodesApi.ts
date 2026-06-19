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

  // duplicated qr code
  duplicateQrCode: builder.mutation<
      { message: string },
      { id: string }
    >({
      query: ({ id }) => ({
        url: `/qr-codes/duplicate/${id}`,
        method: "POST",
        body: {},
      }),

      invalidatesTags: [{ type: "QrCodes", id: "LIST" }],
    }),

  // reset scans 
  resetQrScans: builder.mutation<
  { message: string },
  { ids: string[] }
>({
  query: (body) => ({
    url: "/qr-codes/reset-scans",
    method: "POST",
    body,
  }),
  // 🔥 refresh list after reset (optional but recommended)
  invalidatesTags: [{ type: "QrCodes", id: "LIST" }],
  }),

  // deactive qr code
  deactivateQrCodes: builder.mutation<
  { message: string },
  { ids: string[] }
>({
  query: (body) => ({
    url: "/qr-codes/deactivate",
    method: "POST",
    body,
  }),

  // 🔥 refresh list after deactivation
  invalidatesTags: [{ type: "QrCodes", id: "LIST" }],
  }),

  // active qr code
  activateQrCodes: builder.mutation<
  { message: string },
  { ids: string[] }
>({
  query: (body) => ({
    url: "/qr-codes/activate",
    method: "POST",
    body,
  }),

  // 🔥 refresh list after activation
  invalidatesTags: [{ type: "QrCodes", id: "LIST" }],
 }),

  }),
  overrideExisting: false,
});

export const {
  useGetQrCodesQuery,
  useDeleteQrCodesMutation,
  useDuplicateQrCodeMutation,
  useResetQrScansMutation,
  useDeactivateQrCodesMutation,
  useActivateQrCodesMutation,
} = qrCodesApi;