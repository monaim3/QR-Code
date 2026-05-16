import { PdfSlice } from "@/types/pdf";
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
  pdf: PdfSlice;
};

/** Build POST /qr-codes/guest body for step 2 when the flow creates a guest code. */
export function buildGuestQrStep2Payload(
  qrType: string,
  input: Step2Input,
): GuestQrCreatePayload | null {
  const { qrName, websiteUrl, simpleText, vCard, pdf } = input;

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
            image: vCard.personalInfo.uploadedImage,
          },
          contacts: {
            phoneNumber: [
              vCard.contactDetails.phoneNumber,
              vCard.contactDetails.altPhoneNumber,
              ...vCard.contactDetails.altPhoneNumbers,
            ].filter(Boolean) as string[],

            alternativePhoneNumber: "",

            website: vCard.contactDetails.website,

            email: [
              vCard.contactDetails.email,
              ...vCard.contactDetails.altEmails,
            ].filter(Boolean) as string[],
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
          links: vCard.socialChannels.map((channel) => ({
            name: channel.name,
            url: channel.url,
            description: channel.description || "",

            logo:
              "uploadedImage" in channel && channel.uploadedImage
                ? {
                    bucketRootUrl: channel.uploadedImage.bucketRootUrl,
                    bytes: channel.uploadedImage.bytes,
                    format: channel.uploadedImage.format,
                    provider: channel.uploadedImage.storageProvider,
                    publicId: channel.uploadedImage.publicId,
                    resourceType: channel.uploadedImage.resourceType,
                  }
                : {
                    provider: "none",
                    src: `/qr-code-generator/social-networks/${channel.id}.svg`,
                  },
          })),
          loaderImage: vCard.uploadedWelcomeScreen,
        },
      };
    case "pdf":
      return {
        name: pdf.qrCodeName,
        content: {
          type: "pdf",
          colors: {
            primary: pdf.primaryColor,
            secondary: pdf.secondaryColor,
          },
          file: pdf.uploadedPdfFile,
          company: {
            name: pdf.documentInfo.companyName,
            title: pdf.documentInfo.title,
            website: pdf.documentInfo.website,
            description: pdf.documentInfo.fileDescription,
          },
          isDirect: pdf.showPdfOnly,
          loaderImage: pdf.uploadedWelcomeScreen,
        },
      };
    default:
      return null;
  }
}
