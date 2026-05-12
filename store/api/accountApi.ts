import { baseApi } from "./baseApi";

const accountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updatePassword: builder.mutation({
      query: (payload) => ({
        url: "/clients/user-settings/change-password",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const { useUpdatePasswordMutation } = accountApi;
