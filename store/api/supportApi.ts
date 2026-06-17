import { baseApi } from "./baseApi";

export type ContactSubject =
  | "GENERAL"
  | "TECHNICAL_SUPPORT"
  | "BILLING"
  | "SALES";

export interface ContactUsRequest {
  name: string;
  surname: string;
  email: string;
  message: string;
  subject: ContactSubject;
}

export const supportApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation<void, ContactUsRequest>({
      query: (body) => ({
        url: "/support/contact-us",
        method: "POST",
        body,
        responseHandler: (response : any) => response.text(),
      }),
    }),
  }),
});

export const { useContactUsMutation } = supportApi;