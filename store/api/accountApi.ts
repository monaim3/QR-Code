import { baseApi } from "./baseApi";

const accountApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    // UPDATE PASSWORD
    updatePassword: builder.mutation({
      query: (payload) => ({
        url: "/clients/user-settings/change-password",
        method: "PUT",
        body: payload,
      }),
    }),

    // DELETE ACCOUNT
    deleteAccount: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/auth/delete-account",
        method: "DELETE",
        headers: {
          accept: "application/json",
        },
      }),
    }),

  }),
  overrideExisting: false,
});

export const {
  useUpdatePasswordMutation,
  useDeleteAccountMutation, // ✅ added
} = accountApi;