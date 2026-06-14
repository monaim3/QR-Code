import { baseApi } from "./baseApi";
import { storage } from "@/utils/storage";

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

    // LOGOUT
    logoutUser: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",

        // ✅ match swagger request
        headers: {
          accept: "application/json",
        },

        // ✅ important
        body: "",
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (error) {
          console.error("Logout failed:", error);
        } finally {
          storage.clear();

          if (typeof document !== "undefined") {
            document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie = "refresh-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }

          window.location.href = "/";
        }
      },
    }),

    // change email
    changeEmail: builder.mutation<{ message: string },{ email: string }>({
      query: (body) => ({
        url: "clients/user-settings/change-email",
        method: "PUT",
        body,
      }),
    }),

    /// time zone
    getTimezones: builder.query<{ name: string; displayName: string }[],{ language?: string }>({
      query: ({ language = "en" }) => ({
        url: `clients/user-settings/timezones?language=${language}`,
        method: "GET",
      }),
    }),

   /// change timezone
   changeTimezone: builder.mutation<void, { timezone: string }>({
    query: (body) => ({
      url: "clients/user-settings/change-timezone",
      method: "PUT",
      body,
    }),
  }),

    /// available languages
    getLanguages: builder.query<{ code: string; name: string }[],void>({
      query: () => ({
        url: "clients/user-settings/languages",
        method: "GET",
      }),
    }),

    /// change language
    changeLanguage: builder.mutation<{ message: string }, { languageCode: string }>({
      query: (body) => ({
        url: "clients/user-settings/change-language",
        method: "PUT",
        body,
      }),
    }),

  }),
  overrideExisting: true,
});

export const {
  useUpdatePasswordMutation,
  useDeleteAccountMutation,
  useLogoutUserMutation,
  useChangeEmailMutation,
  useGetTimezonesQuery,
  useChangeTimezoneMutation,
  useGetLanguagesQuery,
  useChangeLanguageMutation,
} = accountApi;