import { baseApi } from "./baseApi";

const qrApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createGuestQrCode: builder.mutation({
      query: (payload) => ({
        url: "/qr-codes/guest",
        method: "POST",
        body: payload,
      }),
    }),

    getGuestQrCode: builder.query({
      query: (id) => `/qr-codes/guest/${id}`,
    }),

    updateGuestQrCode: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/qr-codes/guest/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),

    uploadFile: builder.mutation({
      query: (file) => {
        const formData = new FormData();
        formData.append("file", file);

        return {
          url: "/common/media/upload",
          method: "POST",
          body: formData,
          formData: true,
        };
      },
    }),

    publishGuestQrCode: builder.mutation({
      query: (id) => ({
        url: `/qr-codes/publish/${id}`,
        method: "PUT",
      }),
    }),

    createQrCode: builder.mutation({
      query: (payload) => ({
        url: "/qr-codes",
        method: "POST",
        body: payload,
        invalidatesTags: ["QrCodes"],
      }),
    }),

    getQrCode: builder.query({
      query: (id) => `/qr-codes/${id}`,
    }),

    updateQrCode: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/qr-codes/${id}`,
        method: "PUT",
        body: payload,
        invalidatesTags: ["QrCodes"],
      }),
    }),
  }),
});

export const {
  useCreateGuestQrCodeMutation,
  useGetGuestQrCodeQuery,
  useUpdateGuestQrCodeMutation,
  useUploadFileMutation,
  usePublishGuestQrCodeMutation,
  useCreateQrCodeMutation,
  useGetQrCodeQuery,
  useUpdateQrCodeMutation,
} = qrApi;
