import { baseApi } from "./baseApi";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<any, string>({
      query: (fromPage = '') => ({
        url: `clients/products?fromPage=${fromPage}`,
        method: "GET",
      }),
      providesTags: ["QrCodes"],
    }),

    createCheckoutSession: builder.mutation<
      { url: string },
      { priceId: string }
    >({
      query: (body) => ({
        url: "stripe/create-session",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateCheckoutSessionMutation,
} = productApi;