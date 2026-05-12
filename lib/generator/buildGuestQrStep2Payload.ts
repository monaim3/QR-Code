import { VCardSlice } from "@/types/vCard";

export type GuestQrCreatePayload = {
  name: string;
  content: Record<string, unknown>;
};

type Step2Input = {
  qrName: string;
  websiteUrl: string;
  simpleText: string;
  vCard: VCardSlice;
};

/** Build POST /qr-codes/guest body for step 2 when the flow creates a guest code. */
export function buildGuestQrStep2Payload(
  qrType: string,
  input: Step2Input,
): GuestQrCreatePayload | null {
  const { qrName, websiteUrl, simpleText, vCard } = input;

  switch (qrType) {
    case "website-url":
      return {
        name: qrName,
        content: { type: "url", url: websiteUrl },
      };
    case "simple-text":
      return {
        name: qrName,
        content: { type: "plainText", text: simpleText },
      };
    case "vcard":
      return {
        name: vCard.qrCodeName,
        content: {
          type: "vCard" as const,
          colors: {
            primary: vCard.primaryColor,
            secondary: vCard.secondaryColor,
          },
          profile: {
            name: vCard.personalInfo.fullName,
            surname: "",
            image: {
              publicId: "",
              resourceType: "",
              format: "",
              bytes: 0,
            },
          },
          contacts: {
            phoneNumber: [
              vCard.contactDetails.phoneNumber,
              vCard.contactDetails.altPhoneNumber,
              ...vCard.contactDetails.altPhoneNumbers,
            ] as string[],
            alternativePhoneNumber: "",
            website: vCard.contactDetails.website,
            email: [
              vCard.contactDetails.email,
              ...vCard.contactDetails.altEmails,
            ] as string[],
          },
          company: {
            name: vCard.companyName,
            position: vCard.companyTitle,
          },
          summary: vCard.summary,
          address: {
            ...(vCard.addressUrl
              ? { url: vCard.addressUrl }
              : {
                  street: vCard.street,
                  postalCode: vCard.postalCode,
                  city: vCard.city,
                  state: vCard.state,
                  country: vCard.country,
                }),
          },
          links: [
            ...vCard.socialChannels.map((channel) => ({
              name: channel.name,
              url: channel.url,
              description: "",
              logo: {
                provider: "none",
                src: `/qr-code-generator/social-networks/${channel.id}.svg`,
              },
            })),
          ],
          loaderImage: {
            publicId: "",
            resourceType: "",
            format: "",
            bytes: 0,
          },
        },
      };
    default:
      return null;
  }
}
